
'use strict';
var $ = require('jquery');
var _ = require('underscore');
//$.mobile = require('jquery-mobile');
var Backbone = require('backbone');
Backbone.$ = $;
require('backbone.basicauth');
var oauth = require('../helpers/oauth');
// var BackboneRouteControl = require('backbone-route-control');
var Marionette = require('backbone.marionette');
var PouchDB = require('pouchdb');
require('fruitdown');
var db = new PouchDB('giftcard');
if (!db.adapter) { // websql not supported by this browser
  console.log('failed to load default websql or indexdb');
  db = new PouchDB('giftcard', {adapter: 'fruitdown'});
}
var Common = require('../common');
var async = require('async');

//set the viewport scale
//http://stackoverflow.com/questions/11592015/support-for-target-densitydpi-is-removed-from-webkit
var viewPortScale = 1 / window.devicePixelRatio;
console.log("set viewport scale:" + viewPortScale);
//$('#viewport').attr('content', 'user-scalable=no, initial-scale='+viewPortScale+', width=device-width, height=device-height');

//Views
var WelcomeView = require('../views/welcome');
var LoginView = require('../views/login');
var RegisterView = require('../views/register');
var ForgotView = require('../views/forgot');
var PatronsView = require('../views/patrons');
var PatronView = require('../views/patron');
var TransactionsView = require('../views/transactions');
var ReportsView = require('../views/reports');
var ReportView = require('../views/report');
var LayoutView = require('../views/layout');
var NavigationView = require('../views/navigation');
var DashheadView = require('../views/dashhead');
var CardView = require('../views/card');
var BreadcrumbsView = require('../views/breadcrumbs');
var ReceiptView = require('../views/receipt');
var ResetView = require('../views/reset');
var MerchantView = require('../views/merchant');
var MerchantsView = require('../views/merchants');
var CurrencyView = require('../views/currency');
var EmployeeView = require('../views/employee');
var TemplatesListView = require('../views/templatesList');
var TemplatesPrinterView = require('../views/templatesPrint');
var TemplatesView = require('../views/templates');
var BalanceView = require('../views/balance');
var SupportView = require('../views/support');

//models
var Merchant = require('../models/merchant');
var Patron = require('../models/patron');
var Page = require('../models/page');
var Card = require('../models/card');
var Steward = require('../models/steward');
var Currency = require('../models/currency');
var Employee = require('../models/employee');

//collections
var Patrons = require('../collections/patrons');
var Merchants = require('../collections/merchants');
var Cards = require('../collections/cards');
var Journals = require('../collections/journals');
var Breadcrumbs = require('../collections/breadcrumbs');
var Stewards = require('../collections/stewards');
var Currencies = require('../collections/currencies');
var Employees = require('../collections/employees');
var Templates = require('../collections/templates');

//controllers
//var PatronsController = require('../controllers/patrons');

var Self = {};
var CurrentRoute = null;
var CurrentRouteOptions = null;
var CurrentView = null;

