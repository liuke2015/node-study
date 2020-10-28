var http = require("http");
var formidable = require("formidable");
var server = http.createServer(function(req,res){
    if(req.url=='/dopost' && req.method.toLocaleLowerCase()==='post'){
        const form = formidable({ multiples: true ,uploadDir: __dirname+"/images"});
        form.parse(req, (err, fields, files) => {
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(JSON.stringify({ fields, files }, null, 2));
        });
    }
})
server.listen(81,'127.0.0.1')
