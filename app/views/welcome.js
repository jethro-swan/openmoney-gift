'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var Common = require('../common');
var Self;
module.exports = Marionette.ItemView.extend({

    //el: "#body",

    template: Templates.welcome,

    name: 'welcome',

    initialize: function () {
        console.log("initialize welcome view");
        Self = this;
    },

    // marketingOn : function(){
    //   $('link.dashboard').prop('disabled', true);
    //   $('link.marketing').prop('disabled', false);
    //   $('#mainContainer').removeClass('container');
    //   $('#page').removeClass('content').removeClass('col-md-8');
    //   $('#body').css('padding-top', 0);
    //   $('#body').css('padding-bottom', 0);
    // },

    render: function(){
        console.log("render welcome view");
        var data = {};
        var options = {};
        options.data = data;
        Self.$el.html(Self.template(options));

        // Self.marketingOn();
        // setTimeout(function(){
        //   console.log('currentFragment' + Backbone.history.getFragment());
        //   if(Backbone.history.getFragment() == 'welcome' || Backbone.history.getFragment() == ''){
        //     Backbone.history.navigate('#login',{trigger:true, replace:false});
        //   }
        // }, 2000)
    }
});
