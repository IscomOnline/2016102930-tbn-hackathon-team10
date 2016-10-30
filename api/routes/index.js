var express = require('express');
var mysql = require('mysql');
var $sql = require('../conf/sql.js');
var $conf = require('../conf/db.js');

var pool = mysql.createPool($conf.mysql);
var router = express.Router();

router.get('/birds', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  pool.getConnection(function (err, connection) {
    connection.query($sql.animals, function (err, result) {
      if (result) {
        res.status(200).json(result);
      }
      connection.release();
    });
  });
});

router.post('/search', function(req, res, next) {
  var name = '%' + req.param('name') + '%';
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  pool.getConnection(function (err, connection) {
    connection.query($sql.search, [name] , function (err, result) {
      if (result) {
        res.status(200).json(result);
      }
      connection.release();
    });
  });
});

router.post('/detail', function(req, res, next) {
  var name = req.param('name');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  pool.getConnection(function (err, connection) {
    connection.query($sql.detail, [name] , function (err, result) {
      if (result) {
        res.status(200).json(result);
      }
      connection.release();
    });
  });
});

router.post('/chart', function(req, res, next) {
  var name = req.param('name');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  pool.getConnection(function (err, connection) {
    connection.query($sql.chart, [name] , function (err, result) {
      if (result) {
        res.status(200).json(result);
      }
      connection.release();
    });
  });
});

module.exports = router;