module.exports = Marionette.AppRouter.extend({
  routeParams: {},

  initialize: function(options){
    console.log('initialize router', options);
    Self = this;

    var btoa = window.btoa;

    /**
     * Returns a base64 encoded "user:pass" string
     * @param  {string} username The http auth username
     * @param  {string} password The http auth password
     * @return {string}          The base64 encoded credentials pair
     */
    var encode = function(credentials) {
      // Use Base64 encoding to create the authentication details
      // If btoa is not available on your target browser there is a polyfill:
      // https://github.com/davidchambers/Base64.js
      // Using unescape and encodeURIComponent to allow for Unicode strings
      // https://developer.mozilla.org/en-US/docs/Web/API/window.btoa#Unicode_Strings
      return btoa(unescape(encodeURIComponent(
        [credentials.username, credentials.password].join(':'))));
    };

    // Add a public method so that anything else can also create the header
    Backbone.BasicAuth = {
      getHeader: function(credentials) {
        console.log('in Backbone.BasicAuth.getHeader(credentials) function:', credentials);
        if(typeof credentials.token != 'undefined'){
          return {
            'Authorization': 'Bearer ' + credentials.token
          };
        } else {
          return {
            'Authorization': 'Basic ' + encode(credentials)
          };
        }
      }
    };

    Self.page = new Page();
    Self.layout = new LayoutView();
    app.getRegion('mainContainer').show(Self.layout);

    Self.initializeData(function(err, data){
      if(typeof Self.merchant.get('theme') != 'undefined' && Self.merchant.get('theme') == 'light'){
        Self.lightTheme();
      }
      console.log('initializeData', err, data);
      Self.layout.getRegion('navigation').show(new NavigationView({model: Self.page, merchant: Self.merchant}));
      Self.dashhead = new DashheadView({model: Self.page, merchant: Self.merchant, employees: Self.employeesCollection, employee: Self.employeeModel});
      Self.layout.getRegion('dashhead').show(Self.dashhead);
    });
  },

  // appRoutes: {
  //   'merchants/:merchantname/patrons':'PatronsList',
  //   'merchants/:merchantname/patrons/:id':'PatronsForm'
  // },

	routes: {
		'': 'welcome',
		'login': 'login',
    'logout': 'logout',
		'signup': 'register',
		'forgot': 'forgot',
    'forgot/:merchantname/:forgot_token': 'reset',
		'merchants/:merchantname/patrons': 'patrons',
    'merchants/:merchantname/patrons/:_id': 'patron',
    'merchants/:merchantname/patrons/:_id/cards/:key': 'card',
		'merchants/:merchantname/transactions': 'transactions',
    'merchants/:merchantname/transactions/:key': 'transactions',
    'm/:merchantname/t/:key': 'transactions',
    'merchants/:merchantname/transactions/:key/receipt/:timestamp': 'receipt',
		'merchants/:merchantname/reports': 'reports',
    'merchants/:merchantname/reports/:currency': 'report',
    'merchants/:merchantname/loginSuccess': 'loginSuccess',
    'merchants/:merchantname/administrative': 'administrative',
    'merchants/:merchantname/administrative/currencies/:currencyName': 'currency',
    'merchants/:merchantname/administrative/employee/:name': 'employee',
    'merchants/:merchantname/templates': 'templates',
    'merchants/:merchantname/templates/:templateName': 'templatesEditor',
    'merchants/:merchantname/templatesPrint/:templateName': 'templatesPrint',
    'merchants/:merchantname/support': 'support',
	},

  /*
  *Override navigate function
  *@param {String} route The route hash
  *@param {PlainObject} options The Options for navigate functions.
  *              You can send a extra property "params" to pass your parameter as following:
  *              {
  *               params: 'data'
  *              }
  **/
  navigate: function(route, options) {
     CurrentRoute = route;
     CurrentRouteOptions = options;
     console.log('CurrentRoute', CurrentRoute);
     var routeOption = {
             trigger: true
         },
         params = (options && options.params) ? options.params : null;
     $.extend(routeOption, options);
     delete routeOption.params;

     //set the params for the route
     this.param(route, params);
     Marionette.AppRouter.prototype.navigate(route, routeOption);
  },

 /*
  *Get or set parameters for a route fragment
  *@param {String} fragment Exact route hash. for example:
  *                   If you have route for 'profile/:id', then to get set param
  *                   you need to send the fragment 'profile/1' or 'profile/2'
  *@param {Any Type} params The parameter you to set for the route
  *@return param value for that parameter.
  **/
  param: function(fragment, params) {
     var matchedRoute;
     _.any(Backbone.history.handlers, function(handler) {
         if (handler.route.test(fragment)) {
             matchedRoute = handler.route;
         }
     });
     if (params !== undefined) {
         this.routeParams[matchedRoute] = params;
     }
     //CurrentRoute = fragment;

     return this.routeParams[matchedRoute];
  },

 /*
  * Called when hash changes to home route
  **/
  // onHomeRoute: function() {
  //    console.log("param =", this.param("home"));
  // }

	welcome: function() {
		console.info('Goto: WelcomeView');
    Self.initializeData(function(err, data){
      if(Self.merchant.get('merchantname') == ''){
        Self.page.set('currentPage', 'welcome');
        Self.changePage(new WelcomeView(),{pageName: 'welcome'});
      } else {
        Self.navigate('merchants/' + Self.merchant.get('merchantname') + '/transactions', true);
      }
    });
	},
	login: function() {
		console.log('Goto: LoginView');
    Self.initializeData(function(err, data){
      if(Self.merchant.get('merchantname') == ''){
        Self.page.set('currentPage', 'login');
        Self.changePage(new LoginView( { merchant: Self.merchant } ), {changeHash:false, transition: "none"});
      } else {
        Self.navigate('merchants/' + Self.merchant.get('merchantname') + '/transactions', true);
      }
    })
	},
  loginSuccess: function(){
    console.log('Goto: LoginSuccessView');
    Self.initializeData(function(err, data){
      console.log('initializeData', err, data);
      Self.layout.getRegion('navigation').show(new NavigationView({model: Self.page, merchant: Self.merchant}));
      Self.dashhead = new DashheadView({model: Self.page, merchant: Self.merchant, employees: Self.employeesCollection, employee: Self.employeeModel});
      Self.layout.getRegion('dashhead').show(Self.dashhead);
      Self.navigate('#merchants/' + Self.merchant.get('merchantname') + '/transactions',{trigger:true, replace:true});
    });
  },
  logout: function() {
    console.log('Goto: LogoutView');
    db.allDocs({}).then(function(docs){
      console.log("allDocs", docs);

      var parallel = {};

      docs.rows.forEach(function(row){
        parallel[row.id] = function(callback){
          console.log('row.id', row.id);
          db.get(row.id, function(err, document){
            if(err){
              callback(err);
            } else {
              console.log(document);
              db.remove(document._id, document._rev).then(function(results){
                console.log(results);
                callback(null, results);
              }).catch(function(error){
                console.log(error);
                callback(error);
              });
            }
          })
        };
      });

      async.parallel(parallel, function(err, res){
        if(err){
          console.log('error removing docs: ',err);
        } else {
          console.log("results: ",res);
          db.compact().then(function(result){
            console.log('destoryed local db!');
            oauth.invalidateCache(Self.merchant.get('merchantname'));
            console.log('delete memory');
            delete Self.merchant;
            delete Self.cardsCollection;
            delete Self.patronsCollection;
            delete Self.employeesCollection;
            delete Self.currenciesCollection;
            delete Self.templatesCollection;
            delete Self.journals;
            delete Self.employeeModel;

            Self.darkTheme();
            //db = new PouchDB('giftcard');
            Self.page = new Page();
            Self.layout = new LayoutView();
            app.getRegion('mainContainer').show(Self.layout);
            Self.initializeData(function(err, data){
              console.log('initializeData', err, data);
              Self.layout.getRegion('navigation').show(new NavigationView({model: Self.page, merchant: Self.merchant}));
              Self.dashhead = new DashheadView({model: Self.page, merchant: Self.merchant, employees: Self.employeesCollection, employee: Self.employeeModel});
              Self.layout.getRegion('dashhead').show(Self.dashhead);
            });

            Self.navigate('#login');
          }).catch(function(err){
            console.log(err);
            Self.navigate('#login');
          })
        }
      })
    }).catch(function(error){
      console.log("allDocs error: ", error);
      Self.navigate('#login');
    });
  },
  register: function() {
		console.log('Goto: RegisterView');
		Self.initializeData(function(err, data){
      if(Self.merchant.get('merchantname') == ''){
        Self.page.set('currentPage', 'register');
        Self.changePage(new RegisterView( { merchant: Self.merchant } ), {changeHash:false, transition: "none"});
      } else {
        Self.navigate('merchants/' + Self.merchant.get('merchantname') + '/transactions', true);
      }
    })
	},
	forgot: function() {
		console.log('Goto: ForgotView');
    Self.initializeData(function(err, data){
      if(Self.merchant.get('merchantname') == ''){
        Self.page.set('currentPage', 'forgot');
        Self.changePage(new ForgotView( { merchant: Self.merchant } ), {changeHash:false, transition: "none"});
      } else {
        Self.navigate('merchants/' + Self.merchant.get('merchantname') + '/transactions', true);
      }
    })
	},
  reset: function(merchantname, forgot_token) {
		console.log('Goto: ResetView', merchantname, forgot_token);
    Self.initializeData(function(err, data){
      if(Self.merchant.get('merchantname') == ''){
        Self.page.set('currentPage', 'reset');
        Self.changePage(new ResetView( { merchant: Self.merchant, merchantname: merchantname, forgot_token: forgot_token } ), {changeHash:false, transition: "none"});
      } else {
        Self.navigate('merchants/' + Self.merchant.get('merchantname') + '/transactions', true);
      }
    })
	},
	transactions: function(merchantname, key) {
		console.log('Goto: TransactionsView', merchantname, key);
    Self.merchantname = merchantname;
    Self.initializeData(function(err, res){
      if(typeof Self.merchant != 'undefined' && Self.merchant.get('merchantname') == merchantname){
        Self.page.set('currentPage', 'transactions');
        Self.page.set('title', 'Process Transactions');
        var breadcrumbs = [{linkText: 'Process Transactions'},
                        {active: true, linkText: key}];
        var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
        var breadcrumbRegion = Self.dashhead.getRegion('breadcrumbs');
        if(typeof breadcrumbRegion != 'undefined'){
          breadcrumbRegion.reset();
          breadcrumbRegion.show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
        }
        Self.changePage(new TransactionsView( { merchant: Self.merchant, collection: Self.cardsCollection, journals: Self.journals, currencies: Self.currenciesCollection, employee: Self.employeeModel, key: key} ), {changeHash:false, transition: "none"});
      } else if(typeof key != 'undefined' && key != ''){
        //Merchant is not logged in so this is a public view of the card.
        Self.page.set('currentPage', 'balance');
        Self.page.set('title', 'Balance');
        var breadcrumbs = [{linkText: 'Balance'},
                        {active: true, linkText: key}];
        var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
        var breadcrumbRegion = Self.dashhead.getRegion('breadcrumbs');
        if(typeof breadcrumbRegion != 'undefined'){
          breadcrumbRegion.reset();
          breadcrumbRegion.show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
        }
        Self.navigationOff();
        Self.changePage(new BalanceView({ merchantname: merchantname, templates: Self.templatesCollection, key: key }),{pageName: 'balance'});
      } else {
        //merchant isn't logged in and card is not defined.
        Self.welcome();
      }
    })
	},
  receipt: function(merchantname, key, timestamp) {
    console.log('Goto: RecepitView', merchantname, key, timestamp);
    Self.initializeData(function(err, res){
      Self.page.set('currentPage', 'transactions');
      Self.page.set('title', 'Transaction Receipt');
      var card = Self.cardsCollection.get('cards~' + Self.merchant.get('merchantname') + '~' + key);
      console.log('card', card);
      var breadcrumbs = [{link: '#merchants/' + Self.merchant.get('merchantname') + '/transactions', linkText: 'Process Transactions'},
                        {link: '#merchants/' + Self.merchant.get('merchantname') + '/transactions/' + key, linkText: key},
                        {active: true, linkText: 'Transaction Receipt'}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      var breadcrumbRegion = Self.dashhead.getRegion('breadcrumbs');
      if(typeof breadcrumbRegion != 'undefined'){
        breadcrumbRegion.reset();
        breadcrumbRegion.show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      }
      Self.changePage(new ReceiptView( { merchant: Self.merchant, collection: Self.cardsCollection, journals: Self.journals, currencies: Self.currenciesCollection, key: key, timestamp: timestamp} ), {changeHash:false, transition: "none"});
    })
  },
	reports: function(merchantname) {
		console.log('Goto: ReportsView');
    Self.page.set('currentPage', 'reports');
    Self.page.set('title', 'Reports');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{active:true, linkText: 'Reports'}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
  		Self.changePage(new ReportsView( { merchant: Self.merchant, collection: Self.journals, currencies: Self.currenciesCollection } ), {changeHash:false, transition: "none"});
    });
	},
  report: function(merchantname, currency){
    console.log('Goto: ReportView', currency);
    Self.page.set('currentPage', 'report');
    Self.page.set('title', 'Report');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{link: '#merchants/' + merchantname + '/reports',linkText: 'Reports'},
                        {active: true, linkText: currency[0].toUpperCase() + currency.slice(1).toLowerCase() + ' Report'}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
  		Self.changePage(new ReportView( { merchant: Self.merchant, collection: Self.journals, currencies: Self.currenciesCollection, currency: currency } ), {changeHash:false, transition: "none"});
    });
  },
  patrons: function(merchantname) {
    console.log('Patrons Controller List function');
    Self.page.set('currentPage', 'patrons');
    Self.page.set('title', 'Patrons');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{active:true, linkText: 'Patrons'}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new PatronsView( { collection: Self.patronsCollection, merchant: Self.merchant }), {changeHash:false, transition: "none"});
    })
  },
  patron: function(merchantname, id) {
    console.log('Patrons Controller Form function', merchantname, id);
    Self.initializeData(function(err, results){
      Self.page.set('currentPage', 'patrons');
      Self.page.set('title', 'Patron');
      var patron = Self.patronsCollection.get(id);
      if(typeof patron == 'undefined'){
        var breadcrumbs = [{ link: '#merchants/' + merchantname + '/patrons', linkText: 'Patrons'},
                           { active:true, linkText: 'Patron'}];
        var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
        Self.dashhead.getRegion('breadcrumbs').reset();
        Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      } else {
        var breadcrumbs = [{ link: '#merchants/' + merchantname + '/patrons', linkText: 'Patrons'},
                           { active:true, linkText: patron.get('firstname') + ' ' + patron.get('lastname')}];
        var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
        Self.dashhead.getRegion('breadcrumbs').reset();
        Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      }
      Self.changePage(new PatronView( { model: patron, collection: Self.patronsCollection, cards: Self.cardsCollection, currencies: Self.currenciesCollection, journals: Self.journals, templates: Self.templatesCollection, merchant: Self.merchant, id: id}), {changeHash:false, transition: "none"});
    });
  },
  card: function(merchantname, patrons_id, card_key){
    console.log('goto: patronsCard', merchantname, patrons_id, card_key);
    Self.page.set('currentPage', 'patrons');
    Self.page.set('title', 'Patrons Card');
    Self.initializeData(function(err, res){
      // console.log('Self.merchant', Self.merchant);
      // console.log('Self.patronsCollection', Self.patronsCollection);
      // console.log('Self.cardscollection', Self.cardsCollection);
      var patron = Self.patronsCollection.get(patrons_id);
      if(typeof patron == 'undefined'){
        var breadcrumbs = [{ link: '#merchants/' + merchantname + '/patrons', linkText: 'Patrons'},
                           { link: '#merchants/' + merchantname + '/patrons/' + patrons_id , linkText: 'Patrons'},
                           { active: true, linkText: 'Card : ' + card_key}];
      } else {
        var breadcrumbs = [{ link: '#merchants/' + merchantname + '/patrons', linkText: 'Patrons'},
                           { link: '#merchants/' + merchantname + '/patrons/' + patrons_id , linkText: patron.get('firstname') + ' ' + patron.get('lastname')},
                           { active: true, linkText: 'Card : ' + card_key}];
      }

      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new CardView( { collection: Self.cardsCollection, patrons: Self.patronsCollection, journals: Self.journals, currencies: Self.currenciesCollection, templates: Self.templatesCollection, merchant: Self.merchant, card_key: card_key, patrons_id: patrons_id} ), {});
    })
  },
  administrative: function(merchantname){
    console.log('goto: merchant', merchantname);
    Self.page.set('currentPage', 'administrative');
    Self.page.set('title', 'Administrative Page');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{ link: '#merchants/' + merchantname + '/administrative', linkText: 'Administrative'},
                         { active: true, linkText: 'Merchant : ' + merchantname}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new MerchantView( { model: Self.merchant, currencies: Self.currenciesCollection, employees: Self.employeesCollection, cards: Self.cardsCollection, patrons: Self.patronsCollection, journals: Self.journals, merchant: Self.merchant, merchantname: merchantname} ), {});
    })
  },
  currency: function(merchantname, currencyName){
    console.log('goto: currency', currencyName);
    Self.page.set('currentPage', 'administrative');
    Self.page.set('title', 'Administrative: New Currency');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{ link: '#merchants/' + merchantname + '/administrative', linkText: 'Administrative: ' + merchantname},
                         { active: true, linkText: 'Currency: ' + currencyName}];


      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new CurrencyView( { model: Self.merchant, collection: Self.currenciesCollection, cards: Self.cardsCollection, patrons: Self.patronsCollection, journals: Self.journals, merchant: Self.merchant, merchantname: merchantname, currencyName: currencyName} ), {});
    })
  },
  employee: function(merchantname, name){
    console.log('goto: employee',merchantname, name);
    Self.page.set('currentPage', 'administrative');
    Self.page.set('title', 'Administrative: New Employee');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{ link: '#merchants/' + merchantname + '/administrative', linkText: 'Administrative: ' + merchantname},
                         { active: true, linkText: 'Employee: ' + name}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new EmployeeView( { model: Self.merchant, collection: Self.employeesCollection, merchant: Self.merchant, merchantname: merchantname, name: name} ), {});
    });
  },
  supplies: function(merchantname){
    console.log('goto: supplies', merchantname);
    Self.page.set('currentPage', 'supplies');
    Self.page.set('title', 'Supplies');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{ active: true, linkText: 'Supplies'}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new SuppliesView({ merchant: Self.merchant, merchantname: merchantname}), {});
    });
  },
  templates: function(merchantname){
    console.log('goto: templates', merchantname);
    Self.page.set('currentPage', 'templates');
    Self.page.set('title', 'Templates');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{active: true, linkText: 'Templates List'}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new TemplatesListView({ merchant: Self.merchant, merchantname: merchantname, templates: Self.templatesCollection}), {});
    });
  },
  templatesEditor: function(merchantname, templateName){
    console.log('goto templatesEditor', merchantname, templateName);
    Self.page.set('currentPage', 'templates');
    Self.page.set('title', 'Templates');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{ link: '#merchants/' + merchantname + '/templates', linkText: 'Templates List'},
                        {active: true, linkText: 'Money Designer'}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new TemplatesView({ merchant: Self.merchant, merchantname: merchantname, templates: Self.templatesCollection, templateName: templateName}), {});
    });
  },
  templatesPrint: function(merchantname, templateName){
    console.log('goto templatesEditor', merchantname, templateName);
    Self.page.set('currentPage', 'templates');
    Self.page.set('title', 'Templates');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{ link: '#merchants/' + merchantname + '/templates', linkText: 'Templates List'},
                        {active: true, linkText: 'Templates Printer'}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new TemplatesPrinterView({ merchant: Self.merchant, merchantname: merchantname, templates: Self.templatesCollection, templateName: templateName}), {});
    });
  },
  support: function(merchantname){
    console.log('goto: support', merchantname);
    Self.page.set('currentPage', 'support');
    Self.page.set('title', 'Support');
    Self.initializeData(function(err, res){
      var breadcrumbs = [{ active: true, linkText: 'Support'}];
      var breadcrumbsCollection = new Breadcrumbs(breadcrumbs);
      Self.dashhead.getRegion('breadcrumbs').reset();
      Self.dashhead.getRegion('breadcrumbs').show(new BreadcrumbsView( {collection: breadcrumbsCollection }));
      Self.changePage(new SupportView({ merchant: Self.merchant, merchantname: merchantname}), {});
    });
  },
  initializeData: function(done){
    console.log('initializeData');
    var localdb = {};
    var parallel = {};
    localdb.merchant = function(callback){
      if(typeof Self.merchant != 'undefined'){
        callback(null, Self.merchant);
      } else {
        db.get('config~credentials', function(error, doc){
          console.log('config', error, doc)
          var merchant = new Merchant();
          if(error){
            console.log('error getting merchant from pouchdb',error);
            if(error == 'Adapter is missing'){

            }
            //console.log('adapters'. PouchDB.adapters);
            console.log('pouchdb adapter',db.adapter);
          } else {
            merchant = new Merchant(doc.merchant);
            merchant.credentials = {};
            merchant.credentials.password = merchant.get('password');
            merchant.credentials.username = merchant.get('merchantname');
            merchant.fetch({
              success: function(model, res){
                console.log('successfully got merchant', model);
                //reinitialize data that needs the access_token;
                Self.initializeData();
              },
              error: function(err){
                console.log('could not get merchants', err);
              }
            });
          }
          Self.merchant = merchant;
          callback(error, merchant);
        });
      }
    };

    localdb.employee = function(callback){
      if(typeof Self.employeeModel != 'undefined'){
        callback(null, Self.employeeModel);
      } else {
        db.get('config~employee', function(error, doc){
          console.log('config', error, doc)
          var employee = new Employee();
          if(error){
            console.log('error getting employee from pouchdb',error);
            console.log('pouchdb adapter',db.adapter);
            console.log('pouchdb adapters', Object.keys(PouchDB.adapters))
          } else {
            employee = new Employee(doc.employee);
            employee.set('merchant', Self.merchant);
            employee.credentials = {};
            employee.credentials.password = Self.merchant.get('password');
            employee.credentials.username = Self.merchant.get('merchantname');
            employee.fetch({
              success: function(model, res){
                console.log('successfully got employee', model);
              },
              error: function(err){
                console.log('could not get employee', err);
              }
            });
          }
          Self.employeeModel = employee;
          callback(error, employee);
        });
      }
    };

    parallel.patron = function(callback){
      if(typeof Self.merchant == 'undefined' || Self.merchant.get('merchantname') == ''){
        callback(null, null);
      } else {
        if(typeof Self.patronsCollection != 'undefined'){
          callback(null, Self.patronsCollection);
        } else {
          Self.patronsCollection = new Patrons([],{ merchant: Self.merchant });
          Self.patronsCollection.credentials = {};
          Self.patronsCollection.credentials.password = Self.merchant.get('password');
          Self.patronsCollection.credentials.username = Self.merchant.get('merchantname');
          Self.patronsCollection.fetch({
            success: function(collection, response){
              console.log('successfully fetched patrons collection', collection, response);
            },
            error: function(collection, response){
              console.log('failed to fetched patrons collection', collection, response);
            }
          });
          callback(null, Self.patronsCollection);
        }
      }
    };

    parallel.cards = function(callback){
      if(typeof Self.merchant == 'undefined' || Self.merchant.get('merchantname') == ''){
        callback(null, null);
      } else {
        if(typeof Self.cardsCollection != 'undefined'){
          callback(null, Self.cardsCollection);
        } else {
          Self.cardsCollection = new Cards([],{merchant: Self.merchant});
          Self.cardsCollection.credentials = {};
          Self.cardsCollection.credentials.password = Self.merchant.get('password');
          Self.cardsCollection.credentials.username = Self.merchant.get('merchantname');
          Self.cardsCollection.fetch({
            success: function(collection, response){
              console.log('successfully fetched cards collection', collection, response);
            },
            error: function(collection, response){
              console.log('failed to fetched cards collection', collection, response);
            }
          });
          callback(null, Self.cardsCollection);
        }
      }
    };

    parallel.journals = function(callback){
      if(typeof Self.merchant == 'undefined' || Self.merchant.get('merchantname') == ''){
        callback(null, null);
      } else {
        if(typeof Self.journals != 'undefined'){
          callback(null, Self.journals);
        } else {
          Self.journals = new Journals([],{merchant: Self.merchant});
          Self.journals.credentials = {};
          Self.journals.credentials.password = Self.merchant.get('password');
          Self.journals.credentials.username = Self.merchant.get('merchantname');
          Self.journals.fetch({
            success: function(collection, response){
              console.log('successfully fetched journals collection', collection, response);
            },
            error: function(collection, response){
              console.log('failed to fetched journals collection', collection, response);
            }
          });
          callback(null, Self.journals);
        }
      }
    };

    parallel.currencies = function(callback){
      if(typeof Self.merchant == 'undefined' || Self.merchant.get('merchantname') == '' || typeof Self.merchant.get('access_token') == 'undefined'){
        callback(null, null);
      } else {
        if(typeof Self.currenciesCollection != 'undefined'){
          callback(null, Self.currenciesCollection);
        } else {
          console.log('currencies get', Self.merchant.get('access_token'))
          Self.currenciesCollection = new Currencies([],{merchant: Self.merchant});
          Self.currenciesCollection.credentials = {};
          Self.currenciesCollection.credentials.token = Self.merchant.get('access_token');
          Self.currenciesCollection.fetch({
            success: function(collection, response){
              console.log('successfully fetched currencies collection', collection, response);
            },
            error: function(collection, response){
              console.log('failed to fetched currencies collection', collection, response);
            }
          });
          callback(null, Self.currenciesCollection);
        }
      }
    };

    parallel.employees = function(callback){
      if(typeof Self.merchant == 'undefined' || Self.merchant.get('merchantname') == '' || typeof Self.merchant.get('access_token') == 'undefined'){
        callback(null, null);
      } else {
        if(typeof Self.employeesCollection != 'undefined'){
          callback(null, Self.employeesCollection);
        } else {
          Self.employeesCollection = new Employees([], {merchant: Self.merchant});
          Self.employeesCollection.credentials = {};
          Self.employeesCollection.credentials.username = Self.merchant.get('merchantname');
          Self.employeesCollection.credentials.password = Self.merchant.get('password');
          Self.employeesCollection.fetch({
            success: function(collection, response){
              console.log('successfully fetched employees collection', collection, response);
            },
            error: function(collection, response){
              console.log('failed to fetched employees collection', collection, response);
            }
          });
          callback(null, Self.employeesCollection);
        }
      }
    };

    parallel.templates = function(callback){

      if((typeof Self.merchant == 'undefined' || Self.merchant.get('merchantname') == '' ) && (typeof Self.merchantname == 'undefined' || Self.merchantname == '')){
        callback(null, null);
      } else {
        if(typeof Self.templatesCollection != 'undefined'){
          callback(null, Self.templatesCollection);
        } else {
          if(typeof Self.merchant != 'undefined' && Self.merchant.get('merchantname') != ''){
            Self.templatesCollection = new Templates([], {merchant: Self.merchant});
          } else {
            Self.templatesCollection = new Templates([], {merchant: new Merchant({merchantname: Self.merchantname})});
          }

          Self.templatesCollection.fetch({
            success: function(collection, response){
              console.log('successfully fetched templates collection', collection, response);
            },
            error: function(collection, response){
              console.log('failed to fetched templates collection', collection, response);
            }
          });
          callback(null, Self.templatesCollection);
        }
      }
    };

    async.series(localdb, function(err, localdbResults){
      async.parallel(parallel, done);
    });
  },

	changePage:function (page, options) {
		console.info('changePage called', page, options);
    Self.CurrentView = page; //keep a local reference
    Self.layout.getRegion('pageContainer').show(Self.CurrentView);
    if(typeof options != 'undefined' && typeof options.pageName != 'undefined' && options.pageName == 'welcome' && Self.marketing == false){
      Self.marketingOn();
    } else {
      if(Self.marketing == true){
        Self.marketingOff();
      }
    }
	},

  marketing : false,

  lightTheme : function(){
    console.log('router.lightTheme');
    $('link.dashboardDarkTheme').prop('disabled', true);
    $('link.dashboardLightTheme').prop('disabled', false);
    $('body').css('background-color', '#FFFFFF')
  },

  darkTheme : function(){
    console.log('router:darkTheme');
    $('link.dashboardDarkTheme').prop('disabled', false);
    $('link.dashboardLightTheme').prop('disabled', true);
    $('body').css('background-color', '#202020')
  },

  marketingOn : function(){
    console.log('marketing on');
    $('link.dashboard-darkTheme').prop('disabled', true);
    $('link.marketing').prop('disabled', false);
    $('#mainContainer').removeClass('container');
    $('#page').removeClass('content').removeClass('col-md-8');
    $('#body').css('padding-top', 0);
    $('#body').css('padding-bottom', 0);
    Self.marketing = true;
  },

  marketingOff : function(){
    console.log('marketing off');
    $('link.dashboard-darkTheme').prop('disabled', false);
    $('link.marketing').prop('disabled', true);
    $('#mainContainer').addClass('container');
    $('#page').addClass('content').addClass('col-md-8');
    $('#body').css('padding-top', '20px');
    $('#body').css('padding-bottom', '20px');
    Self.marketing = false;
  },

  navigationOff : function(){
    console.log('app.router.navigationOff');
    $('#navigation').hide();
  },

  navigationOn : function(){
    console.log('app.router.navigationOn');
    $('#navigation').show();
  },

});

console.info('router loaded');
