var $ = require('jquery');
var cache = [];
var authorization = 'Basic ' + new Buffer("openmoney-api:q0LfZKmhvd0H9jXZK56TVJvZM+9tm5zBG0/P60ZPXz/MVh0+/vryhZ5z/X23tME3d0HuzhlB/lRouNauFroLrGmweoXCIHDPqZ19p2EHSCT3JVXQgsQHiyNPDEZiS8b1fl++o5qwFoVx62hx0eO2djFUfTkk9kR+paiyIZLs7jrjwxUVl1J+qmQF0ZPSYdyZSc8KhD7cYITFFp2N2Y9r+A==").toString('base64');

exports.authenticate = function (merchant, callback){
  //merchant model object instance
  //check cache
  if(merchant.get('merchantname') in cache){
    //check expiry of token
    if(new Date(cache[merchant.get('merchantname')].expires).getTime() > new Date().getTime()){
      // not expired
      callback(null, cache[merchant.get('merchantname')].access_token);
    } else {
      //expired refresh token
      RefreshToken(merchant.get('merchantname'), cache[merchant.get('merchantname')].refresh_token, function(err, results){
        if(err){
          callback(err);
        } else {
          //put token to cache and merchant and return token

          merchant.set('access_token', results.access_token);
          merchant.set('expires', results.expires);
          merchant.set('refresh_token', results.refresh_token);
          merchant.save();
                //doesn't matter if err or ok


          cache[merchant.get('merchantname')] = {};
          cache[merchant.get('merchantname')].expires = results.expires;
          cache[merchant.get('merchantname')].access_token = results.access_token;
          cache[merchant.get('merchantname')].refresh_token = results.refresh_token;


          callback(null, results.access_token);
        }//else err
      });//RefreshToken
    }//else expired

  } else {


    //if token doesn't exist authenticate and get one
    if(typeof merchant.get('access_token') != undefined) {
      var request = {};
      request.grant_type = 'password';
      request.username = merchant.get('merchantname');
      request.password = merchant.get('password');

      var options = {};
      options.type = 'POST';
      options.data = JSON.stringify(request);
      options.dataType = 'json';
      options.contentType = "application/json";
      options.headers = { 'Authorization': authorization };
      options.url = '/V2/stewards/' + merchant.get('merchantname') + '/oauth/token';
      options.success = function(response){
        console.info('success:', response);
        //console.log(response.body);
        //put token to cache and merchant and return token
        merchant.set('access_token', response.access_token);
        merchant.set('expires', response.expires);
        merchant.set('refresh_token', response.refresh_token);
        merchant.save();

        cache[merchant.get('merchantname')] = {};
        cache[merchant.get('merchantname')].expires = response.expires;
        cache[merchant.get('merchantname')].access_token = response.access_token;
        cache[merchant.get('merchantname')].refresh_token = response.refresh_token;

        callback(null, merchant);
      };
      options.error = function(error){
        console.info('error:', error);
        callback(error);
      };
      $.ajax(options);
    } else {
      //check expiry of token
      if(typeof merchant.get('expires') != undefined && new Date(merchant.get('expires')).getTime() > new Date().getTime()){
        //use token
        callback(null, merchant);
      } else {
        //refresh token
        RefreshToken(merchant.get('merchantname'), merchant.get('refresh_token'), function(err, results){
          if(err){
            callback(err);
          } else {
            //put token to cache and merchant and return token
            merchant.set('access_token', results.access_token);
            merchant.set('expires', results.expires);
            merchant.set('refresh_token', results.refresh_token);
            merchant.save();

            cache[merchant.get('merchantname')] = {};
            cache[merchant.get('merchantname')].expires = results.expires;
            cache[merchant.get('merchantname')].access_token = results.access_token;
            cache[merchant.get('merchantname')].refresh_token = results.refresh_token;

            callback(null, merchant);
          }//else err
        });//RefreshToken
      }//else expired
    }//else token

  }//else in cache
}//Authenticate


function RefreshToken(merchantname, refresh_token, callback){
  var request = {};
  request.grant_type = 'refresh_token';
  request.username = merchantname;
  request.refresh_token = refresh_token;

  var options = {};
  options.type = 'POST';
  options.data = JSON.stringify(request);
  options.dataType = 'json';
  options.contentType = "application/json";
  options.headers = { 'Authorization': authorization };
  options.url = '/V2/stewards/' + merchant.get('merchantname') + '/oauth/token';
  options.success = function(response){
    console.info('success:', response);
    callback(null, response);
  };
  options.error = function(error){
    console.info('error:', error);
    callback(error);
  };
  $.ajax(options);
}//RefreshToken

exports.invalidateCache = function (merchantname){
  if(typeof merchantname != 'undefined' && typeof cache[merchantname] != 'undefined'){
    delete(cache[merchantname].access_token);
    delete(cache[merchantname].refresh_token);
    delete(cache[merchantname].expires);
    delete(cache[merchantname]);
  }
}//invalidateCache
