'use strict';

var $ = require('jquery');
var _ = require('underscore');
// require('../../node_modules/sidr/dist/jquery.sidr.min.js');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var ViewHelpers = require('../helpers/handlebarHelpers');
var ViewHelpers = ViewHelpers(Handlebars);
var Common = require('../common');
var Journal = require('../models/journal');
var Self = {};
// require('jsqrcode');
// var qrcode = new QrCode();
var QrCode = require('qrcode-reader');
var qrcode = new QrCode();
var html5_qrcode = require('html5-qrcode');
var getUserMedia = require("browsernizr/test/webrtc/getusermedia");
var Modernizr = require('browsernizr');

//http://stackoverflow.com/questions/2897155/get-cursor-position-in-characters-within-a-text-input-field
(function($) {
    $.fn.getCursorPosition = function() {
        var input = this.get(0);
        if (!input) return; // No (input) element found
        if ('selectionStart' in input) {
            // Standard-compliant browsers
            return input.selectionStart;
        } else if (document.selection) {
            // IE
            input.focus();
            var sel = document.selection.createRange();
            var selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            return sel.text.length - selLen;
        }
    }
})(jQuery);

//http://stackoverflow.com/questions/512528/set-cursor-position-in-html-textbox
(function($) {
  $.fn.setCursorPosition = function(caretPos) {
      var el = this.get(0);
      if (!el) return; // No (input) element found
      //var el = document.getElementById(elemId);

      el.value = el.value;
      // ^ this is used to not only get "focus", but
      // to make sure we don't have it everything -selected-
      // (it causes an issue in chrome, and having it doesn't hurt any other browser)

      if (el !== null) {

          if (el.createTextRange) {
              var range = el.createTextRange();
              range.move('character', caretPos);
              range.select();
              return true;
          }

          else {
              // (el.selectionStart === 0 added for Firefox bug)
              if (el.selectionStart || el.selectionStart === 0) {
                  el.focus();
                  el.setSelectionRange(caretPos, caretPos);
                  return true;
              }

              else  { // fail city, fortunately this never happens (as far as I've tested) :)
                  el.focus();
                  return false;
              }
          }
      }
  }
})(jQuery);

var isMobileCache;
var isMobile = function(){

  if(isMobileCache !== true || isMobileCache !== false){
    //detect user agent if agent is android, ios, blackberry or windows mobile then return true.
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
      isMobileCache = true;
    } else if( userAgent.match( /Android/i ) ){
      isMobileCache = true;
    } else if( userAgent.match( /Blackberry/i ) || userAgent.match( /BB10/i ) || userAgent.match( /RIM Tablet OS/i ) ){
      isMobileCache = true;
    } else if( userAgent.match( /Windows Phone/i ) || userAgent.match( /IEMobile/i ) ){
      isMobileCache = true;
    } else{
      isMobileCache = false;
    }
  }

  return isMobileCache;
};

var hasSoftKeyboard = function(){
  return isMobile();
};

