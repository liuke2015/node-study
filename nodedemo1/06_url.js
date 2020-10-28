var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
	//得到查询部分，由于写了true，那么就是一个对象
	console.log(req.url)
	res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'})
	var queryObj = url.parse(req.url,true).query;
	var name = queryObj.name;
	var age = queryObj.age;
	var sex = queryObj.sex;
    console.log("name="+name+"  age="+age+"   sex="+sex)
	res.end("服务器收到了表单请求" + name + age + sex);
});

server.listen(3000,"127.0.0.1");
