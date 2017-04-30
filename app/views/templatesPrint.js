'use strict';

var $ = require('jquery');
var _ = require('underscore');
// require('../../node_modules/sidr/dist/jquery.sidr.min.js');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
$.colorpicker = require('bootstrap-colorpicker');
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var ViewHelpers = require('../helpers/handlebarHelpers');
var ViewHelpers = ViewHelpers(Handlebars)
var Common = require('../common');
var Self = {};
var crypto = require('crypto');
var QRious = require('qrious');
var Card = require('../models/card');
var Journal = require('../models/journal');
var async = require('async');

module.exports = Marionette.LayoutView.extend({

  template: Templates['templatesPrint'],

  initialize: function (options) {
      console.log("initialize templates Printer view", options);
      Self = this;
      Self.merchant = options.merchant;
      Self.merchantname = options.merchantname;
      Self.templates = options.templates;
      Self.templateName = options.templateName;
      Self.patrons = options.patrons;
      Self.currencies = options.currencies;
      Self.cards = options.cards;
      Self.journals = options.journals;
      Self.listenTo(Self.templates, 'sync reset', Self.render);
      Self.listenTo(Self.patrons, 'sync reset', Self.render);
      Self.listenTo(Self.currencies, 'sync reset', Self.render);
  },
  cardSpacing: 0,
  cardWidth: 3.375,
  cardHeight: 2.125,

  generateKey: function(){
    // crypto.randomBytes(32, function (ex, buffer) {
    //   callback(ex, buffer);
    // });
    var token = crypto.randomBytes(9).toString('hex');
    return token;
    // var text = "";
    // var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //
    // for( var i=0; i < length; i++ )
    //     text += possible.charAt(Math.floor(Math.random() * possible.length));
    //
    // return text;
  },

  print: function(event){
    event.preventDefault();
    console.log('Print event triggered');
    //render pdf copy of receipt and
    window.print();
  },

  save: function(data){
    console.log("save", data);
    //console.log("cards", data.cards);
    console.log('cardholderID', Self.$('select[name=patronID]').val());
    //for each card, create a card on the patrons account,

    var tasks = {};

    data.cards.forEach(function(keycard){
      console.log("key", keycard.key);

      tasks[keycard.key] = function(callback){
        var card = new Card();
        if(typeof Self.model != 'undefined'){
          card.set('_id', Self.model.get('_id'));
        }
        card.set('merchant', Self.merchant);
        card.set('key', keycard.key);
        card.set('cardholderID', Self.$('select[name=patronID]').val());
        card.set('disabled', Self.$('input[name=disabled]').prop('checked') === true);
        card.credentials = {};
        card.credentials.username = Self.merchant.get('merchantname');
        card.credentials.password = Self.merchant.get('password');
        card.save({},{
          success: function(model, response){
            console.log('successfully saved model', model, response);
            $('#success-notification').html('Successfully saved card:' + model.get('key')).show();

            var journal = new Journal();
            journal.set('key', keycard.key);
            journal.set('polarity', 'load');
            journal.set('currency', Self.$('select[name=currencyID]').val());
            journal.set('amount', parseFloat(Self.$('input[name=amount]').val()));
            //journal.set(currency, parseFloat(amount));
            journal.set('card', card);
            journal.set('merchant', Self.merchant);
            journal.set('cardholderID', card.get('cardholderID'));
            if(typeof Self.employee != 'undefined'){
              journal.set('employeeID', Self.employee.get('name'));
            }
            journal.credentials = {};
            journal.credentials.username = Self.merchant.get('merchantname');
            journal.credentials.password = Self.merchant.get('password');
            journal.save({},{
              success: function(model, res){
                console.log('successfully saved journal', model, res);
                callback(null,res)
              },
              error: function(model, error){
                console.log('failed to saved journal', model, error);
                callback(error)
              }
            });

          },
          error: function(model, error){
            console.log('failed to saved model', model, error);
            callback(error);
          }
        })
      }
    })

    console.log("number of tasks: ", tasks.length);
    console.log("tasks", tasks)
    async.series(tasks, function(error, results){
      if(error){
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
      } else {
        console.log('async results:',results);
        $('#success-notification').html('Successfully Processed Transaction.').show();
        setTimeout(function(){
          $('#success-notification').hide();
        },10000);
        Self.cards.fetch();
        Self.journals.fetch();
      }
    })
    //then make a transaction post from the default stewards account to the newly created patrons card for the amount.
    //create object.
    //save object to giftcard api.
  },

  drawQr: function(data){
    for(var i = 0; i < data.cards.length; i++){

      if(typeof data.img != 'undefined'){

        var canvas = document.getElementById("frontCanvas" + data.cards[i].key);
        //var canvas = Self.$('#frontCanvas' + data.cards[i].key)[0];
        if(typeof canvas != 'undefined' && canvas != null){
          var ctx = canvas.getContext("2d");
          //reset the width if it has been changed.
          canvas.width = Self.$('#frontCanvas' + data.cards[i].key).width();
          canvas.height = canvas.width * (data.img.height / data.img.width);
          Self.$('#frontCanvas' + data.cards[i].key).css('height', canvas.height);
          ctx.drawImage(data.img, 0, 0, data.img.width, data.img.height, 0, 0, canvas.width, canvas.height);
          Self.$("#frontCanvas" + data.cards[i].key).show();
        }
      }

      if(typeof data.backimg != 'undefined'){
        var canvas = document.getElementById("backCanvas" + data.cards[i].key);
        if(typeof canvas != 'undefined' && canvas != null){
          var ctx = canvas.getContext("2d");
          //reset the width if it has been changed.
          canvas.width = Self.$('#backCanvas' + data.cards[i].key).width();
          canvas.height = canvas.width * (data.backimg.height / data.backimg.width);
          Self.$('#backCanvas' + data.cards[i].key).css('height', canvas.height);
          ctx.drawImage(data.backimg, 0, 0, data.backimg.width, data.backimg.height, 0, 0, canvas.width, canvas.height);
          Self.$("#backCanvas" + data.cards[i].key).show();
        }
      }

      //Draw Qr code
      //var canvas = document.querySelector('canvas')
      var qrid = Self.$('#qr' + data.cards[i].key)[0];
      console.log('qrid:',qrid);
      var qr = new QRious({
        element: qrid,
        value: 'https://openmoney.gift' + '/#m/' + Self.merchant.get('merchantname') + '/t/' + data.cards[i].key,
      })
      qr.background = data.qrBackground;
      qr.foreground = data.qrForeground;
      qr.level = 'H';
      //qr.size = 175;
      qr.size = data.qrSize;

    }
    return data;
  },

  render: function(){
      console.log("render templates view");
      var data = {};
      //data.merchant = Self.merchant.toJSON();

      var templateId = 'templates~' + Self.merchant.get('merchantname') + '~' + Self.templateName;
      data = Self.templates.get(templateId);
      console.log(templateId, data);
      if(typeof data === 'undefined'){
        data = {};
      } else {
        data = data.toJSON();
      }

      data.cardSpacing = Self.cardSpacing;
      data.frontTopMargin = 48;
      data.frontLeftMargin = 48;
      data.backTopMargin = 48;
      data.backRightMargin = 48;
      //how many cards can fit on a standard A4 paper
      data.numberOfCards = Math.floor((1168 - data.frontLeftMargin) / data.cardWidth) * Math.floor((1510 - data.frontTopMargin) / data.cardHeight)

      data.cards = [];
      for(var i = 0; i < data.numberOfCards; i++){
        data.cards[i] = {};
        data.cards[i].key = Self.generateKey();
      }
      if(typeof data._attachments != 'undefined' && typeof data._attachments['frontImg.png'] != 'undefined'){
        data.img = new Image();
        data.img.width = data.frontImgWidth;
        data.img.height = data.frontImgHeight;
        data.img.onload = function(){
          for(var i = 0; i < data.numberOfCards; i++){
            var canvas = document.getElementById("frontCanvas" + data.cards[i].key);
            //var canvas = Self.$('#frontCanvas' + data.cards[i].key)[0];
            if(typeof canvas != 'undefined' && canvas != null){
              var ctx = canvas.getContext("2d");
              //reset the width if it has been changed.
              canvas.width = Self.$('#frontCanvas' + data.cards[i].key).width();
              canvas.height = canvas.width * (data.img.height / data.img.width);
              Self.$('#frontCanvas' + data.cards[i].key).css('height', canvas.height);
              ctx.drawImage(data.img, 0, 0, data.img.width, data.img.height, 0, 0, canvas.width, canvas.height);
              Self.$("#frontCanvas" + data.cards[i].key).show();

              data.frontimg = new Image();
              data.frontimg.src = canvas.toDataURL();
              data.frontimg.width = canvas.width;
              data.frontimg.height = canvas.height;
            }
          }
        };
        data.img.src = 'data:' + data._attachments['frontImg.png'].content_type + ';base64,' + data._attachments['frontImg.png'].data;
      }
      if(typeof data._attachments != 'undefined' && typeof data._attachments['backImg.png'] != 'undefined'){
        data.backimg = new Image();
        data.backimg.width = data.backImgWidth;
        data.backimg.height = data.backImgHeight;
        data.backimg.onload = function(){
          for(var i = 0; i < data.numberOfCards; i++){
            var canvas = document.getElementById("backCanvas" + data.cards[i].key);
            if(typeof canvas != 'undefined' && canvas != null){
              var ctx = canvas.getContext("2d");
              //reset the width if it has been changed.
              canvas.width = Self.$('#backCanvas' + data.cards[i].key).width();
              canvas.height = canvas.width * (data.backimg.height / data.backimg.width);
              Self.$('#backCanvas' + data.cards[i].key).css('height', canvas.height);
              ctx.drawImage(data.backimg, 0, 0, data.backimg.width, data.backimg.height, 0, 0, canvas.width, canvas.height);
              Self.$("#backCanvas" + data.cards[i].key).show();

              data.backimage = new Image();
              data.backimage.src = canvas.toDataURL();
              data.backimage.width = canvas.width;
              data.backimage.height = canvas.height;
            }
          }
        };
        data.backimg.src = 'data:' + data._attachments['backImg.png'].content_type + ';base64,' + data._attachments['backImg.png'].data;
      }

      data.merchantname = Self.merchantname;
      data.patrons = Self.patrons.toJSON();
      data.currencies = Self.currencies.toJSON();
      for(var i = 0; i < data.currencies.length; i++){
        if(data.currencies[i].currency === 'cc'){
          data.currencies.splice(i, 1);
        }
      }

      data.backonly = true;
      console.log('templates data:', data);

      _.extend(data, ViewHelpers);
      Self.$el.html(Self.template(data));

      Self.$('#cards').html(Templates['templatesCards'](data));

      Self.$('#backonly').on('change', function(event){
        data.backonly = Self.$('#backonly').prop('checked') === true;
        Self.$('#cards').html(Templates['templatesCards'](data));
        Self.drawQr(data);
      })

      Self.$('#numberOfCards').on('change', function(event){
        data.numberOfCards = Self.$('#numberOfCards').val();
        data.cards = [];
        for(var i = 0; i < data.numberOfCards; i++){
          data.cards[i] = {};
          data.cards[i].key = Self.generateKey();
        }
        Self.$('#cards').html(Templates['templatesCards'](data));
        Self.drawQr(data);
      });

      Self.$('#cardspacing').on('change', function(e){
        data.cardSpacing = Self.cardSpacing = Self.$('#cardspacing').val();
        Self.$('#cards').html(Templates['templatesCards'](data));
        Self.drawQr(data);
      })

      Self.$('#page1top').change(function(){
          data.frontTopMargin = Self.$('#page1top').val();
          Self.$('.page1').css('padding-top', data.frontTopMargin + 'px');
      })

      Self.$('#page1left').change(function(){
          data.frontLeftMargin = Self.$('#page1left').val();
          Self.$('.page1').css('padding-left', data.frontLeftMargin + 'px');
      })

      Self.$('#page2top').change(function(){
          data.backTopMargin = Self.$('#page2top').val();
          Self.$('.page2').css('padding-top', data.backTopMargin + 'px');
      })

      Self.$('#page2right').change(function(){
          data.backRightMargin = Self.$('#page2right').val();
          Self.$('.page2').css('padding-right', data.backRightMargin + 'px');
      })

      // Self.$('#borders').change(function(){
      //     data.borders = Self.$('#borders').prop('checked');
      //     if(data.borders){
      //       Self.$('#stats').addClass('borders');
      //     } else {
      //       Self.$('#stats').removeClass('borders');
      //     }
      // });

      Self.$('button[name=print]').off('click').on('click', Self.print);

      Self.$('button[name=save]').off('click').on('click', function(event){
        event.preventDefault();
        console.log('save event triggered', data);
        Self.save(data);
      });

      Self.drawQr(data);

    }

});
