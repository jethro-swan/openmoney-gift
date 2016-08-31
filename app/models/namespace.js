'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Common = require('../common');

module.exports = Backbone.Model.extend({

//    urlRoot: '/V1/stewards',
    // methodToURL: {
    //   'read': '/V1/stewards/' + this.get('steward').stewardname + '/namespaces/' + this.get('_id'),
    //   'create': '/V1/stewards/' + this.get('steward').stewardname + '/namespaces',
    //   'update': '/V1/stewards/' + this.get('steward').stewardname + '/namespaces/' + this.get('_id'),
    //   'delete': '/V1/stewards/' + this.get('steward').stewardname + '/namespaces/' + this.get('_id')
    // },

    sync: function(method, model, options) {
      options = options || {};
      //options.url = model.methodToURL[method.toLowerCase()];

      if(method.toLowerCase() == 'create'){
        options.url = '/V2/stewards/' + model.get('steward').get('stewardname') + '/namespaces';
      } else if(method.toLowerCase() == 'update') {
        //use the id attribute for update because the id has not been modified.
        options.url = '/V2/stewards/' + model.get('steward').get('stewardname') + '/namespaces/' + model.get('id').split('~')[1];
      } else {
        options.url = '/V2/stewards/' + model.get('steward').get('stewardname') + '/namespaces/' + model.get('namespace');
      }

      return Backbone.sync.apply(this, arguments);
    },
    //
    // url: function() {
    //   console.log('namespace model: ',this);
    //   return '/V1/stewards/' + this.get('steward').stewardname + '/namespaces/' + this.get('_id');
    // },

    idAttribute: 'id',

    initialize: function(object) {
        console.info("initialize namespace model", object);
        if(typeof object != 'undefined'){
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              this.set(key, object[key]);
            }
          }
        }
        //console.log('namespace model:',this);
    }

});
