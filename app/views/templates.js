'use strict';

var $ = require('jquery');
var _ = require('underscore');
// require('../../node_modules/sidr/dist/jquery.sidr.min.js');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var ViewHelpers = require('../helpers/handlebarHelpers');
var ViewHelpers = ViewHelpers(Handlebars)
var Common = require('../common');
var Self = {};
var crypto = require('crypto');
var QRious = require('qrious');
module.exports = Marionette.LayoutView.extend({

  template: Templates['templates'],

  initialize: function (options) {
      console.log("initialize templates view", options);
      Self = this;
      Self.merchant = options.merchant;
      Self.merchantname = options.merchantname;
      //Self.currencies = options.currencies;
      //Self.listenTo(Self.collection, 'sync reset', Self.render);
      //Self.listenTo(Self.currencies, 'sync reset', Self.render);
  },

  numberOfCards: 12,

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

  render: function(){
      console.log("render templates view");
      var data = {};
      //data.merchant = Self.merchant.toJSON();
      data.merchantname = Self.merchantname;
      data.numberOfCards = Self.numberOfCards;
      data.cardWidth = Self.cardWidth;
      data.cardHeight = Self.cardHeight;

      data.cards = [];
      for(var i = 0; i < data.numberOfCards; i++){
        data.cards[i] = {};
        data.cards[i].key = Self.generateKey();
      }

      console.log('templates data:', data);
      _.extend(data, ViewHelpers);
      Self.$el.html(Self.template(data));

      Self.$('button[name=print]').off('click').on('click', Self.print);

      for(var i = 0; i < data.cards.length; i++){

        var canvas = document.querySelector('canvas')
        var qrid = document.getElementById('qr')
        var qrid = Self.$('#qr' + data.cards[i].key)[0];
        console.log('qrid:',qrid);
        var qr = new QRious({
          element: qrid,
          value: 'https://openmoney.gift' + '/#merchants/' + Self.merchant.get('merchantname') + '/transactions/' + data.cards[i].key,
        })
        // qr.background = '#000'
        // qr.foreground = '#fff'
        qr.level = 'H';
        //qr.size = 175;
        qr.size = data.cardHeight * 100 * (3/4);

      }

      Self.$('#numberOfCards').on('change', function(event){
        Self.numberOfCards = Self.$('#numberOfCards').val();
        Self.render();
      });

      Self.$('#width').on('change', function(event){
        Self.cardWidth = Self.$('#width').val();
        console.log('width change', Self.cardWidth);
        Self.render();
      })

      Self.$('#height').on('change', function(event){
        Self.cardHeight = Self.$('#height').val();
        console.log('height change', Self.cardHeight);
        Self.render();
      })

    }

});
