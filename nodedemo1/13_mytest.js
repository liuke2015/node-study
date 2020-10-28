var http = require("http")
var fs = require("fs")
var url = require("url")
var path = require("path")
var mimeAry = null
var server = http.createServer(function(req,res){
	var reqPath = url.parse(req.url).pathname
	console.log("reqPath="+reqPath);
	if(reqPath=='/favicon.ico'){
		return
	}
	if(reqPath=='/'){
		reqPath='/index.html'
	}
	fs.readFile('./static/'+reqPath,function(err,fileData){
		if(err){
			fs.readFile("./static/404.html",function(err,data){
				res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
				res.end(data);
			});
			return;
		}
		var extName = path.extname(reqPath);
		var myMime = ''
		if(!mimeAry){
			fs.readFile('./mime.json',function(err,jsonData){
				mimeAry = JSON.parse(jsonData)
				myMime = mimeAry[extName];
				res.writeHead(200,{'Content-type':myMime});
				res.end(fileData);
			})
		}else{
			myMime = mimeAry[extName];
			res.writeHead(200,{'Content-type':myMime});
			res.end(fileData);
		}
	})
})
server.listen(3000,'127.0.0.1')
