var express = require('express');
var mysql = require('mysql');
var $sql = require('../conf/sql.js');
var $conf = require('../conf/db.js');

var pool = mysql.createPool($conf.mysql);
var router = express.Router();

router.get('/birds', function(req, res, next) {
  pool.getConnection(function (err, connection) {
    connection.query($sql.animals, function (err, result) {
      if (result) {
        res.status(200).json(result);
      }
      connection.release();
    });
  });
});

module.exports = router;
