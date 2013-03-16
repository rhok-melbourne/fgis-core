var should = require('should')
, fgisOrm = require('../lib/fgis-orm')
, express = require('express');

describe('orm', function() {

  var app = express();
  var conf = {
    get: function(key) {
      var password = process.env.DEV_POSTGRES_PASSWORD;
      if (typeof password == 'undefined') {
        throw Error('Missing env.DEV_POSTGRES_PASSWORD');
      }
      var dbName = 'fgis_development';
      var dbOwner = 'fgis_development';
      return "postgres://" + dbOwner + ":" + password + "@localhost/" + dbName;
    }
  };

  it('should load the orm', function(done) {
    fgisOrm(app, conf);
    //TODO: assert that the ORM is actually loaded
    done()
  });

});