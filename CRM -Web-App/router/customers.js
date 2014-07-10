
/*
 * GET users listing.
 */
 
var db = require('../database/database');

exports.list = function(req, res){

db.getRecords(function(err, results) {
   
    res.send(results);
	
	
  });

}

