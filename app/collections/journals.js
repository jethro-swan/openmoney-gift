'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Journal = require('../models/journal');
var Self;

module.exports = Backbone.Collection.extend({
  model: Journal,
  url: function() {
    return '/V1/merchants/' + Self.merchant.get('merchantname') + '/reports';
  },
  initialize: function(models, options) {
    Self = this;
    if(typeof options != 'undefined' && typeof options.merchant != 'undefined'){
      Self.merchant = options.merchant;
    }
  },
  getByDateRange: function(startDate, endDate){
    return Self.models.filter(function(model) {
      return (
        model.get('timestamp') > startDate &&
        model.get('timestamp') <= endDate
      )
    });
  },
  getCurrencyByDateRange: function(currency, startDate, endDate){
    return Self.models.filter(function(model) {
      return (
        new Date(model.get('timestamp')) > startDate &&
        new Date(model.get('timestamp')) <= endDate &&
        model.get('currency') == currency
      )
    });
  },
  getCurrencyByStartDate: function(currency, startDate){
    return Self.models.filter(function(model) {
      return (
        new Date(model.get('timestamp')) > startDate &&
        model.get('currency') == currency
      )
    });
  },
  getCurrencyByEndDate: function(currency, endDate){
    return Self.models.filter(function(model) {
      return (
        new Date(model.get('timestamp')) <= endDate &&
        model.get('currency') == currency
      )
    });
  }
});
