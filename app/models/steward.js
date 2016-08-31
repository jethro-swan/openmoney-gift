'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var common = require('../common');
// var BackbonePouch = require('backbone-pouch');
// var PouchDB = require('pouchdb');

module.exports = Backbone.Model.extend({

    // urlRoot: '/V1/stewards',

    // url: function() {
    //   return this.urlRoot;
    // },
    // sync: BackbonePouch.sync({
    //   db: new PouchDB('openmoney')
    // }),

    idAttribute: 'id',

    defaults: {
        stewardname: '',
    },

    initialize: function(object) {
        console.info("initialize steward model", object);
        if(typeof object != 'undefined'){
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              this.set(key, object[key]);
            }
          }
        }
    },

    sync: function(method, model, options) {
      options = options || {};
      //options.url = model.methodToURL[method.toLowerCase()];

      if(method.toLowerCase() == 'create'){
        options.url = '/V2/stewards';
      } else if(method.toLowerCase() == 'update') {
        //use the id attribute for update because the id has not been modified.
        options.url = '/V2/stewards/' + model.get('stewardname') ;
      } else {
        options.url = '/V2/stewards/' + model.get('stewardname') ;
      }

      return Backbone.sync.apply(this, arguments);
    },

    // Toggle the `registered` state of this user.
    //registeredToggle: function () {
    //    this.save({
    //        registered: !this.get('registered')
    //    });
    //}
});
