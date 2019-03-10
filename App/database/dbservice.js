var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "taylor",
    password: "",
    database: "thebigmonkey"
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to local mysql database');
});