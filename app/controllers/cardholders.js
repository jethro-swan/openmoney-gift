// var PatronsController = function(options) {
//   return {
//     list: function() {},
//     get: function(id) {},
//     form: function(id) {}
//   };
// };
//var app = require('../app');
var Marionette = require('backbone.marionette');
var PatronsView = require('../views/patrons');
var PatronView = require('../views/patron');
var PouchDB = require('pouchdb');
var db = PouchDB('giftcard');
var Self;

var Patrons = require('../collections/patrons');
var Merchant = require('../models/merchant');
var Patron = require('../models/patron');

module.exports = Marionette.Controller.extend({
  currentView: null,
  initialize: function(options){
    Self = this;
    if(typeof options.merchant != 'undefined'){
      Self.merchant = options.merchant;
    }
  },
  PatronsList: function(merchantname) {
    console.log('Patrons Controller List function');
    if(typeof Self.patronsView == 'undefined'){
      if(typeof Self.patronsCollection == 'undefined'){
        Self.getPatrons(function(){
          Self.currentView = new PatronsView( { collection: Self.patronsCollection, merchant: Self.merchant });
          console.log('app object',app);
          app.getRegion('mainContainer').show(Self.currentView);
        })
      } else {
        Self.currentView = new PatronsView( { collection: Self.patronsCollection, merchant: Self.merchant });
        app.getRegion('mainContainer').show(Self.currentView);
      }
    } else {
      //update collection
      Self.currentView.setCollection(Self.patronsCollection);
    }
  },
  PatronsForm: function(merchantname, id) {
    console.log('Patrons Controller Form function', id);
    var params = {};
    if(typeof Self.merchant == 'undefined'){
      Self.getMerchant(function(merchant){
        //call myself
        Self.PatronsForm(merchantname, id);
      })
    } else {
      params.merchant = Self.merchant;
      if(typeof Self.patronsCollection == 'undefined' || typeof Self.patronsCollection.get(id) == 'undefined'){
        console.log('patrons Collection is undefined')
        // Self.getPatrons(function(){
        //   parmas.patron = Self.patronsCollection.get(id);
        //   console.log("params: ", params);
        //   Self.PatronView = new PatronView( { model: params.patron, merchant: params.merchant });
      	// 	Self.changePage(Self.PatronView, {changeHash:false, transition: "none", merchant: params.merchant});
        // })// //TODO: check for id parameter and do a lookup on id
        params.patron = {};
        params.patron = new Patron();
        params.patron.set('merchant', Self.merchant);
        params.patron.credentials = {};
        params.patron.credentials.username = Self.merchant.get('merchantname');
        params.patron.credentials.password = Self.merchant.get('password');
        var lookup = id.split('~');
        if(lookup.length == 4){
          params.patron.set('_id', id);
          params.patron.set('firstname', lookup[2]);
          params.patron.set('lastname', lookup[3]);
          params.patron.fetch({
            success: function(model, response){
              console.log('successfully fetched patron', response);
              Self.PatronView.render();
            },
            error: function(model, response){
              console.log(response);
            }
          });
        }
        Self.currentView = new PatronView( { model: params.patron, merchant: params.merchant });
        app.getRegion('mainContainer').show(Self.currentView);
    		//Self.changePage(Self.PatronView, {changeHash:false, transition: "none", merchant: params.merchant});
      } else {
        console.log('patrons collection is defined');
        params.patron = Self.patronsCollection.get(id);
        console.log("params: ", params);
        Self.currentView = new PatronView( { model: params.patron, merchant: params.merchant });
        app.getRegion('mainContainer').show(Self.currentView);
      }
    }
  },
  getPatrons: function(callback){
    if(typeof Self.merchant == 'undefined'){
      Self.getMerchant(function(){
        Self.getPatrons(callback);
      });
    } else {
      Self.patronsCollection = new Patrons([],{ merchantname: Self.merchant.get('merchantname') });
      Self.patronsCollection.credentials = {};
      Self.patronsCollection.credentials.password = Self.merchant.get('password');
      Self.patronsCollection.credentials.username = Self.merchant.get('merchantname');
      Self.patronsCollection.fetch({
        success: function(model, response){
          console.log('successfully fetched patrons collection', model, response);
        },
        error: function(model, response){
          console.log('failed to fetched patrons collection', model, response);
        }
      });
      callback();
    }
  },
  getMerchant: function(callback){
    if(typeof Self.merchant == 'undefined'){
      db.get('config~credentials', function(error, doc){
        console.log('config', error, doc)
        var merchant = new Merchant();
        if(error){
          console.log('error getting merchant from pouchdb',error);
        } else {
          merchant.set('_id', 'merchants~' + doc.username);
          merchant.set('merchantname', doc.username);
          merchant.set('password', doc.password);
          merchant.fetch({
            success: function(model, res){
              console.log('successfully got merchant', model);
            },
            error: function(err){
              console.log('could not get merchants', err);
            }
          });
        }
        callback(merchant);
      })
    } else {
      callback(Self.merchant);
    }
  },
});
