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
module.exports = Marionette.LayoutView.extend({

  template: Templates['receipt'],

  initialize: function (options) {
    console.log("initialize receipt view", options);
    Self = this;
    //collection is cards
    Self.merchant = options.merchant;
    Self.journals = options.journals;
    Self.currencies = options.currencies;
    Self.key = options.key;
    Self.timestamp = options.timestamp;
    Self.listenTo(Self.collection, 'sync reset', Self.render);
    Self.listenTo(Self.journals, 'sync reset', Self.render);
    Self.listenTo(Self.currencies, 'sync reset', Self.render);
  },

  render: function(){
    console.log("render receipt view", Self.key, Self.timestamp);
    var data = {};
    data.merchant = Self.merchant.toJSON();
    _.extend(data.merchant, ViewHelpers);
    data.card = Self.collection.get('cards~' + Self.merchant.get('merchantname') + '~' + Self.key);
    data.currency = 'giftcard';
    if(typeof data.card != 'undefined'){
      data.card = data.card.toJSON();
      _.extend(data.card, ViewHelpers);
    }


    data.journal = Self.journals.where({'timestamp': parseInt(Self.timestamp), 'key': Self.key});
    if(data.journal.length == 1){
      data.journal = data.journal[0];
      data.journal = data.journal.toJSON();
      data.currency = data.journal.currency;
      _.extend(data.journal, ViewHelpers);
    }

    data.currencyObject = Self.currencies.get('currencies~' + data.currency + '.' + Self.merchant.get('merchantname') + '.cc');
    if(typeof data.currencyObject != 'undefined'){
      data.currencyObject = data.currencyObject.toJSON();
    }


    _.extend(data, ViewHelpers);
    console.log('receipt data', data);
    Self.$el.html(Self.template(data));

    Self.$('button[name=done]').off('click').on('click', Self.done);
    Self.$('button[name=void]').off('click').on('click', Self.void);
    Self.$('button[name=email]').off('click').on('click', Self.email);
    Self.$('button[name=print]').off('click').on('click', Self.print);
  },
  done: function(event){
    event.preventDefault();
    console.log('Done event triggered');
    router.navigate('#merchants/' + Self.merchant.get('merchantname') + '/transactions/' + Self.key, true);
  },
  void: function(event){
    event.preventDefault();
    console.log('void event triggered');
    //post a reverse of the transaction with a void:reference to the timestamp of the previous transaction
    //display voided transactions with a strike through line.
  },
  email: function(event){
    event.preventDefault();
    console.log('Email event triggered');
    //get Patron's email send a pdf copy of receipt
  },
  print: function(event){
    event.preventDefault();
    console.log('Print event triggered');
    //render pdf copy of receipt and
    window.print();
  }

});
