'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Patron = require('../models/patron');

module.exports = Backbone.Collection.extend({
      model: Patron,
      url: function() {
        return '/V1/merchants/' + this.merchant.get('merchantname') + '/carholders';
      },
      initialize: function(models, options) {
        if(typeof options != 'undefined' && typeof options.merchant != 'undefined'){
          this.merchant = options.merchant;
        }
      }
});
