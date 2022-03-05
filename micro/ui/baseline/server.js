const http = require('http');
const querystring = require('querystring');
const url = require('url');
const util = require('util');

http.createServer(function(req, res){

 res.writeHead(200);
     var data = [ ];
     for (var k in req.headers) {
       var v = new Buffer.from(req.headers[k], 'utf-8');
       data.push(util.format("  %s: %s", k, v) );
     }
   res.write(req.method+": "+req.url+"\n");
   res.write(util.format('---headers---\n%s\n---\n', data.join('\n')) );

req.on('data',function(message){

 res.write("---message---\n");
 res.write(message);
 res.write("---\n");



 });

 req.on('end',function(){

 res.end();
 });
}).listen(8181);
