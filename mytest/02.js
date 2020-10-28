var http = require("http");
var fs = require("fs");
var path = require("path");
var st = require("silly-datetime");
var formid = require("formidable");

var server = http.createServer(function(req,res){
    if(req.url=='/dopost' && req.method.toLocaleLowerCase() === 'post'){
        var random = parseInt(Math.random()* 89999 + 10000)
        var d = st.format(new Date(),"YYYYMMDDHHmmss")
        var code = d+ random
        const form = formid({ multiples: true ,uploadDir: __dirname+"/images"});
        form.parse(req,function(err,fields,files){
            if(files.picture.name){
                var extname = path.extname(files.picture.name)
                res.writeHead(200, { 'content-type': 'application/json' });
                res.write(JSON.stringify({fields,files},null,2))
                newPath = __dirname + "/images/" + code  +extname
                fs.rename(files.picture.path,newPath,function(err){
                    if(err){
                        throw Error("改名失败~~")
                    }else{
                        res.end("改名成功~~")
                    }
                })
            }
        })

    }else if(req.url == '/'){
        fs.readFile(__dirname+"/form.html",function(err,data){
            res.writeHead(200,{"content-type":"text/html;charset=urtf"});
            res.end(data)
        })
    }else{
        res.writeHead(404,{"content-type":"text/html;charset=urtf"});
        res.end("404,找不到页面~~~")
    }
})

server.listen(81,"127.0.0.1")

