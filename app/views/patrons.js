'use strict';

var jQuery = require('jquery');
var $ = jQuery;
var _ = require('underscore');
// require('tablesorter');
// require('tablesorterPager');
require('datatables');
//require('jquery.browser');
require('toolkit');
// require('../../node_modules/sidr/dist/jquery.sidr.min.js');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var Common = require('../common');
var PatronView = require('../views/patron');
var Patron = require('../models/patron');
//var Router = require('../routers/router');
var Self = {};

var isMobileCache;
var isMobile = function(){

  if(isMobileCache !== true || isMobileCache !== false){
    //detect user agent if agent is android, ios, blackberry or windows mobile then return true.
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
      isMobileCache = true;
    } else if( userAgent.match( /Android/i ) ){
      isMobileCache = true;
    } else if( userAgent.match( /Blackberry/i ) || userAgent.match( /BB10/i ) || userAgent.match( /RIM Tablet OS/i ) ){
      isMobileCache = true;
    } else if( userAgent.match( /Windows Phone/i ) || userAgent.match( /IEMobile/i ) ){
      isMobileCache = true;
    } else{
      isMobileCache = false;
    }
  }

  return isMobileCache;
};

var hasSoftKeyboard = function(){
  return isMobile();
};

module.exports = Marionette.CollectionView.extend({

    template: Templates['patrons'],

    //el: '#patronsView',

    initialize: function (options) {
        console.log("initialize patrons view", options);
        Self = this;
        Self.render();
        if(typeof options.merchant != 'undefined'){
          Self.merchant = options.merchant;
        }
        Self.listenTo(Self.collection, 'sync add remove reset', Self.render);
        //console.log(Self.collection);
    },

    setCollection: function(collection){
      this.collection = collection;
    },

    state : 'undefined',

    activeInput : 'amount',

    collectionEvents: {
      'change': 'render'
    },

    render: function(){
        console.log("render patrons view");

        var Self = this;
        var data = { collection : Self.collection.toJSON() };
        Self.$el.html(Self.template(data));

        this.$('[data-sort=table]').DataTable();

        this.$('[data-sort=table] > tbody > tr').off('click').on('click', function(event){
          event.preventDefault();
          var id = $(this).attr('id');
          console.log(id);
          router.navigate('merchants/' + Self.merchant.get('merchantname') + '/patrons/' + id);
        })

        this.$('button[name=newPatron]').off('click').on('click', function(event){
          event.preventDefault();
          router.navigate('merchants/' + Self.merchant.get('merchantname') + '/patrons/new');
        })
    }
});
