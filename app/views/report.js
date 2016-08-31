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

  template: Templates['report'],

  initialize: function (options) {
      console.log("initialize report view", options);
      Self = this;
      Self.merchant = options.merchant;
      Self.currency = options.currency;
      Self.currencies = options.currencies;
      Self.listenTo(Self.collection, 'sync reset', Self.render);
      Self.listenTo(Self.currencies, 'sync reset', Self.render);
  },

  render: function(){
      console.log("render report view");
      var data = {};
      data.currency = Self.currency;
      data.balance = 0;
      data.volume = 0;
      data.journals = [];
      data.currencyObject = Self.currencies.get('currencies~' + Self.currency + '.' + Self.merchant.get('merchantname') + '.cc');
      if(typeof data.currencyObject != 'undefined'){
        data.currencyObject = data.currencyObject.toJSON();
        if(typeof Self.startDate != 'undefined' && typeof Self.endDate == 'undefined'){
          data.journals = Self.collection.getCurrencyByStartDate(Self.currency, new Date(Self.startDate + ' 00:00:00'));
        } else if(typeof Self.startDate == 'undefined' && typeof Self.endDate != 'undefined'){
          data.journals = Self.collection.getCurrencyByEndDate(Self.currency, new Date(Self.endDate + ' 23:59:59'));
        } else if(typeof Self.startDate != 'undefined' && typeof Self.endDate != 'undefined'){
          data.journals = Self.collection.getCurrencyByDateRange(Self.currency, new Date(Self.startDate + ' 00:00:00'), new Date(Self.endDate + ' 23:59:59'));
        } else {
          data.journals = Self.collection.where({currency: Self.currency});
        }
        for(var i = 0; i < data.journals.length; i++){
          data.journals[i] = data.journals[i].toJSON();
          if(typeof data.journals[i].cardholderID != 'undefined'){
            data.journals[i].patron = data.journals[i].cardholderID.split('~')[2] + ' ' + data.journals[i].cardholderID.split('~')[3];
          }
          if(typeof data.journals[i].employeeID != 'undefined'){
            data.journals[i].employee = data.journals[i].employeeID;
          }
          _.extend(data.journals[i], ViewHelpers);
          data.journals[i].merchant = Self.merchant.toJSON();
          if(data.journals[i].load){
            data.balance += data.journals[i].amount;
          } else {
            data.balance -= data.journals[i].amount;
          }
          data.volume += data.journals[i].amount;
        }
      }

      data.merchant = Self.merchant.toJSON();

      _.extend(data, ViewHelpers);

      if(typeof Self.startDate != 'undefined'){
        data.startDate = Self.startDate;
      }
      if(typeof Self.endDate != 'undefined'){
        data.endDate = Self.endDate;
      }

      console.log('report data:', data);
      Self.$el.html(Self.template(data));

      Self.$('[data-sort=table]').DataTable();

      Self.$('input[name=startDate]').datepicker({autoclose: true});

      Self.$('input[name=startDate]').off('change').on('change',function(event){
        Self.startDate = $('input[name=startDate]').val();
        Self.render();
      });

      Self.$('input[name=startDate]').focus(function() {
        this.blur();
      });

      Self.$('input[name=endDate]').datepicker({autoclose: true});

      Self.$('input[name=endDate]').off('change').on('change',function(event){
        Self.endDate = $('input[name=endDate]').val();
        Self.render();
      });

      Self.$('input[name=endDate]').focus(function() {
        this.blur();
      });


      return Self;
    }

});
