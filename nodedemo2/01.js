/**
 * Created by Danny on 2015/9/20 9:23.
 */
//原文件
/*var http = require("http");

//创建服务器
var server = http.createServer(function(req,res){
    //每次接受请求之后做的事情
    //设置响应头
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.write("<ul>");
    res.write("<li>哈哈</li>");
    res.write("<li>哈哈</li>");
    res.write("<li>哈哈</li>");
    res.write("<li>哈哈</li>");
    res.write("<li>哈哈</li>");
    res.write("<li>哈哈</li>");
    res.write("</ul>");
    res.end("成功！！");
});

server.listen(80,"127.0.0.1");*/
//我的练习
var http = require("http");

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    res.write("<ul>");
    res.write("<li>哈哈1</li>");
    res.write("<li>哈哈2</li>");
    res.write("<li>哈哈3</li>");
    res.write("<li>哈哈4</li>");
    res.write("</ul>");
    res.end("完成！");

})
server.listen(80,"127.0.0.1")
