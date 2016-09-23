'use strict';

var jQuery = require('jquery');
var $ = jQuery;
var _ = require('underscore');
require('datatables');
//require('jquery.browser');
require('toolkit');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var ViewHelpers = require('../helpers/handlebarHelpers');
var ViewHelpers = ViewHelpers(Handlebars)
var Common = require('../common');
var Card = require('../models/card');
var Self;
var QRious = require('qrious');

var QrCode = require('qrcode-reader');
var qrcode = new QrCode();
var html5_qrcode = require('html5-qrcode');
var getUserMedia = require("browsernizr/test/webrtc/getusermedia");
var Modernizr = require('browsernizr');
var crypto = require('crypto');

module.exports = Marionette.ItemView.extend({

    template: Templates['balance'],

    merchant: {},

    initialize: function (options) {
        console.log("initialize balance view", options);
        Self = this;
        //Self.collection = options.collection;
        Self.merchantname = options.merchantname;
        // Self.patrons = options.patrons;
        // Self.patrons_id = options.patrons_id;
        Self.key = options.key;
        //Self.journals = options.journals;
        //Self.currencies = options.currencies;
        //this.render();
        //console.log('card merchant', Self.merchant);
        // Self.listenTo(Self.journals, 'sync reset', Self.render);
        // Self.listenTo(Self.currencies, 'sync reset', Self.render);
        var id = 'cards~' + Self.merchantname + '~' + Self.key;
        console.log("cardsID", id);
        Self.model = new Card();
        Self.model.set('merchantname', Self.merchantname);
        Self.model.set('key', Self.key);
        Self.model.fetch({
          success: function(model, res){
            console.log('successfully got card', model);
          },
          error: function(err){
            console.log('could not get card', err);
          }
        })

        Self.listenTo(Self.model, 'sync reset', Self.render);
    },

    ui: {
      newCard: 'button[name=newTransaction]'
    },

    events: {
      'click button[name=newTransaction]': 'processTransaction'
    },

    collectionEvents: {
      'sync reset': 'render'
    },

    print: function(event){
      event.preventDefault();
      console.log('Print event triggered');
      //render pdf copy of receipt and
      window.print();
    },

    processTransaction: function(event){
      console.log('processTransaction event fired:', event);
      event.preventDefault();
      router.navigate('merchants/' + Self.merchant.get('merchantname') + '/transactions/' + Self.model.get('key') );
    },

    generateKey: function(){
      var token = crypto.randomBytes(9).toString('hex');
      return token;
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
            Self.$('#key').val(card_key);
            //router.navigate('merchants/' + merchantname + '/transactions/' + card_key);
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

        console.log('render balance view', Self.model);
        var data = {};
        if(typeof Self.model != 'undefined'){
          data = Self.model.toJSON();
        }
        // data.journals = Self.journals.where({key: Self.card_key})
        // for(var i = 0; i < data.journals.length; i++){
        //   data.journals[i] = data.journals[i].toJSON();
        //   _.extend(data.journals[i], ViewHelpers);
        // }
        // data.currencies = Self.currencies.getByNamespace(Self.merchant.get('merchantname') + '.cc');
        // for(var i = 0; i < data.currencies.length; i++){
        //   data.currencies[i] = data.currencies[i].toJSON();
        //   data.currencies[i].balance = 0;
        //   for(var j = 0; j < data.journals.length; j++){
        //     if(data.journals[j].currency == data.currencies[i].currency){
        //       if(data.journals[j].load){
        //         data.currencies[i].balance += data.journals[j].amount;
        //       } else {
        //         data.currencies[i].balance -= data.journals[j].amount;
        //       }
        //     }
        //   }
        //   _.extend(data.currencies[i], ViewHelpers);
        // }

        _.extend(data, ViewHelpers);
        console.log('card view data', data);
        Self.$el.html(Self.template(data));

        Self.$('button[name=generate]').off('click').on('click', function(event){
          console.log('generate key event', event);
          Self.$('input[name=key]').val(Self.generateKey());
        });

        Self.$('button[name=print]').off('click').on('click', Self.print);

        var http = location.protocol;
        var slashes = http.concat("//");
        var host = slashes.concat(window.location.hostname);

        var canvas = document.querySelector('canvas')
        var qrid = document.getElementById('qr')
        var qrid = Self.$('#qr')[0];
        console.log('qrid:',qrid);
        var qr = new QRious({
          element: qrid,
          value: host + '/#merchants/' + Self.merchantname + '/transactions/' + Self.key,
        })
        // qr.background = '#000'
        // qr.foreground = '#fff'
        qr.level = 'H';
        qr.size = 256;

        //qr.canvas = qrid;

        console.log('qrcode', qr);

        if(typeof qr.image != 'undefined'){
          Self.$('qrcode-image').append(qr.image)
          // qr.canvas.parentNode
        }


        this.$('[data-sort=basic]').DataTable({
          "paging": false,
          "info": false,
          "sDom": '<"top"i>rt<"bottom"lp><"clear">'
        });

        $('#cardForm').validate({
            onkeyup: false,
            rules: {
                key: {
                    required: true,
                    minlength: 1,
                    maxlength: 65
                },
                type: {
                    required: true,
                    minlength: 1,
                    maxlength: 35
                }
            },
            messages: {
                key: {
                    required: "Card number is required.",
                    minlength: "At least 1 characters is required.",
                    maxlength: "Less than 65 characters is required."
                },
                type: {
                    required: "Card type is required.",
                    minlength: "At least 1 characters is required.",
                    maxlength: "Less than 35 characters is required."
                }
            },
            submitHandler: function(form) {
                console.log("submit form");
                form.submit();
            },
            errorPlacement: function(error, element) {
                var placement = $(element.parent()).data('error');
                if (placement) {
                    $(placement).append(error)
                } else {
                    error.insertAfter(element.parent());
                }
            }
        });

        this.$('button[name=showedit]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('showedit button pressed!');
          Self.$('#cardForm').show();
          Self.$('#statsButton').hide();
          Self.$('#stats').hide();
        });

        this.$('button[name=cancel]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('cancel button pressed!');
          if(Self.card_key == 'new'){
            router.navigate('merchants/' + Self.merchant.get('merchantname') + '/patrons/' + Self.patrons_id );
          } else {
            Self.$('#cardForm').hide();
            Self.$('#statsButton').show();
            Self.$('#stats').show();
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
                  Self.$('#key').val(card_key);
                  //router.navigate('merchants/' + merchantname + '/transactions/' + card_key);
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

        this.$('button[name=upsert]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('upsert button pressed!');

          var isValid = $('#cardForm').valid();
          console.log("form valid:" + isValid);
          if( isValid ) {

            if(typeof Self.model == 'undefined'){
              Self.model = new Card();
            }
            Self.model.set('merchant', Self.merchant);
            Self.model.set('key', Self.$('input[name=key]').val());

            Self.model.set('cardholderID', Self.patrons_id);

            //console.log('patron save', Self.model.toJSON());
            Self.model.credentials = {};
            Self.model.credentials.username = Self.merchant.get('merchantname');
            Self.model.credentials.password = Self.merchant.get('password');
            Self.model.save({},{
              success: function(model, response){
                console.log('successfully saved model', model, response);
                Self.model.set('_id', 'cards~' + Self.merchant.get('merchantname') + '~' + Self.model.get('key'));

                Self.collection.set(Self.model, {remove: false});
                Self.journals.fetch();
                router.navigate('merchants/' + Self.merchant.get('merchantname') + '/patrons/' + Self.patrons_id + '/cards/' + Self.model.get('key'));
                Self.render();
                //Backbone.history.navigate('#patrons/patrons~' + Self.merchant.get('merchantname') + '~' + Self.model.get('firstname') + '~' + Self.model.get('lastname'),{trigger:true, replace:true});
                $('#success-notification').html('Successfully saved card.').show();
                setTimeout(function(){
                  $('#success-notification').hide();
                },10000);
              },
              error: function(model, error){
                console.log('failed to saved model', model, error);
                if(typeof error.responseJSON != 'undefined' && typeof error.responseJSON.message != 'undefined' ){
                  console.info(error.responseJSON.message);
                  $('#error-notification').html(error.responseJSON.message).show();
                  setTimeout(function(){
                    $('#error-notification').hide();
                  },10000);
                } else {
                  $('#error-notification').html('Error').show();
                  setTimeout(function(){
                    $('#error-notification').hide();
                  },10000);
                }
              }
            })
          }
        })
    }
});