module.exports = Backbone.View.extend({

    //el: "#body",

    template: Templates['transactions'],

    initialize: function (options) {
        console.log("initialize transactions view", options);
        Self = this;
        Self.merchant = options.merchant;
        Self.journals = options.journals;
        Self.currencies = options.currencies;
        Self.key = options.key;
        Self.employee = options.employee;
        this.render();

        Self.listenTo(Self.employee, 'change', Self.render);
        Self.listenTo(Self.collection, 'sync reset', Self.render);
        Self.listenTo(Self.journals, 'sync reset', Self.render);
        Self.listenTo(Self.currencies, 'sync reset', Self.render);
    },

    state : 'undefined',

    activeInput : 'amount',

    currencyButton: function(currency){
      console.log('currencyButton', currency);
      Self.$('.value-buttons').hide();
      Self.$('.' + currency).show();
      Self.$('.currency-buttons').removeClass('highlight');
      Self.$('#' + currency + '\\~button').addClass('highlight');
      Self.$('#amount').setCursorPosition(Self.$('#amount').val().length);
      if(hasSoftKeyboard()){
        Self.$('#amount').blur();
      } else {
        Self.$('#amount').focus();
      }
      Self.$('input[name=currency]').val(currency);
      if(typeof Self.card != 'undefined'){
        if(typeof Self.card.get('balances') != 'undefined' && typeof Self.card.get('balances')[currency] != 'undefined'){
          Self.$('#balance').html(Self.card.get('balances')[currency].toFixed(2));
        } else {
          Self.$('#balance').html('0.00');
        }
      }
    },

    load: function(){
      Self.$('#sign').val('+');
      Self.$('#amount').addClass('plus');
      Self.$('#amount').removeClass('minus');
      Self.$('#plus-icon').show();
      Self.$('#minus-icon').hide();
      Self.$('.add-value').addClass('add-value-selected');
      Self.$('.redeem-value').removeClass('redeem-value-selected');
      Self.$('#amount').setCursorPosition(Self.$('#amount').val().length);
      if(hasSoftKeyboard()){
        Self.$('#amount').blur();
      } else {
        Self.$('#amount').focus();
      }
      Self.$('input[name=polarity]').val('load');
    },

    redeem: function(){
      Self.$('#sign').val('-');
      Self.$('#amount').addClass('minus');
      Self.$('#amount').removeClass('plus');
      Self.$('#plus-icon').hide();
      Self.$('#minus-icon').show();
      Self.$('.add-value').removeClass('add-value-selected');
      Self.$('.redeem-value').addClass('redeem-value-selected');
      Self.$('#amount').setCursorPosition(Self.$('#amount').val().length);
      if(hasSoftKeyboard()){
        Self.$('#amount').blur();
      } else {
        Self.$('#amount').focus();
      }
      Self.$('input[name=polarity]').val('redeem');
    },

    processTransaction: function(){
      var key = Self.$('#card').val();
      var amount = Self.$('#amount').val();
      var currency = Self.$('input[name=currency]').val();
      var polarity = Self.$('input[name=polarity]').val();
      Self.card = Self.collection.get('cards~' + Self.merchant.get('merchantname') + '~' + key);
      console.log('process transaction event', key, amount, currency, polarity, Self.card);

      var journal = new Journal();
      journal.set('key', key);
      journal.set('polarity', polarity);
      journal.set('currency', currency);
      journal.set('amount', parseFloat(amount))
      //journal.set(currency, parseFloat(amount));
      journal.set('card', Self.card);
      journal.set('merchant', Self.merchant);
      journal.set('cardholderID', Self.card.get('cardholderID'));
      if(typeof Self.employee != 'undefined'){
        journal.set('employeeID', Self.employee.get('name'));
      }
      journal.credentials = {};
      journal.credentials.username = Self.merchant.get('merchantname');
      journal.credentials.password = Self.merchant.get('password');
      journal.save({},{
        success: function(model, res){
          console.log('successfully saved journal', model, res);
          $('#success-notification').html('Successfully Processed Transaction.').show();
          setTimeout(function(){
            $('#success-notification').hide();
          },10000);
          Self.collection.fetch();
          Self.journals.fetch();
          //display receipt
          router.navigate('#/merchants/' + Self.merchant.get('merchantname') + '/transactions/' + key + '/receipt/' + res.timestamp, true);
        },
        error: function(model, res){
          if(typeof res.responseJSON != 'undefined' && typeof res.responseJSON.message != 'undefined' ){
            console.info(res.responseJSON.message);
            $('#error-notification').html(res.responseJSON.message).show();
            setTimeout(function(){
              $('#error-notification').hide();
            },10000);
          } else {
            $('#error-notification').html('Error').show();
            setTimeout(function(){
              $('#error-notification').hide();
            },10000);
          }
          console.log('failed to saved journal', model, res);
        }
      });
    },

    handleFiles: function(files){
      console.log('in handleFiles', files);
      if(typeof files != 'undefined'){

        qrcode.callback = function (result) {
          console.log('result', result);
          if(typeof result == 'undefined'){
            console.log('error decoding qrcode');
            $('#qr-error-notification').html('Error reading QR code, please try again.').show();
            setTimeout(function(){
              $('#qr-error-notification').hide();
            },10000);
          } else {
            var parser = document.createElement('a');
            // parser.href = "http://example.com:3000/pathname/?search=test#hash";
            parser.href = result;
            parser.protocol; // => "http:"
            parser.hostname; // => "example.com"
            parser.port;     // => "3000"
            parser.pathname; // => "/pathname/"
            parser.search;   // => "?search=test"
            parser.hash;     // => "#hash"
            parser.host;     // => "example.com:3000"
            console.log('hash', parser.hash);
            var parts = parser.hash.split('/');
            var merchantname = parts[1];
            var card_key = parts[3];
            console.log('merchantname:', merchantname);
            console.log('card key:', card_key);

            router.navigate('merchants/' + merchantname + '/transactions/' + card_key);
          }
        };
        var w = 270;
        var h = 250;
        //var gCtx = null;
        //var gCanvas = null;
        //var gCanvas = document.getElementById("outCanvas");
        var gCanvas = Self.$('#outCanvas')[0];
        // gCanvas.style.width = w + "px";
        // gCanvas.style.height = h + "px";
        gCanvas.width = w;
        gCanvas.height = h;
        console.log('gCanvas:',gCanvas);
        var gCtx = gCanvas.getContext("2d");
        gCtx.clearRect(0, 0, w, h);
        var o=[];
        for(var i = 0; i < files.length; i++){
          var reader = new FileReader();
          reader.onload = (function(theFile) {
            return function(e) {
              console.log('e', e);
              gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
      			  qrcode.decode(e.target.result);
              // var img = document.createElement('img');
              // img.src = e.target.result;
              // gCtx.drawImage(img,0,0);
            };
          })(files[i]);
          reader.readAsDataURL(files[i]);
        }
      }
    },

    render: function(){
        console.log("render transactions view: ", Self.key, Self.merchant);

        var data = {};

        if(typeof Self.currencies != 'undefined'){
          data.currencies = Self.currencies.getByNamespace(Self.merchant.get('merchantname') + '.cc');
          for(var i = 0; i < data.currencies.length; i++){
            data.currencies[i] = data.currencies[i].toJSON();
            if(data.currencies[i].default){
              data.default = data.currencies[i].currency;
            }
          }
        } else {
          console.log('currencies collection is undefined', Self.currencies);
        }

        data.currency = data.default;
        data.balance = 0;
        data.polarity = 'load';
        if(typeof Self.key != 'undefined' && typeof Self.collection != 'undefined'){
          Self.card = Self.collection.get('cards~' + Self.merchant.get('merchantname') + '~' + Self.key);
          if(typeof Self.card != 'undefined'){
            data.card = Self.card.toJSON();
            var max = 0;
            data.currency = data.default;
            data.balance = 0;
            for(var i = 0; i < data.currencies.length; i++){
              if(typeof Self.card.get('balances') != 'undefined' &&
                typeof Self.card.get('balances')[data.currencies[i].currency] != 'undefined' &&
                Self.card.get('balances')[data.currencies[i].currency] > max){
                  data.currency = data.currencies[i].currency;
                  data.balance = Self.card.get('balances')[data.currencies[i].currency];
                  max = data.balance;
              }
            }

            if(max > 0) {
              data.polarity = 'redeem';
            } else {
              data.polarity = 'load';
            }
          }
        }
        data.page = 0;
        if(typeof data.currencies != 'undefined' && data.currencies.length > 4){
          for(var i = 0; i < data.currencies.length; i++){
            if(data.currencies[i].currency == data.currency){
              console.log('curerncy found at ' + i + ' in total number of results of :', (data.currencies.length + 1));
              data.page = Math.ceil((i + 1) / 5) - 1;
            }
          }
        }

        _.extend(data, ViewHelpers);
        console.log('data', data);
        Self.$el.html(Self.template(data));

        Self.currencyButton(data.currency);

        Self.$('.currency-buttons').off('click').on('click', function(event){
          event.preventDefault();
          var id = $(this).attr('id');
          console.log(id);
          var currency = id.split('~')[0];
          Self.currencyButton(currency);
        });


        if(data.polarity == 'load'){
          Self.load();
        } else {
          Self.redeem();
        }

        this.$('.add-value').off('click').on('click', function(event){
          event.preventDefault();
          Self.load();
        });

        this.$('.redeem-value').off('click').on('click', function(event){
          event.preventDefault();
          Self.redeem();
        });


        var table = Self.$('[data-sort=table]').DataTable({
          "paging": true,
          "info": false,
          "sDom": '<"top"i>rt<"bottom"p><"clear">',
          "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]]
        });

        console.log('set data.page to ', data.page)
        if(data.page > 0){
          table.page( data.page ).draw( 'page' );
        }


        this.$('.numberpad-button').off('click').on('click', function(event){
          event.preventDefault();
          var number = this.value;
          //console.log('button ' + number + ' pressed');
          //console.log('active input ' + Self.activeInput);
          if(Self.activeInput == 'amount') {
            var val = $('#amount').val();
            var position = val.length;
            if(!hasSoftKeyboard()){
              position = $('#' + Self.activeInput).getCursorPosition();
            }
            console.log('cursor position ' + position);
            val = val.slice(0, position) + number + val.slice(position);
            val = val.replace('.','');
            val = val.slice(0, val.length-2) + '.' + val.slice(val.length-2);
            if(val.substr(0,1) == '0'){
              if(val.substr(1,2)!='.'){
                val = val.substr(1,val.length);
                position = position - 1;
              }
            }
            if(hasSoftKeyboard()){
              $('#amount').val(val);
            } else {
              $('#amount').val(val).setCursorPosition(position+1);
              $('#amount').focus();
            }
          } else {
            //Active input is card
            //$('#card').val($('#card').val() + number).focus();
            var val = $('#card').val();
            var position = val.length;
            if(hasSoftKeyboard()){
              $('#card').val(val.slice(0, position) + number + val.slice(position));
            } else {
              position = $('#' + Self.activeInput).getCursorPosition();
              $('#card').val(val.slice(0, position) + number + val.slice(position)).setCursorPosition(position+1);
              $('#card').focus();
            }

          }
        });

        this.$('#del').off('click').on('click', function(event){
            event.preventDefault();
            //console.log('Delete button pressed');
            if(Self.activeInput == 'amount'){
              var val = $('#amount').val();
              var position = val.length;
              if(!hasSoftKeyboard()){
                var position = $('#' + Self.activeInput).getCursorPosition()
                //console.log('cursor position ' + position);
              }
              if(position > 0){
                val = val.slice(0, position-1) + val.slice(position);
                //remove dot
                val = val.replace('.','');
                //add dot
                val = val.slice(0, val.length-2) + '.' + val.slice(val.length-2);
                //add zero to begining if less than three characters
                if(val.length == 3 || (val.substr(0,1) == '+' && val.length == 4 ) || (val.substr(0,1) == '-' && val.length == 4 )){
                  val = val.slice(0, val.length-3) + '0' + val.slice(val.length-3);
                }
                if(val.length > 4){
                  position--;
                }
                if(hasSoftKeyboard()){
                  $('#amount').val(val);
                } else {
                  $('#amount').val(val).setCursorPosition(position);
                  $('#amount').focus();
                }
              } else {
                $('#amount').setCursorPosition(position).focus();
              }

            } else {
              var val = $('#card').val();
              var position = val.length;
              if(!hasSoftKeyboard()){
                position = $('#card').getCursorPosition();
              }
              //console.log('cursor position ' + position);
              //Active input is card
              if(position > 0){
                val = val.slice(0, position-1) + val.slice(position);
                if(hasSoftKeyboard()){
                  $('#card').val(val).blur();
                } else {
                  $('#card').val(val).setCursorPosition(position-1)
                  $('#card').focus();
                }
              } else {
                if(!hasSoftKeyboard()){
                  $('#card').setCursorPosition(position);
                  $('#card').focus();
                }
              }
            }
        });

        this.$('#process').off('click').on('click', function(event){
            event.preventDefault();
            Self.processTransaction();
        });

        this.$('#card').off('click').on('click', function(event){
          event.preventDefault();
          console.log('clicked on card input');
          $('#card').addClass('card-highlight');
          // Self.activeInput = 'card';
          // if(hasSoftKeyboard()){
          //   $('#card').blur();
          // } else {
          //   $('#card').focus();
          // }
        })

        Self.$('#card').off('change').on('change', function(event){
          //check if card number exists in card database
          var val = Self.$('#card').val();
          var card = Self.collection.get('cards~' + Self.merchant.get('merchantname') + '~' + val);
          if(typeof card != 'undefined'){
            router.navigate('#merchants/' + Self.merchant.get('merchantname') + '/transactions/' + val, true);
          }
        });

        this.$('#amount').off('click').on('click', function(event){
          event.preventDefault();
          console.log('clicked on amount input');
          $('#card').removeClass('card-highlight');
          Self.activeInput = 'amount';
          if(hasSoftKeyboard()){
            $('#amount').blur();
          } else {
            $('#amount').focus();
          }
        })

        this.$('#amount').keypress(function(event){
          event.preventDefault();
          console.log('which event :' + event.which);
          var number = 'undefined';
          if(event.which == 49){
            number = 1;
          } else if(event.which == 50){
            number = 2;
          } else if(event.which == 51){
            number = 3;
          } else if(event.which == 52){
            number = 4;
          } else if(event.which == 53){
            number = 5;
          } else if(event.which == 54){
            number = 6;
          } else if(event.which == 55){
            number = 7;
          } else if(event.which == 56){
            number = 8;
          } else if(event.which == 57){
            number = 9;
          } else if(event.which == 48){
            number = 0;
          } else if(event.which == 13){
            Self.processTransaction();
          }



          if(number != 'undefined'){
            console.log('number:' + number);
            console.log('active input ' + Self.activeInput);
            var position = $('#' + Self.activeInput).getCursorPosition()
            console.log('cursor position ' + position);
            if(Self.activeInput == 'amount') {
              var val = $('#amount').val();
              val = val.slice(0, position) + number + val.slice(position);
              val = val.replace('.','');
              val = val.slice(0, val.length-2) + '.' + val.slice(val.length-2);
              if(val.substr(0,1) == '0'){
                if(val.substr(1,2)!='.'){
                  val = val.substr(1,val.length);
                  position = position - 1;
                }
              }
              $('#amount').val(val).setCursorPosition(position+1);
              if(hasSoftKeyboard()){
                $('#amount').blur();
              } else {
                $('#amount').focus();
              }
            } else {
              //Active input is card
              $('#card').val($('#card').val().slice(0, position) + number + $('#card').val().slice(position)).setCursorPosition(position+1);
              if(hasSoftKeyboard()){
                $('#card').blur();
              } else {
                $('#card').focus();
              }
            }
          }

          if(event.which == '46'){
            console.log('Delete key pressed.');
            var position = $('#' + Self.activeInput).getCursorPosition()
            console.log('cursor position ' + position);
            if(Self.activeInput == 'amount'){
              var val = $('#amount').val();
              if(position < val.length){
                var characterAt = val.substr(position, 1);
                console.log('characterAt:' + characterAt);
                var lastChar = position == val.length-1;
                //remove character at position
                val = val.slice(0, position) + val.slice(position+1);
                //remove dot
                val = val.replace('.','');
                //add dot
                val = val.slice(0, val.length-2) + '.' + val.slice(val.length-2);
                //add zero to begining if less than three characters
                if(val.length == 3 || (val.substr(0,1) == '+' && val.length == 4 ) || (val.substr(0,1) == '-' && val.length == 4 )){
                  val = val.slice(0, val.length-3) + '0' + val.slice(val.length-3);
                }
                //if it's the dot character increment the cursor position.
                if(characterAt == '.' || (val.length == 4 && characterAt == '0') || lastChar){
                  position++;
                }
                $('#amount').val(val).setCursorPosition(position);
              } else {
                $('#amount').setCursorPosition(position);
              }
              if(hasSoftKeyboard()){
                $('#amount').blur();
              } else {
                $('#amount').focus();
              }
            }
          }
        })

        this.$('#amount').keydown(function(e){
            if(e.keyCode == 8) {
                e.preventDefault();
                console.log('Backspace Key Pressed');
                var position = $('#' + Self.activeInput).getCursorPosition()
                console.log('cursor position ' + position);
                if(Self.activeInput == 'amount'){
                  var val = $('#amount').val();
                  if(position > 0){
                    val = val.slice(0, position-1) + val.slice(position);
                    //remove dot
                    val = val.replace('.','');
                    //add dot
                    val = val.slice(0, val.length-2) + '.' + val.slice(val.length-2);
                    //add zero to begining if less than three characters
                    if(val.length == 3 || (val.substr(0,1) == '+' && val.length == 4 ) || (val.substr(0,1) == '-' && val.length == 4 )){
                      val = val.slice(0, val.length-3) + '0' + val.slice(val.length-3);
                    }
                    $('#amount').val(val).setCursorPosition(position);
                  } else {
                    $('#amount').setCursorPosition(position);
                  }
                  if(hasSoftKeyboard()){
                    $('#amount').blur();
                  } else {
                    $('#amount').focus();
                  }
                }
            } else if(e.keyCode == 46){
              e.preventDefault();
              console.log('Delete key pressed.');
              var position = $('#' + Self.activeInput).getCursorPosition()
              console.log('cursor position ' + position);
              if(Self.activeInput == 'amount'){
                var val = $('#amount').val();
                if(position < val.length){
                  var characterAt = val.substr(position, 1);
                  console.log('characterAt:' + characterAt);
                  var lastChar = position == val.length-1;
                  //remove character at position
                  val = val.slice(0, position) + val.slice(position+1);
                  //remove dot
                  val = val.replace('.','');
                  //add dot
                  val = val.slice(0, val.length-2) + '.' + val.slice(val.length-2);
                  //add zero to begining if less than three characters
                  if(val.length == 3 || (val.substr(0,1) == '+' && val.length == 4 ) || (val.substr(0,1) == '-' && val.length == 4 )){
                    val = val.slice(0, val.length-3) + '0' + val.slice(val.length-3);
                  }
                  //if it's the dot character increment the cursor position.
                  if(characterAt == '.' || (val.length == 4 && characterAt == '0') || lastChar){
                    position++;
                  }

                  $('#amount').val(val).setCursorPosition(position);
                } else {
                  $('#amount').setCursorPosition(position);
                }
                if(hasSoftKeyboard()){
                  $('#amount').blur();
                } else {
                  $('#amount').focus();
                }
              }
            } else {
              console.log(e.keyCode);
            }
        });

        Self.$('button[name=qrcode]').off('click').on('click', function(event){
          event.preventDefault();
          console.log('qrcode event');
          Self.$('#qrcode-reader').show();

          console.log('getUserMedia:', Modernizr.getusermedia);

          Self.$('button.close').off('click').on('click', function(event){
            event.preventDefault();
            console.log('close modal');
            Self.$('#qrcode-reader').hide();
            if(Modernizr.getusermedia){
              $('#reader').html5_qrcode_stop()
            }
          });

          Self.$('button.cancel').off('click').on('click', function(event){
            event.preventDefault();
            console.log('cancel modal');
            Self.$('#qrcode-reader').hide();
            if(Modernizr.getusermedia){
              $('#reader').html5_qrcode_stop()
            }
          });


          //switch this when it's debugged.
          if(!Modernizr.getusermedia){
            console.log('getUserMedia test failed.')
            Self.$('#qrfile').show();
            Self.$('#reader').hide();
            Self.$('#qrfile').off('change', 'input#qrfiles').on('change', 'input#qrfiles', function(event){
              console.log('qrfiles change event', event);
              Self.handleFiles(this.files);
            });
          } else {
            $('#reader').html5_qrcode(function(data){
                // do something when code is read
                console.log("Data:", data);
                if(typeof data != 'undefined'){
                  var parser = document.createElement('a');
                  // parser.href = "http://example.com:3000/pathname/?search=test#hash";
                  parser.href = data;

                  parser.protocol; // => "http:"
                  parser.hostname; // => "example.com"
                  parser.port;     // => "3000"
                  parser.pathname; // => "/pathname/"
                  parser.search;   // => "?search=test"
                  parser.hash;     // => "#hash"
                  parser.host;     // => "example.com:3000"
                  console.log('hash', parser.hash);
                  var parts = parser.hash.split('/');
                  var merchantname = parts[1];
                  var card_key = parts[3];
                  console.log('merchantname:', merchantname);
                  console.log('card key:', card_key);
                  Self.$('#qrcode-reader').hide();
                  $('#reader').html5_qrcode_stop();
                  router.navigate('merchants/' + merchantname + '/transactions/' + card_key);
                }
              },
              function(error){
                //show read errors
                console.log("error:",error)
              }, function(videoError){
                //the video stream could be opened
                console.log("Video Error:",videoError)
              }
            );
          }
        })

        setTimeout(function(){
          $('#amount').setCursorPosition($('#amount').val().length);
          if(hasSoftKeyboard()){
            $('#amount').blur();
          } else {
            $('#amount').focus();
          }
        },100);
    }
});
