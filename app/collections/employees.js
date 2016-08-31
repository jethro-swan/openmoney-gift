'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Employee = require('../models/employee');
var Self;

module.exports = Backbone.Collection.extend({
  model: Employee,
  url: function() {
    return '/V1/merchants/' + this.merchant.get('merchantname') + '/employees';
  },
  initialize: function(models, options) {
    Self = this;
    if(typeof options != 'undefined' && typeof options.merchant != 'undefined'){
      this.merchant = options.merchant;
    }
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
  },
  getByPin: function(code){
    var employees = Self.models.filter(function(model) {
      return model.get('code') == code;
    })
    if(employees.length > 0){
      return employees[0];
    } else {
      return undefined;
    }
  }
});
