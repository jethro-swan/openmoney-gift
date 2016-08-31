'use strict';

var $ = require('jquery');
//$.mobile = require('jquery-mobile');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates');
var Templates = Templates(Handlebars);
var Common = require('../common');
var Merchant = require('../models/merchant');
var Merchants = require('../collections/merchants');
var PouchDB = require('pouchdb');
var Self;
//var Buffer = require('buffer/').Buffer;
//require('buffer/');

module.exports = Backbone.View.extend({

    //el: "#body",

    template: Templates['login'],

    name: 'login',

    initialize: function (options) {
        console.log("initialize login view", options);
        Self = this;
        Self.merchant = options.merchant;
        //this.$title = this.$('div.header-title');
        //this.$page = this.$('#page');
        //this.$footer = this.$('footer.footer');
        //this.$back = this.$('.app-back');

        // var merchants = new Merchants();
        // merchants.fetch({success: function(res){
        //   console.log('merchants', res);
        //   console.log('merchant', res.first());
        // }});

    },

    render: function(){
        console.log("render login view");
        //this.$back.attr("src","public/assets/images/app-coffee-white.png");
        //this.$title.html("");
        this.$el.html(this.template({}));
        //this.$footer.show();
        //this.$page.trigger('create');
        this.$('#register-button').off('click').on('click', this.register);
        this.$('#login-button').off('click').on('click', this.login);
        this.$('.fb-button').off('click').on('click', this.fblogin);
        this.$('.forgot-link').off('click').on('click', this.forgot);
        //this.$back.show(); // this prevents the back button from flashing

        if(typeof this.model != 'undefined'){
          console.info('model:' + JSON.stringify(this.model));
          if(typeof this.model.get('merchantname') != 'undefined'){
            this.$('#merchantname').val(this.model.get('merchantname'));
          }
        }


        $('#login').validate({
            onkeyup: false,
            rules: {
                username: {
                    required: true,
                    minlength: 8,
                    maxlength: 20
                },
                password: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                username: {
                    required: "Username is required",
                    minlength: "At least 8 characters is required.",
                    maxlength: "No more that 20 characters for a username."
                },
                password: {
                    required: "Password is required",
                    minlength: "At least 5 characters is required."
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
    },

    register: function( event ) {
        console.log('register event called');
        Backbone.history.navigate('#register',{trigger:true, replace:false});
    },

    login: function( event, done ) {
        event.preventDefault();
        console.log('login event called');

        if ( $('#login').valid() ) {

            var login = {};
            login.username = $('#merchantname').val();
            login.password = $('#password').val();

            $.ajax({
              url: '/V1/merchants/' + login.username,
              headers: {
                'Authorization': 'Basic ' + new Buffer(login.username + ':' + login.password).toString("base64")
              }
            }).done(function(result){
              console.log('success')
              console.log(JSON.stringify(result));
              delete(result._rev);
              //Self.merchant = new Merchant(result);
              Self.merchant.set(result);
              Self.merchant.set('password', login.password);

              // Self.merchant.set('_id', 'merchants~' + login.username);
              // Self.merchant.set('merchantname', login.username);
              // Self.merchant.set('password', login.password);

              // result.password = login.password;
              // Self.merchant.save(result, {
              //   success: function(model, res){
              //     console.log('saved merchant model!', model, res)
              //   },
              //   error: function(model, res){
              //     console.log('error saving merchant model', model, res)
              //   }
              // });
              //Common.DB.credentials = login;
              var db = new PouchDB('giftcard');
              db.get('config~credentials', function(err, doc){
                if(err && err.status == 404){
                  db.put({
                    _id: 'config~credentials',
                    merchant: Self.merchant.toJSON(),
                    username: login.username,
                    password: login.password
                  });
                } else {
                  if(err){
                    console.log('error inserting config credentials:',err);
                  } else {
                    doc.username = login.username;
                    doc.password = login.password;
                    doc.merchant = Self.merchant.toJSON();
                    db.put(doc);
                  }
                }
              })

              if(_.isFunction(done)){
                done();
              }
              router.navigate('#merchants/' + login.username + '/loginSuccess',{trigger:true, replace:true});
              $('#success-notification').html('Successfully Logged In.').show();
              setTimeout(function(){
                $('#success-notification').hide();
              },10000);
            }).fail(function(error){
              console.log('fail')
              console.log(JSON.stringify(error));
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
              if(_.isFunction(done)){
                done();
              }
            });
            //submit credentials to server for verification
            //do a get post with the merchant information.

        }
    },

    fblogin: function( event ) {
        console.log('fb login event called');
    },

    forgot: function( event ) {
        console.log('forgot password event called');
        Backbone.history.navigate('#forgot',{trigger:true, replace:false});
    }

});
