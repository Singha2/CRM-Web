var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myproductsdb',
  connectionLimit: 10,
  supportBigNumbers: true
});

// Get records from a customers
exports.getRecords = function(callback) {
  var sql = "SELECT * FROM trucksinfo";
  // get a connection from the pool
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }
    // make the query
    connection.query(sql, function(err, results) {
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
};