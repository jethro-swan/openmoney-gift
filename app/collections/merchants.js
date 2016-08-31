'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var BackbonePouch = require('backbone-pouch');
var PouchDB = require('pouchdb');
var Merchant = require('../models/merchant');

module.exports = Backbone.Collection.extend({
      model: Merchant,
      sync: BackbonePouch.sync({
        db: new PouchDB('giftcard'),
        fetch: 'query',
        options: {
          query: {
            include_docs: true,
            fun: {
              map: function(doc, emit) {
                if (doc.type === 'merchants~') {
                  emit(doc._id, null)
                }
              }
            },
            limit: 10
          },
          changes: {
            include_docs: true,
            filter: function(doc) {
              return doc._deleted || doc.type === 'merchants~';
            }
          }
        }
    }),
    parse: function(result) {
      return _.pluck(result.rows, 'doc');
    }
});
