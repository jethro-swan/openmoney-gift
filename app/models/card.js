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
      options = options || {};
      //options.url = model.methodToURL[method.toLowerCase()];

      if(method.toLowerCase() == 'create'){
        options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/cards';
      } else if(method.toLowerCase() == 'update') {
        //use the id attribute for update because the id has not been modified.
        options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/cards/' + model.get('_id').split('~')[2];
      } else {
        if(typeof model.get('merchant') != 'undefined'){
          options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/cards/' + model.get('key');
        } else if (typeof model.get('merchantname') != 'undefined'){
          options.url = '/V1/merchants/' + model.get('merchantname') + '/cards/' + model.get('key') + '/balance';
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

    defaults: {
      key: ''
    },

    initialize: function(object) {
      console.info("initialize card model", object);
      if(typeof object != 'undefined'){
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            this.set(key, object[key]);
          }
        }
      }
    }

});
