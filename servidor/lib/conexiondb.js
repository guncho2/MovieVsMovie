const mysql= require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'D4295D6e1fdd14a6',
  database : 'competencias'
});

module.exports = connection;