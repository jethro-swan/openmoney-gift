'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var Self;
var Page = require('../models/page');
var PouchDB = require('pouchdb');


module.exports = Marionette.LayoutView.extend({
  regions:{
    breadcrumbs: '#breadcrumbs'
  },
  modelEvents: {
    'change:currentPage': 'render',
    'change:title': 'render',
    'change:breadcrumbs': 'render'
  },
  template: Templates.dashhead,
  initialize: function(options){
    console.log('initialize dashhead view', options)
    Self = this;
    if(typeof options.merchant != 'undefined'){
      Self.merchant = options.merchant;
    }
    Self.employee = options.employee;
    Self.employees = options.employees;
  },
  render: function(options){
    console.log('render dashhead view', options)
    var data = {
      merchant: Self.merchant.toJSON(),
      page: Self.model.get('currentPage'),
      title: Self.model.get('title')};
    if(typeof Self.employee != 'undefined'){
      console.log('employee',Self.employee);
      data.employee = Self.employee.toJSON();
    }
    console.log('dashhead data', data);
    Self.$el.html(Self.template(data));
    switch(Self.model.get('currentPage')){
      case '':
      case 'welcome':
      case 'login':
      case 'register':
      case 'forgot':
      case 'reset':
        Self.$('.dashhead').hide();
        Self.$('.breadcrumbs').hide();
        break;
      default:
        Self.$('.dashhead').show();
        Self.$('.breadcrumbs').show();
    }

    Self.$('#employee-button').off('click').on('click', function(event){
      event.preventDefault();
      console.log('employee event triggered');
      Self.$('#pincodeModal').show();
      Self.$('input[name=code]').focus();
      //TODO:display Pin Code modal

    });

    Self.$('button[name=close]').off('click').on('click', function(event){
      event.preventDefault();
      console.log('close modal');
      Self.$('#pincodeModal').hide();
      Self.$('input[name=code]').val('');
    })

    Self.$('button[name=cancel]').off('click').on('click', function(event){
      event.preventDefault();
      console.log('cancel modal');
      Self.$('#pincodeModal').hide();
      Self.$('input[name=code]').val('');
    })

    Self.$('button[name=setEmployee]').off('click').on('click', function(event){
      event.preventDefault();
      var code = Self.$('input[name=code]').val();
      console.log('set employee modal', code);
      //TODO:upon form submit lookup employee by pin code.
      var employee = Self.employees.getByPin(code);
      console.log('employee', employee);
      if(typeof employee == 'undefined'){
        //display error on modal.
        $('#error-modal-notification').html('Employee not found.').show();
        setTimeout(function(){
          $('#error-modal-notification').hide();
        },10000);
      } else {
        //TODO:if found set employee as logged in.(pouchdb and memory) and close modal
        Self.employee = employee;
        var db = new PouchDB('giftcard');
        db.get('config~employee', function(err, doc){
          if(err && err.status == 404){
            db.put({
              _id: 'config~employee',
              employee: employee.toJSON(),
            });
            //reload the page it will grab all the necessary information
            //ineffient but works
            window.location.reload(false);
          } else {
            if(err){
              console.log('error inserting config credentials:',err);
            } else {
              doc.employee = employee.toJSON();
              db.put(doc);
              //ineffient but works
              //reload the page it will grab all the necessary information
              window.location.reload(false);
            }
          }
        })
      }
    })
  }
});
