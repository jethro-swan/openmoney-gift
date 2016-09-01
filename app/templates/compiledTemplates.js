module.exports = function(Handlebars) {

this["openmoney"] = this["openmoney"] || {};

this["openmoney"]["breadcrumb"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data}) : helper)))
    + "</a>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"linkText","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.link : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});

this["openmoney"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", buffer = 
  "  <div id=\"statsButton\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"print\" class=\"btn btn-lg btn-primary-outline\">Print Card</button>\n    <button type=\"button\" name=\"showedit\" class=\"btn btn-lg btn-primary-outline\" >\n      <strong>Edit</strong>\n    </button>\n  </div>\n  <div id=\"stats\" class=\"statcard statcard-success p-a-md m-b text-left\">\n    <span class=\"statcard-number\" style=\"float: left\">\n      <h1>Card#: "
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h1>\n      <div><h2 class=\"statcard-number text-left\">BALANCE</h2></div>\n";
  stack1 = ((helper = (helper = helpers.currencies || (depth0 != null ? depth0.currencies : depth0)) != null ? helper : alias2),(options={"name":"currencies","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencies) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </span>\n    <span id=\"qrcode-image\">\n      <canvas id=\"qr\" style=\"margin-left: auto; margin-right: 0;\"></canvas>\n    </span>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.balance : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        <div><h3 class=\"statcard-number text-left\">\n          "
    + alias3(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n        </h3></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "style=\"display: none;\"";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"hidden\" name=\"_id\" value=\""
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" />";
},"9":function(container,depth0,helpers,partials,data) {
    return "Edit";
},"11":function(container,depth0,helpers,partials,data) {
    return "New";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"card-history\">\n    <h2><strong>Card History</strong></h2>\n    <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n      <button type=\"button\" name=\"newTransaction\" class=\"btn btn-lg btn-success-outline\" >\n        <strong>Process Transaction</strong>\n      </button>\n    </div>\n    <div class=\"table-full\">\n      <table class=\"table\" data-sort=\"basic\">\n        <thead>\n          <tr>\n            <th>Date</th>\n            <th>Load or Redeem</th>\n            <th>Amount</th>\n            <th>Currency</th>\n          </tr>\n        </thead>\n        <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.journals : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\n      </table>\n    </div>\n  </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "            <tr id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n              <td>"
    + alias4((helpers.prettify_date || (depth0 && depth0.prettify_date) || alias2).call(alias1,(depth0 != null ? depth0.timestamp : depth0),{"name":"prettify_date","hash":{},"data":data}))
    + "</td>\n              <td>";
  stack1 = ((helper = (helper = helpers.load || (depth0 != null ? depth0.load : depth0)) != null ? helper : alias2),(options={"name":"load","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.load) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.redeem || (depth0 != null ? depth0.redeem : depth0)) != null ? helper : alias2),(options={"name":"redeem","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.redeem) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n              <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.amount : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n              <td>"
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "</td>\n            </tr>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "Load";
},"18":function(container,depth0,helpers,partials,data) {
    return "Redeem";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<style>\n[data-sort=table] > tbody > tr:hover{\n  background-color: #159c6e;\n  cursor: pointer;\n}\n@media print {\n  button[name=showedit] {\n    display: none;\n  }\n  button[name=newTransaction] {\n    display: none;\n  }\n  button[name=print] {\n    display: none;\n  }\n  .card-history{\n    display: none;\n  }\n  .email-link{\n    display: none;\n  }\n  .table-head{\n    display: none;\n  }\n  #dashhead {\n    display: none;\n  }\n  .navigation {\n    display: none;\n  }\n  .breadcrumbs {\n    display: none;\n  }\n  .receipt {\n    border-bottom: 1px dashed black;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @page { margin: 0; }\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <form id='cardForm' "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n    <div class=\"form-group text-left\">\n      <label for=\"key\">Card Number</label>\n      <input type=\"text\" id=\"key\" name=\"key\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Card Number\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-right\">\n      <button type=\"button\" name=\"cancel\" class=\"btn btn-lg btn-primary-outline\" >Cancel</button>\n      <button type=\"button\" name=\"upsert\" class=\"btn btn-lg btn-primary-outline\" >\n        <strong>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "</strong>\n      </button>\n    </div>\n  </form>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["openmoney"]["currency"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <input type=\"hidden\" name=\"id\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />";
},"3":function(container,depth0,helpers,partials,data) {
    return "Edit";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.currencyName : depth0),"add",{"name":"if_eq","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "Add";
},"8":function(container,depth0,helpers,partials,data) {
    return "New";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "\n  <!-- <h2><strong>Accounts</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newAccount\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Account</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table accounts\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Account</th>\n          <th>Balance</th>\n          <th>Volume</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.accounts : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div> -->\n\n  <!-- <h2><strong>Ledger</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newTransaction\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>Process Journal Entry</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table\" data-sort=\"basic\">\n      <thead>\n        <tr>\n          <th>Timestamp</th>\n          <th>From</th>\n          <th>To</th>\n          <th>Amount</th>\n          <th>balance</th>\n          <th>volume</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.journals : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div> -->\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = helpers.accountName || (depth0 != null ? depth0.accountName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accountName","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n            <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.volume : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n          </tr>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = helpers.charge || (depth0 != null ? depth0.charge : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"charge","hash":{},"data":data}) : helper)))
    + "\">\n              <td>"
    + alias4((helpers.prettify_date_short || (depth0 && depth0.prettify_date_short) || alias2).call(alias1,(depth0 != null ? depth0.created : depth0),{"name":"prettify_date_short","hash":{},"data":data}))
    + "</td>\n              <td>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.fromstewardname : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n              <td>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tostewardname : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n              <td>"
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.charge : depth0),"CREDIT",{"name":"if_eq","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.amount : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n              <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n              <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.volume : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n            </tr>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#stewards/"
    + alias4(((helper = (helper = helpers.fromstewardname || (depth0 != null ? depth0.fromstewardname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fromstewardname","hash":{},"data":data}) : helper)))
    + "/accounts/"
    + alias4(((helper = (helper = helpers.from_account || (depth0 != null ? depth0.from_account : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from_account","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.from_account_namespace || (depth0 != null ? depth0.from_account_namespace : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from_account_namespace","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.currencyName || (depth0 != null ? depth0.currencyName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyName","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.from_account || (depth0 != null ? depth0.from_account : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from_account","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.from_account_namespace || (depth0 != null ? depth0.from_account_namespace : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from_account_namespace","hash":{},"data":data}) : helper)))
    + "</a>";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.from_account || (depth0 != null ? depth0.from_account : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from_account","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.from_account_namespace || (depth0 != null ? depth0.from_account_namespace : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from_account_namespace","hash":{},"data":data}) : helper)));
},"20":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#stewards/"
    + alias4(((helper = (helper = helpers.tostewardname || (depth0 != null ? depth0.tostewardname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tostewardname","hash":{},"data":data}) : helper)))
    + "/accounts/"
    + alias4(((helper = (helper = helpers.to_account || (depth0 != null ? depth0.to_account : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"to_account","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.to_account_namespace || (depth0 != null ? depth0.to_account_namespace : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"to_account_namespace","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.currencyName || (depth0 != null ? depth0.currencyName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyName","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.to_account || (depth0 != null ? depth0.to_account : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"to_account","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.to_account_namespace || (depth0 != null ? depth0.to_account_namespace : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"to_account_namespace","hash":{},"data":data}) : helper)))
    + "</a>";
},"22":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.to_account || (depth0 != null ? depth0.to_account : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"to_account","hash":{},"data":data}) : helper)))
    + "."
    + alias4(((helper = (helper = helpers.to_account_namespace || (depth0 != null ? depth0.to_account_namespace : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"to_account_namespace","hash":{},"data":data}) : helper)));
},"24":function(container,depth0,helpers,partials,data) {
    return "-";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<style>\n[data-sort=table] > tbody > tr:hover{\n  background-color: #159c6e;\n  cursor: pointer;\n}\ntr.DEBIT {\n  color: #159c6e;\n}\ntr.CREDIT {\n  color: #E64759;\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n  <form id='currencyForm' >\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"form-group text-left\">\n      <label for=\"key\">Currency Name (ex. Loyalty)</label>\n      <input type=\"text\" id=\"currency_name\" name=\"currency_name\" value=\""
    + alias4(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Currency Name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"key\">Currency Units (ex. points)</label>\n      <input type=\"text\" id=\"currency\" name=\"currency\" value=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Currency Units\" class=\"form-control\" />\n    </div>\n    <div class=\"table-full form-group text-left\">\n      <div>\n        <label for=\"key\">Currency Color:</label>\n      </div>\n      <input type=\"hidden\" name=\"currency_color\" value=\""
    + alias4(((helper = (helper = helpers.currency_color || (depth0 != null ? depth0.currency_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_color","hash":{},"data":data}) : helper)))
    + "\"/>\n      <table class=\"table\">\n        <tbody class=\"table-rows\">\n          <tr>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"default\" class=\"btn btn-lg btn-pill btn-default\">Default</button>\n            </td>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"primary\" class=\"btn btn-lg btn-pill btn-primary\">Primary</button>\n            </td>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"success\" class=\"btn btn-lg btn-pill btn-success\">Success</button>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"info\" class=\"btn btn-lg btn-pill btn-info\">Info</button>\n            </td>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"warning\" class=\"btn btn-lg btn-pill btn-warning\">Warning</button>\n            </td>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"danger\" class=\"btn btn-lg btn-pill btn-danger\">Danger</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"form-group text-left\">\n        <label for=\"contributionPerPatron\">Contribution Per new Patron.</label>\n        <input type=\"number\" id=\"contributionPerPatron\" name=\"contributionPerPatron\" value=\"\" placeholder=\"Contribution Per Patron\" class=\"form-control\" />\n      </div>\n    </div>\n\n\n    <div class=\"form-group text-right\">\n      <button type=\"button\" name=\"cancel\" class=\"btn btn-lg btn-primary-outline\" >Cancel</button>\n      <button type=\"button\" name=\"upsert\" class=\"btn btn-lg btn-primary-outline\" >\n        <strong>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</strong>\n      </button>\n    </div>\n  </form>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["openmoney"]["dashhead"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", buffer = 
  "<div class=\"dashhead dashhead-style\">\n  <div class=\"dashhead-titles\">\n    <h6 class=\"dashhead-subtitle\">OPENMONEY.GIFT</h6>\n    <h3 class=\"dashhead-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n  </div>\n  <div class=\"dashhead-toolbar\">\n    <button type=\"button\" id=\"employee-button\" class=\"btn btn-xs btn-pill btn-danger\" style=\"margin-top: 7px;\"><span class=\"icon icon-log-out\"></span> Employee : ";
  stack1 = ((helper = (helper = helpers.employee || (depth0 != null ? depth0.employee : depth0)) != null ? helper : alias2),(options={"name":"employee","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.employee) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </button>\n    <span class=\"dashhead-toolbar-divider hidden-xs\"></span>\n    <div id=\"pincodeModal\" class=\"modal\" style=\"display: none;\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" name=\"close\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\">Employee Pin Code:</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div id=\"error-modal-notification\" class=\"notifications center-block alert alert-danger text-center\" role=\"alert\" style=\"display: none;\"></div>\n            <input type=\"password\" name=\"code\" value=\"\" placeholder=\"Employee Pin Code\" class=\"form-control\"/>\n          </div>\n          <div class=\"modal-actions\">\n            <button type=\"button\" name=\"cancel\" class=\"btn-link modal-action\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"button\" name=\"setEmployee\" class=\"btn-link modal-action\" data-dismiss=\"modal\">\n              <strong>Set Employee</strong>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"dashhead-toolbar\">\n    <button type=\"button\" id=\"help-button\" class=\"btn btn-xs btn-pill btn-info\" style=\"margin-top: 7px;\"><span class=\"icon icon-help-with-circle\"></span> Help</button>\n  </div>\n</div>\n<div id='breadcrumbs' class=\"breadcrumbs\"></div>\n<div id=\"success-notification\" class=\"notifications center-block alert alert-success text-center\" role=\"alert\" style=\"display: none;\"></div>\n<div id=\"error-notification\" class=\"notifications center-block alert alert-danger text-center\" role=\"alert\" style=\"display: none;\"></div>\n";
},"useData":true});

this["openmoney"]["employee"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div id=\"statsButton\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"showedit\" class=\"btn btn-lg btn-primary-outline\" >\n      <strong>Edit</strong>\n    </button>\n  </div>\n  <div id=\"stats\" class=\"statcard statcard-primary p-a-md m-b\">\n    <h2><div class=\"statcard-desc\">EMPLOYEE: "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div></h2>\n    <h3>PIN: "
    + alias4(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data}) : helper)))
    + "</h3\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "style=\"display: none;\"";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <input type=\"hidden\" name=\"id\" value=\""
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" />";
},"7":function(container,depth0,helpers,partials,data) {
    return "Edit";
},"9":function(container,depth0,helpers,partials,data) {
    return "New";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<style>\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <form id='employeeForm' "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"form-group text-left\">\n      <label for=\"key\">Employee Name</label>\n      <input type=\"text\" id=\"name\" name=\"name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Employee Name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"key\">Pin Code</label>\n      <input type=\"password\" id=\"password\" name=\"code\" value=\""
    + alias4(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Pin Code\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-right\">\n      <button type=\"button\" name=\"cancel\" class=\"btn btn-lg btn-primary-outline\" >Cancel</button>\n      <button type=\"button\" name=\"upsert\" class=\"btn btn-lg btn-primary-outline\" >\n        <strong>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "</strong>\n      </button>\n    </div>\n  </form>\n</div>\n";
},"useData":true});

this["openmoney"]["forgot"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"main-content\" class=\"main-content text-center\">\n  <div class=\"main-functions center-block panel panel-default\">\n    <div class=\"panel-heading text-left\"><a href=\"#login\" id='back'><span class=\"glyphicon glyphicon-chevron-left\"></span></a> <strong>FORGOT PASSWORD</strong></div>\n    <div class=\"panel-body\">\n      <form id=\"forgot\">\n        <div class=\"form-group text-left\">\n          <label for=\"merchantname\">Merchant Name or Email</label>\n          <input type=\"text\" id=\"merchantname\" name=\"merchantname\" value=\"\" placeholder=\"Merchant Name or Email\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group text-right\">\n          <button type=\"button\" name=\"forgot\" id=\"forgot-button\" class=\"btn btn-primary\">Forgot Password</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["openmoney"]["layout"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"navigation\"></div>\n<div class=\"col-md-8 content\">\n  <div id=\"dashhead\"></div>\n  <div id=\"pageContainer\"></div>\n</div>\n";
},"useData":true});

this["openmoney"]["login"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<style type=\"text/css\">\n</style>\n<div id=\"main-content\" class=\"main-content text-center\">\n    <div id=\"success-notification\" class=\"main-functions center-block alert alert-success\" role=\"alert\" style=\"display: none;\"></div>\n    <div id=\"error-notification\" class=\"main-functions center-block alert alert-danger\" role=\"alert\" style=\"display: none;\"></div>\n    <div class=\"main-functions panel panel-default center-block\">\n      <div class=\"panel-heading text-left\"><strong>LOGIN</strong></div>\n      <div class=\"panel-body\">\n        <form id=\"login\" class=\"login\">\n          <div class=\"form-group text-left\">\n            <label for=\"merchantname\">Merchant Name</label>\n            <input type=\"text\" id=\"merchantname\" name=\"merchantname\" value=\"\" placeholder=\"Merchant Name\" class=\"form-control\" />\n          </div>\n          <div class=\"form-group text-left\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"Password\" class=\"form-control\"/>\n          </div>\n          <div class=\"form-group text-right\">\n            <button type=\"button\" name=\"login-button\" id=\"login-button\" class=\"btn btn-primary btn-lg text-uppercase\">Login</button>\n          </div>\n        </form>\n        <div class=\"forgot\">\n            <small><a href=\"#forgot\" class=\"link light forgot-link\">Forgot your password?</a></small>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"fb-signin\" style=\"display: none;\">\n        <button name=\"fb\" class=\"fb-button\">\n            <table class=\"light\" style=\"width:100%;\">\n                <tr style=\"width:100%;\">\n                    <td style=\"width:25%;text-align:right;\">\n                        <img src=\"public/assets/images/login-fb-logo.png\" class=\"fb-logo\"/>\n                    </td>\n                    <td style=\"width:75%;text-align:left;\">Sign in with Facebook\n                    </td>\n                </tr>\n            </table>\n        </button>\n    </div>\n    <div class=\"register\">\n        <span style=\"color: #FFFFFF;\">Don't have an account?<span>\n        <button type=\"button\" name=\"register\" id=\"register-button\" class=\"btn btn-success text-uppercase\">Sign up</button>\n    </div>\n    <div id=\"main-spacer\" class=\"main-spacer\">\n        <div style=\"height:100%;\">&nbsp;</div>\n    </div>\n</div>\n";
},"useData":true});

this["openmoney"]["merchant"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div id=\"statsButton\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" id=\"logout-button\" class=\"btn btn-xs btn-pill btn-danger\" style=\"margin-top: 7px;\"><span class=\"icon icon-log-out\"></span> Logout : "
    + alias4(((helper = (helper = helpers.merchantname || (depth0 != null ? depth0.merchantname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"merchantname","hash":{},"data":data}) : helper)))
    + " </button>\n    <!-- <button type=\"button\" name=\"showedit\" class=\"btn btn-lg btn-primary-outline\" >\n      <strong>Edit</strong>\n    </button> -->\n  </div>\n  <div id=\"stats\" class=\"statcard statcard-info p-a-md m-b\">\n    <h2><div class=\"statcard-number\">Merchant: "
    + alias4(((helper = (helper = helpers.merchantname || (depth0 != null ? depth0.merchantname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"merchantname","hash":{},"data":data}) : helper)))
    + "</div></h2>\n    <div class=\"statcard-desc\">EMAIL: <a href=\"mailto:"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" style='color:#FFF'>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a></div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "style=\"display: none;\"";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"hidden\" name=\"id\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />";
},"7":function(container,depth0,helpers,partials,data) {
    return "Edit";
},"9":function(container,depth0,helpers,partials,data) {
    return "Add";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "  <h2><strong>Currencies</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newCurrency\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Currency</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table currencies\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Currency</th>\n          <th>Enable or Disable</th>\n          <th>Default</th>\n          <th>Contribution Per Patron</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.currencies : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n\n  <h2><strong>Employees</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newEmployee\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Employees</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table employees\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Employee Name</th>\n          <th>Enable or Disable</th>\n          <th>Merchant</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.employees : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "          <tr id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n            <td><a href=\"#merchants/"
    + alias4(container.lambda((depths[1] != null ? depths[1].merchantname : depths[1]), depth0))
    + "/administrative/currencies/"
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + ")</a></td>\n            <td>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~enable\" name=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~active\" class=\"active-radio\" ";
  stack1 = ((helper = (helper = helpers.enabled || (depth0 != null ? depth0.enabled : depth0)) != null ? helper : alias2),(options={"name":"enabled","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.enabled) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Enable\n                </label>\n              </div>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~disable\" name=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~active\" class=\"active-radio\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.enabled : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Disable\n                </label>\n              </div>\n            </td>\n            <td>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~default\" name=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~default\" class=\"default-radio\" ";
  stack1 = ((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(options={"name":"default","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers["default"]) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Default\n                </label>\n              </div>\n            </td>\n            <td class=\"text-right\">\n              "
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.contributionPerPatron : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n            </td>\n          </tr>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "          <tr id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n            <td><a href=\"#merchants/"
    + alias4(container.lambda((depths[1] != null ? depths[1].merchantname : depths[1]), depth0))
    + "/administrative/employee/"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></td>\n            <td>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeEnable\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeActive\" class=\"employeeActive-radio\" ";
  stack1 = ((helper = (helper = helpers.enabled || (depth0 != null ? depth0.enabled : depth0)) != null ? helper : alias2),(options={"name":"enabled","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.enabled) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Enable\n                </label>\n              </div>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeDisable\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeActive\" class=\"employeeActive-radio\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.enabled : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Disable\n                </label>\n              </div>\n            </td>\n            <td>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeDefault\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeDefault\" class=\"employeeDefault-radio\" ";
  stack1 = ((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(options={"name":"default","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers["default"]) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Merchant\n                </label>\n              </div>\n            </td>\n          </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<style>\n\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <form id='merchantForm' "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.merchantname : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"form-group text-left\">\n      <label for=\"merchantname\">Merchant Name</label>\n      <input type=\"text\" id=\"merchantname\" name=\"merchantname\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.merchantname || (depth0 != null ? depth0.merchantname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"merchantname","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Merchantname Name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-right\">\n      <button type=\"button\" name=\"cancel\" class=\"btn btn-lg btn-primary-outline\" >Cancel</button>\n      <button type=\"button\" name=\"upsert\" class=\"btn btn-lg btn-primary-outline\" >\n        <strong>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</strong>\n      </button>\n    </div>\n  </form>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true});

this["openmoney"]["merchants"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr id=\""
    + alias4(((helper = (helper = helpers.merchantname || (depth0 != null ? depth0.merchantname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"merchantname","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = helpers.merchantname || (depth0 != null ? depth0.merchantname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"merchantname","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n          </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<style>\n[data-sort=table] > tbody > tr:hover{\n  background-color: #159c6e;\n  cursor: pointer;\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n  <h2><strong>Merchants</strong></h2>\n  <div class=\"row text-right\" style=\"padding-top: 20px;padding-bottom: 20px;\">\n    <button type=\"button\" name=\"addMerchant\" class=\"btn btn-lg btn-success-outline\">Add Merchant</button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table display\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th class=\"\">Merchant Name</th>\n          <th class=\"\">Email</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.collection : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n</div>\n";
},"useData":true});

this["openmoney"]["navigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.merchantname || (depth0 != null ? depth0.merchantname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"merchantname","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "class=\"active\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<div class=\"navigation col-md-3 sidebar right-border\">\n  <nav class=\"sidebar-nav\">\n    <div class=\"sidebar-header\">\n      <button class=\"nav-toggler nav-toggler-md sidebar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-toggleable-md\">\n        <span class=\"sr-only\">Toggle nav</span>\n      </button>\n      <a class=\"sidebar-brand\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/transactions\">\n        <img id=\"logo\" src=\"public/assets/images/open-money-gift-text-vector.svg\" class=\"svg img-responsive center-block\" alt=\"Openmoney Logo\" style=\"height: 75px;\"/>\n      </a>\n    </div>\n    <div id=\"nav-toggleable-md\" class=\"nav-toggleable-md collapse\">\n      <ul class=\"nav nav-bordered nav-stacked\">\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"patrons",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"patrons\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/patrons\" class=\"nav-padding\">\n            <span class=\"icon icon-v-card icon-padding\"></span>\n            Patrons\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"transactions",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"transactions\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/transactions\" class=\"nav-padding\">\n            <span class=\"icon icon-dial-pad icon-padding\"></span>\n            Transactions\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"reports",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"reports\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/reports\" class=\"nav-padding\">\n            <span class=\"icon icon-area-graph icon-padding\"></span>\n            Reports\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"administrative",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"administrative\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/administrative\" class=\"nav-padding\">\n            <span class=\"icon icon-tools icon-padding\"></span>\n            Administrative\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"supplies",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"supplies\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/supplies\" class=\"nav-padding\">\n            <span class=\"icon icon-credit-card icon-padding\"></span>\n            Supplies\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"support",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"support\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "/support\" class=\"nav-padding\">\n            <span class=\"icon icon-old-phone icon-padding\"></span>\n            Tech Support\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n";
},"useData":true});

this["openmoney"]["patron"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "\n  <div id=\"statsButton\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"print\" class=\"btn btn-lg btn-primary-outline\">Print Patron</button>\n    <button type=\"button\" name=\"showedit\" class=\"btn btn-lg btn-primary-outline\" >\n      <strong>Edit</strong>\n    </button>\n  </div>\n  <div id=\"stats\" class=\"statcard statcard-primary p-a-md m-b\">\n    <h2><div class=\"statcard-desc\">"
    + alias4(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstname","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</div></h2>\n    <h3><a href=\"mailto:"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "?subject="
    + alias4(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstname","hash":{},"data":data}) : helper)))
    + "%20"
    + alias4(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "%20"
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\" style=\"color: #FFF;\" class=\"email-link\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a></h3>\n    <h4>"
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</h4>\n    <h2 class=\"statcard-number text-right\">BALANCE</h2>\n";
  stack1 = ((helper = (helper = helpers.currencies || (depth0 != null ? depth0.currencies : depth0)) != null ? helper : alias2),(options={"name":"currencies","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencies) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.balance : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "\">\n        <h3 class=\"statcard-number text-right\">\n          "
    + alias4(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n        </h3>\n      </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "style=\"display: none;\"";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"hidden\" name=\"_id\" value=\""
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" />";
},"9":function(container,depth0,helpers,partials,data) {
    return "Edit";
},"11":function(container,depth0,helpers,partials,data) {
    return "New";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "  <h2><strong>Cards</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newCard\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Card</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table\" data-sort=\"table\">\n      <thead class=\"table-head\">\n        <tr>\n          <th>Card</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "          <tr id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n            <td>\n              <div id=\"card-stats\" class=\"statcard statcard-success p-a-md m-b\">\n                <span class=\"statcard-number\" style=\"float: left\">\n                  <h1>Card#: "
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h1>\n                  <div><h2 class=\"statcard-number text-left\">BALANCE</h2></div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.currencies || (depth0 != null ? depth0.currencies : depth0)) != null ? helper : alias2),(options={"name":"currencies","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencies) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </span>\n                <span id=\"qrcode-image\">\n                  <canvas id=\"qr"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"margin-left: auto; margin-right: 0;\"></canvas>\n                </span>\n              </div>\n            </td>\n          </tr>\n";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                    <h3 class=\"statcard-number text-left\">\n                      "
    + alias3(((depths[1] && depths[1].decimal_places) || alias2).call(alias1,depth0,{"name":"../decimal_places","hash":{},"data":data}))
    + " "
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\n                    </h3>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.balance : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                    <div><h3 class=\"statcard-number text-left\">\n                      "
    + alias3(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n                    </h3></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<style>\n[data-sort=table] > tbody > tr:hover{\n  background-color: #1686b0;\n  cursor: pointer;\n}\n@media print {\n  button[name=showedit] {\n    display: none;\n  }\n  button[name=newCard] {\n    display: none;\n  }\n  button[name=print] {\n    display: none;\n  }\n  .email-link{\n    display: none;\n  }\n  .table-head{\n    display: none;\n  }\n  .dashhead {\n    display: none;\n  }\n  .navigation {\n    display: none;\n  }\n  .breadcrumbs {\n    display: none;\n  }\n  .receipt {\n    border-bottom: 1px dashed black;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @page { margin: 0; }\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <form id='patronForm' "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"form-group text-left\">\n      <label for=\"firstname\">First name</label>\n      <input type=\"text\" id=\"firstname\" name=\"firstname\" value=\""
    + alias4(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstname","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"First Name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"lastname\">Last name</label>\n      <input type=\"text\" id=\"lastname\" name=\"lastname\" value=\""
    + alias4(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Last Name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" name=\"email\" value=\""
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Email\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"email\">Phone</label>\n      <input type=\"text\" id=\"phone\" name=\"phone\" value=\""
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Phone\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-right\">\n      <button type=\"button\" name=\"cancel\" class=\"btn btn-lg btn-primary-outline\" >Cancel</button>\n      <button type=\"button\" name=\"upsert\" class=\"btn btn-lg btn-primary-outline\" >\n        <strong>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</strong>\n      </button>\n    </div>\n  </form>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true});

this["openmoney"]["patrons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstname","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</td>\n          </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<style>\n[data-sort=table] > tbody > tr:hover{\n  background-color: #159c6e;\n  cursor: pointer;\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n  <div class=\"row text-right\" style=\"padding-top: 20px;padding-bottom: 20px;\">\n    <button type=\"button\" name=\"newPatron\" class=\"btn btn-lg btn-success-outline\">New Patrons</button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table display\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th class=\"\">Firstname</th>\n          <th class=\"\">Lastname</th>\n          <th class=\"\">Email</th>\n          <th class=\"\">Phone</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.collection : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n</div>\n";
},"useData":true});

this["openmoney"]["receipt"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.currency_color || (depth0 != null ? depth0.currency_color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"currency_color","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.merchantname || (depth0 != null ? depth0.merchantname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"merchantname","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"email","hash":{},"data":data}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"currency_name","hash":{},"data":data}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.load : depth0),true,{"name":"if_eq","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "Load";
},"12":function(container,depth0,helpers,partials,data) {
    return "Redeem";
},"14":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.prettify_date_short || (depth0 && depth0.prettify_date_short) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.timestamp : depth0),{"name":"prettify_date_short","hash":{},"data":data}));
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"key","hash":{},"data":data}) : helper)));
},"18":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.decimal_places || (depth0 && depth0.decimal_places) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.amount : depth0),{"name":"decimal_places","hash":{},"data":data}));
},"20":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.balances : depth0),{"name":"each","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "           <div>"
    + alias3(((depths[1] && depths[1].decimal_places) || alias2).call(alias1,depth0,{"name":"../decimal_places","hash":{},"data":data}))
    + " "
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<style>\n@media print {\n  .receipt-buttons {\n    display: none;\n  }\n  .dashhead {\n    display: none;\n  }\n  .navigation {\n    display: none;\n  }\n  .breadcrumbs {\n    display: none;\n  }\n  .receipt {\n    border-bottom: 1px dashed black;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @page { margin: 0; }\n}\n</style>\n<div class=\"receipt-buttons col-sm-6 text-center\">\n  <div style=\"padding-top: 10px; padding-bottom:10px;\">\n    <button type=\"button\" name=\"email\" class=\"btn btn-lg btn-primary-outline\">Email Receipt</button>\n  </div>\n  <div style=\"padding-top: 10px; padding-bottom:10px;\">\n    <button type=\"button\" name=\"print\" class=\"btn btn-lg btn-primary-outline\">Print Receipt</button>\n  </div>\n  <div style=\"padding-top: 10px; padding-bottom:10px;\">\n    <button type=\"button\" name=\"void\" class=\"btn btn-lg btn-warning-outline\">Void</button>\n  </div>\n  <div style=\"padding-top: 10px; padding-bottom:10px;\">\n    <button type=\"button\" name=\"done\" class=\"btn btn-lg btn-success-outline\">Done</button>\n  </div>\n</div>\n<div class=\"receipt col-sm-6\">\n  <div class=\"statcard statcard-";
  stack1 = ((helper = (helper = helpers.currencyObject || (depth0 != null ? depth0.currencyObject : depth0)) != null ? helper : alias2),(options={"name":"currencyObject","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencyObject) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " p-a-md m-b text-center\" style=\"padding-bottom: 20px;\">\n    <div id='merchantname'>";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n    <div id='email' style=\"padding-bottom: 20px;\">";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n    <div id='action'>\n      <h3>\n        ";
  stack1 = ((helper = (helper = helpers.currencyObject || (depth0 != null ? depth0.currencyObject : depth0)) != null ? helper : alias2),(options={"name":"currencyObject","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencyObject) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = ((helper = (helper = helpers.journal || (depth0 != null ? depth0.journal : depth0)) != null ? helper : alias2),(options={"name":"journal","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.journal) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h3>\n    </div>\n    <div id='date' class='text-left'>Timestamp: <span style=\"float:right\">";
  stack1 = ((helper = (helper = helpers.journal || (depth0 != null ? depth0.journal : depth0)) != null ? helper : alias2),(options={"name":"journal","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.journal) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "</span></div>\n    <div id='key' class='text-left'>\n      Card Number:\n      <span style=\"float:right;\">";
  stack1 = ((helper = (helper = helpers.card || (depth0 != null ? depth0.card : depth0)) != null ? helper : alias2),(options={"name":"card","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.card) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "</span>\n    </div>\n    <div id='amount' class='text-left' style=\"padding-top: 20px;\">\n      <strong>\n        Transaction Amount:\n        <span style=\"float:right;\">\n            ";
  stack1 = ((helper = (helper = helpers.journal || (depth0 != null ? depth0.journal : depth0)) != null ? helper : alias2),(options={"name":"journal","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.journal) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " "
    + container.escapeExpression(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "\n        </span>\n      </strong>\n    </div>\n    <div id='balance' class='text-right' >\n      <strong>\n        <span style=\"float:left;\">\n          Remaining Balance(s):\n        </span>\n";
  stack1 = ((helper = (helper = helpers.card || (depth0 != null ? depth0.card : depth0)) != null ? helper : alias2),(options={"name":"card","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.card) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </strong>\n    </div>\n  </div>\n</div>\n";
},"useData":true,"useDepths":true});

this["openmoney"]["register"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"main-content\" class=\"main-content text-center\">\n  <div class=\"main-functions center-block panel panel-default\">\n    <div class=\"panel-heading text-left\"><a href=\"#login\" id='back'><span class=\"glyphicon glyphicon-chevron-left\"></span></a> <strong>REGISTRATION</strong></div>\n    <div class=\"panel-body\">\n      <form id=\"register\">\n        <div class=\"form-group text-left\">\n          <label for=\"merchantname\">Merchant Name</label>\n          <input type=\"text\" id=\"merchantname\" name=\"merchantname\" value=\"\" placeholder=\"Merchant Name\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group text-left\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" id=\"email\" name=\"email\" value=\"\" placeholder=\"Email\" class=\"form-control\"/>\n        </div>\n        <div class=\"form-group text-left\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"Password\" class=\"form-control\"/>\n        </div>\n        <div class=\"form-group text-right\">\n          <button type=\"button\" name=\"register\" id=\"register-button\" class=\"btn btn-primary\">Register</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div id=\"main-spacer\" class=\"main-spacer\">\n      <div style=\"height:100%;\">&nbsp;</div>\n  </div>\n</div>\n";
},"useData":true});

this["openmoney"]["report"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.currency_color || (depth0 != null ? depth0.currency_color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"currency_color","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"currency_name","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "        <tr id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n          <td>"
    + alias4((helpers.prettify_date_short || (depth0 && depth0.prettify_date_short) || alias2).call(alias1,(depth0 != null ? depth0.timestamp : depth0),{"name":"prettify_date_short","hash":{},"data":data}))
    + "</td>\n          <td><a href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/patrons/"
    + alias4(((helper = (helper = helpers.cardholderID || (depth0 != null ? depth0.cardholderID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardholderID","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.patron || (depth0 != null ? depth0.patron : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patron","hash":{},"data":data}) : helper)))
    + "</a></td>\n          <td>"
    + alias4(((helper = (helper = helpers.employee || (depth0 != null ? depth0.employee : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"employee","hash":{},"data":data}) : helper)))
    + "</td>\n          <td><a href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/patrons/"
    + alias4(((helper = (helper = helpers.cardholderID || (depth0 != null ? depth0.cardholderID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardholderID","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</a></td>\n          <td>";
  stack1 = ((helper = (helper = helpers.load || (depth0 != null ? depth0.load : depth0)) != null ? helper : alias2),(options={"name":"load","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.load) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.redeem || (depth0 != null ? depth0.redeem : depth0)) != null ? helper : alias2),(options={"name":"redeem","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.redeem) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n          <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.amount : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n          <!-- <td>"
    + alias4(((helper = (helper = helpers.employeeID || (depth0 != null ? depth0.employeeID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"employeeID","hash":{},"data":data}) : helper)))
    + "</td> -->\n        </tr>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.merchantname || (depth0 != null ? depth0.merchantname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"merchantname","hash":{},"data":data}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    return "Load";
},"11":function(container,depth0,helpers,partials,data) {
    return "Redeem";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "<div id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "\" class=\"statcard statcard-";
  stack1 = ((helper = (helper = helpers.currencyObject || (depth0 != null ? depth0.currencyObject : depth0)) != null ? helper : alias2),(options={"name":"currencyObject","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencyObject) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " p-a-md m-b\">\n  <h1> ";
  stack1 = ((helper = (helper = helpers.currencyObject || (depth0 != null ? depth0.currencyObject : depth0)) != null ? helper : alias2),(options={"name":"currencyObject","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencyObject) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </h1>\n  <h3 class=\"statcard-number text-right\">\n    BALANCE "
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n\n  </h3>\n  <h3 class=\"statcard-number text-right\">\n    VOLUME "
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.volume : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n  </h3>\n</div>\n<div class=\"col-sm-6\" style=\"padding-bottom: 20px;\">\n  <div class=\"form-group text-left\">\n    <label for=\"startDate\">Start Date:</label>\n    <div class=\"input-with-icon\">\n      <input type=\"text\" name=\"startDate\" value=\""
    + alias4(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDate","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Start Date\" class=\"form-control\">\n      <span class=\"icon icon-calendar\"></span>\n    </div>\n  </div>\n</div>\n<div class=\"col-sm-6\" style=\"padding-bottom: 20px;\">\n  <div class=\"form-group text-left\">\n    <label for=\"endDate\">End Date:</label>\n    <div class=\"input-with-icon\">\n      <input type=\"text\" name=\"endDate\" value=\""
    + alias4(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDate","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"End Date\" class=\"form-control\">\n      <span class=\"icon icon-calendar\"></span>\n    </div>\n  </div>\n</div>\n<div class=\"table-full\">\n  <table class=\"table display\" data-sort=\"table\">\n    <thead>\n      <tr>\n        <th class=\"\">Date</th>\n        <th class=\"\">Patron</th>\n        <th class=\"\">Employee</th>\n        <th class=\"\">Card Number</th>\n        <th class=\"\">Load or Redeem</th>\n        <th class=\"\">Amount</th>\n        <!-- <th class=\"\">By Employee</th> -->\n      </tr>\n    </thead>\n    <tfoot>\n      <tr>\n        <th>&nbsp;</th>\n        <th>&nbsp;</th>\n        <th>&nbsp;</th>\n        <th>&nbsp;</th>\n        <th style=\"text-align:right\"><div>Balance:</div><div>Volume:</div></th>\n        <th><div>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</div><div>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.volume : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</div></th>\n      </tr>\n    </tfoot>\n    <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.journals : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</div>\n";
},"useData":true});

this["openmoney"]["reports"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.enabled : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "\" class=\"currencies statcard statcard-"
    + alias4(((helper = (helper = helpers.currency_color || (depth0 != null ? depth0.currency_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_color","hash":{},"data":data}) : helper)))
    + " p-a-md m-b\">\n  <h1> "
    + alias4(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + ")</h1>\n  <h3 class=\"statcard-number text-right\">\n    BALANCE "
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n\n  </h3>\n  <h3 class=\"statcard-number text-right\">\n    VOLUME "
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.volume : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n  </h3>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.currencies || (depth0 != null ? depth0.currencies : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"currencies","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.currencies) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["openmoney"]["reset"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"main-content\" class=\"main-content text-center\">\n  <div class=\"main-functions center-block panel panel-default\">\n    <div class=\"panel-heading text-left\"><a href=\"#login\" id='back'><span class=\"glyphicon glyphicon-chevron-left\"></span></a> <strong>RESET PASSWORD</strong></div>\n    <div class=\"panel-body\">\n      <form id=\"reset\">\n        <div class=\"form-group text-left\">\n          <label for=\"password\">New Password</label>\n          <input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"New Password\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group text-left\">\n          <label for=\"password2\">Re-type New Password</label>\n          <input type=\"password\" id=\"password2\" name=\"password2\" value=\"\" placeholder=\"Re-type New Password\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group text-right\">\n          <button type=\"button\" name=\"reset\" id=\"reset-button\" class=\"btn btn-primary\">Reset Password</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["openmoney"]["steward"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div id=\"statsButton\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"showedit\" class=\"btn btn-lg btn-primary-outline\" >\n      <strong>Edit</strong>\n    </button>\n  </div>\n  <div id=\"stats\" class=\"statcard statcard-info p-a-md m-b\">\n    <h2><div class=\"statcard-number\">STEWARD: "
    + alias4(((helper = (helper = helpers.stewardname || (depth0 != null ? depth0.stewardname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stewardname","hash":{},"data":data}) : helper)))
    + "</div></h2>\n    <div class=\"statcard-desc\">EMAIL: <a href=\"mailto:"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" style='color:#FFF'>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a></div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "style=\"display: none;\"";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"hidden\" name=\"id\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />";
},"7":function(container,depth0,helpers,partials,data) {
    return "Edit";
},"9":function(container,depth0,helpers,partials,data) {
    return "Add";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "  <h2><strong>Accounts</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newAccount\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Account</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table accounts\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Account</th>\n          <th>Currency</th>\n          <th>Balance</th>\n          <th>Volume</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.accounts : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n\n  <h2><strong>Currencies</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newCurrency\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Currency</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table currencies\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Currency</th>\n          <th>Stewards</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.currencies : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n\n  <h2><strong>Namespaces</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newCurrency\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Namespace</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table currencies\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Namespace</th>\n          <th>Stewards</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.namespaces : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = helpers.accountName || (depth0 != null ? depth0.accountName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accountName","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.currencyName || (depth0 != null ? depth0.currencyName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyName","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n            <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.volume : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n          </tr>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = helpers.currencyName || (depth0 != null ? depth0.currencyName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyName","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.stewards : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          </tr>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href='#stewards/"
    + alias4(((helper = (helper = helpers.stewardname || (depth0 != null ? depth0.stewardname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stewardname","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.stewardname || (depth0 != null ? depth0.stewardname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stewardname","hash":{},"data":data}) : helper)))
    + "</a> ";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = helpers.namespace || (depth0 != null ? depth0.namespace : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"namespace","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.stewards : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n          </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<style>\n[data-sort=table] > tbody > tr:hover{\n  background-color: #159c6e;\n  cursor: pointer;\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <form id='stewardForm' "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"form-group text-left\">\n      <label for=\"stewardname\">Steward Name</label>\n      <input type=\"text\" id=\"stewardname\" name=\"stewardname\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.stewardname || (depth0 != null ? depth0.stewardname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"stewardname","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Steward Name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-right\">\n      <button type=\"button\" name=\"cancel\" class=\"btn btn-lg btn-primary-outline\" >Cancel</button>\n      <button type=\"button\" name=\"upsert\" class=\"btn btn-lg btn-primary-outline\" >\n        <strong>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "</strong>\n      </button>\n    </div>\n  </form>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["openmoney"]["stewards"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr id=\""
    + alias4(((helper = (helper = helpers.stewardname || (depth0 != null ? depth0.stewardname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stewardname","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + alias4(((helper = (helper = helpers.stewardname || (depth0 != null ? depth0.stewardname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stewardname","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n          </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<style>\n[data-sort=table] > tbody > tr:hover{\n  background-color: #159c6e;\n  cursor: pointer;\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n  <h2><strong>Stewards</strong></h2>\n  <div class=\"row text-right\" style=\"padding-top: 20px;padding-bottom: 20px;\">\n    <button type=\"button\" name=\"addSteward\" class=\"btn btn-lg btn-success-outline\">Add Steward</button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table display\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th class=\"\">Steward Name</th>\n          <th class=\"\">Email</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.collection : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n</div>\n";
},"useData":true});

this["openmoney"]["transactions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.enabled : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr><td style=\"border-top: none;\">\n            <button type=\"button\" id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~button\" class=\"currency-buttons btn btn-lg btn-default-outline action-spacing highlight\" style=\"width: 100%; margin: 0;\">"
    + alias4(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + ")</button>\n            <div class=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + " value-buttons\">\n              <button type=\"button\" class=\"btn btn-lg btn-success-outline action-spacing tab-spacing add-value add-value-selected\" style=\"width: 80%; margin: 10px;\">\n                <span class=\"icon icon-plus icon-padding\"></span>\n                ADD VALUE\n              </button>\n              <button type=\"button\" class=\"btn btn-lg btn-danger-outline action-spacing tab-spacing redeem-value\" style=\"width: 80%; margin: 10px;\">\n                <span class=\"icon icon-minus icon-padding\"></span>\n                REDEEM VALUE\n              </button>\n            </div>\n          </td></tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"key","hash":{},"data":data}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return "plus";
},"8":function(container,depth0,helpers,partials,data) {
    return "minus";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, alias5=container.escapeExpression, buffer = 
  "<style>\n.input-padding{\n  padding-top: 7px !important;\n  padding-right: 7px !important;\n  padding-left: 7px !important;\n  padding-bottom: 0px !important;\n}\n.p-a-md{\n  padding: 8px !important;\n}\n.currency-buttons{\n  white-space: normal;\n}\n</style>\n<div class=\"col-sm-6 table-full\" style=\"padding-top: 10px;\">\n  <table class=\"table display\" data-sort=\"table\">\n    <thead>\n      <tr>\n        <th class=\"\">Currencies</th>\n      </tr>\n    </thead>\n    <tbody class=\"table-rows\">\n";
  stack1 = ((helper = (helper = helpers.currencies || (depth0 != null ? depth0.currencies : depth0)) != null ? helper : alias2),(options={"name":"currencies","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencies) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </tbody>\n  </table>\n</div>\n<div class=\"col-sm-6\" style=\"padding-top: 20px;\">\n\n  <div class=\"input-padding\" style=\"padding-bottom: 10px;\">\n    <div class=\"statcard statcard-success p-a-md\">\n      <h4 id=\"balance\" class=\"statcard-number\">\n        "
    + alias5((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n      </h4>\n      <span class=\"statcard-desc\">Balance</span>\n    </div>\n  </div>\n  <div id=\"card-div\" class=\"input-padding\">\n    <div class=\"input-group\">\n       <input type=\"text\" id=\"card\" name=\"card\" value=\"";
  stack1 = ((helper = (helper = helpers.card || (depth0 != null ? depth0.card : depth0)) != null ? helper : alias2),(options={"name":"card","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.card) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" placeholder=\"Card Number\" class=\"form-control\" style=\"height: 44px; margin-right: 5px;\"/>\n       <span class=\"input-group-btn\">\n            <button type=\"button\" name=\"qrcode\" class=\"btn btn-sm btn-default-outline\" style=\"padding:0;\"><img src=\"public/assets/images/openmoney.gift.gif\"</button>\n       </span>\n    </div>\n  </div>\n  <div id=\"qrcode-reader\" class=\"modal\" style=\"display: none;\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" name=\"close\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Scan Qr Code</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"reader\" style=\"width:270px;height:250px\">\n          </div>\n        </div>\n        <div class=\"modal-actions\">\n          <button type=\"button\" name=\"cancel\" class=\"cancel btn-link modal-action\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn-link modal-action\" data-dismiss=\"modal\">\n            <strong>Continue</strong>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <input type=\"hidden\" name=\"currency\" value=\"gifts\"/>\n  <input type=\"hidden\" name=\"polarity\" value=\""
    + alias5(((helper = (helper = helpers.polarity || (depth0 != null ? depth0.polarity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"polarity","hash":{},"data":data}) : helper)))
    + "\"/>\n  <input type=\"hidden\" name=\"sign\" id=\"sign\" value=\"+\" />\n  <div class=\"input-with-icon input-padding\">\n    <input type=\"text\" name=\"amount\" id=\"amount\" value=\"0.00\" class=\"form-control text-right "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.polarity : depth0),"load",{"name":"if_eq","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + " input-padding\" style=\"font-size: 40px;height: 60px;\"/>\n    <span id='plus-icon' class=\"icon icon-plus\" style=\"font-size: 50px;\"></span>\n    <span id='minus-icon' class=\"icon icon-minus\" style=\"display: none; font-size: 50px;\"></span>\n  </div>\n  <div id=\"numberpad\" class=\"numberpad\">\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"1\" value=\"1\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">1</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"2\" value=\"2\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">2</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"3\" value=\"3\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">3</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"4\" value=\"4\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">4</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"5\" value=\"5\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">5</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"6\" value=\"6\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">6</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"7\" value=\"7\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">7</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"8\" value=\"8\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">8</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"9\" value=\"9\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">9</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"0\" value=\"0\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">0</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" id=\"del\" name=\"del\" value=\"del\" class=\"btn btn-warning-outline\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\"><span class=\"icon icon-erase\"></span></span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" id=\"process\" name=\"process\" value=\"process\" class=\"btn btn-success-outline \" style=\"width: 100%; height: 100%;\"><span class=\"material-icons numberpad-font\" style=\"padding-top: 13px;\">keyboard_return</span></button>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["openmoney"]["welcome"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"welcome\" class=\"welcome\">\n    <header id=\"header\" class=\"header\">\n    </header>\n    <section id=\"main\">\n        <img id=\"logo\" src=\"public/assets/images/open-money-gift-text-vector.svg\" class=\"svg img-responsive center-block\" alt=\"Openmoney Logo\"/>\n    </section>\n    <footer id=\"footer\" class=\"footer\">\n    </footer>\n</section>\n";
},"useData":true});

return this["openmoney"];

};