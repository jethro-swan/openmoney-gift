'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Common = require('../common');

module.exports = Backbone.Model.extend({

    sync: function(method, model, options) {
      options = options || {};

      if(method.toLowerCase() == 'create'){
        options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/templates';
      } else if(method.toLowerCase() == 'update') {
        //use the id attribute for update because the id has not been modified.
        options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/templates/' + model.get('_id').split('~')[2];
      } else {
        options.url = '/V1/merchants/' + model.get('merchant').get('merchantname') + '/templates/' + model.get('_id').split('~')[2];
      }

      return Backbone.sync.apply(this, arguments);
    },

    idAttribute: '_id',

    initialize: function(object) {
      console.info("initialize template model", object);
      if(typeof object != 'undefined'){
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            this.set(key, object[key]);
          }
        }
      }
    }

});
