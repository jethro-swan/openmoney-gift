'use strict';

var jQuery = require('jquery');
var $ = jQuery;
var _ = require('underscore');
require('datatables');
//require('jquery.browser');
require('toolkit');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var ViewHelpers = require('../helpers/handlebarHelpers');
var ViewHelpers = ViewHelpers(Handlebars)
var Common = require('../common');
var Employee = require('../models/employee');
var Self;

module.exports = Marionette.ItemView.extend({

    template: Templates['employee'],

    steward: {},

    initialize: function (options) {
        console.log("initialize employee view", options);
        Self = this;
        Self.collection = options.collection;
        Self.merchant = options.merchant;
        //Self.namespaces = options.namespaces;
        //Self.namespace = options.namespace;
        Self.name = options.name;
        //Self.accounts = options.accounts;
        //Self.journals = options.journals;
        //Self.stewards = options.stewards
        //console.log('card steward', Self.steward);
        //Self.listenTo(Self.journals, 'sync reset', Self.render);
        //Self.listenTo(Self.accounts, 'sync reset', Self.render);
        //Self.listenTo(Self.namespaces, 'sync reset', Self.render);
    },

    collectionEvents: {
      'sync reset': 'render'
    },

    render: function(){
        var id = 'employees~' + Self.merchant.get('merchantname') + '~' + Self.name ;
        console.log("employee id: ", id);
        Self.model = Self.collection.get(id);
        console.log('render employee view', Self.model);
        var data = {};

        if(typeof Self.model != 'undefined'){
          data = Self.model.toJSON();
          data.name = Self.name;
        }

        console.log('employee view data:', data);
        _.extend(data, ViewHelpers);
        Self.$el.html(Self.template(data));

        this.$('[data-sort=basic]').DataTable({
          "order": [[ 0, "desc" ], [5, "desc"]]
        });

        $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
          },
          "Please check your input."
        );

        $('#currencyForm').validate({
            onkeyup: false,
            rules: {
                name: {
                    required: true,
                    minlength: 1,
                    maxlength: 65,
                    regex: '^[A-Za-z0-9_-]+$'
                },
                code: {
                    required: true,
                    minlength: 1,
                    maxlength: 65,
                    number: true
                }
            },
            messages: {
                currency: {
                    required: "Employee Name is required.",
                    minlength: "At least 1 characters is required.",
                    maxlength: "Less than 65 characters is required.",
                    reges: "Alpha, numberic, underscores, periods and hypens are only allowed."
                },
                code: {
                    required: "Pin code is required.",
                    minlength: "At least 1 characters is required.",
                    maxlength: "Less than 65 characters is required.",
                    number: "Pin code must be a number."
                }
            },
            submitHandler: function(form) {
                console.log("submit form");
                form.submit();
            },
            errorPlacement: function(error, element) {
                var placement = $(element.parent()).data('error');
                if (placement) {
                    $(placement).append(error)
                } else {
                    error.insertAfter(element.parent());
                }
            }
        });

        this.$('button[name=showedit]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('showedit button pressed!');
          Self.$('#employeeForm').show();
          Self.$('#statsButton').hide();
          Self.$('#stats').hide();
        });

        this.$('button[name=cancel]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('cancel button pressed!');
          Self.$('#employeeForm').hide();
          Self.$('#statsButton').show();
          Self.$('#stats').show();
        });

        this.$('button[name=upsert]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('upsert button pressed!');

          var isValid = $('#employeeForm').valid();
          console.log("form valid:" + isValid);
          if( isValid ) {

            var existingEmployee = Self.collection.getByPin(Self.$('input[name=code]').val());
            if(typeof existingEmployee != 'undefined' && existingEmployee.get('name') != Self.$('input[name=name]').val()){
              $('#error-notification').html('Pin Code must be unique.').show();
              setTimeout(function(){
                $('#error-notification').hide();
              },10000);
            } else {

              if(typeof Self.model == 'undefined'){
                Self.model = new Employee();
              }
              Self.model.set('merchant', Self.merchant);
              Self.model.set('stewards', [ 'stewards~' + Self.merchant.get('merchantname') ]);
              Self.model.set('name', Self.$('input[name=name]').val());
              Self.model.set('code', Self.$('input[name=code]').val());

              //console.log('namespace save', Self.model.toJSON());
              Self.model.credentials = {};

              Self.model.credentials.username = Self.merchant.get('merchantname');
              Self.model.credentials.password = Self.merchant.get('password');

              Self.model.save({},{
                success: function(model, response){
                  console.log('successfully saved model', model, response);
                  //var currencyName = Self.model.get('currency_namespace') == '' ? Self.model.get('currency') : Self.model.get('currency') + '.' + Self.model.get('currency_namespace');
                  //Self.model.set('id', 'currencies~' + currencyName);
                  Self.collection.fetch();
                  router.navigate('merchants/' + Self.merchant.get('merchantname') + '/administrative', true);
                  //Backbone.history.navigate('#namespaces/namespaces~' + Self.steward.get('stewardname') + '~' + Self.model.get('firstname') + '~' + Self.model.get('lastname'),{trigger:true, replace:true});
                  $('#success-notification').html('Successfully saved currency.').show();
                  setTimeout(function(){
                    $('#success-notification').hide();
                  },10000);
                },
                error: function(model, error){
                  console.log('failed to saved model', model, error);
                  Self.collection.fetch();
                  if(typeof error.responseJSON != 'undefined' && typeof error.responseJSON.message != 'undefined' ){
                    console.info(error.responseJSON.message);
                    $('#error-notification').html(error.responseJSON.message).show();
                    setTimeout(function(){
                      $('#error-notification').hide();
                    },10000);
                  } else {
                    $('#error-notification').html('Error').show();
                    setTimeout(function(){
                      $('#error-notification').hide();
                    },10000);
                  }
                }
              });

            }

          }
        })
    }
});
