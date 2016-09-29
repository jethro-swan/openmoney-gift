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


var btoa = window.btoa;

/**
 * Returns a base64 encoded "user:pass" string
 * @param  {string} username The http auth username
 * @param  {string} password The http auth password
 * @return {string}          The base64 encoded credentials pair
 */
var encode = function(credentials) {
  // Use Base64 encoding to create the authentication details
  // If btoa is not available on your target browser there is a polyfill:
  // https://github.com/davidchambers/Base64.js
  // Using unescape and encodeURIComponent to allow for Unicode strings
  // https://developer.mozilla.org/en-US/docs/Web/API/window.btoa#Unicode_Strings
  return btoa(unescape(encodeURIComponent(
    [credentials.username, credentials.password].join(':'))));
};

module.exports = Marionette.LayoutView.extend({

  template: Templates['support'],

  initialize: function (options) {
      console.log("initialize support view", options);
      Self = this;
      Self.merchant = options.merchant;
      Self.merchantname = options.merchantname;
      //Self.currencies = options.currencies;
      //Self.listenTo(Self.collection, 'sync reset', Self.render);
      //Self.listenTo(Self.currencies, 'sync reset', Self.render);
  },

  render: function(){
      console.log("render support view");
      var data = {};
      //data.merchant = Self.merchant.toJSON();
      data.merchantname = Self.merchantname;
      // data.currencies = Self.currencies.getByNamespace(Self.merchant.get('merchantname') + '.cc');
      // for(var i = 0; i< data.currencies.length; i++){
      //   data.currencies[i] = data.currencies[i].toJSON();
      //   data.currencies[i].balance = 0;
      //   data.currencies[i].volume = 0;
      //   data.currencies[i].journals = Self.collection.where({currency: data.currencies[i].currency});
      //   for(var j = 0; j < data.currencies[i].journals.length; j++){
      //     data.currencies[i].journals[j] = data.currencies[i].journals[j].toJSON();
      //     if(data.currencies[i].journals[j].load){
      //       data.currencies[i].balance += data.currencies[i].journals[j].amount;
      //     } else {
      //       data.currencies[i].balance -= data.currencies[i].journals[j].amount;
      //     }
      //     data.currencies[i].volume += data.currencies[i].journals[j].amount;
      //   }
      //   _.extend(data.currencies[i], ViewHelpers);
      // }
      data.email = Self.merchant.get('email');
      console.log('support data:', data);
      _.extend(data, ViewHelpers);
      Self.$el.html(Self.template(data));

      Self.$('button[name=send]').off('click').on('click', function(event){
        event.preventDefault();
        var request = Self.$('#support').val();
        console.log('send button pressed', request);

        //make an api request to giftcard api to send email.

        var request = {
          request: Self.$('#support').val(),
          email: Self.$('input#email').val()
        };
        var options = {};
        options.type = 'POST';
        options.data = JSON.stringify(request);
        options.dataType = 'json';
        options.contentType = "application/json";
        options.url = '/V1/merchants/' + Self.merchant.get('merchantname') + '/support';
        options.beforeSend = function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + encode({ username: Self.merchant.get('merchantname'), password: Self.merchant.get('password')}));
        };
        options.success = function(model, response){
          console.info('model save success!', model, response);
          Self.$('#support').val('');
          $('#success-notification').html('Successfully Sent Support Request.').show();
          setTimeout(function(){
            $('#success-notification').hide();
          },10000);
        };
        options.error = function(error){
          console.info('error:');
          //console.info(JSON.stringify(model));
          console.info(JSON.stringify(error));
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
        };
        $.ajax(options);

      })

      // Self.$('.currencies').off('click').on('click', function(event){
      //   event.preventDefault();
      //   var id = $(this).attr('id');
      //   console.log(id);
      //   router.navigate('merchants/' + Self.merchant.get('merchantname') + '/reports/' + id, true);
      // });


    }

});
