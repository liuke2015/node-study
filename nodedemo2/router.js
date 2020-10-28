/**
 * Created by Danny on 2015/9/20 14:57.
 */
//原文件
/*
exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404;

function showIndex(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("我是首页");
}

function showStudent(req,res){
    var id = req.url.substr(9,6);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("我是学生页面" + id);
}

function show404(req,res){
    res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"});
    res.end("404");
}*/
//我的练习
exports.toIndex = toIndex;
exports.toStudent = toStudent;
exports.to404 = to404;

function toIndex(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.end("我是首页~~~")
}
function toStudent(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.end("我是学生页，学生的id="+req.url.substr(9,6))
}
function to404(req,res){
    res.writeHead(404,{'Content-type':'text/html;charset=utf8'});
    res.end("404，页面找不到了~~~")
}
