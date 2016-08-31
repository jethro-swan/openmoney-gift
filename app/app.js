
'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
require('backbone.basicauth');
var Router = require('./routers/router');
var Marionette = require('backbone.marionette');

//require('./test/app'); //for testing
var PouchDB = require('pouchdb');
var db = PouchDB('giftcard');
var Self;

global.app = new Marionette.Application({
  onBeforeStart: function(options){
    console.log('Marionette Application onBeforeStart', options);
  },
  initialize: function(options){
    console.log('Marionette Application Initialize', options);
    Self = this;

  },
  onStart: function(options){
    console.log('Marionette Application onStart', options);
    if(typeof options.merchant != 'undefined'){
      Self.merchant = options.merchant;
    }
    global.router = new Router(options);
    Backbone.history.start();
    console.log('Marionette Framework Started');
  }
});

app.addRegions({
  mainContainer: '#mainContainer',
  navigation: '#navigation',
  dashhead: '#dashhead',
  pageContainer: '#pageContainer'
});

var loadInitialData = function(){

  return db.get('config~credentials', function(error, config){
    console.log('config~credentials', error, config);
    var merchant = new Merchant();
    if(!error){
      merchant.set('_id', 'merchants~' + config.username);
      merchant.set('merchantname', config.username);
      merchant.set('password', config.password);
      merchant.credentials = {};
      merchant.credentials.password = merchant.get('password');
      merchant.credentials.username = merchant.get('merchantname');
      merchant.fetch({
        success: function(model, res){
          console.log('successfully got merchant', model);
        },
        error: function(err){
          console.log('could not get merchants', err);
        }
      });
    }
    app.start({merchant: merchant});
  });

  //app.start();
  //console.log('mainContainerRegion', app.getRegion('mainContainer'));
};

// Load some initial data, and then start our application
loadInitialData();

module.exports = global.app;

console.info('Application Initialized');
