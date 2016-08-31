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
var Self;
var Patron = require('../models/patron');

module.exports = Marionette.ItemView.extend({

    template: Templates['patron'],

    merchant: {},

    initialize: function (options) {
        console.log("initialize patron view", options);
        console.log(options);
        Self = this;
        Self.merchant = options.merchant;
        Self.id = options.id;
        Self.page = options.page;
        Self.cards = options.cards;
        Self.currencies = options.currencies;
        Self.journals = options.journals;

        Self.listenTo(Self.cards, 'sync add remove reset', Self.render);
        Self.listenTo(Self.currencies, 'sync add remove reset', Self.render);
        Self.listenTo(Self.journals, 'sync add remove reset', Self.render);
    },

    ui: {
      newCard: 'button[name=newCard]'
    },

    events: {
      'click button[name=newCard]': 'createCard'
    },

    collectionEvents: {
      'sync': 'render'
    },

    createCard: function(event){
      console.log('create card event fired', event);
      event.preventDefault();
      router.navigate('merchants/' + Self.merchant.get('merchantname') + '/patrons/' + Self.model.get('_id') + '/cards/new');
    },

    render: function(){
        console.log("render patron view");
        Self.model = Self.collection.get(Self.id);

        var data = {};
        if(typeof Self.model != 'undefined'){
          data = this.model.toJSON();
        }
        data.currencies = Self.currencies.getByNamespace(Self.merchant.get('merchantname') + '.cc');
        for(var i = 0; i < data.currencies.length; i++){
          data.currencies[i] = data.currencies[i].toJSON();
          _.extend(data.currencies[i], ViewHelpers);
        }
        data.cards = Self.cards.where({cardholderID: Self.id});
        for(var i = 0; i < data.cards.length; i++){
          data.cards[i] = data.cards[i].toJSON();
          _.extend(data.cards[i], ViewHelpers);
          data.cards[i].balance = {};

          data.cards[i].journals = Self.journals.where({key: data.cards[i].key})
          for(var j = 0; j < data.cards[i].journals.length; j++){
            data.cards[i].journals[j] = data.cards[i].journals[j].toJSON();
            //create a key value pair for currency balance for each card.
            if(typeof data.cards[i].balance[data.cards[i].journals[j].currency] == 'undefined'){
              data.cards[i].balance[data.cards[i].journals[j].currency] = 0;
            }
            if(data.cards[i].journals[j].load){
              data.cards[i].balance[data.cards[i].journals[j].currency] += data.cards[i].journals[j].amount;
            } else {
              data.cards[i].balance[data.cards[i].journals[j].currency] -= data.cards[i].journals[j].amount;
            }
            for(var k = 0;k < data.currencies.length; k++){
              if(data.currencies[k].currency == data.cards[i].journals[j].currency){
                if(typeof data.currencies[k].balance == 'undefined'){
                  data.currencies[k].balance = 0;
                }
                if(data.cards[i].journals[j].load){
                  data.currencies[k].balance += data.cards[i].journals[j].amount;
                } else {
                  data.currencies[k].balance -= data.cards[i].journals[j].amount;
                }
              }
            }
            _.extend(data.cards[i].journals[j], ViewHelpers);
          }

        }


        console.log('Patron Data:', data);
        this.$el.html(this.template(data));


        this.$('[data-sort=table]').DataTable({
          "paging": false,
          "info": false,
          "sDom": '<"top"i>rt<"bottom"lp><"clear">'
        });

        $('#patronForm').validate({
            onkeyup: false,
            rules: {
                firstname: {
                    required: true,
                    minlength: 1,
                    maxlength: 35
                },
                lastname: {
                    required: true,
                    minlength: 1,
                    maxlength: 35
                },
                email: {
                    required: false,
                    email: true,
                    minlength: 3,
                    maxlength: 128
                },
                phone: {
                    required: false,
                    minlength: 4
                }
            },
            messages: {
                firstname: {
                    required: "First name is required.",
                    minlength: "At least 1 characters is required.",
                    maxlength: "Less than 35 characters is required."
                },
                lastname: {
                    required: "Last name is required.",
                    minlength: "At least 1 characters is required.",
                    maxlength: "Less than 35 characters is required."
                },
                email: {
                    minlength: "At least 3 characters is required.",
                    maxlength: "Less than 127 characters is required."
                },
                phone: {
                    minLength: "More than 4 characters is required."
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
          Self.$('#patronForm').show();
          Self.$('#statsButton').hide();
          Self.$('#stats').hide();
        });

        this.$('button[name=cancel]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('cancel button pressed!');
          Self.$('#patronForm').hide();
          Self.$('#statsButton').show();
          Self.$('#stats').show();
        });

        this.$('button[name=upsert]').off('click').on('click', function(e){
          e.preventDefault();
          console.log('upsert button pressed!');

          var isValid = $('#patronForm').valid();
          console.log("form valid:" + isValid);
          if( isValid ) {

            if(typeof Self.model == 'undefined'){
              Self.model = new Patron();
            }
            Self.model.set('merchant', Self.merchant);
            Self.model.set('firstname', Self.$('input[name=firstname]').val());
            Self.model.set('lastname', Self.$('input[name=lastname]').val());
            var email =  Self.$('input[name=email]').val();
            if(email != ''){
              Self.model.set('email', email);
            } else {
              Self.model.unset('email');
            }
            var phone = Self.$('input[name=phone]').val();
            if(phone != ''){
              Self.model.set('phone', phone);
            } else {
              Self.model.unset('phone');
            }

            //console.log('patron save', Self.model.toJSON());
            Self.model.credentials = {};
            Self.model.credentials.username = Self.merchant.get('merchantname');
            Self.model.credentials.password = Self.merchant.get('password');
            Self.model.save({},{
              success: function(model, response){
                console.log('successfully saved model', model, response);
                //Self.model.set('_id', );
                //Self.collection.set(model, {remove: false});
                //Self.model.fetch();
                router.navigate('merchants/' + Self.merchant.get('merchantname') + '/patrons/' + 'cardholders~' + Self.merchant.get('merchantname') + '~' + Self.model.get('firstname') + '~' + Self.model.get('lastname'));
                

                //Backbone.history.navigate('#patrons/patrons~' + Self.merchant.get('merchantname') + '~' + Self.model.get('firstname') + '~' + Self.model.get('lastname'),{trigger:true, replace:true});
                $('#success-notification').html('Successfully saved patron.').show();
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

        this.$('[data-sort=table] > tbody > tr').off('click').on('click', function(event){
          event.preventDefault();
          var id = $(this).attr('id');
          console.log(id);
          router.navigate('merchants/' + Self.merchant.get('merchantname') + '/patrons/' + Self.id + '/cards/' + id.split('~')[2]);
        })
    }
});
