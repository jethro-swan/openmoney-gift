'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Template = require('../models/template');
var Self;

module.exports = Backbone.Collection.extend({
  model: Template,
  url: function() {
    return '/V1/merchants/' + Self.merchant.get('merchantname') + '/templates';
  },
  initialize: function(models, options) {
    Self = this;
    if(typeof options != 'undefined' && typeof options.merchant != 'undefined'){
      Self.merchant = options.merchant;
    }
  },
  parse: function(response){
    console.log('templates collection parse method', response);
    var resultsArray = [];
    resultsArray = response;
    console.log('templates collection parse results: ', resultsArray);
    return resultsArray;
  },
  getDefault: function(){
    var defaults = Self.models.filter(function(model) {
      return model.get('default');
    })
    if(defaults.length > 0){
      return defaults[0];
    } else {
      return undefined;
    }
  }
});
