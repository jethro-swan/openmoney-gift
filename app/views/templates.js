'use strict';

var $ = require('jquery');
var _ = require('underscore');
// require('../../node_modules/sidr/dist/jquery.sidr.min.js');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
Backbone.$ = $;
$.colorpicker = require('bootstrap-colorpicker');
var Handlebars = require('handlebars');
var Templates = require('../templates/compiledTemplates')(Handlebars);
var ViewHelpers = require('../helpers/handlebarHelpers');
var ViewHelpers = ViewHelpers(Handlebars)
var Common = require('../common');
var Self = {};
var crypto = require('crypto');
var QRious = require('qrious');
var Template = require('../models/template');

require('jquery-ui');
require('jquery-validation');
//require('toolkit');

module.exports = Marionette.LayoutView.extend({

  template: Templates['templates'],

  initialize: function (options) {
      console.log("initialize templates view", options);
      Self = this;
      Self.merchant = options.merchant;
      Self.merchantname = options.merchantname;
      Self.templates = options.templates;
      Self.templateName = options.templateName;
      Self.listenTo(Self.templates, 'sync reset', Self.render);
      //Self.listenTo(Self.currencies, 'sync reset', Self.render);
  },

  numberOfCards: 1,
  cardspacing: 0,
  cardWidth: 308,
  cardHeight: 288,

  generateKey: function(){
    // crypto.randomBytes(32, function (ex, buffer) {
    //   callback(ex, buffer);
    // });
    var token = crypto.randomBytes(9).toString('hex');
    return token;
    // var text = "";
    // var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //
    // for( var i=0; i < length; i++ )
    //     text += possible.charAt(Math.floor(Math.random() * possible.length));
    //
    // return text;
  },

  print: function(event){
    event.preventDefault();
    console.log('Print event triggered');
    //render pdf copy of receipt and
    window.print();
  },

  save: function(data){
    console.log('save template');
    var valid = Self.Form.valid();
    console.log("form valid: ", valid);
    if( valid ) {
      //create object from data
      //save object to giftcard api.
      var template = new Template();
      template.set('cardWidth', data.cardWidth);
      template.set('cardHeight', data.cardHeight);
      template.set('keyDisplay', data.keyDisplay);
      template.set('keySize', data.keySize);
      template.set('keyTop', data.keyTop);
      template.set('keyLeft', data.keyLeft);
      template.set('keyColor', data.keyColor);
      template.set('qrDisplay', data.qrDisplay);
      template.set('qrBackground', data.qrBackground);
      template.set('qrForeground', data.qrForeground);
      template.set('qrSize', data.qrSize);
      template.set('qrTop', data.qrTop);
      template.set('qrLeft', data.qrLeft);
      template.set('default', data.default);
      template.set('vertical', data.vertical);
      if(typeof data.frontimg != 'undefined'){
        template.set('frontImgSrc', data.frontimg.src);
        template.set('frontImgWidth', data.frontimg.width);
        template.set('frontImgHeight', data.frontimg.height);
      } else {
        console.log('no front image');
      }
      if(typeof data.backimage != 'undefined'){
        template.set('backImgSrc', data.backimage.src);
        template.set('backImgWidth', data.backimage.width);
        template.set('backImgHeight', data.backimage.height);
      } else {
        console.log('no back image');
      }
      template.set('templateName', Self.$('#templatename').val());
      if(typeof data._id != 'undefined'){
        template.set('_id', data._id);
      }
      console.log('save template', template.toJSON());
      template.set('merchant', Self.merchant);
      template.credentials = {};
      template.credentials.username = Self.merchant.get('merchantname');
      template.credentials.password = Self.merchant.get('password');
      template.save({},{
        success: function(model, reponse){
          Self.templates.fetch();
          router.navigate('#merchants/' + Self.merchant.get('merchantname') + '/templates');
          $('#success-notification').html('Successfully saved Template.').show();
          setTimeout(function(){
            $('#success-notification').hide();
          },10000);
        },
        error: function(model, error){
          console.log('failed to saved model', model, error);
          if(typeof error.responseJSON != 'undefined' && typeof error.responseJSON.message != 'undefined' ){
            console.info(error.responseJSON.message);
            $('#error-notification').html(error.responseJSON.message).show();
            setTimeout(function(){
              $('#error-notification').hide();
            },10000);
          } else {
            $('#error-notification').html('Error').show();
            setTimeout(function(){
              $('#error-notification').hide();
            },10000);
          }
        }
      })

    }
  },

  drawQr: function(data){
    for(var i = 0; i < data.cards.length; i++){
      if(typeof data.img != 'undefined'){
        var canvas = document.getElementById("frontCanvas" + data.cards[i].key);
        //var canvas = Self.$('#frontCanvas' + data.cards[i].key)[0];
        if(typeof canvas != 'undefined' && canvas != null){
          var ctx = canvas.getContext("2d");
          //reset the width if it has been changed.
          canvas.width = Self.$('#frontCanvas' + data.cards[i].key).width();
          canvas.height = canvas.width * (data.img.height / data.img.width);
          Self.$('#frontCanvas' + data.cards[i].key).css('height', canvas.height);
          ctx.drawImage(data.img, 0, 0, data.img.width, data.img.height, 0, 0, canvas.width, canvas.height);
          Self.$("#frontCanvas" + data.cards[i].key).show();

          data.frontimg = new Image();
          data.frontimg.src = canvas.toDataURL();
          data.frontimg.width = canvas.width;
          data.frontimg.height = canvas.height;
        }
      }

      if(typeof data.backimg != 'undefined'){
        var canvas = document.getElementById("backCanvas" + data.cards[i].key);
        if(typeof canvas != 'undefined' && canvas != null){
          var ctx = canvas.getContext("2d");
          //reset the width if it has been changed.
          canvas.width = Self.$('#backCanvas' + data.cards[i].key).width();
          canvas.height = canvas.width * (data.backimg.height / data.backimg.width);
          Self.$('#backCanvas' + data.cards[i].key).css('height', canvas.height);
          ctx.drawImage(data.backimg, 0, 0, data.backimg.width, data.backimg.height, 0, 0, canvas.width, canvas.height);
          Self.$("#backCanvas" + data.cards[i].key).show();

          data.backimage = new Image();
          data.backimage.src = canvas.toDataURL();
          data.backimage.width = canvas.width;
          data.backimage.height = canvas.height;
        }
      }

      //Draw Qr code
      //var canvas = document.querySelector('canvas')
      var qrid = Self.$('#qr' + data.cards[i].key)[0];
      console.log('qrid:',qrid);
      var qr = new QRious({
        element: qrid,
        value: 'https://openmoney.gift' + '/#m/' + Self.merchant.get('merchantname') + '/t/' + data.cards[i].key,
      })
      qr.background = data.qrBackground;
      qr.foreground = data.qrForeground;
      qr.level = 'H';
      //qr.size = 175;
      qr.size = data.qrSize;

    }
    return data;
  },

  render: function(){
      console.log("render templates view");
      var data = {};
      //data.merchant = Self.merchant.toJSON();

      if(Self.templateName == 'new'){
        data.numberOfCards = Self.numberOfCards;
        data.cardspacing = Self.cardspacing;
        data.cardWidth = Self.cardWidth;
        data.cardHeight = Self.cardHeight;

        data.cards = [];
        for(var i = 0; i < data.numberOfCards; i++){
          data.cards[i] = {};
          data.cards[i].key = Self.generateKey();
        }

        data.keyDisplay = true;
        data.keySize = 14;
        data.keyLeft = 2;
        data.keyTop = 4;
        data.keyColor = '#ffffff';
        data.qrDisplay = true;
        data.qrBackground = '#ffffff';
        data.qrForeground = '#000000';
        data.qrSize = 267;
        data.qrLeft = 31;
        data.qrTop = 9;
        data.default = false;
        data.vertical = true;
      } else {
        var templateId = 'templates~' + Self.merchant.get('merchantname') + '~' + Self.templateName;
        data = Self.templates.get(templateId);
        console.log(templateId, data);
        if(typeof data === 'undefined'){
          data = {};
        } else {
          data = data.toJSON();
        }
        data.numberOfCards = Self.numberOfCards;
        data.cards = [];
        for(var i = 0; i < data.numberOfCards; i++){
          data.cards[i] = {};
          data.cards[i].key = Self.generateKey();
        }
        if(typeof data._attachments != 'undefined' && typeof data._attachments['frontImg.png'] != 'undefined'){
          data.img = new Image();
          data.img.width = data.frontImgWidth;
          data.img.height = data.frontImgHeight;
          data.img.onload = function(){
            for(var i = 0; i < data.numberOfCards; i++){
              var canvas = document.getElementById("frontCanvas" + data.cards[i].key);
              //var canvas = Self.$('#frontCanvas' + data.cards[i].key)[0];
              if(typeof canvas != 'undefined' && canvas != null){
                var ctx = canvas.getContext("2d");
                //reset the width if it has been changed.
                canvas.width = Self.$('#frontCanvas' + data.cards[i].key).width();
                canvas.height = canvas.width * (data.img.height / data.img.width);
                Self.$('#frontCanvas' + data.cards[i].key).css('height', canvas.height);
                ctx.drawImage(data.img, 0, 0, data.img.width, data.img.height, 0, 0, canvas.width, canvas.height);
                Self.$("#frontCanvas" + data.cards[i].key).show();

                data.frontimg = new Image();
                data.frontimg.src = canvas.toDataURL();
                data.frontimg.width = canvas.width;
                data.frontimg.height = canvas.height;
              }
            }
          };
          data.img.src = 'data:' + data._attachments['frontImg.png'].content_type + ';base64,' + data._attachments['frontImg.png'].data;
        }
        if(typeof data._attachments != 'undefined' && typeof data._attachments['backImg.png'] != 'undefined'){
          data.backimg = new Image();
          data.backimg.width = data.backImgWidth;
          data.backimg.height = data.backImgHeight;
          data.backimg.onload = function(){
            for(var i = 0; i < data.numberOfCards; i++){
              var canvas = document.getElementById("backCanvas" + data.cards[i].key);
              if(typeof canvas != 'undefined' && canvas != null){
                var ctx = canvas.getContext("2d");
                //reset the width if it has been changed.
                canvas.width = Self.$('#backCanvas' + data.cards[i].key).width();
                canvas.height = canvas.width * (data.backimg.height / data.backimg.width);
                Self.$('#backCanvas' + data.cards[i].key).css('height', canvas.height);
                ctx.drawImage(data.backimg, 0, 0, data.backimg.width, data.backimg.height, 0, 0, canvas.width, canvas.height);
                Self.$("#backCanvas" + data.cards[i].key).show();

                data.backimage = new Image();
                data.backimage.src = canvas.toDataURL();
                data.backimage.width = canvas.width;
                data.backimage.height = canvas.height;
              }
            }
          };
          data.backimg.src = 'data:' + data._attachments['backImg.png'].content_type + ';base64,' + data._attachments['backImg.png'].data;
        }
      }

      data.merchantname = Self.merchantname;
      console.log('templates data:', data);

      _.extend(data, ViewHelpers);
      Self.$el.html(Self.template(data));

      Self.$('#cards').html(Templates['templatesCard'](data));

      Self.$('#width').on('change', function(event){
        data.cardWidth = Self.cardWidth = Self.$('#width').val();
        console.log('width change', Self.cardWidth);
        Self.$('#cards').html(Templates['templatesCard'](data));
        Self.drawQr(data);
      });

      Self.$('#height').on('change', function(event){
        data.cardHeight = Self.cardHeight = Self.$('#height').val();
        console.log('height change', Self.cardHeight);
        Self.$('#cards').html(Templates['templatesCard'](data));
        data = Self.drawQr(data);
      });

      Self.$("#frontImage").change(function(){
          console.log('front image changed');
          data.frontImageFilename = Self.$("#frontImage").val().substr(Self.$("#frontImage").val().lastIndexOf('\\') + 1, Self.$("#frontImage").val().length);
          Self.$("#frontImageFilename").html(data.frontImageFilename);

          if (this.files && this.files[0]) {
              var reader = new FileReader();

              reader.onload = function (e) {
                console.log('reader.onload:', e);

                data.img = new Image();
                data.img.onload = function () {
                    console.log('image onload');
                    /// step 1
                    var oc = document.createElement('canvas'),
                        octx = oc.getContext('2d');

                    console.log('image w x h:', data.img.width, data.img.height);
                    octx.drawImage(data.img, 0, 0, data.img.width, data.img.height);

                    for(var i = 0; i < data.cards.length; i++){
                      var canvas = document.getElementById("frontCanvas" + data.cards[i].key);
                      var ctx = canvas.getContext("2d");
                      //reset the width if it has been changed.
                      canvas.width = Self.$('#frontCanvas' + data.cards[i].key).width();
                      console.log('canvas w x h:', canvas.width, canvas.height);
                      canvas.height = canvas.width * (data.img.height / data.img.width);
                      Self.$('#frontCanvas' + data.cards[i].key).css('height', canvas.height);
                      console.log('canvas ', data.cards[i].key, canvas.width, canvas.height);
                      ctx.drawImage(data.img, 0, 0, data.img.width, data.img.height, 0, 0, canvas.width, canvas.height);
                      Self.$("#frontCanvas" + data.cards[i].key).show();
                      console.log('ctx', ctx);

                      data.frontimg = new Image();
                      data.frontimg.src = canvas.toDataURL();
                      data.frontimg.width = canvas.width;
                      data.frontimg.height = canvas.height;
                      console.log('set front image', data.frontimg);
                    }
                }
                data.img.src = e.target.result;
              }
              reader.readAsDataURL(this.files[0]);
          }
      });

      Self.$("#backImage").change(function(){
          console.log('back image changed');
          data.backImageFilename = Self.$("#backImage").val().substr(Self.$("#backImage").val().lastIndexOf('\\') + 1, Self.$("#backImage").val().length);
          Self.$("#backImageFilename").html(data.backImageFilename);

          if (this.files && this.files[0]) {
              var reader = new FileReader();

              reader.onload = function (e) {
                console.log('reader.onload:', e);

                data.backimg = new Image();
                data.backimg.onload = function () {
                    console.log('image onload');

                    var oc = document.createElement('canvas'),
                        octx = oc.getContext('2d');
                    octx.drawImage(data.backimg, 0, 0, data.backimg.width, data.backimg.height);
                    for(var i = 0; i < data.cards.length; i++){
                      var canvas = document.getElementById("backCanvas" + data.cards[i].key);
                      var ctx = canvas.getContext("2d");
                      //reset the width if it has been changed.
                      canvas.width = Self.$('#backCanvas' + data.cards[i].key).width();
                      canvas.height = canvas.width * (data.backimg.height / data.backimg.width);
                      Self.$('#backCanvas' + data.cards[i].key).css('height', canvas.height);
                      ctx.drawImage(data.backimg, 0, 0, data.backimg.width, data.backimg.height,
                      0, 0, canvas.width, canvas.height);
                      Self.$("#backCanvas" + data.cards[i].key).show();

                      data.backimage = new Image();
                      data.backimage.src = canvas.toDataURL();
                      data.backimage.width = canvas.width;
                      data.backimage.height = canvas.height;
                    }
                }
                data.backimg.src = e.target.result;
              }
              reader.readAsDataURL(this.files[0]);
          }
      });

      Self.$('#keyDisplay').change(function(){
          data.keyDisplay = Self.$('#keyDisplay').prop('checked');
          if(data.keyDisplay){
            Self.$('.keypos').show();
          } else {
            Self.$('.keypos').hide();
          }
      });

      Self.$('#keyleft').change(function(){
          data.keyLeft = Self.$('#keyleft').val();
          Self.$('.keypos').css('left', data.keyLeft + 'px');
      });

      Self.$('#keytop').change(function(){
          data.keyTop = Self.$('#keytop').val();
          Self.$('.keypos').css('top', data.keyTop + 'px');
      });

      Self.$('#keycolor').colorpicker().on('changeColor',
            function(ev) {
                data.keyColor = Self.$('input[name=keycolor]').val();
                Self.$('.keypos').css('color', data.keyColor);
            });

      Self.$('#keysize').change(function(){
          data.keySize = Self.$('#keysize').val();
          Self.$('.keypos').css('font-size', data.keySize + 'pt');
          Self.$('.vertical').css('width', data.keySize + 'pt');
          Self.$('.vertical').css('height', data.keySize + 'pt');
      })

      Self.$('#vertical').change(function(){
          data.vertical = Self.$('#vertical').prop('checked');
          if(data.vertical){
            Self.$('.keypos div').addClass('vertical');
          } else {
            Self.$('.keypos div').removeClass('vertical');
          }
      });

      Self.$('#qrDisplay').change(function(){
          data.qrDisplay = Self.$('#qrDisplay').prop('checked');
          if(data.qrDisplay){
            Self.$('.qrpos').show();
          } else {
            Self.$('.qrpos').hide();
          }
      });

      Self.$('#qrleft').change(function(){
          data.qrLeft = Self.$('#qrleft').val();
          Self.$('.qrpos').css('left', data.qrLeft + 'px');
      });

      Self.$('#qrtop').change(function(){
          data.qrTop = Self.$('#qrtop').val();
          Self.$('.qrpos').css('top', data.qrTop + 'px');
      });

      Self.$('#qrforeground').colorpicker().on('changeColor',
            function(ev) {
              data.qrForeground = Self.$('input[name=qrforeground]').val()
              data = Self.drawQr(data);
            });

      Self.$('#qrbackground').colorpicker().on('changeColor',
            function(ev) {
                data.qrBackground = Self.$('input[name=qrbackground]').val();
                data = Self.drawQr(data);
            });

      Self.$('#qrsize').change(function(){
          data.qrSize = Self.$('#qrsize').val();;
          data = Self.drawQr(data);
      })

      Self.$('#numberOfCards').on('change', function(event){
        data.numberOfCards = Self.numberOfCards = Self.$('#numberOfCards').val();
        Self.$('#cards').html(Templates['templatesCard'](data));
        data = Self.drawQr(data);
      });

      Self.$('#cardspacing').on('change', function(e){
        data.cardspacing = Self.cardspacing = Self.$('#cardspacing').val();
        Self.$('#cards').html(Templates['templatesCard'](data));
        data = Self.drawQr(data);
      })

      Self.$('#page1top').change(function(){
          var margin = Self.$('#page1top').val();
          Self.$('.page1').css('padding-top', margin + 'px');
      })

      Self.$('#page1left').change(function(){
          var margin = Self.$('#page1left').val();
          Self.$('.page1').css('padding-left', margin + 'px');
      })

      Self.$('#page2top').change(function(){
          var margin = Self.$('#page2top').val();
          Self.$('.page2').css('padding-top', margin + 'px');
      })

      Self.$('#page2right').change(function(){
          var margin = Self.$('#page2right').val();
          Self.$('.page2').css('padding-right', margin + 'px');
      })

      Self.$('button[name=print]').off('click').on('click', Self.print);

      Self.$('button[name=save]').off('click').on('click', function(event){
        event.preventDefault();
        console.log('save event triggered', data);
        Self.save(data);
      });

      data = Self.drawQr(data);

      Self.Form = Self.$('form#template');
      Self.Form.validate({
          onkeyup: false,
          rules: {
              templatename: {
                  required: true,
                  maxlength: 35
              },
              width: {
                required: true,
                max: 700
              },
              height: {
                required: true,
                max: 700
              }
          },
          messages: {
              templatename: {
                  required: "Template name is required.",
                  maxlength: "Less than 35 characters is required."
              },
              width: {
                required: "Width is required.",
                max: "Maximum width to display correctly is 700px."
              },
              height: {
                required: "Height is required.",
                max: "Maximum height to display correctly is 700px."
              }
          },
          submitHandler: function(form) {
              console.log("submit form",form);
              form.submit();
          },
          errorPlacement: function(error, element) {
              var placement = $(element.parent()).data('error');
              if (placement) {
                  $(placement).append(error)
              } else {
                  error.insertAfter(element.parent());
              }
          }
      });

    }

});
