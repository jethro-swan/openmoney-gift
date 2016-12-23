module.exports = function(Handlebars) {

this["openmoney"] = this["openmoney"] || {};

this["openmoney"]["balance"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "danger";
},"3":function(container,depth0,helpers,partials,data) {
    return "success";
},"5":function(container,depth0,helpers,partials,data) {
    return "vertical";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.balance : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  ";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <div><h3 class=\"statcard-number text-left\">\n      "
    + alias3(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n    </h3></div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},depth0,{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <div><h3 class=\"statcard-number text-left\">\n    "
    + alias3(((depths[1] && depths[1].decimal_places) || alias2).call(alias1,depth0,{"name":"../decimal_places","hash":{},"data":data}))
    + " "
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\n    </h3></div>\n";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},depth0,{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        <div><h3 class=\"statcard-number text-left\">\n        "
    + alias3(((depths[1] && depths[1].decimal_places) || alias2).call(alias1,depth0,{"name":"../decimal_places","hash":{},"data":data}))
    + " "
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\n        </h3></div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "            <tr id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n              <td>"
    + alias4((helpers.prettify_date || (depth0 && depth0.prettify_date) || alias2).call(alias1,(depth0 != null ? depth0.timestamp : depth0),{"name":"prettify_date","hash":{},"data":data}))
    + "</td>\n              <td>";
  stack1 = ((helper = (helper = helpers.load || (depth0 != null ? depth0.load : depth0)) != null ? helper : alias2),(options={"name":"load","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.load) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.redeem || (depth0 != null ? depth0.redeem : depth0)) != null ? helper : alias2),(options={"name":"redeem","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.redeem) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n              <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.amount : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n              <td>"
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "</td>\n            </tr>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "Load";
},"20":function(container,depth0,helpers,partials,data) {
    return "Redeem";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function", alias6=helpers.blockHelperMissing, buffer = 
  "<style>\n[data-sort=table] > tbody > tr:hover{\n  background-color: #159c6e;\n  cursor: pointer;\n}\n.vertical{\n    /*writing-mode:tb-rl;*/\n    -webkit-transform:rotate(90deg);\n    -moz-transform:rotate(90deg);\n    -o-transform: rotate(90deg);\n    -ms-transform:rotate(90deg);\n    transform: rotate(90deg);\n    white-space:nowrap;\n    height:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keySize : stack1), depth0))
    + "pt;\n    width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keySize : stack1), depth0))
    + "pt;\n}\n#stats {\n  border:1px solid #FFFFFF;\n}\n@media print {\n  button[name=showedit] {\n    display: none;\n  }\n  button[name=newTransaction] {\n    display: none;\n  }\n  button[name=print] {\n    display: none;\n  }\n  .card-history{\n    display: none;\n  }\n  .email-link{\n    display: none;\n  }\n  .table-head{\n    display: none;\n  }\n  #dashhead {\n    display: none;\n  }\n  .navigation {\n    display: none;\n  }\n  .breadcrumbs {\n    display: none;\n  }\n  .receipt {\n    border-bottom: 1px dashed black;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .cards {\n    padding: 0;\n    margin: 0;\n    page-break-after: avoid;\n  }\n  #stats {\n    border: 2px solid black;\n    border-radius: 0;\n    /*margin:5px;*/\n  }\n  @page { margin: 0; }\n  html, body { height: 99%; }\n  .table>thead>tr>th {\n    border-bottom: none;\n  }\n  .table>tbody>tr>td {\n    border-top: none;\n  }\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n\n  <div id=\"statsButton\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"print\" class=\"btn btn-lg btn-primary-outline\">Print Card</button>\n  </div>\n  <div id=\"stats\" class=\"statcard statcard-";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias4),(options={"name":"disabled","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data}),(typeof helper === alias5 ? helper.call(alias3,options) : helper));
  if (!helpers.disabled) { stack1 = alias6.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " text-left\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardHeight : stack1), depth0))
    + "px;float: left;margin-right: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardspacing : stack1), depth0))
    + "px;margin-bottom: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardspacing : stack1), depth0))
    + "px;\">\n    <canvas id=\"frontCanvas"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardHeight : stack1), depth0))
    + "px;display: none;\"></canvas>\n  </div>\n\n  <div id=\"stats\" class=\"statcard statcard-";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias4),(options={"name":"disabled","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data}),(typeof helper === alias5 ? helper.call(alias3,options) : helper));
  if (!helpers.disabled) { stack1 = alias6.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " text-left\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardHeight : stack1), depth0))
    + "px;float: right;margin-left: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardspacing : stack1), depth0))
    + "px;margin-bottom: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardspacing : stack1), depth0))
    + "px;\">\n    <div style=\"position: relative;\">\n      <span id=\"keyText"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"statcard-number keypos\" style=\"color: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keyColor : stack1), depth0))
    + ";font-size: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keySize : stack1), depth0))
    + "pt;position: absolute;top: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keyTop : stack1), depth0))
    + "px;left: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keyLeft : stack1), depth0))
    + "px;\"><div class=\""
    + ((stack1 = alias6.call(depth0,alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.vertical : stack1), depth0),{"name":"./template/vertical","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "</div></span>\n      <canvas id=\"qr"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"qrpos\" style=\"position: absolute;top: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.qrTop : stack1), depth0))
    + "px;left: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.qrLeft : stack1), depth0))
    + "px;\"></canvas>\n      <canvas id=\"backCanvas"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardHeight : stack1), depth0))
    + "px;display: none;\"></canvas>\n    </div>\n  </div>\n\n  <div class=\"balance\" style=\"float:left;\"><h2 class=\"statcard-number text-left\">BALANCE</h2>\n  <!-- ";
  stack1 = ((helper = (helper = helpers.currencies || (depth0 != null ? depth0.currencies : depth0)) != null ? helper : alias4),(options={"name":"currencies","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias5 ? helper.call(alias3,options) : helper));
  if (!helpers.currencies) { stack1 = alias6.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " -->\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.balances : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <!-- <div id=\"stats\" class=\"statcard statcard-success p-a-md m-b text-left\">\n    <span class=\"statcard-number\" style=\"float: left\">\n      <h1>Card#: "
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h1>\n      <div><h2 class=\"statcard-number text-left\">BALANCE</h2></div>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.balances : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </span>\n    <span id=\"qrcode-image\">\n      <canvas id=\"qr\" style=\"margin-left: auto; margin-right: 0;\"></canvas>\n    </span>\n  </div> -->\n  <!-- <br/>\n  <div class=\"card-history\">\n    <h2><strong>Card History</strong></h2>\n    <div class=\"table-full\">\n      <table class=\"table\" data-sort=\"basic\">\n        <thead>\n          <tr>\n            <th>Date</th>\n            <th>Load or Redeem</th>\n            <th>Amount</th>\n            <th>Currency</th>\n          </tr>\n        </thead>\n        <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.journals : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\n      </table>\n    </div>\n  </div> -->\n</div>\n";
},"useData":true,"useDepths":true});

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
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, alias5=container.lambda, alias6=container.escapeExpression, buffer = 
  "  <div id=\"statsButton\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"print\" class=\"btn btn-lg btn-primary-outline\">Print Card</button>\n    <button type=\"button\" name=\"showedit\" class=\"btn btn-lg btn-primary-outline\" >\n      <strong>Edit</strong>\n    </button>\n  </div>\n  <table class=\"table\">\n    <thead class=\"table-head\">\n      <tr>\n        <th>Card</th>\n      </tr>\n    </thead>\n    <tbody class=\"table-rows\">\n      <tr style=\"background-color: ";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias2),(options={"name":"disabled","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.disabled) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <td>\n\n            <div id=\"stats\" class=\"statcard statcard-";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias2),(options={"name":"disabled","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.disabled) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " text-left\" style=\"width:"
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardHeight : stack1), depth0))
    + "px;float: left;margin-right: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardspacing : stack1), depth0))
    + "px;margin-bottom: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardspacing : stack1), depth0))
    + "px;\">\n              <canvas id=\"frontCanvas"
    + alias6(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardHeight : stack1), depth0))
    + "px;display: none;\"></canvas>\n            </div>\n\n            <div id=\"stats\" class=\"statcard statcard-";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias2),(options={"name":"disabled","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.disabled) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " text-left\" style=\"width:"
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardHeight : stack1), depth0))
    + "px;float: right;margin-left: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardspacing : stack1), depth0))
    + "px;margin-bottom: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardspacing : stack1), depth0))
    + "px;\">\n              <div style=\"position: relative;\">\n                <span id=\"keyText"
    + alias6(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"statcard-number keypos\" style=\"color: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keyColor : stack1), depth0))
    + ";font-size: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keySize : stack1), depth0))
    + "pt;position: absolute;top: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keyTop : stack1), depth0))
    + "px;left: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keyLeft : stack1), depth0))
    + "px;\"><div class=\""
    + ((stack1 = alias4.call(depth0,alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.vertical : stack1), depth0),{"name":"./template/vertical","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias6(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</div></span>\n                <canvas id=\"qr"
    + alias6(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"qrpos\" style=\"position: absolute;top: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.qrTop : stack1), depth0))
    + "px;left: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.qrLeft : stack1), depth0))
    + "px;\"></canvas>\n                <canvas id=\"backCanvas"
    + alias6(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias6(alias5(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.cardHeight : stack1), depth0))
    + "px;display: none;\"></canvas>\n              </div>\n            </div>\n\n            <div class=\"balance\" style=\"float:left;\"><h2 class=\"statcard-number text-left\">BALANCE</h2>\n";
  stack1 = ((helper = (helper = helpers.currencies || (depth0 != null ? depth0.currencies : depth0)) != null ? helper : alias2),(options={"name":"currencies","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencies) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n            <!-- <span class=\"statcard-number\" style=\"float: left\">\n              <h1>Card#: "
    + alias6(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h1>\n\n            </span>\n            <span id=\"qrcode-image\">\n              <canvas id=\"qr\" style=\"margin-left: auto; margin-right: 0;\"></canvas>\n            </span> -->\n\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "#E64759";
},"4":function(container,depth0,helpers,partials,data) {
    return "#159c6e";
},"6":function(container,depth0,helpers,partials,data) {
    return "danger";
},"8":function(container,depth0,helpers,partials,data) {
    return "success";
},"10":function(container,depth0,helpers,partials,data) {
    return "vertical";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.balance : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "              <div><h3 class=\"statcard-number text-left\">\n                "
    + alias3(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n              </h3></div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "style=\"display: none;\"";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"hidden\" name=\"_id\" value=\""
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" />";
},"19":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"21":function(container,depth0,helpers,partials,data) {
    return "Edit";
},"23":function(container,depth0,helpers,partials,data) {
    return "New";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"card-history\">\n    <h2><strong>Card History</strong></h2>\n    <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n      <button type=\"button\" name=\"newTransaction\" class=\"btn btn-lg btn-success-outline\" >\n        <strong>Process Transaction</strong>\n      </button>\n    </div>\n    <div class=\"table-full\">\n      <table class=\"table\" data-sort=\"basic\">\n        <thead>\n          <tr>\n            <th>Date</th>\n            <th>Load or Redeem</th>\n            <th>Amount</th>\n            <th>Currency</th>\n          </tr>\n        </thead>\n        <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.journals : depth0),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\n      </table>\n    </div>\n  </div>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "            <tr id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n              <td>"
    + alias4((helpers.prettify_date || (depth0 && depth0.prettify_date) || alias2).call(alias1,(depth0 != null ? depth0.timestamp : depth0),{"name":"prettify_date","hash":{},"data":data}))
    + "</td>\n              <td>";
  stack1 = ((helper = (helper = helpers.load || (depth0 != null ? depth0.load : depth0)) != null ? helper : alias2),(options={"name":"load","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.load) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.redeem || (depth0 != null ? depth0.redeem : depth0)) != null ? helper : alias2),(options={"name":"redeem","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.redeem) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n              <td>"
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.amount : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "</td>\n              <td>"
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "</td>\n            </tr>\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "Load";
},"30":function(container,depth0,helpers,partials,data) {
    return "Redeem";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function", buffer = 
  "<style>\n[data-sort=table] > tbody > tr:hover{\n  background-color: #159c6e;\n  cursor: pointer;\n}\n.vertical{\n    /*writing-mode:tb-rl;*/\n    -webkit-transform:rotate(90deg);\n    -moz-transform:rotate(90deg);\n    -o-transform: rotate(90deg);\n    -ms-transform:rotate(90deg);\n    transform: rotate(90deg);\n    white-space:nowrap;\n    height:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keySize : stack1), depth0))
    + "pt;\n    width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keySize : stack1), depth0))
    + "pt;\n}\n#stats {\n  border:1px solid #FFFFFF;\n}\n@media print {\n  button[name=showedit] {\n    display: none;\n  }\n  button[name=newTransaction] {\n    display: none;\n  }\n  button[name=print] {\n    display: none;\n  }\n  .card-history{\n    display: none;\n  }\n  .email-link{\n    display: none;\n  }\n  .table-head{\n    display: none;\n  }\n  #dashhead {\n    display: none;\n  }\n  .navigation {\n    display: none;\n  }\n  .breadcrumbs {\n    display: none;\n  }\n  .receipt {\n    border-bottom: 1px dashed black;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .cards {\n    padding: 0;\n    margin: 0;\n    page-break-after: avoid;\n  }\n  #stats {\n    border: 2px solid black;\n    border-radius: 0;\n    /*margin:5px;*/\n  }\n  @page { margin: 0; }\n  html, body { height: 99%; }\n  .table>thead>tr>th {\n    border-bottom: none;\n  }\n  .table>tbody>tr>td {\n    border-top: none;\n  }\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <form id='cardForm' "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n    "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"form-group text-left\">\n      <label for=\"key\">Card Number</label>\n      <div class=\"input-group\">\n         <input type=\"text\" id=\"key\" name=\"key\" value=\""
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Card Number\" class=\"form-control\" style=\"height: 44px;\" />\n         <span class=\"input-group-btn\">\n              <button type=\"button\" name=\"qrcode\" class=\"btn btn-sm btn-default-outline\" style=\"padding:0;\"><img src=\"public/assets/images/openmoney.gift.gif\"</button>\n         </span>\n      </div>\n    </div>\n    <div id=\"qrcode-reader\" class=\"modal\" style=\"display: none;\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" name=\"close\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\">Scan Qr Code</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div id=\"qr-error-notification\" class=\"notifications center-block alert alert-danger text-center\" role=\"alert\" style=\"display: none;\"></div>\n            <div id=\"reader\" style=\"width:270px;height:250px\">\n            </div>\n            <div id=\"qrfile\" style=\"display: none;\">\n              <canvas id=\"outCanvas\" width=\"270\" height=\"250\"></canvas>\n              <div id=\"imghelp\">select a file or capture an image from your camera\n                <input type=\"file\" id=\"qrfiles\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-actions\">\n            <button type=\"button\" name=\"cancel\" class=\"cancel btn-link modal-action\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"button\" class=\"btn-link modal-action\" data-dismiss=\"modal\">\n              <strong>Continue</strong>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"checkbox custom-control custom-checkbox\">\n      <label>\n        <input type=\"checkbox\" name=\"disabled\" value=\"true\" ";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias4),(options={"name":"disabled","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias5 ? helper.call(alias3,options) : helper));
  if (!helpers.disabled) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " />\n        <span class=\"custom-control-indicator\"></span>\n        Freeze Card\n      </label>\n    </div>\n    <div class=\"form-group text-right\">\n      <button type=\"button\" name=\"generate\" class=\"btn btn-lg btn-primary-outline\">Generate Key</button>\n      <button type=\"button\" name=\"cancel\" class=\"btn btn-lg btn-primary-outline\" >Cancel</button>\n      <button type=\"button\" name=\"upsert\" class=\"btn btn-lg btn-primary-outline\" >\n        <strong>"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "</strong>\n      </button>\n    </div>\n  </form>\n\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
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
    + "\"/>\n      <table class=\"table\">\n        <tbody class=\"table-rows\">\n          <tr>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"default\" class=\"btn btn-lg btn-pill btn-default\">Default</button>\n            </td>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"primary\" class=\"btn btn-lg btn-pill btn-primary\">Primary</button>\n            </td>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"success\" class=\"btn btn-lg btn-pill btn-success\">Success</button>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"info\" class=\"btn btn-lg btn-pill btn-info\">Info</button>\n            </td>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"warning\" class=\"btn btn-lg btn-pill btn-warning\">Warning</button>\n            </td>\n            <td>\n              <button type=\"button\" name=\"color\" value=\"danger\" class=\"btn btn-lg btn-pill btn-danger\">Danger</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"form-group text-left\">\n        <label for=\"contributionPerPatron\">Contribution Per new Patron.</label>\n        <input type=\"number\" id=\"contributionPerPatron\" name=\"contributionPerPatron\" value=\""
    + alias4(((helper = (helper = helpers.contributionPerPatron || (depth0 != null ? depth0.contributionPerPatron : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contributionPerPatron","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Contribution Per Patron\" class=\"form-control\" />\n      </div>\n    </div>\n\n\n    <div class=\"form-group text-right\">\n      <button type=\"button\" name=\"cancel\" class=\"btn btn-lg btn-primary-outline\" >Cancel</button>\n      <button type=\"button\" name=\"upsert\" class=\"btn btn-lg btn-primary-outline\" >\n        <strong>"
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
  return buffer + " </button>\n    <span class=\"dashhead-toolbar-divider hidden-xs\"></span>\n    <div id=\"pincodeModal\" class=\"modal\" style=\"display: none;\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" name=\"close\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\">Employee Pin Code:</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div id=\"error-modal-notification\" class=\"notifications center-block alert alert-danger text-center\" role=\"alert\" style=\"display: none;\"></div>\n            <input type=\"password\" name=\"code\" value=\"\" placeholder=\"Employee Pin Code\" class=\"form-control\"/>\n          </div>\n          <div class=\"modal-actions\">\n            <button type=\"button\" name=\"cancel\" class=\"btn-link modal-action\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"button\" name=\"setEmployee\" class=\"btn-link modal-action\" data-dismiss=\"modal\">\n              <strong>Set Employee</strong>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"dashhead-toolbar\">\n    <button type=\"button\" id=\"help-button\" class=\"btn btn-xs btn-pill btn-info\" style=\"margin-top: 7px;\"><span class=\"icon icon-help-with-circle\"></span> Help</button>\n  </div> -->\n</div>\n<div id='breadcrumbs' class=\"breadcrumbs\"></div>\n<div id=\"success-notification\" class=\"notifications center-block alert alert-success text-center\" role=\"alert\" style=\"display: none;\"></div>\n<div id=\"error-notification\" class=\"notifications center-block alert alert-danger text-center\" role=\"alert\" style=\"display: none;\"></div>\n";
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
    return "<div id=\"navigation\"></div>\n<div id=\"page\" class=\"col-md-8 content\">\n  <div id=\"dashhead\"></div>\n  <div id=\"pageContainer\"></div>\n</div>\n";
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
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "  <h2><strong>Settings</strong></h2>\n  <div class=\"radio-settings\" style=\"padding-bottom: 20px;\">\n    <div class=\"radio-inline custom-control custom-radio\">\n      <label>\n        <input type=\"radio\" id=\"lighttheme\" name=\"theme\" value=\"light\" "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.theme : depth0),"light",{"name":"if_eq","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <span class=\"custom-control-indicator\"></span>\n        Light Theme\n      </label>\n    </div>\n    <div class=\"radio-inline custom-control custom-radio\">\n      <label>\n        <input type=\"radio\" id=\"darktheme\" name=\"theme\" value=\"dark\" "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.theme : depth0),"dark",{"name":"if_eq","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <span class=\"custom-control-indicator\"></span>\n        Dark Theme\n      </label>\n    </div>\n  </div>\n  <h2><strong>Currencies</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newCurrency\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Currency</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table currencies\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Currency</th>\n          <th>Enable or Disable</th>\n          <th>Default</th>\n          <th>Contribution Per Patron</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.currencies : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n\n  <h2><strong>Employees</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newEmployee\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Employees</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table employees\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Employee Name</th>\n          <th>Enable or Disable</th>\n          <th>Merchant</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.employees : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
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
    + "~active\" class=\"active-radio\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Enable\n                </label>\n              </div>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~disable\" name=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~active\" class=\"active-radio\" ";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias2),(options={"name":"disabled","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.disabled) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Disable\n                </label>\n              </div>\n            </td>\n            <td>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~default\" name=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~default\" class=\"default-radio\" ";
  stack1 = ((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(options={"name":"default","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers["default"]) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Default\n                </label>\n              </div>\n            </td>\n            <td class=\"text-right\">\n              "
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.contributionPerPatron : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n            </td>\n          </tr>\n";
},"17":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data,blockParams,depths) {
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
  stack1 = ((helper = (helper = helpers.enabled || (depth0 != null ? depth0.enabled : depth0)) != null ? helper : alias2),(options={"name":"enabled","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.enabled) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Enable\n                </label>\n              </div>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeDisable\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeActive\" class=\"employeeActive-radio\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.enabled : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <span class=\"custom-control-indicator\"></span>\n                  Disable\n                </label>\n              </div>\n            </td>\n            <td>\n              <div class=\"radio-inline custom-control custom-radio\">\n                <label>\n                  <input type=\"radio\" id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeDefault\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "~employeeDefault\" class=\"employeeDefault-radio\" ";
  stack1 = ((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias2),(options={"name":"default","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
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
  buffer += "/transactions\">\n        <img id=\"logo\" src=\"public/assets/images/open-money-gift-text-vector.svg\" class=\"svg img-responsive center-block\" alt=\"Openmoney Gift Logo\" style=\"height: 214px;\"/>\n      </a>\n    </div>\n    <div id=\"nav-toggleable-md\" class=\"nav-toggleable-md collapse\">\n      <ul class=\"nav nav-bordered nav-stacked\">\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"patrons",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"patrons\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/patrons\" class=\"nav-padding\">\n            <div style=\"float: left;\">\n              <span class=\"icon icon-v-card icon-padding\" style=\"font-size: 2.5em\"></span>\n            </div>\n            <div style=\"margin-top: 10px;\">\n              <div style=\"font-size: 12px;\">Create &amp; Manage</div>\n              Patrons\n            </div>\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"transactions",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"transactions\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/transactions\" class=\"nav-padding\">\n            <div style=\"float: left;\">\n              <span class=\"icon icon-dial-pad icon-padding\" style=\"font-size: 2.5em\"></span>\n            </div>\n            <div style=\"margin-top: 0;\">\n              <div style=\"font-size: 12px;\">Process</div>\n              Transactions\n            </div>\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"reports",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"reports\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/reports\" class=\"nav-padding\">\n            <div style=\"float: left;\">\n              <span class=\"icon icon-area-graph icon-padding\" style=\"font-size: 2.5em;\"></span>\n            </div>\n            <div style=\"margin-top: 10px;\">\n              <div style=\"font-size: 12px;\">Generate</div>\n              Reports\n            </div>\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"administrative",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"administrative\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/administrative\" class=\"nav-padding\">\n            <div style=\"float: left;\">\n              <span class=\"icon icon-tools icon-padding\" style=\"font-size: 2.5em;\"></span>\n            </div>\n            <div style=\"margin-top: 10px;\">\n              <div style=\"font-size: 12px;\">Manage</div>\n              Settings\n            </div>\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"templates",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"supplies\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "/templates\" class=\"nav-padding\">\n            <div style=\"float: left;\">\n              <span class=\"icon icon-credit-card icon-padding\" style=\"font-size: 2.5em;\"></span>\n            </div>\n            <div style=\"margin-top: 10px;\">\n              <div style=\"font-size: 12px;\">Manage</div>\n              Templates\n            </div>\n          </a>\n        </li>\n        <li "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.page : depth0),"support",{"name":"if_eq","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n          <a id=\"support\" href=\"#merchants/";
  stack1 = ((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(options={"name":"merchant","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.merchant) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "/support\" class=\"nav-padding\">\n            <div style=\"float: left;\">\n              <span class=\"icon icon-old-phone icon-padding\" style=\"font-size: 2.5em;\"></span>\n            </div>\n            <div style=\"margin-top: 10px;\">\n              <div style=\"font-size: 12px;\">Contact</div>\n              Support\n            </div>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n";
},"useData":true});

this["openmoney"]["patron"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", buffer = 
  "  [data-sort=table] > tbody > tr#_"
    + container.escapeExpression(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + ":hover{\n    background-color: ";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias2),(options={"name":"disabled","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.disabled) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ";\n    cursor: pointer;\n  }\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "#E64759";
},"5":function(container,depth0,helpers,partials,data) {
    return "#159c6e";
},"7":function(container,depth0,helpers,partials,data) {
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
  stack1 = ((helper = (helper = helpers.currencies || (depth0 != null ? depth0.currencies : depth0)) != null ? helper : alias2),(options={"name":"currencies","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencies) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.balance : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "\">\n        <h3 class=\"statcard-number text-right\">\n          "
    + alias4(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n        </h3>\n      </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "style=\"display: none;\"";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"hidden\" name=\"_id\" value=\""
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" />";
},"15":function(container,depth0,helpers,partials,data) {
    return "Edit";
},"17":function(container,depth0,helpers,partials,data) {
    return "New";
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "  <h2><strong>Cards</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newCard\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Card</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table\" data-sort=\"table\">\n      <thead class=\"table-head\">\n        <tr>\n          <th>Card</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n";
},"20":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, alias6=container.lambda, buffer = 
  "          <tr id=\"_"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">\n            <td>\n                <div id=\"stats\" class=\"statcard statcard-";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias2),(options={"name":"disabled","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.program(24, data, 0, blockParams, depths),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.disabled) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " text-left\" style=\"border: 2px solid #FFFFFF;width:"
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardHeight : stack1), depth0))
    + "px;float: left;margin-right: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardspacing : stack1), depth0))
    + "px;margin-bottom: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardspacing : stack1), depth0))
    + "px;\">\n                  <canvas id=\"frontCanvas"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardHeight : stack1), depth0))
    + "px;display: none;\"></canvas>\n                </div>\n                <div id=\"stats\" class=\"statcard statcard-";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias2),(options={"name":"disabled","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.program(24, data, 0, blockParams, depths),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.disabled) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " text-left\" style=\"border: 2px solid #FFFFFF;width:"
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardHeight : stack1), depth0))
    + "px;float: right;margin-left: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardspacing : stack1), depth0))
    + "px;margin-bottom: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardspacing : stack1), depth0))
    + "px;\">\n                  <div style=\"position: relative;\">\n                    <span id=\"keyText"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"statcard-number keypos\" style=\"color: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.keyColor : stack1), depth0))
    + ";font-size: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.keySize : stack1), depth0))
    + "pt;position: absolute;top: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.keyTop : stack1), depth0))
    + "px;left: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.keyLeft : stack1), depth0))
    + "px;\"><div class=\""
    + ((stack1 = alias5.call(depth0,alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.vertical : stack1), depth0),{"name":"../template/vertical","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</div></span>\n                    <canvas id=\"qr"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"qrpos\" style=\"position: absolute;top: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.qrTop : stack1), depth0))
    + "px;left: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.qrLeft : stack1), depth0))
    + "px;\"></canvas>\n                    <canvas id=\"backCanvas"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardWidth : stack1), depth0))
    + "px; height: "
    + alias4(alias6(((stack1 = (depths[1] != null ? depths[1].template : depths[1])) != null ? stack1.cardHeight : stack1), depth0))
    + "px;display: none;\"></canvas>\n                  </div>\n                </div>\n                <div style=\"float:left;\"><h2 class=\"statcard-number text-left\">BALANCE</h2>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"each","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.currencies || (depth0 != null ? depth0.currencies : depth0)) != null ? helper : alias2),(options={"name":"currencies","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.currencies) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\n\n\n\n              <!-- <div id=\"card-stats\" class=\"statcard statcard-";
  stack1 = ((helper = (helper = helpers.disabled || (depth0 != null ? depth0.disabled : depth0)) != null ? helper : alias2),(options={"name":"disabled","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.program(24, data, 0, blockParams, depths),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.disabled) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " p-a-md m-b\">\n                <span class=\"statcard-number\" style=\"float: left\">\n                  <h1>Card#: "
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "</h1>\n\n                </span>\n                <span id=\"qrcode-image\">\n                  <canvas id=\"qr"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"margin-left: auto; margin-right: 0;\"></canvas>\n                </span>\n              </div> -->\n            </td>\n          </tr>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "danger";
},"24":function(container,depth0,helpers,partials,data) {
    return "success";
},"26":function(container,depth0,helpers,partials,data) {
    return "vertical";
},"28":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                  <h3 class=\"statcard-number text-left\">\n                    "
    + alias3(((depths[1] && depths[1].decimal_places) || alias2).call(alias1,depth0,{"name":"../decimal_places","hash":{},"data":data}))
    + " "
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\n                  </h3>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.balance : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                  <div><h3 class=\"statcard-number text-left\">\n                    "
    + alias3(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.decimal_places || (depth0 && depth0.decimal_places) || alias2).call(alias1,(depth0 != null ? depth0.balance : depth0),{"name":"decimal_places","hash":{},"data":data}))
    + "\n                  </h3></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<style>\n/*[data-sort=table] > tbody > tr:hover{\n  background-color: #1686b0;\n  cursor: pointer;\n}*/\n.vertical{\n    /*writing-mode:tb-rl;*/\n    -webkit-transform:rotate(90deg);\n    -moz-transform:rotate(90deg);\n    -o-transform: rotate(90deg);\n    -ms-transform:rotate(90deg);\n    transform: rotate(90deg);\n    white-space:nowrap;\n    height:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keySize : stack1), depth0))
    + "pt;\n    width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.template : depth0)) != null ? stack1.keySize : stack1), depth0))
    + "pt;\n}\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "@media print {\n  button[name=showedit] {\n    display: none;\n  }\n  button[name=newCard] {\n    display: none;\n  }\n  button[name=print] {\n    display: none;\n  }\n  .email-link{\n    display: none;\n  }\n  .table-head{\n    display: none;\n  }\n  .dashhead {\n    display: none;\n  }\n  .navigation {\n    display: none;\n  }\n  .breadcrumbs {\n    display: none;\n  }\n  .receipt {\n    border-bottom: 1px dashed black;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @page { margin: 0; }\n}\n</style>\n<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <form id='patronForm' "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n    "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"form-group text-left\">\n      <label for=\"firstname\">First name</label>\n      <input type=\"text\" id=\"firstname\" name=\"firstname\" value=\""
    + alias2(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"firstname","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"First Name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"lastname\">Last name</label>\n      <input type=\"text\" id=\"lastname\" name=\"lastname\" value=\""
    + alias2(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Last Name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" name=\"email\" value=\""
    + alias2(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Email\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-left\">\n      <label for=\"email\">Phone</label>\n      <input type=\"text\" id=\"phone\" name=\"phone\" value=\""
    + alias2(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Phone\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group text-right\">\n      <button type=\"button\" name=\"cancel\" class=\"btn btn-lg btn-primary-outline\" >Cancel</button>\n      <button type=\"button\" name=\"upsert\" class=\"btn btn-lg btn-primary-outline\" >\n        <strong>"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.program(17, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</strong>\n      </button>\n    </div>\n  </form>\n\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
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
    return "<div id=\"main-content\" class=\"main-content text-center\">\n  <div class=\"main-functions center-block panel panel-default\">\n    <div class=\"panel-heading text-left\"><a href=\"#login\" id='back'><span class=\"glyphicon glyphicon-chevron-left\"></span></a> <strong>Sign Up</strong></div>\n    <div class=\"panel-body\">\n      <form id=\"register\">\n        <div class=\"form-group text-left\">\n          <label for=\"merchantname\">Merchant Name</label>\n          <input type=\"text\" id=\"merchantname\" name=\"merchantname\" value=\"\" placeholder=\"Merchant Name\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group text-left\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" id=\"email\" name=\"email\" value=\"\" placeholder=\"Email\" class=\"form-control\"/>\n        </div>\n        <div class=\"form-group text-left\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" id=\"password\" name=\"password\" value=\"\" placeholder=\"Password\" class=\"form-control\"/>\n        </div>\n        <div class=\"form-group text-right\">\n          <button type=\"button\" name=\"register\" id=\"register-button\" class=\"btn btn-primary\">Sign Up</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div id=\"main-spacer\" class=\"main-spacer\">\n      <div style=\"height:100%;\">&nbsp;</div>\n  </div>\n</div>\n";
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

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.disabled : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
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

  return "\n\n  <h2><strong>Accounts</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newAccount\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Account</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table accounts\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Account</th>\n          <th>Currency</th>\n          <th>Balance</th>\n          <th>Volume</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n"
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

this["openmoney"]["support"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n  <h1>Contact Support</h1>\n  <div class=\"form-group text-left\">\n    <label for=\"email\">Response Email Address</label>\n    <input type=\"email\" id=\"email\" name=\"email\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"email","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Email\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"support\">Support Request:</label>\n    <textarea class=\"form-control\" rows=\"5\" id=\"support\" name=\"support\"></textarea>\n  </div>\n  <div class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"send\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>Send Request</strong>\n    </button>\n  </div>\n</div>\n";
},"useData":true});

this["openmoney"]["templates"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "<div class=\"col-sm-12 header\">\n  <h1>Money Designer</h1>\n</div>\n<div id=\"cards\" class=\"col-sm-12 cards\"></div>\n<form id=\"template\">\n  <div class=\"col-sm-6 maindiv\" style=\"padding-top: 10px;\">\n\n    <div class=\"form-group text-left\">\n      <div class=\"form-group text-left\">\n        <label class=\"btn btn-default btn-file\">\n            Front Image <input type=\"file\" id=\"frontImage\" name=\"frontImage\" style=\"display: none;\">\n        </label>\n        <span id=\"frontImageFilename\" class=\"fileDescriptor\">"
    + alias4(((helper = (helper = helpers.frontImageFilename || (depth0 != null ? depth0.frontImageFilename : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"frontImageFilename","hash":{},"data":data}) : helper)))
    + "</span>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6 form-group text-left\">\n      <label for=\"width\">Width in Pixels</label>\n      <input type=\"number\" id=\"width\" name=\"width\" value=\""
    + alias4(((helper = (helper = helpers.cardWidth || (depth0 != null ? depth0.cardWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardWidth","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Width in Pixels\" class=\"form-control\" />\n    </div>\n\n    <div class=\"col-sm-6 form-group text-left\">\n      <label for=\"height\">Height in Pixels</label>\n      <input type=\"number\" id=\"height\" name=\"height\" value=\""
    + alias4(((helper = (helper = helpers.cardHeight || (depth0 != null ? depth0.cardHeight : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardHeight","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Height in Pixels\" class=\"form-control\"/>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"checkbox custom-control custom-checkbox\">\n        <label>\n          <input type=\"checkbox\" id=\"keyDisplay\" name=\"keyDisplay\" value=\"true\" ";
  stack1 = ((helper = (helper = helpers.keyDisplay || (depth0 != null ? depth0.keyDisplay : depth0)) != null ? helper : alias2),(options={"name":"keyDisplay","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.keyDisplay) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " />\n          <span class=\"custom-control-indicator\"></span>\n          Key Text Display\n        </label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6 form-group text-left\">\n      <label for=\"keysize\">Key Font Size in pt</label>\n      <input type=\"number\" id=\"keysize\" name=\"keysize\" value=\""
    + alias4(((helper = (helper = helpers.keySize || (depth0 != null ? depth0.keySize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keySize","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Key Font Size\" class=\"form-control\" />\n    </div>\n\n    <div class=\"col-sm-6 form-group text-left\">\n      <label for=\"keyleft\">Key Text X Pos. in px</label>\n      <input type=\"number\" id=\"keyleft\" name=\"keyleft\" value=\""
    + alias4(((helper = (helper = helpers.keyLeft || (depth0 != null ? depth0.keyLeft : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keyLeft","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Key Text X\" class=\"form-control\" />\n    </div>\n\n    <div class=\"col-sm-6 form-group text-left\">\n      <label for=\"keytop\">Key Text Y Pos. in px</label>\n      <input type=\"number\" id=\"keytop\" name=\"keytop\" value=\""
    + alias4(((helper = (helper = helpers.keyTop || (depth0 != null ? depth0.keyTop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keyTop","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Key Text Y\" class=\"form-control\" />\n    </div>\n\n    <div class=\"col-sm-6\">\n      <label for=\"keycolor\">Key Color</label>\n      <div id=\"keycolor\" class=\"input-group colorpicker-component\">\n        <input name=\"keycolor\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.keyColor || (depth0 != null ? depth0.keyColor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keyColor","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\n        <span class=\"input-group-addon\"><i></i></span>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"checkbox custom-control custom-checkbox\">\n        <label>\n          <input type=\"checkbox\" id=\"vertical\" name=\"vertical\" value=\"true\" ";
  stack1 = ((helper = (helper = helpers.vertical || (depth0 != null ? depth0.vertical : depth0)) != null ? helper : alias2),(options={"name":"vertical","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.vertical) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " />\n          <span class=\"custom-control-indicator\"></span>\n          Vertical Key\n        </label>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-sm-6 maindiv\" style=\"padding-top: 10px;\">\n\n    <div class=\"form-group text-left\">\n      <div class=\"form-group text-left\">\n        <label class=\"btn btn-default btn-file\">\n            Back Image <input type=\"file\" id=\"backImage\" name=\"backImage\" style=\"display: none;\">\n        </label>\n        <span id=\"backImageFilename\" class=\"fileDescriptor\">"
    + alias4(((helper = (helper = helpers.backImageFilename || (depth0 != null ? depth0.backImageFilename : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backImageFilename","hash":{},"data":data}) : helper)))
    + "</span>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <div class=\"checkbox custom-control custom-checkbox\">\n        <label>\n          <input type=\"checkbox\" id=\"qrDisplay\" name=\"qrDisplay\" value=\"true\" ";
  stack1 = ((helper = (helper = helpers.qrDisplay || (depth0 != null ? depth0.qrDisplay : depth0)) != null ? helper : alias2),(options={"name":"qrDisplay","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.qrDisplay) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " />\n          <span class=\"custom-control-indicator\"></span>\n          QR Code Display\n        </label>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6 form-group text-left\">\n      <label for=\"qrsize\">QR size in px</label>\n      <input type=\"number\" id=\"qrsize\" name=\"qrsize\" value=\""
    + alias4(((helper = (helper = helpers.qrSize || (depth0 != null ? depth0.qrSize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qrSize","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"QR Size in px\" class=\"form-control\" />\n    </div>\n\n    <div class=\"col-sm-6 form-group text-left\">\n      <label for=\"qrleft\">QR code X Pos. in px</label>\n      <input type=\"number\" id=\"qrleft\" name=\"qrleft\" value=\""
    + alias4(((helper = (helper = helpers.qrLeft || (depth0 != null ? depth0.qrLeft : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qrLeft","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"QR code X\" class=\"form-control\" />\n    </div>\n\n    <div class=\"col-sm-6 form-group text-left\">\n      <label for=\"qrtop\">QR code Y Pos. in px</label>\n      <input type=\"number\" id=\"qrtop\" name=\"qrtop\" value=\""
    + alias4(((helper = (helper = helpers.qrTop || (depth0 != null ? depth0.qrTop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qrTop","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"QR code Y\" class=\"form-control\" />\n    </div>\n\n    <div class=\"col-sm-6 form-group\">\n      <label for=\"qrforeground\">QR Foreground Color</label>\n      <div id=\"qrforeground\" class=\"input-group colorpicker-component\">\n        <input name=\"qrforeground\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.qrForeground || (depth0 != null ? depth0.qrForeground : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qrForeground","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\n        <span class=\"input-group-addon\"><i></i></span>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6 form-group\">\n      <label for=\"qrbackground\">QR Background Color</label>\n      <div id=\"qrbackground\" class=\"input-group colorpicker-component\">\n        <input name=\"qrbackground\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.qrBackground || (depth0 != null ? depth0.qrBackground : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qrBackground","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\n        <span class=\"input-group-addon\"><i></i></span>\n      </div>\n    </div>\n\n    <div class=\"col-sm-6 form-group text-left\">\n      <label for=\"templatename\">Template Name</label>\n      <input type=\"text\" id=\"templatename\" name=\"templatename\" value=\""
    + alias4(((helper = (helper = helpers.templateName || (depth0 != null ? depth0.templateName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"templateName","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Name\" class=\"form-control\" />\n    </div>\n\n    <div class=\"col-sm-6 form-group text-right saveTemplate\" style=\"margin-top: 15px;\">\n      <button type=\"button\" name=\"save\" class=\"btn btn-lg btn-primary-outline\">Save</button>\n    </div>\n\n  </div>\n</form>\n";
},"useData":true});

this["openmoney"]["templatesCard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "  <div id=\"stats\" class=\"statcard text-left\" style=\"width:"
    + alias2(alias1((depths[1] != null ? depths[1].cardWidth : depths[1]), depth0))
    + "px; height: "
    + alias2(alias1((depths[1] != null ? depths[1].cardHeight : depths[1]), depth0))
    + "px;float: left;margin-right: "
    + alias2(alias1((depths[1] != null ? depths[1].cardspacing : depths[1]), depth0))
    + "px;margin-bottom: "
    + alias2(alias1((depths[1] != null ? depths[1].cardspacing : depths[1]), depth0))
    + "px;\">\n    <canvas id=\"frontCanvas"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias2(alias1((depths[1] != null ? depths[1].cardWidth : depths[1]), depth0))
    + "px; height: "
    + alias2(alias1((depths[1] != null ? depths[1].cardHeight : depths[1]), depth0))
    + "px;display: none;\"></canvas>\n  </div>\n  <div id=\"stats\" class=\"statcard text-left\" style=\"width:"
    + alias2(alias1((depths[1] != null ? depths[1].cardWidth : depths[1]), depth0))
    + "px; height: "
    + alias2(alias1((depths[1] != null ? depths[1].cardHeight : depths[1]), depth0))
    + "px;float: right;margin-left: "
    + alias2(alias1((depths[1] != null ? depths[1].cardspacing : depths[1]), depth0))
    + "px;margin-bottom: "
    + alias2(alias1((depths[1] != null ? depths[1].cardspacing : depths[1]), depth0))
    + "px;\">\n    <div style=\"position: relative;\">\n      <span id=\"keyText"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"statcard-number keypos\" style=\"color: "
    + alias2(alias1((depths[1] != null ? depths[1].keyColor : depths[1]), depth0))
    + ";font-size: "
    + alias2(alias1((depths[1] != null ? depths[1].keySize : depths[1]), depth0))
    + "pt;position: absolute;top: "
    + alias2(alias1((depths[1] != null ? depths[1].keyTop : depths[1]), depth0))
    + "px;left: "
    + alias2(alias1((depths[1] != null ? depths[1].keyLeft : depths[1]), depth0))
    + "px;\"><div class=\""
    + ((stack1 = helpers.blockHelperMissing.call(depth0,alias1((depths[1] != null ? depths[1].vertical : depths[1]), depth0),{"name":"../vertical","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "</div></span>\n      <canvas id=\"qr"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"qrpos\" style=\"position: absolute;top: "
    + alias2(alias1((depths[1] != null ? depths[1].qrTop : depths[1]), depth0))
    + "px;left: "
    + alias2(alias1((depths[1] != null ? depths[1].qrLeft : depths[1]), depth0))
    + "px;\"></canvas>\n      <canvas id=\"backCanvas"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias2(alias1((depths[1] != null ? depths[1].cardWidth : depths[1]), depth0))
    + "px; height: "
    + alias2(alias1((depths[1] != null ? depths[1].cardHeight : depths[1]), depth0))
    + "px;display: none;\"></canvas>\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "vertical";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<style>\n#stats {\n  border:1px solid #FFFFFF;\n}\n.vertical{\n    /*writing-mode:tb-rl;*/\n    -webkit-transform:rotate(90deg);\n    -moz-transform:rotate(90deg);\n    -o-transform: rotate(90deg);\n    -ms-transform:rotate(90deg);\n    transform: rotate(90deg);\n    white-space:nowrap;\n    height:"
    + alias4(((helper = (helper = helpers.keySize || (depth0 != null ? depth0.keySize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keySize","hash":{},"data":data}) : helper)))
    + "pt;\n    width:"
    + alias4(((helper = (helper = helpers.keySize || (depth0 != null ? depth0.keySize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keySize","hash":{},"data":data}) : helper)))
    + "pt;\n}\n</style>\n<div class=\"page1\" style=\"overflow: hidden;\">\n";
  stack1 = ((helper = (helper = helpers.cards || (depth0 != null ? depth0.cards : depth0)) != null ? helper : alias2),(options={"name":"cards","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.cards) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true,"useDepths":true});

this["openmoney"]["templatesCards"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <div id=\"stats\" class=\"statcard text-left\" style=\"width:"
    + alias2(alias1((depths[1] != null ? depths[1].cardWidth : depths[1]), depth0))
    + "px; height: "
    + alias2(alias1((depths[1] != null ? depths[1].cardHeight : depths[1]), depth0))
    + "px;float: left;margin-right: "
    + alias2(alias1((depths[1] != null ? depths[1].cardSpacing : depths[1]), depth0))
    + "px;margin-bottom: "
    + alias2(alias1((depths[1] != null ? depths[1].cardSpacing : depths[1]), depth0))
    + "px;\">\n    <canvas id=\"frontCanvas"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias2(alias1((depths[1] != null ? depths[1].cardWidth : depths[1]), depth0))
    + "px; height: "
    + alias2(alias1((depths[1] != null ? depths[1].cardHeight : depths[1]), depth0))
    + "px;display: none;\"></canvas>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "  <div id=\"stats\" class=\"statcard text-left\" style=\"width:"
    + alias2(alias1((depths[1] != null ? depths[1].cardWidth : depths[1]), depth0))
    + "px; height: "
    + alias2(alias1((depths[1] != null ? depths[1].cardHeight : depths[1]), depth0))
    + "px;float: right;margin-left: "
    + alias2(alias1((depths[1] != null ? depths[1].cardSpacing : depths[1]), depth0))
    + "px;margin-bottom: "
    + alias2(alias1((depths[1] != null ? depths[1].cardSpacing : depths[1]), depth0))
    + "px;\">\n    <div style=\"position: relative;\">\n      <span id=\"keyText"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"statcard-number keypos\" style=\"color: "
    + alias2(alias1((depths[1] != null ? depths[1].keyColor : depths[1]), depth0))
    + ";font-size: "
    + alias2(alias1((depths[1] != null ? depths[1].keySize : depths[1]), depth0))
    + "pt;position: absolute;top: "
    + alias2(alias1((depths[1] != null ? depths[1].keyTop : depths[1]), depth0))
    + "px;left: "
    + alias2(alias1((depths[1] != null ? depths[1].keyLeft : depths[1]), depth0))
    + "px;\"><div class=\""
    + ((stack1 = helpers.blockHelperMissing.call(depth0,alias1((depths[1] != null ? depths[1].vertical : depths[1]), depth0),{"name":"../vertical","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "</div></span>\n      <canvas id=\"qr"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"qrpos\" style=\"position: absolute;top: "
    + alias2(alias1((depths[1] != null ? depths[1].qrTop : depths[1]), depth0))
    + "px;left: "
    + alias2(alias1((depths[1] != null ? depths[1].qrLeft : depths[1]), depth0))
    + "px;\"></canvas>\n      <canvas id=\"backCanvas"
    + alias2(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias2(alias1((depths[1] != null ? depths[1].cardWidth : depths[1]), depth0))
    + "px; height: "
    + alias2(alias1((depths[1] != null ? depths[1].cardHeight : depths[1]), depth0))
    + "px;display: none;\"></canvas>\n    </div>\n  </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "vertical";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "<div class=\"page1\" style=\"overflow: hidden;padding-top: "
    + alias4(((helper = (helper = helpers.frontTopMargin || (depth0 != null ? depth0.frontTopMargin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"frontTopMargin","hash":{},"data":data}) : helper)))
    + "px;padding-left: "
    + alias4(((helper = (helper = helpers.frontLeftMargin || (depth0 != null ? depth0.frontLeftMargin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"frontLeftMargin","hash":{},"data":data}) : helper)))
    + "px;page-break-after: always;\">\n";
  stack1 = ((helper = (helper = helpers.cards || (depth0 != null ? depth0.cards : depth0)) != null ? helper : alias2),(options={"name":"cards","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.cards) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n<div class=\"page2\" style=\"overflow: hidden;padding-top: "
    + alias4(((helper = (helper = helpers.backTopMargin || (depth0 != null ? depth0.backTopMargin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backTopMargin","hash":{},"data":data}) : helper)))
    + "px;padding-right: "
    + alias4(((helper = (helper = helpers.backRightMargin || (depth0 != null ? depth0.backRightMargin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backRightMargin","hash":{},"data":data}) : helper)))
    + "px;\">\n";
  stack1 = ((helper = (helper = helpers.cards || (depth0 != null ? depth0.cards : depth0)) != null ? helper : alias2),(options={"name":"cards","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.cards) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n<style>\n.vertical{\n    /*writing-mode:tb-rl;*/\n    -webkit-transform:rotate(90deg);\n    -moz-transform:rotate(90deg);\n    -o-transform: rotate(90deg);\n    -ms-transform:rotate(90deg);\n    transform: rotate(90deg);\n    white-space:nowrap;\n    height:"
    + alias4(((helper = (helper = helpers.keySize || (depth0 != null ? depth0.keySize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keySize","hash":{},"data":data}) : helper)))
    + "pt;\n    width:"
    + alias4(((helper = (helper = helpers.keySize || (depth0 != null ? depth0.keySize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"keySize","hash":{},"data":data}) : helper)))
    + "pt;\n}\n</style>\n";
},"useData":true,"useDepths":true});

this["openmoney"]["templatesList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function", buffer = 
  "          <tr>\n            <td><a href=\"#merchants/"
    + alias1(container.lambda((depths[1] != null ? depths[1].merchantname : depths[1]), depth0))
    + "/templates/"
    + alias1(((helper = (helper = helpers.templateName || (depth0 != null ? depth0.templateName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"templateName","hash":{},"data":data}) : helper)))
    + "\">"
    + alias1(((helper = (helper = helpers.templateName || (depth0 != null ? depth0.templateName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"templateName","hash":{},"data":data}) : helper)))
    + "</a></td>\n            <td><div class=\"radio-inline custom-control custom-radio\">\n              <label>\n                <input type=\"radio\" id=\""
    + alias1(((helper = (helper = helpers.templateName || (depth0 != null ? depth0.templateName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"templateName","hash":{},"data":data}) : helper)))
    + "~default\" name=\""
    + alias1(((helper = (helper = helpers.templateName || (depth0 != null ? depth0.templateName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"templateName","hash":{},"data":data}) : helper)))
    + "~default\" class=\"default-radio\" ";
  stack1 = ((helper = (helper = helpers["default"] || (depth0 != null ? depth0["default"] : depth0)) != null ? helper : alias3),(options={"name":"default","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias4 ? helper.call(alias2,options) : helper));
  if (!helpers["default"]) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n                <span class=\"custom-control-indicator\"></span>\n                Default\n              </label>\n            </div></td>\n            <td>\n              <button type=\"button\" id=\""
    + alias1(((helper = (helper = helpers.templateName || (depth0 != null ? depth0.templateName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"templateName","hash":{},"data":data}) : helper)))
    + "\" name=\"printTemplate"
    + alias1(((helper = (helper = helpers.templateName || (depth0 != null ? depth0.templateName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"templateName","hash":{},"data":data}) : helper)))
    + "\" class=\"print btn btn-lg btn-primary-outline\" >\n                <strong>Print Template</strong>\n              </button>\n            </td>\n          </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = 
  "<div class=\"col-sm-12\" style=\"padding-top: 10px;\">\n  <h2><strong>Templates</strong></h2>\n  <div id=\"newButtonDiv\" class=\"text-right\" style=\"padding-bottom:10px;\">\n    <button type=\"button\" name=\"newTemplate\" class=\"btn btn-lg btn-success-outline\" >\n      <strong>New Template</strong>\n    </button>\n  </div>\n  <div class=\"table-full\">\n    <table class=\"table currencies\" data-sort=\"table\">\n      <thead>\n        <tr>\n          <th>Template Name</th>\n          <th>Default</th>\n          <th>Print</th>\n        </tr>\n      </thead>\n      <tbody class=\"table-rows\">\n";
  stack1 = ((helper = (helper = helpers.templates || (depth0 != null ? depth0.templates : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"templates","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.templates) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </tbody>\n    </table>\n  </div>\n</div>\n";
},"useData":true,"useDepths":true});

this["openmoney"]["templatesPrint"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<style>\n#stats {\n  border:1px solid #FFFFFF;\n}\n@media print {\n  button[name=showedit] {\n    display: none;\n  }\n  button[name=newCard] {\n    display: none;\n  }\n  button[name=print] {\n    display: none;\n  }\n  .email-link{\n    display: none;\n  }\n  .table-head{\n    display: none;\n  }\n  #dashhead {\n    display: none;\n  }\n  .navigation {\n    display: none;\n  }\n  .breadcrumbs {\n    display: none;\n  }\n  .receipt {\n    border-bottom: 1px dashed black;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .content {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .container {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  #stats {\n    border: 2px solid black;\n    border-radius: 0;\n    /*margin:5px;*/\n  }\n  .statcard-number {\n    font-size: 10pt;\n    padding:5pt;\n  }\n  .header {\n    display: none;\n  }\n  .form-group {\n    display: none;\n  }\n  .checkbox {\n    display: none;\n  }\n  .maindiv {\n    padding: 0;\n    display: none;\n  }\n  .printTemplate {\n    display: none;\n  }\n  @page { margin: 0; }\n  #body {\n    padding: 0;\n  }\n  .container {\n    padding: 0;\n  }\n  .content {\n    padding: 0;\n  }\n  .cards {\n    padding: 0;\n    margin: 0;\n    page-break-after: avoid;\n  }\n  html, body { height: 99%; }\n}\n\n</style>\n\n<div class=\"col-sm-12 header\">\n  <h1>Money Printer</h1>\n</div>\n<div class=\"col-sm-6 maindiv\" style=\"padding-top: 10px;\">\n\n  <div class=\"col-sm-6 form-group text-left\">\n    <label for=\"numberOfCards\">Number of Cards</label>\n    <input type=\"number\" id=\"numberOfCards\" name=\"numberOfCards\" value=\""
    + alias4(((helper = (helper = helpers.numberOfCards || (depth0 != null ? depth0.numberOfCards : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numberOfCards","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Cards\" class=\"form-control\" />\n  </div>\n\n  <div class=\"col-sm-6 form-group text-left\">\n    <label for=\"cardspacing\">Space Between Cards</label>\n    <input type=\"number\" id=\"cardspacing\" name=\"cardspacing\" value=\""
    + alias4(((helper = (helper = helpers.cardSpacing || (depth0 != null ? depth0.cardSpacing : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardSpacing","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"px\" class=\"form-control\" />\n  </div>\n\n  <div class=\"col-sm-6 form-group text-left\">\n    <label for=\"page1top\">front top margin</label>\n    <input type=\"number\" id=\"page1top\" name=\"page1top\" value=\""
    + alias4(((helper = (helper = helpers.frontTopMargin || (depth0 != null ? depth0.frontTopMargin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"frontTopMargin","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"px\" class=\"form-control\" />\n  </div>\n\n  <div class=\"col-sm-6 form-group text-left\">\n    <label for=\"page1left\">front left margin</label>\n    <input type=\"number\" id=\"page1left\" name=\"page1left\" value=\""
    + alias4(((helper = (helper = helpers.frontLeftMargin || (depth0 != null ? depth0.frontLeftMargin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"frontLeftMargin","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"px\" class=\"form-control\" />\n  </div>\n\n  <div class=\"col-sm-6 form-group text-left\">\n    <label for=\"page2top\">back top margin</label>\n    <input type=\"number\" id=\"page2top\" name=\"page2top\" value=\""
    + alias4(((helper = (helper = helpers.backTopMargin || (depth0 != null ? depth0.backTopMargin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backTopMargin","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"px\" class=\"form-control\" />\n  </div>\n\n  <div class=\"col-sm-6 form-group text-left\">\n    <label for=\"page2right\">back right margin</label>\n    <input type=\"number\" id=\"page2right\" name=\"page2right\" value=\""
    + alias4(((helper = (helper = helpers.backRightMargin || (depth0 != null ? depth0.backRightMargin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backRightMargin","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"px\" class=\"form-control\" />\n  </div>\n\n  <!-- <div class=\"col-sm-6\">\n    <div class=\"checkbox custom-control custom-checkbox\">\n      <label>\n        <input type=\"checkbox\" id=\"borders\" name=\"borders\" value=\"true\" ";
  stack1 = ((helper = (helper = helpers.borders || (depth0 != null ? depth0.borders : depth0)) != null ? helper : alias2),(options={"name":"borders","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.borders) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " />\n        <span class=\"custom-control-indicator\"></span>\n        Display Borders\n      </label>\n    </div>\n  </div> -->\n\n  <div class=\"text-right printTemplate\" style=\"padding-bottom: 20px;\">\n    <button type=\"button\" name=\"print\" class=\"btn btn-lg btn-primary-outline\">Print Template</button>\n  </div>\n</div>\n<div id=\"cards\" class=\"col-sm-12 cards\"></div>\n";
},"useData":true});

this["openmoney"]["transactions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <!-- "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.disabled : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " -->\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " -->\n          <tr><td style=\"border-top: none;\">\n            <button type=\"button\" id=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + "~button\" class=\"currency-buttons btn btn-lg btn-default-outline action-spacing highlight\" style=\"width: 100%; margin: 0;\">"
    + alias4(((helper = (helper = helpers.currency_name || (depth0 != null ? depth0.currency_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency_name","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + ")</button>\n            <div class=\""
    + alias4(((helper = (helper = helpers.currency || (depth0 != null ? depth0.currency : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currency","hash":{},"data":data}) : helper)))
    + " value-buttons\">\n              <button type=\"button\" class=\"btn btn-lg btn-success-outline action-spacing tab-spacing add-value add-value-selected\" style=\"width: 80%; margin: 10px;\">\n                <span class=\"icon icon-plus icon-padding\"></span>\n                ADD VALUE\n              </button>\n              <button type=\"button\" class=\"btn btn-lg btn-danger-outline action-spacing tab-spacing redeem-value\" style=\"width: 80%; margin: 10px;\">\n                <span class=\"icon icon-minus icon-padding\"></span>\n                REDEEM VALUE\n              </button>\n            </div>\n          </td></tr>\n        <!-- ";
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
  return buffer + "\" placeholder=\"Card Number\" class=\"form-control\" style=\"height: 44px; margin-right: 5px;\"/>\n       <span class=\"input-group-btn\">\n            <button type=\"button\" name=\"qrcode\" class=\"btn btn-sm btn-default-outline\" style=\"padding:0;\"><img src=\"public/assets/images/openmoney.gift.gif\"</button>\n       </span>\n    </div>\n  </div>\n  <div id=\"qrcode-reader\" class=\"modal\" style=\"display: none;\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" name=\"close\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Scan Qr Code</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"qr-error-notification\" class=\"notifications center-block alert alert-danger text-center\" role=\"alert\" style=\"display: none;\"></div>\n          <div id=\"reader\" style=\"width:270px;height:250px\">\n          </div>\n          <div id=\"qrfile\" style=\"display: none;\">\n            <canvas id=\"outCanvas\" width=\"270\" height=\"250\"></canvas>\n            <div id=\"imghelp\">select a file or capture an image from your camera\n              <input type=\"file\" id=\"qrfiles\"/>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-actions\">\n          <button type=\"button\" name=\"cancel\" class=\"cancel btn-link modal-action\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn-link modal-action\" data-dismiss=\"modal\">\n            <strong>Continue</strong>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <input type=\"hidden\" name=\"currency\" value=\"gifts\"/>\n  <input type=\"hidden\" name=\"polarity\" value=\""
    + alias5(((helper = (helper = helpers.polarity || (depth0 != null ? depth0.polarity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"polarity","hash":{},"data":data}) : helper)))
    + "\"/>\n  <input type=\"hidden\" name=\"sign\" id=\"sign\" value=\"+\" />\n  <div class=\"input-with-icon input-padding\">\n    <input type=\"text\" name=\"amount\" id=\"amount\" value=\"0.00\" class=\"form-control text-right "
    + ((stack1 = (helpers.if_eq || (depth0 && depth0.if_eq) || alias2).call(alias1,(depth0 != null ? depth0.polarity : depth0),"load",{"name":"if_eq","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + " input-padding\" style=\"font-size: 40px;height: 60px;\"/>\n    <span id='plus-icon' class=\"icon icon-plus\" style=\"font-size: 50px;\"></span>\n    <span id='minus-icon' class=\"icon icon-minus\" style=\"display: none; font-size: 50px;\"></span>\n  </div>\n  <div id=\"numberpad\" class=\"numberpad\">\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"1\" value=\"1\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">1</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"2\" value=\"2\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">2</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"3\" value=\"3\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">3</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"4\" value=\"4\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">4</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"5\" value=\"5\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">5</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"6\" value=\"6\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">6</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"7\" value=\"7\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">7</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"8\" value=\"8\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">8</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"9\" value=\"9\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">9</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" name=\"0\" value=\"0\" class=\"btn btn-default-outline numberpad-button\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\">0</span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" id=\"del\" name=\"del\" value=\"del\" class=\"btn btn-warning-outline\" style=\"width: 100%; height: 100%;\"><span class=\"numberpad-font\"><span class=\"icon icon-erase\"></span></span></button>\n          </div>\n      </div>\n    </div>\n    <div class=\"col-xs-4 numberpad-row\">\n      <div class=\"aspect-contianer\">\n          <div class=\"aspect-one-to-one\"></div>\n          <div class=\"aspect-element\">\n              <button type=\"button\" id=\"process\" name=\"process\" value=\"process\" class=\"btn btn-success-outline \" style=\"width: 100%; height: 100%;\"><span class=\"material-icons numberpad-font\" style=\"padding-top: 13px;\">keyboard_return</span></button>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["openmoney"]["welcome"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<style>\n/* navbar */\n.app-navbar {\n  font-weight: 500;\n  letter-spacing: .05em;\n  position: absolute;\n}\n\n/* header block */\n.app-graph {\n  width: 150%;\n  position: absolute;\n  right: 0;\n  bottom: -40px;\n}\n@media (min-width: 768px) {\n  .app-graph {\n    width: 100%;\n    bottom: 0;\n  }\n}\n\n/* iphone block */\n.app-iphone-block {\n  padding-bottom: 60px;\n}\n@media (min-width: 768px) {\n  .app-iphone-block {\n    padding-bottom: 0;\n  }\n}\n\n/* code block */\n.app-code-block {\n  background-color: #262F36;\n  overflow: hidden;\n}\n.app-code {\n  color: #6EA4CF;\n  border: #495158 1px solid;\n  background: transparent;\n  font-size: 12px;\n  padding: 20px;\n  line-height: 1.55;\n  margin-bottom: 30px;\n}\n.app-code span {\n  color: #8496A5;\n}\n@media (min-width: 768px) {\n  .app-code {\n    width: 600px;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 992px) {\n  .app-code {\n    padding: 50px;\n    font-size: 15px;\n  }\n}\n\n/* pull quote block */\n.app-high-praise img {\n  width: 100%;\n}\n\n/* brand ribbon block */\n.app-ribbon {\n  background: #6EA4CF;\n}\n.app-ribbon .container {\n  padding-left: 0;\n  padding-right: 0;\n  margin-bottom: -30px;\n}\n.app-ribbon img {\n  margin: 0 10px 30px;\n}\n\n/* marketing grid block */\n.app-block-marketing-grid .container {\n  margin-bottom: -60px;\n}\n.app-marketing-grid .m-b {\n  margin-bottom: 10px !important;\n}\n@media (max-width: 768px) {\n  .app-marketing-grid .m-b-lg {\n    margin-bottom: 40px !important;\n  }\n}\n\n/* price plan block */\n.app-price-plans {\n  background-color: #F4F5F6;\n}\n.app-price-plans .container {\n  margin-bottom: -60px;\n}\n\n\n/* footer block */\n.app-footer {\n  background-color: #262F36;\n}\n.app-footer a {\n  color: #fff;\n}\n\n\n/* general block overrrides */\n@media (max-width: 768px) {\n  .block .lead {\n    line-height: 1.3;\n  }\n  .block h3 {\n    line-height: 1.15;\n  }\n}\n\n/* general inverse overrides */\n.block-inverse .text-muted {\n  color: rgba(255, 255, 255, .7);\n}\n.block-inverse .block-bg-img {\n  background-color: transparent;\n}\n\n/* general btn overrides */\n.btn-lg {\n  font-size: 18px;\n}\n.block-secondary .btn-lg {\n  width: 100%;\n}\n.btn-lg:not(.btn-block) {\n  padding: 12px 50px;\n}\n@media (min-width: 768px) {\n  .btn-lg:not(.btn-block) {\n    width: auto;\n  }\n}\n\n/* ie10+ */\n@media (min-width: 768px) {\n  .app-align-center {\n    display: flex;\n    align-items: center;\n  }\n}\n\n</style>\n<div class=\"stage\" id=\"stage\">\n  <div class=\"block block-inverse block-fill-height app-header\" style=\"background-image: url(public/assets/images/register.jpg);\">\n\n    <nav class=\"navbar navbar-transparent navbar-fixed-top navbar-padded app-navbar p-t-md\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed p-x-0\" data-target=\"#stage\" data-toggle=\"stage\" data-distance=\"-250\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#signup\">\n          <strong style=\"background: #fff; padding: 12px; border-radius: 4px; color: #28669F;\">\n            Sign Up\n          </strong>\n        </a>\n        <a class=\"navbar-brand\" href=\"#login\">\n          <strong style=\"background: #fff; padding: 12px; border-radius: 4px; color: #28669F;\">\n            Login\n          </strong>\n        </a>\n      </div>\n      <div class=\"navbar-collapse collapse text-uppercase\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a href=\"#login\">Login</a>\n          </li>\n          <li>\n            <a href=\"#forgot\">Forgot Password</a>\n          </li>\n          <li>\n            <a href=\"#about\">About Us</a>\n          </li>\n          <li>\n            <a href=\"#docs\">Docs</a>\n          </li>\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </nav>\n\n\n    <img class=\"app-graph\" src=\"public/assets/images/startup-0.svg\">\n\n    <div class=\"block-xs-middle p-b-lg\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-10 col-md-6\">\n            <h1 class=\"block-title m-b-sm\">Openmoney Gift</h1>\n            <p class=\"lead m-b-md\" style=\"color: #FFF; background-color:rgba(3, 3, 3, 0.75); border-radius: 20px; padding: 20px;\">Create your own gift card program, run a promotional program, track loyalty points, start a stamp card program, track tab accounts or create your own currency.</p>\n            <button id=\"try\" class=\"btn btn-primary btn-lg\">Try it now</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a name=\"iphone\"></a>\n  <div class=\"block block-secondary app-iphone-block\">\n    <div class=\"container\">\n      <div class=\"row app-align-center\">\n\n        <div class=\"col-sm-5 hidden-xs\">\n          <img class=\"app-iphone\" src=\"public/assets/images/startup-2.jpg\" style=\"width: 100%;\">\n        </div>\n\n        <div class=\"col-sm-6 col-sm-offset-1\">\n          <h6 class=\"text-muted text-uppercase\">Simple Interfaces and Easy Setup</h6>\n          <h3 class=\"m-t-0\">Create card templates, manage gift cards, loyalty programs, customer tabs and do your day end reporting. Customer support in exchange for your currency.</h3>\n          <p class=\"lead m-b-md\">Customer convenience, giftcards, pre-payment crowd changing, customer tabs, rewards and more - one system for all.</p>\n          <div class=\"row hidden-sm\">\n            <div class=\"col-sm-6 m-b-md\">\n              <h5 class=\"m-y-0\">Simple Interfaces</h5>\n              <p>Intuitive interfaces gets you up and running fast. All entries are posted immediately and reporting is easy.<a href=\"#operation\" class=\"text-primary\">Learn more.</a></p>\n            </div>\n            <div class=\"col-sm-6\">\n              <h5 class=\"m-y-0\">Easy Setup</h5>\n              <p>Much of what this gift offers is simple, but there&#39;s much more to this. <a href=\"#operation\" class=\"text-primary\">Learn more</a>.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <a name=\"operation\"></a>\n  <div class=\"block block-inverse block-secondary app-code-block\">\n    <div class=\"container\">\n      <div class=\"row app-align-center\">\n        <div class=\"col-sm-5 col-sm-push-7\">\n          <style>\n          #stats {\n            border:1px solid #FFFFFF;\n          }\n          .vertical{\n              /*writing-mode:tb-rl;*/\n              -webkit-transform:rotate(90deg);\n              -moz-transform:rotate(90deg);\n              -o-transform: rotate(90deg);\n              -ms-transform:rotate(90deg);\n              transform: rotate(90deg);\n              white-space:nowrap;\n              height:14pt;\n              width:14pt;\n          }\n          </style>\n          <div class=\"page1\" style=\"overflow: hidden;\">\n            <div id=\"stats\" class=\"statcard text-left\" style=\"width:305px; height: 195px;float: left;\">\n              <img src=\"public/assets/images/giftcard.svg\" id=\"frontCanvas\" style=\"width:303px; height: 192px;\"></canvas>\n            </div>\n            <div id=\"stats\" class=\"statcard text-left\" style=\"width:305px; height: 195px;float: right;\">\n              <div style=\"position: relative;\">\n                <span id=\"keyText\" class=\"statcard-number keypos\" style=\"color: #ffffff;font-size: 12pt;position: absolute;top: 20px;left: 95px;\"><div class=\"vertical\">e023b47d4964b3e8b2</div></span>\n                <img src=\"public/assets/images/qr.png\" id=\"qr\" class=\"qrpos\" style=\"position: absolute;top: 20px;left: 115px; height: 152px;\"/>\n                <img src=\"public/assets/images/giftcard-back.svg\" id=\"backCanvas\" style=\"width:303px; height: 192px;\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6 col-sm-pull-5\">\n          <h6 class=\"text-muted text-uppercase\">Your branding is easy as uploading an image.</h6>\n          <h3 class=\"m-t-0\">The template designer allows you to customize your cards with your brand, giving your cards that professional look and feel they are looking for.</h3>\n          <p class=\"lead m-b-md text-muted\">Printing has been made easy with templates pre-configured to save time at the till. Your customers will love all the tech we crammed into every QR code.</p>\n          <button id=\"try\" class=\"btn btn-default btn-lg btn-borderless\">\n            Try Our Interface\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"block block-secondary app-high-praise p-b-0\">\n    <div class=\"container\">\n      <div class=\"row app-align-center\">\n        <div class=\"col-sm-5 col-sm-push-7\">\n          <h6 class=\"text-muted text-uppercase\">Open Money Gift</h6>\n          <h3 class=\"m-t-0 m-b-md\">&quot;Openmoney Gift is a gift for everyone to bring prosperity into their lives.&quot;</h3>\n          <p class=\"m-b-md text-muted\">Dominique Legault, founder of Openmoney Gift</p>\n        </div>\n        <div class=\"col-sm-6 col-sm-pull-5\">\n          <!-- <img src=\"assets/img/startup-3.jpg\"> -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"block app-ribbon p-y-lg\">\n    <div class=\"container text-center\">\n      <img src=\"public/assets/images/openmoney-logo-vector.svg\" style=\"width: 200px;\">\n      <img src=\"public/assets/images/open-money-gift-text-vector.svg\" style=\"width: 200px;\">\n      <!-- <img src=\"assets/img/startup-6.svg\">\n      <img src=\"assets/img/startup-7.svg\">\n      <img src=\"assets/img/startup-8.svg\"> -->\n    </div>\n  </div>\n\n  <div class=\"block block-secondary app-block-marketing-grid\">\n    <div class=\"container text-center\">\n\n      <div class=\"row m-b-lg\">\n        <div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3\">\n          <h6 class=\"text-muted text-uppercase\">What&#39;s in this gift for you.</h6>\n          <h3 class=\"m-t-0 m-b\">Make your life and your business easier every day.</h3>\n        </div>\n      </div>\n\n      <div class=\"row app-marketing-grid\">\n        <div class=\"col-sm-4 p-x-md m-b-lg\">\n          <img class=\"m-b\" src=\"public/assets/images/startup-9.svg\">\n          <p><strong>Gift Program.</strong> Run your own free gift card program.</p>\n        </div>\n        <div class=\"col-sm-4 p-x-md m-b-lg\">\n          <img class=\"m-b\" src=\"public/assets/images/startup-11.svg\">\n          <p><strong>Loyalty.</strong> Tools to build your customer service community.</p>\n        </div>\n        <div class=\"col-sm-4 p-x-md m-b-lg\">\n          <img class=\"m-b\" src=\"public/assets/images/startup-10.svg\">\n          <p><strong>Simple Payments.</strong> Reduce point of sale queues for your regular customers.</p>\n        </div>\n      </div>\n\n      <div class=\"row app-marketing-grid\">\n        <div class=\"col-sm-4 p-x-md m-b-lg\">\n          <img class=\"m-b\" src=\"public/assets/images/startup-12.svg\">\n          <p><strong>Own Your Data.</strong> Download your data to spreadsheets or access it through our API.</p>\n        </div>\n        <div class=\"col-sm-4 p-x-md m-b-lg\">\n          <img class=\"m-b\" src=\"public/assets/images/startup-13.svg\">\n          <p><strong>Cross Platform and Cross Browser.</strong> It doesn&#39;t matter if you&#39;re on Linux, Mac, Windows, Android or ios using Chrome, Safari, or Internet Explorer it just works.</p>\n        </div>\n        <div class=\"col-sm-4 p-x-md m-b-lg\">\n          <img class=\"m-b\" src=\"public/assets/images/startup-14.svg\">\n          <p><strong>Security is Number One.</strong> All your data is transmitted over HTTPS and we use strong cryptography to encrypt your data over the wire.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"block app-price-plans\">\n    <div class=\"container text-center\">\n\n      <div class=\"row m-b-lg\">\n        <div class=\"col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3\">\n          <h6 class=\"text-muted text-uppercase\">It&#39;s too good to be true</h6>\n          <h3 class=\"m-t-0\">No plans. It&#39;s a gift.</h3>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-4 p-x m-b-lg\">\n          <div class=\"p-x\">\n            <h6 class=\"text-muted text-uppercase m-b\">Small Business</h6>\n            <img class=\"m-b\" src=\"public/assets/images/startup-15.svg\">\n            <p>For every customer you promise to give us a dollar&#39;s worth of your service. Enough to run a gift, promotional, loyalty, stamp or tab program on a promise.</p>\n          </div>\n\n          <ul class=\"list-unstyled list-bordered text-left m-y-md\">\n            <li class=\"p-y\"><strong>Set Contribution Levels</strong> set your level of contributions so you&#39;re always in control.</li>\n            <li class=\"p-y\"><strong>Unlimited Currencies</strong> track gift dollars, promotional dollars, loyalty points, tab accounts, stamp cards or you name it.</li>\n            <li class=\"p-y\"><strong>Generate Print Templates</strong> print QR code cards or QR code paper currency templates</li>\n            <li class=\"p-y\"><strong>Your Brand</strong> on the Cards / Customer Portal / Merchant Portal / Receipts</li>\n          </ul>\n\n          <button class=\"btn btn-lg btn-primary btn-block\">\n            Start <span class=\"visible-lg-inline\">a small business account</span>\n          </button>\n        </div>\n\n        <div class=\"col-sm-4 p-x m-b-lg\">\n          <div class=\"p-x\">\n            <h6 class=\"text-muted text-uppercase m-b\">Franchise</h6>\n            <h3 class=\"m-b\"><a href=\"mailto:openmoney.gift@gmail.com\"><img class=\"m-b\" src=\"public/assets/images/startup-16.svg\"></a></h3>\n            <p>Manage multiple locations and employees perfect for franchise merchants.</p>\n          </div>\n\n          <ul class=\"list-unstyled list-bordered text-left m-y-md\">\n            <li class=\"p-y\"><strong>Employee Pin</strong> easily switch employees with a simple pin code.</li>\n            <li class=\"p-y\"><strong>Access Control</strong> Specify what employees can do what.</li>\n            <li class=\"p-y\"><strong>Accountability</strong> track which employee at which location made what transaction.</li>\n            <li class=\"p-y\"><strong>Reporting</strong> generate day / month / year end reports and export them to your analytics or accounting software.</li>\n          </ul>\n\n          <button class=\"btn btn-lg btn-primary btn-block\">\n            Start <span class=\"visible-lg-inline\">a franchise business account</span>\n          </button>\n        </div>\n\n        <div class=\"col-sm-4 p-x m-b-lg\">\n          <div class=\"p-x\">\n            <h6 class=\"text-muted text-uppercase m-b\">Community Currency</h6>\n            <!-- <img class=\"m-b\" src=\"assets/img/startup-17.svg\"> -->\n            <h3 class=\"m-b\"><a href=\"mailto:openmoney.gift@gmail.com\"><img class=\"m-b\" src=\"public/assets/images/startup-16.svg\"></a></h3>\n            <p>Increase economic activity, issue your own secure paper currency and circulate it through your community.</p>\n          </div>\n\n          <ul class=\"list-unstyled list-bordered text-left m-y-md\">\n            <li class=\"p-y\"><strong>Generate Print Templates</strong> Automatically generate account balances, freeze accounts and print templates of those accounts to issue your own printed currency.</li>\n            <li class=\"p-y\"><strong>Balance Checks</strong> Use the QR code to verify if the paper currency value is in circulation for fraud prevention.</li>\n            <li class=\"p-y\"><strong>Track Currency In Circulation</strong> Add or remove currency as needed from circulation easily.</li>\n            <li class=\"p-y\"><strong>Cards</strong> Members can hold digital QR code cards with balances so the paper money can stay in circulation.</li>\n          </ul>\n\n          <button class=\"btn btn-lg btn-primary btn-block\">\n            Start <span class=\"visible-lg-inline\">a community currency</span>\n          </button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"block block-inverse app-footer\">\n   <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 m-b-md\">\n          <ul class=\"list-unstyled list-spaced\">\n            <li class=\"m-b\"><h6 class=\"text-uppercase\">About</h6></li>\n            <li class=\"text-muted\">\n             We&#39;ve been working on openmoney systems for 4 years and are proud of what we&#39;ve created. If you&#39;d like to learn more, or are interested in contributing, contact us anytime at <a href=\"mailto:openmoney.gift@gmail.com\">openmoney.gift@gmail.com</a>.\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-sm-2 col-sm-offset-1 m-b-md\">\n          <ul class=\"list-unstyled list-spaced\">\n            <li class=\"m-b\"><h6 class=\"text-uppercase\">Product</h6></li>\n            <li class=\"text-muted\">Features</li>\n            <li class=\"text-muted\">Examples</li>\n            <li class=\"text-muted\">Tour</li>\n            <li class=\"text-muted\">Gallery</li>\n          </ul>\n        </div>\n        <div class=\"col-sm-2 m-b-md\">\n          <ul class=\"list-unstyled list-spaced\">\n            <li class=\"m-b\"><h6 class=\"text-uppercase\">Apis</h6></li>\n            <li class=\"text-muted\">Rich data</li>\n            <li class=\"text-muted\">Simple data</li>\n            <li class=\"text-muted\">Real time</li>\n            <li class=\"text-muted\">Social</li>\n          </ul>\n        </div>\n        <div class=\"col-sm-2 m-b-md\">\n          <ul class=\"list-unstyled list-spaced\">\n            <li class=\"m-b\"><h6 class=\"text-uppercase\">Legal</h6></li>\n            <li class=\"text-muted\">Terms</li>\n            <li class=\"text-muted\">Legal</li>\n            <li class=\"text-muted\">Privacy</li>\n            <li class=\"text-muted\">License</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

return this["openmoney"];

};