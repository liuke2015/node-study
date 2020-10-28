var http = require("http");
//原文件
/*var server = http.createServer(function (req, res) {
	//得到url
	var userurl = req.url;

	res.writeHead(200, {"Content-Type": "text/html;charset=UTF8"})
	//substr函数来判断此时的开头
	if (userurl.substr(0, 9) == "/student/") {
		var studentid = userurl.substr(9);
		console.log(studentid);
		if (/^\d{10}$/.test(studentid)) {
			res.end("您要查询学生信息，id为" + studentid);
		} else {
			res.end("学生学号位数不对");
		}
	} else if (userurl.substr(0, 9) == "/teacher/") {
		var teacherid = userurl.substr(9);
		if (/^\d{6}$/.test(teacherid)) {
			res.end("您要查询老师信息，id为" + teacherid);
		} else {
			res.end("老师学号位数不对");
		}
	} else {
		res.end("请检查url");
	}
});

server.listen(3000,"127.0.0.1");*/

//我的修改
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
	var userUrl=req.url
	if(userUrl.startsWith('/student/')){
		var sNum=userUrl.substr(9)
		if(sNum.length===10){
			res.end('学生id:'+sNum)
		}else{
			res.end('学生id位数错误')
		}
	}else if(userUrl.startsWith('/teacher/')){
		var tNum=userUrl.substr(9)
		if(tNum.length===6){
			res.end('老师id:'+tNum)
		}else{
			res.end('老师id位数错误')
		}
	}else{
		res.end("url错误")
	}
}).listen(3000,'127.0.0.1')
