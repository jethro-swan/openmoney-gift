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

  template: Templates['templatesList'],

  initialize: function (options) {
      console.log("initialize templatesList view", options);
      Self = this;
      Self.merchant = options.merchant;
      Self.merchantname = options.merchantname;
      Self.templates = options.templates;
      Self.listenTo(Self.templates, 'sync reset', Self.render);
      //Self.listenTo(Self.currencies, 'sync reset', Self.render);
  },

  render: function(){
      console.log("render templateList view");
      var data = {};
      //data.merchant = Self.merchant.toJSON();
      data.merchantname = Self.merchantname;
      data.templates = Self.templates.toJSON();


      console.log('templatesList data:', data);
      _.extend(data, ViewHelpers);
      Self.$el.html(Self.template(data));

      Self.$('button[name=newTemplate]').off('click').on('click', function(event){
        event.preventDefault();
        router.navigate('merchants/' + Self.merchant.get('merchantname') + '/templates/new', true);
      });

      Self.$('button.print').off('click').on('click', function(event){
        event.preventDefault();
        var templateName = this.id;
        router.navigate('merchants/' + Self.merchant.get('merchantname') + '/templatesPrint/' + templateName, true);
      });

      //Default Toggle
      Self.$('.default-radio').off('change').on('change', function(event){
        event.preventDefault();
        console.log('default template id:', this.id);

        //get default template and set as not default
        var defaultTemplate = Self.templates.getDefault();
        if(typeof defaultTemplate != 'undefined'){
          defaultTemplate.set('default', false);
          defaultTemplate.credentials = {};
          defaultTemplate.credentials.username = Self.merchant.get('merchantname');
          defaultTemplate.credentials.password = Self.merchant.get('password');
          defaultTemplate.set('merchant', Self.merchant);
          defaultTemplate.save({
            success: function(model, response){
              console.log('successfully set default template to false', model, response);
              Self.templates.fetch();
            },
            error: function(model, response){
              console.log('failed to set default template to false', model, response);
            }
          });
        }
        //set current id as default;
        var templateId = 'templates~' + Self.merchant.get('merchantname') + '~' + this.id.split('~')[0];
        var template = Self.templates.get(templateId);
        template.set('default', true);
        template.credentials = {};
        template.credentials.username = Self.merchant.get('merchantname');
        template.credentials.password = Self.merchant.get('password');
        template.set('merchant', Self.merchant);
        template.save({
          success: function(model, response){
            console.log('successfully set default template to true', model, response);
            Self.templates.fetch();
          },
          error: function(model, response){
            console.log('failed to set default template to true', model, response);
          }
        });
      });


      this.$('[data-sort=table]').DataTable({
        "paging": false,
        "info": false,
        "sDom": '<"top"i>rt<"bottom"lp><"clear">'
      });
    }

});
