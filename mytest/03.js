var http = require("http")
var fs = require("fs")
var ejs = require("ejs")

var server = http.createServer(function(req,res){
    fs.readFile(__dirname+"/view/index.ejs",function(err,data){
        if(err){
            throw Error("读取文件错误")
        }
        let template = data.toString()
        let params={
            day:2,
            num:13,
            list:[
                {title:"第一行",num:1},
                {title:"第二行",num:2},
                {title:"第三行",num:3},
            ]
        }
        var html = ejs.render(template,params)
        res.writeHead(200,{'content-type':"text/html;charset:utf8"})
        res.end(html)
    })
})
server.listen(80,'127.0.0.1')
