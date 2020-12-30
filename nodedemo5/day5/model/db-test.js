/*db.js---我的练习*/
var MongoClient = require("mongodb").MongoClient;
var dbUrl = require("../dbUrl")

function _MongConect(callback){
    MongoClient.connect(dbUrl.haha,function(err,db){
        if(err){
            console.log("连接数据库失败")
            return
        }
        callback(db)
    })
}
/*插入单条数据
* data:对象结构，例如：{name:"小小",age:18}
* */
exports.insertOne = function (collectionName,data,callback){
    _MongConect(function(db){
        db.collection(collectionName).insertOne(data,function(err,result){
            callback(err,result);
            db.close();
        })
    })
}
/*插入多条数据
* data:数组结构结构，例如：[{name:"小小",age:18},{name:"晚晚",age:20}]
* */
exports.insert = function(cName,data,callback){
    _MongConect(function(db){
        db.collection(cName).insert(data,function(err,result){
            callback(err,result)
            db.close()
        })
    })
}
/*查询多条数据
* findObj:查询条件，对象结构
* pageObj：分页条件，对象结构
* */
exports.findList = function(cName,findObj,pageObj,callback){
    _MongConect(function(db){
        var skipNum = (pageObj.pageNum-1) * pageObj.pageSize //如果为0，不跨值
        var limitNum = pageObj.pageSize //如果为0，查全部
        db.collection(cName).find(findObj).skip(skipNum).limit(limitNum).toArray(function(err,docs){
            if(err){
                console.error(err)
            }else{
                callback({"result":docs})
                db.close(); //关闭数据库
            }
        })
    })
}
/*删除满足条件的多条数据
* data(条件，为{}时，删除全部文档):对象结构，例如：{age:18}
* */
exports.deleteMany=function(cName,data,callback){
    _MongConect(function(db){
        console.log(data)
        db.collection(cName).deleteMany(data,function(err,results){
            callback(err,results)
            db.close()
        })
    })
}

