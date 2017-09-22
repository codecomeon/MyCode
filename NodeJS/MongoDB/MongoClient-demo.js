var MongoClient = require("mongodb").MongoClient;

var DB_CONN_STR = "mongodb://localhost:27017/people";

var insertData = function(db,cb){ //db默认数据库连接对象
	//连接到表 students
	var collection = db.collection('students');
	//插入数据
	var data = [{"name":"小石","age":22},{"name":"张雪","age":22}];
	
	//添加数据
	collection.insert(data,function(err,result){
		if(err)
		{
			console.log("Error" + err);
			return;
		}
		cb(result);
		//有错误，打印错误，并结束，没错误调用回调
	})
}

var removeData = function(db,cb){
	//连接到表 students
	var collection = db.collection('students');
	//查询数据
	var whereStr = {"name":"张雪"};
	//调用删除方法
	collection.remove(whereStr,function(err,result){
		if(err)
		{
			console.log("Error" + err);
			return;
		}
		cb(result);
		//有错误，打印错误，并结束，没错误调用回调
	})
}

var SelectData = function(db,cb){
	//连接到表 students
	var collection = db.collection('students');
	//查询数据
	var whereStr = {"name":"333"};
	//通过find方法查询
	collection.find(whereStr).toArray(function(err,result){
		if(err)
		{
			console.log("Error" + err);
			return;
		}
		cb(result);
	})
}

var upData = function(db,cb){
	//连接到表 students
	var collection = db.collection('students');
	//查询数据
	var whereStr = {"name":"333"};
	var updateStr = {$set: {"age":23}};
	
	collection.update(whereStr,updateStr,function(err,result){
		if(err)
		{
			console.log("Error" + err);
			return;
		}
		cb(result);
	})
}

MongoClient.connect(DB_CONN_STR,function(err,db){
	console.log("连接成功！");
	
//	添加数据
//	insertData(db,function(result){
//		console.log(result);
//	})
	
//	查询数据
	SelectData(db,function(result){
		console.log(result);
	})
	
	//删除
//	removeData(db,function(result){
//		console.log(result);
//	})
	
	//更新数据
//	upData(db,function(result){
//		console.log(result);
//	})
})
