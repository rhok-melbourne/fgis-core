var log = require('debug')('rest')
var feature = require('../lib/features.js')

module.exports = function(app) {

  /**
   * Check error and build generic http response for a single object.
   *
   * @param res
   * @param err
   * @param data
   */
  function singleResponse(res, err, data){
    if (err) {
      res.send(500, err);
    } else {
      res.send(data);
    }
  }

  app.get('/', function(req, res) {
    res.render('index', { title: 'fgis-core' })
  });

  app.get('/feature/fire', function(req, res) {
    feature.getFireFeatures(req.db, singleResponse.bind(this, res));
  });

  app.get('/feature/fire/:id', function(req, res) {
    feature.getFireFeature(req.db, req.params.id, singleResponse.bind(this, res));
  });

  app.post('/feature/fire', function(req, res) {
    feature.addFireFeature(req.body, req.db, function(err, featureId) {
      if (err) {
        res.send(500, err);
      } else {
        res.send(201, {id: featureId});
      }
    });
  });

  app.delete('/feature/fire/:id', function(req, res) {
    log(request.method, request.url);
    feature.deleteFireFeature(req.db, req.params.id, function(err, fire) {
      if (err) {
        res.send(500, err);
      } else {
        res.send();
      }
    });
  });

}