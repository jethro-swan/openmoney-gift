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
        options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/cardholders';
      } else if(method.toLowerCase() == 'update') {
        //use the id attribute for update because the id has not been modified.
        options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/cardholders/' + model.get('_id').split('~')[2] + '/' + model.get('_id').split('~')[3];
      } else {
        options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/cardholders/' + model.get('firstname') + '/' + model.get('lastname');
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
        firstname: null,
        lastname: null,
        merchant: {}
    },

    initialize: function(object) {
        console.info("initialize patron model", object);
        if(typeof object != 'undefined'){
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              this.set(key, object[key]);
            }
          }
        }
        //console.log('patron model:',this);
    }

});
