'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var common = require('../common');
var BackbonePouch = require('backbone-pouch');
var PouchDB = require('pouchdb');

module.exports = Backbone.Model.extend({

    urlRoot: '/V1/merchants',

    url: function() {
      return this.urlRoot + '/' + this.get('merchantname');
    },
    // sync: BackbonePouch.sync({
    //   db: new PouchDB('giftcard')
    // }),

    idAttribute: '_id',

    defaults: {
        merchantname: '',
        password: '',
        email: ''
    },

    initialize: function(object) {
        console.info("initialize merchant model", object);
        if(typeof object != 'undefined'){
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              this.set(key, object[key]);
            }
          }
        }
    }

    // Toggle the `registered` state of this user.
    //registeredToggle: function () {
    //    this.save({
    //        registered: !this.get('registered')
    //    });
    //}
});
