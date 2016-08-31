'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Card = require('../models/card');
var Self;

module.exports = Backbone.Collection.extend({
  model: Card,
  url: function() {
    return '/V1/merchants/' + Self.merchant.get('merchantname') + '/cards';
  },
  initialize: function(models, options) {
    Self = this;
    if(typeof options != 'undefined' && typeof options.merchant != 'undefined'){
      Self.merchant = options.merchant;
    }
  }
});
