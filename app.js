var http = require('http');
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

var server = http.createServer(function(request, response) {
    console.log('request made to ' + request.url);
    if (request.url.indexOf('shutdown') + 1) {
        console.log('/shutdown -> shutting down web server...');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Shutdown successful');
        con.end();
        process.exit();
    }
    if (request.url.indexOf('golfer') + 1) {
        con.query('SELECT * FROM golfer', function(err, result, fields) {
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'text/plain'});
            let golfer = result[0].firstName + " " + result[0].lastName;
            console.log('/golfer -> ' + golfer);
            response.end('Golfer: ' + golfer);
        });
    } else {
        response.end('Success'); 
    }
    
    response.writeHead(200, {'Content-Type': 'text/plain'});

});

server.listen(3000);
console.log('listening on port 3000');