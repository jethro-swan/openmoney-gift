'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Common = require('../common');

module.exports = Backbone.Model.extend({

//    urlRoot: '/V1/merchants',
    // methodToURL: {
    //   'read': '/V1/merchants/' + this.get('merchant').merchantname + '/patrons/' + this.get('_id'),
    //   'create': '/V1/merchants/' + this.get('merchant').merchantname + '/patrons',
    //   'update': '/V1/merchants/' + this.get('merchant').merchantname + '/patrons/' + this.get('_id'),
    //   'delete': '/V1/merchants/' + this.get('merchant').merchantname + '/patrons/' + this.get('_id')
    // },

    sync: function(method, model, options) {
      console.log('journal sync function', method, model, options);
      options = options || {};
      //options.url = model.methodToURL[method.toLowerCase()];
      options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/cards/' + model.get('card').get('key') + '/balance';
      if(method.toLowerCase() == 'create'){
        if(model.get('polarity') == 'load'){
          options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/cards/' + model.get('card').get('key') + '/giftload';
        } else if(model.get('polarity') == 'redeem'){
          options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/cards/' + model.get('card').get('key') + '/giftredeem';
        }
      }

      return Backbone.sync.apply(this, arguments);
    },
    //
    // url: function() {
    //   console.log('patron model: ',this);
    //   return '/V1/merchants/' + this.get('merchant').merchantname + '/patrons/' + this.get('_id');
    // },

    idAttribute: '_id',

    initialize: function(object) {
      console.info("initialize journal model", object);
      if(typeof object != 'undefined'){
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            this.set(key, object[key]);
          }
        }
      }
    }
});
