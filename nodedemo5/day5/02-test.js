/*02.js---我的练习*/
var express = require("express")
var app = express()
var db = require("./model/db-test")

app.get("/insertOne",function(req,res){
    let cName ="student"
    let data = {
        name:"小花",
        age:parseInt(Math.random()*10+10)
    }
    db.insertOne(cName,data,function(err,result){
        if(err){
            console.log("插入失败");
            return;
        }
        console.log("插入成功");
       /* console.log(result)*/
        res.send(result);
    })
})
app.get("/insert",function(req,res){
    let cName ="teacher"
    let data = [
        {
            name:"王老师",
            age:parseInt(Math.random()*100+10)
        },
        {
            name:"李老师",
            age:parseInt(Math.random()*100+10)
        }
    ]
    db.insert(cName,data,function(err,result){
        if(err){
            console.log("插入失败")
            return
        }
        console.log("插入成功")
        res.send(result)
    })
})
app.get("/findList",function(req,res){
    let pageNum = parseInt(req.query.pageNum)
    let pageSize = parseInt(req.query.pageSize)
    let cName = "vest"
    let findObj={
       /* '$or':[
            {'robotNickname':'国画哈哈哈1'},
            {'robotNickname':'艾昌盛'}
        ]*/
    }//查询条件
    let pageObj={
        pageNum : pageNum,//第几页
        pageSize : pageSize//每页几条
    }//分页条件
    db.findList(cName,findObj,pageObj,function(result){
        /*if(err){
            console.log("查询失败")
            return
        }*/
        res.send(result)
    })
})
app.get("/del",function(req,res){
    let age = parseInt(req.query.age)
    db.deleteMany("student",{"age":age},function(err,result){
        if(err){
            console.log(err)
        }
        res.send(result)
    })

})
app.listen(3001)
