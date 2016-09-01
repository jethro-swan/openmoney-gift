'use strict';

var $ = require('jquery');
var _ = require('underscore');
// require('../../node_modules/sidr/dist/jquery.sidr.min.js');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var ViewHelpers = require('../helpers/handlebarHelpers');
var ViewHelpers = ViewHelpers(Handlebars)
var Common = require('../common');
var Self = {};
module.exports = Marionette.LayoutView.extend({

  template: Templates['supplies'],

  initialize: function (options) {
      console.log("initialize supplies view", options);
      Self = this;
      Self.merchant = options.merchant;
      Self.merchantname = options.merchantname;
      //Self.currencies = options.currencies;
      //Self.listenTo(Self.collection, 'sync reset', Self.render);
      //Self.listenTo(Self.currencies, 'sync reset', Self.render);
  },

  render: function(){
      console.log("render supplies view");
      var data = {};
      //data.merchant = Self.merchant.toJSON();
      data.merchantname = Self.merchantname;
      // data.currencies = Self.currencies.getByNamespace(Self.merchant.get('merchantname') + '.cc');
      // for(var i = 0; i< data.currencies.length; i++){
      //   data.currencies[i] = data.currencies[i].toJSON();
      //   data.currencies[i].balance = 0;
      //   data.currencies[i].volume = 0;
      //   data.currencies[i].journals = Self.collection.where({currency: data.currencies[i].currency});
      //   for(var j = 0; j < data.currencies[i].journals.length; j++){
      //     data.currencies[i].journals[j] = data.currencies[i].journals[j].toJSON();
      //     if(data.currencies[i].journals[j].load){
      //       data.currencies[i].balance += data.currencies[i].journals[j].amount;
      //     } else {
      //       data.currencies[i].balance -= data.currencies[i].journals[j].amount;
      //     }
      //     data.currencies[i].volume += data.currencies[i].journals[j].amount;
      //   }
      //   _.extend(data.currencies[i], ViewHelpers);
      // }
      console.log('supplies data:', data);
      _.extend(data, ViewHelpers);
      Self.$el.html(Self.template(data));

      // Self.$('.currencies').off('click').on('click', function(event){
      //   event.preventDefault();
      //   var id = $(this).attr('id');
      //   console.log(id);
      //   router.navigate('merchants/' + Self.merchant.get('merchantname') + '/reports/' + id, true);
      // });


    }

});
