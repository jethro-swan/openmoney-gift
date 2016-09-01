'use strict';

var jQuery = require('jquery');
var $ = jQuery;
var _ = require('underscore');
require('datatables');
//require('jquery.browser');
require('toolkit');
var Backbone = require('backbone');
require('backbone.basicauth');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var ViewHelpers = require('../helpers/handlebarHelpers');
var ViewHelpers = ViewHelpers(Handlebars)
var Common = require('../common');
var Self;
var Merchant = require('../models/merchant');
var Currency = require('../models/currency');

module.exports = Marionette.ItemView.extend({

    template: Templates['merchant'],

    steward: {},

    initialize: function (options) {
        console.log("initialize merchant view", options);
        console.log(options);
        Self = this;
        Self.merchant = options.merchant;
        Self.merchantname = options.merchantname;
        Self.accounts = options.accounts;
        Self.currencies = options.currencies;
        Self.journals = options.journals;
        Self.namespaces = options.namespaces;
        Self.employees = options.employees;
        //Self.listenTo(Self.accounts, 'sync add remove reset', Self.render);
        Self.listenTo(Self.currencies, 'sync add remove reset', Self.render);
        Self.listenTo(Self.employees, 'sync add remove reset', Self.render);
        //Self.listenTo(Self.journals, 'sync add remove reset', Self.render);
        //Self.listenTo(Self.namespaces, 'sync add remove reset', Self.render);
    },

    ui: {
      newAccount: 'button[name=newAccount]'
    },

    events: {
      'click button[name=newCurrency]': 'createCurrency',
      'click button[name=newEmployee]': 'createEmployee'
    },

    // collectionEvents: {
    //   'sync add remove reset': 'render'
    // },

    createCurrency: function(event){
      console.log('create currency event fired', event);
      event.preventDefault();
      router.navigate('merchants/' + Self.merchant.get('merchantname') + '/administrative/currencies/new');
    },

    createEmployee: function(event){
      console.log('create employee event fired', event);
      event.preventDefault();
      router.navigate('merchants/' + Self.merchant.get('merchantname') + '/administrative/employee/new');
    },

    render: function(){
        console.log('merchantname', Self.merchantname);
        //Self.model = Self.collection.get('merchants~' + Self.stewardname);
        console.log("render merchant view", Self.merchant);
        var data = {};
        if(typeof Self.merchant != 'undefined'){
          data = Self.merchant.toJSON();
        }
        //data.currencies = Self.collection.toJSON();
        console.log(Self.currencies);
        data.currencies = Self.currencies.getBySteward(Self.merchant.get('merchantname'));
        for(var i = 0; i < data.currencies.length; i ++){
          data.currencies[i] = data.currencies[i].toJSON();
          _.extend(data.currencies[i], ViewHelpers);
        }
        //console.log('employees', Self.employees);
        data.employees = Self.employees.toJSON();
        for(var i = 0; i < data.employees.length; i++){
          console.log('employee', data.employees[i]);
          //data.employees[i] = data.employees[i].toJSON();
        }

        //data.currencies = [{currency: 'gift', enabled:true, default: true}, {currency: 'promo', enabled:true}, {currency: 'points', enabled:true}, {currency: 'tab', enabled:true}, {currency: 'stamp', enabled:true}];
        // data.accounts = Self.accounts.getBySteward(Self.stewardname);
        // for(var i = 0; i < data.accounts.length; i++){
        //   data.accounts[i] = data.accounts[i].toJSON();
        //   data.accounts[i].accountName = data.accounts[i].account + (data.accounts[i].account_namespace == '' ? '' : '.' + data.accounts[i].account_namespace);
        //   data.accounts[i].currencyName = data.accounts[i].currency + (data.accounts[i].currency_namespace == '' ? '' : '.' + data.accounts[i].currency_namespace);
        //   _.extend(data.accounts[i], ViewHelpers);
        // }
        // data.currencies = Self.currencies.getBySteward(Self.stewardname);
        // console.log('currencies getBySteward', data.currencies);
        // for(var i = 0; i < data.currencies.length; i++){
        //   data.currencies[i] = data.currencies[i].toJSON();
        //   data.currencies[i].currencyName = data.currencies[i].currency + (data.currencies[i].currency_namespace == '' ? '' : '.' + data.currencies[i].currency_namespace);
        //   for(var j = 0; j < data.currencies[i].stewards.length; j++){
        //     console.log('lookup currency steward:', data.currencies[i].stewards[j]);
        //     data.currencies[i].stewards[j] = Self.collection.get(data.currencies[i].stewards[j]);
        //     if(typeof data.currencies[i].stewards[j] != 'undefined'){
        //       data.currencies[i].stewards[j] = data.currencies[i].stewards[j].toJSON();
        //     }
        //     console.log('result steward:', data.currencies[i].stewards[j]);
        //   }
        //   _.extend(data.currencies[i], ViewHelpers);
        // }
        // data.namespaces = Self.namespaces.getBySteward(Self.stewardname);
        // for(var i = 0; i < data.namespaces.length; i++){
        //   data.namespaces[i] = data.namespaces[i].toJSON();
        //   for(var j = 0; j < data.namespaces[i].stewards.length; j++){
        //     console.log('lookup namespaces steward:', data.namespaces[i].stewards[j]);
        //     data.namespaces[i].stewards[j] = Self.collection.get(data.namespaces[i].stewards[j]);
        //     if(typeof data.namespaces[i].stewards[j] != 'undefined'){
        //       data.namespaces[i].stewards[j] = data.namespaces[i].stewards[j].toJSON();
        //     }
        //     console.log('result steward:', data.namespaces[i].stewards[j]);
        //   }
        //   _.extend(data.namespaces[i], ViewHelpers);
        // }
        console.log('merchant Data:', data);

        this.$el.html(this.template(data));

        Self.$('#logout-button').off('click').on('click', function(event){
          event.preventDefault();
          console.log('logout event triggered');
          router.navigate('logout');
        });

        this.$('[data-sort=table]').DataTable({
          "paging": false,
          "info": false,
          "sDom": '<"top"i>rt<"bottom"lp><"clear">'
        });

        //Enable Disable Toggle
        Self.$('.active-radio').off('change').on('change', function(event){
          event.preventDefault();
          console.log('active change: ', event);
          console.log('event.currentTarget: ', event.currentTarget);
          console.log('id', event.currentTarget.id);
          var currency = event.currentTarget.id.split('~')[0];
          var active = event.currentTarget.id.split('~')[1];
          console.log('{active, currency}:', active, currency);
          if(typeof Self.merchant.get('access_token') != 'undefined'){
            console.log('Self.merchant', Self.merchant);
            var id = 'currencies~' + currency + '.' + Self.merchant.get('merchantname') + '.cc';
            var currencyModel = Self.currencies.get(id);
            if(typeof currencyModel != 'undefined'){
              //var currencyModel = new Currency({id: id});
              // currencyModel.set('_id', id);
              // currencyModel.set('currency', currency);
              // currencyModel.set('currency_namespace', Self.merchant.get('merchantname') + '.cc');
              // currencyModel.set('stewards', [ 'stewards~' + Self.merchant.get('merchantname') ]);
              currencyModel.set('merchant', Self.merchant);
              currencyModel.credentials = {};
              currencyModel.credentials.token = Self.merchant.get('access_token');
              //currencyModel.fetch();
              // var currencyModel = new Currency();
              currencyModel.set('enabled', active == 'enable');
              console.log('Currency', currencyModel);
              currencyModel.save({
                success: function(model, response){
                  console.log('successfully saved curreny', model, response);
                },
                error: function(model, response){
                  console.log('failed to save curreny', model, response);
                }
              });
            }
          }
        })


        //Default Toggle
        Self.$('.default-radio').off('change').on('change', function(event){
          event.preventDefault();
          console.log('default change: ', event);
          console.log('event.currentTarget: ', event.currentTarget);
          console.log('id', event.currentTarget.id);
          var currency = event.currentTarget.id.split('~')[0];
          console.log('currency:', currency);
          if(typeof Self.merchant.get('access_token') != 'undefined'){
            console.log('Self.merchant', Self.merchant);
            var defaultCurrency = Self.currencies.getDefault();
            console.log('default currency', defaultCurrency);
            if(typeof defaultCurrency != 'undefined'){
              defaultCurrency.set('default', false);
              defaultCurrency.credentials = {};
              defaultCurrency.credentials.token = Self.merchant.get('access_token');
              defaultCurrency.set('merchant', Self.merchant);
              defaultCurrency.save({
                success: function(model, response){
                  console.log('successfully set default curreny to false', model, response);
                },
                error: function(model, response){
                  console.log('failed to set default curreny to false', model, response);
                }
              });
            }

            var id = 'currencies~' + currency + '.' + Self.merchant.get('merchantname') + '.cc';
            console.log('get id:', id);
            var currencyModel = Self.currencies.get(id);
            console.log('currencyModel', currencyModel);
            if(typeof currencyModel != 'undefined'){
              //var currencyModel = Self.collection.get(id);
              // var currencyModel = new Currency({id: id});
              // // currencyModel.set('_id', id);
              // currencyModel.set('currency', currency);
              // currencyModel.set('currency_namespace', Self.merchant.get('merchantname') + '.cc');
              // currencyModel.set('stewards', [ 'stewards~' + Self.merchant.get('merchantname') ]);
              currencyModel.set('merchant', Self.merchant);
              currencyModel.credentials = {};
              currencyModel.credentials.token = Self.merchant.get('access_token');
              //currencyModel.fetch();
              // var currencyModel = new Currency();
              currencyModel.set('default', true);
              console.log('Currency', currencyModel);
              currencyModel.save({
                success: function(model, response){
                  console.log('successfully saved default curreny', model, response);
                },
                error: function(model, response){
                  console.log('failed to save default curreny', model, response);
                }
              });
            }
          }
        })

        //Enable Disable Toggle
        Self.$('.employeeActive-radio').off('change').on('change', function(event){
          event.preventDefault();
          console.log('active change: ', event);
          console.log('event.currentTarget: ', event.currentTarget);
          console.log('id', event.currentTarget.id);
          var employeeName = event.currentTarget.id.split('~')[0];
          var active = event.currentTarget.id.split('~')[1];
          console.log('{active, employeeName}:', active, employeeName);
          console.log('Self.merchant', Self.merchant);
          var id = 'employees~' + Self.merchant.get('merchantname') + '~' + employeeName;
          var employeeModel = Self.employees.get(id);
          if(typeof employeeModel != 'undefined'){
            employeeModel.set('merchant', Self.merchant);
            employeeModel.credentials = {};
            employeeModel.credentials.username = Self.merchant.get('merchantname');
            employeeModel.credentials.password = Self.merchant.get('password');
            employeeModel.set('enabled', active == 'employeeEnable');
            console.log('Employee', employeeModel);
            employeeModel.save({
              success: function(model, response){
                console.log('successfully saved employee', model, response);
              },
              error: function(model, response){
                console.log('failed to save employee', model, response);
              }
            });
          }
        });

        //Default Toggle
        Self.$('.employeeDefault-radio').off('change').on('change', function(event){
          event.preventDefault();
          console.log('default change: ', event);
          console.log('event.currentTarget: ', event.currentTarget);
          console.log('id', event.currentTarget.id);
          var employee = event.currentTarget.id.split('~')[0];
          console.log('employee:', employee);
          console.log('Self.merchant', Self.merchant);
          var defaultEmployee = Self.employees.getDefault();
          console.log('default employee', defaultEmployee);
          if(typeof defaultEmployee != 'undefined'){
            defaultEmployee.set('default', false);
            defaultEmployee.credentials = {};
            defaultEmployee.credentials.username = Self.merchant.get('merchantname');
            defaultEmployee.credentials.password = Self.merchant.get('password');
            defaultEmployee.set('merchant', Self.merchant);
            defaultEmployee.save({
              success: function(model, response){
                console.log('successfully set default employee to false', model, response);
              },
              error: function(model, response){
                console.log('failed to set default employee to false', model, response);
              }
            });
          }

          var id = 'employees~' + Self.merchant.get('merchantname') + '~' + employee;
          console.log('get id:', id);
          var employeeModel = Self.employees.get(id);
          console.log('employeeModel', employeeModel);
          if(typeof employeeModel != 'undefined'){
            employeeModel.set('merchant', Self.merchant);
            employeeModel.credentials = {};
            employeeModel.credentials.username = Self.merchant.get('merchantname');
            employeeModel.credentials.password = Self.merchant.get('password');
            employeeModel.set('default', true);
            console.log('Employee', employeeModel);
            employeeModel.save({
              success: function(model, response){
                console.log('successfully saved default employee', model, response);
              },
              error: function(model, response){
                console.log('failed to save default employee', model, response);
              }
            });
          }
        })


        $('#merchantForm').validate({
            onkeyup: false,
            rules: {
                merchantname: {
                    required: true,
                    minlength: 1,
                    maxlength: 35
                },
            },
            messages: {
                firstname: {
                    required: "Merchant name is required.",
                    minlength: "At least 1 characters is required.",
                    maxlength: "Less than 35 characters is required."
                },
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
          Self.$('#merchantForm').show();
          Self.$('#statsButton').hide();
          Self.$('#stats').hide();
        });

        this.$('button[name=cancel]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('cancel button pressed!');
          Self.$('#merchantForm').hide();
          Self.$('#statsButton').show();
          Self.$('#stats').show();
        });

        this.$('button[name=upsert]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('upsert button pressed!');

          var isValid = $('#merchantForm').valid();
          console.log("form valid:" + isValid);
          if( isValid ) {

            if(typeof Self.model == 'undefined'){
              Self.model = new Merchant();
            }
            Self.model.set('steward', Self.steward);
            Self.model.set('merchantname', Self.$('input[name=merchantname]').val());


            //console.log('namespace save', Self.model.toJSON());
            Self.model.credentials = {};
            Self.model.credentials.username = Self.steward.get('stewardname');
            Self.model.credentials.password = Self.steward.get('password');
            Self.model.save({},{
              success: function(model, response){
                console.log('successfully saved model', model, response);
                Self.model.set('_id', 'merchants~' + Self.steward.get('stewardname'));
                Self.collection.set(model, {remove: false});
                router.navigate('stewards/' + Self.steward.get('stewardname') + '/administrative/' + Self.model.get('_id'),{ params: Self.model });
                Self.render();
                //Backbone.history.navigate('#namespaces/namespaces~' + Self.steward.get('stewardname') + '~' + Self.model.get('firstname') + '~' + Self.model.get('lastname'),{trigger:true, replace:true});
                $('#success-notification').html('Successfully saved merchant.').show();
                setTimeout(function(){
                  $('#success-notification').hide();
                },10000);
              },
              error: function(model, error){
                console.log('failed to saved model', model, error);
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
            })
          }
        });

        // this.$('[data-sort=table].accounts > tbody > tr').off('click').on('click', function(event){
        //   event.preventDefault();
        //   var id = $(this).attr('id');
        //   console.log('clicked on account ID:', id);
        //   router.navigate('stewards/' + Self.steward.get('stewardname') + '/namespaces/' + Self.namespace + '/accounts/' + id.split('~')[1] + '/' + id.split('~')[2]);
        // })
        //
        // this.$('[data-sort=table].currencies > tbody > tr').off('click').on('click', function(event){
        //   event.preventDefault();
        //   var id = $(this).attr('id');
        //   console.log('clicked on currency ID:', id);
        //   router.navigate('stewards/' + Self.steward.get('stewardname') + '/namespaces/' + Self.namespace + '/currencies/' + id.split('~')[1] );
        // })
    }
});
