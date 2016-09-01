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
var Currency = require('../models/currency');
var Self;

module.exports = Marionette.ItemView.extend({

    template: Templates['currency'],

    steward: {},

    initialize: function (options) {
        console.log("initialize currency view", options);
        Self = this;
        Self.collection = options.collection;
        Self.merchant = options.merchant;
        //Self.namespaces = options.namespaces;
        //Self.namespace = options.namespace;
        Self.currencyName = options.currencyName;
        //Self.accounts = options.accounts;
        //Self.journals = options.journals;
        //Self.stewards = options.stewards
        //console.log('card steward', Self.steward);
        //Self.listenTo(Self.journals, 'sync reset', Self.render);
        //Self.listenTo(Self.accounts, 'sync reset', Self.render);
        //Self.listenTo(Self.namespaces, 'sync reset', Self.render);
    },

    ui: {
      newCard: 'button[name=newTransaction]'
    },

    events: {
      'click button[name=newTransaction]': 'processTransaction'
    },

    collectionEvents: {
      'sync reset': 'render'
    },

    processTransaction: function(event){
      console.log('processTransaction event fired:', event);
      event.preventDefault();
      router.navigate('stewards/' + Self.steward.get('stewardname') + '/journals/all/' + Self.currencyName );
    },

    setColor: function(color){
      console.log('color event triggered', color);
      Self.$('button[name=color]').removeClass('highlight');
      Self.$('button[value=' + color + ']').addClass('highlight');
      Self.$('input[name=currency_color]').val(color);
    },

    render: function(){
        var id = 'currencies~' + Self.currencyName + '.' + Self.merchant.get('merchantname') + '.cc';
        console.log("currency id: ", id);
        Self.model = Self.collection.get(id);
        console.log('render currency view', Self.model);
        var data = {};
        data.currency_color = 'default';
        data.currencyName = Self.currencyName;
        if(typeof Self.model != 'undefined'){
          data = Self.model.toJSON();
          // data.accounts = Self.accounts.getByCurrency(Self.model.get('currency'), Self.model.get('currency_namespace'));
          // for(var i = 0; i < data.accounts.length; i++){
          //   data.accounts[i] = data.accounts[i].toJSON();
          //   data.accounts[i].accountName = data.accounts[i].account + (data.accounts[i].account_namespace == '' ? '' : '.' + data.accounts[i].account_namespace);
          //   data.accounts[i].currencyName = data.accounts[i].currency + (data.accounts[i].currency_namespace == '' ? '' : '.' + data.accounts[i].currency_namespace);
          //   _.extend(data.accounts[i], ViewHelpers);
          // }
        }




        // data.namespaces = Self.namespaces.toJSON();
        // for(var i = 0; i < data.namespaces.length; i++){
        //   _.extend(data.namespaces[i], ViewHelpers);
        // }
        data.balance = 0;
        data.volume = 0;

        // var doubleEntries = [];
        //
        // data.journals = Self.journals.getByCurrency(data.currency, data.currency_namespace);
        // for(var i = 0; i < data.journals.length; i++){
        //   data.journals[i] = data.journals[i].toJSON();
        //   console.log('journal entry', data.journals[i])
        //   var from_account_id = 'accounts~' + data.journals[i].from_account + '.' + data.journals[i].from_account_namespace + '~' + Self.currencyName;
        //   var fromAccount = Self.accounts.get(from_account_id);
        //
        //   if(typeof fromAccount != 'undefined'){
        //     console.log('from account is mine', fromAccount);
        //     //from account is mine;
        //     data.journals[i].fromstewardname = Self.steward.get('stewardname');
        //     data.journals[i].currencyName = Self.currencyName;
        //     data.balance -= data.journals[i].amount;
        //     data.volume += data.journals[i].amount;
        //     data.journals[i].charge = 'CREDIT';
        //     data.journals[i].balance = _.clone(data.balance);
        //     data.journals[i].volume = _.clone(data.volume);
        //
        //     var toAccount = Self.accounts.get('accounts~' + data.journals[i].to_account + '.' + data.journals[i].to_account_namespace + '~' + Self.currencyName);
        //     if(typeof toAccount != 'undefined'){
        //       console.log('to account is mine', toAccount);
        //       data.journals[i].tostewardname = Self.steward.get('stewardname');
        //       //to account is mine
        //       data.balance += data.journals[i].amount;
        //       data.volume += data.journals[i].amount;
        //
        //       var doubleEntry = _.clone(data.journals[i]);
        //       //delete(doubleEntry.fromstewardname);
        //       doubleEntry.fromstewardname = Self.steward.get('stewardname');
        //       doubleEntry.tostewardname = Self.steward.get('stewardname');
        //       doubleEntry.currencyName = Self.currencyName;
        //       doubleEntry.balance = _.clone(data.balance);
        //       doubleEntry.volume = _.clone(data.volume);
        //       doubleEntry.charge = 'DEBIT';
        //
        //       doubleEntries.push(doubleEntry);
        //     }
        //   } else {
        //     console.log('from account not found', from_account_id)
        //     var toAccount = Self.accounts.get('accounts~' + data.journals[i].to_account + '.' + data.journals[i].to_account_namespace + '~' + Self.currencyName);
        //     if(typeof toAccount != 'undefined'){
        //       console.log('to account is mine', toAccount);
        //       //to account is mine
        //       data.journals[i].tostewardname = Self.steward.get('stewardname');
        //       data.journals[i].currencyName = Self.currencyName;
        //       data.balance += data.journals[i].amount;
        //       data.volume += data.journals[i].amount;
        //       data.journals[i].charge = 'DEBIT'
        //       data.journals[i].balance = _.clone(data.balance);
        //       data.journals[i].volume = _.clone(data.volume);
        //     }
        //   }
        // }
        //
        //
        //
        // data.journals = data.journals.concat(doubleEntries);
        //
        // for(var i = 0; i < data.journals.length; i++){
        //   _.extend(data.journals[i], ViewHelpers);
        // }

        console.log('currency view data:', data);
        _.extend(data, ViewHelpers);
        Self.$el.html(Self.template(data));

        Self.setColor(data.currency_color);

        this.$('[data-sort=basic]').DataTable({
          "order": [[ 0, "desc" ], [5, "desc"]]
        });

        this.$('[data-sort=table].accounts > tbody > tr').off('click').on('click', function(event){
          event.preventDefault();
          var id = $(this).attr('id');
          console.log('clicked on account ID:', id);
          router.navigate('stewards/' + Self.steward.get('stewardname') + '/accounts/' + id.split('~')[1] + '/' + id.split('~')[2]);
        })

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
                currency: {
                    required: true,
                    minlength: 1,
                    maxlength: 65,
                    regex: '^[A-Za-z0-9_-]+$'
                },
                currency_namespace: {
                    required: true,
                },
                contributionPerPatron: {
                    number: true
                }
            },
            messages: {
                currency: {
                    required: "Currency name is required.",
                    minlength: "At least 1 characters is required.",
                    maxlength: "Less than 65 characters is required.",
                    reges: "Alpha, numberic, underscores, periods and hypens are only allowed."
                },
                currency_namespace: {
                    required: "Currency namespace is required.",
                },
                contributionPerPatron: {
                     number: "Contribution must be a number",
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

        this.$('button[name=color]').off('click').on('click', function(e){
          e.preventDefault();
          var color = $(this).val();
          Self.setColor(color);
        });

        this.$('button[name=showedit]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('showedit button pressed!');
          Self.$('#currencyForm').show();
          Self.$('#statsButton').hide();
          Self.$('#stats').hide();
        });

        this.$('button[name=cancel]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('cancel button pressed!');
          Self.$('#currencyForm').hide();
          Self.$('#statsButton').show();
          Self.$('#stats').show();
        });

        this.$('button[name=upsert]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('upsert button pressed!');

          var isValid = $('#currencyForm').valid();
          console.log("form valid:" + isValid);
          if( isValid ) {

            if(typeof Self.model == 'undefined'){
              Self.model = new Currency();
            }
            Self.model.set('merchant', Self.merchant);
            Self.model.set('stewards', [ 'stewards~' + Self.merchant.get('merchantname') ]);
            Self.model.set('currency', Self.$('input[name=currency]').val());
            Self.model.set('currency_namespace', Self.merchant.get('merchantname') + '.cc');
            Self.model.set('currency_color', Self.$('input[name=currency_color]').val());
            Self.model.set('currency_name', Self.$('input[name=currency_name]').val());
            Self.model.set('contributionPerPatron', Self.$('input[name=contributionPerPatron]').val());

            //console.log('namespace save', Self.model.toJSON());
            Self.model.credentials = {};

            if(Self.currencyName == 'new'){
              Self.model.credentials.username = Self.merchant.get('merchantname');
              Self.model.credentials.password = Self.merchant.get('password');
            } else {
              Self.model.credentials.token = Self.merchant.get('access_token');
            }


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
        })
    }
});
