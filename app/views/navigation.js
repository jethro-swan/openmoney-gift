'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var Self;
var Page = require('../models/page');
var ViewHelpers = require('../helpers/handlebarHelpers');
var ViewHelpers = ViewHelpers(Handlebars);

module.exports = Marionette.ItemView.extend({
  modelEvents: {
    'change:currentPage': 'render'
  },
  template: Templates.navigation,
  initialize: function(options){
    console.log('initialize navigation view', options)
    Self = this;
    if(typeof options.merchant != 'undefined'){
      Self.merchant = options.merchant;
    }
    Self.listenTo(Self.merchant, 'sync reset', Self.render);
    Self.render();
  },
  render: function(options){
    console.log('render navigation view', options)
    console.log('currentPage', Self.model.get('currentPage'))
    console.log('Self.merchant', Self.merchant);

    switch(Self.model.get('currentPage')){
      case '':
      case 'welcome':
      case 'login':
      case 'register':
      case 'forgot':
      case 'reset':
        Self.$el.html('');
        break;
      default:
        var data = {merchant: Self.merchant.toJSON(), page: Self.model.get('currentPage')};
        _.extend(data, ViewHelpers);
        Self.$el.html(Self.template(data));
    }
  }
});
