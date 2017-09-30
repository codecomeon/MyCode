# MongoDB

## 数据类型
- 类型	对应数字	别名	说明
- Double1	1	double	 
- String	2	string	 
- Object	3	object	 
- Array	4	array	 
- Binary data	5	binData	 
- Undefined	6	undefined	弃用
- ObjectId	7	objectId	 
- Boolean	8	“bool”	 
- Date	9	“date”	 
- Null	10	“null”	 
- Regular Expression	11	“regex”	 
- DBPointer	12	“dbPointer”	 
- JavaScript	13	“javascript”	 
- Symbol	14	“symbol”	 
- JavaScript(with scope)	15	“javascriptWithScope”	 
- 32-bit integer	16	“int”	 
- Timestamp	17	“timestamp”	 
- 64-bit integer	18	“long”	 
- Min key	-1	“minKey”	 
- Max key	127	“maxKey”

## 更新运算符
- $ 占位符，更新第一个匹配的元素
- $inc 递增
- $rename 重命名字段
- $set 设置字段
- $setOnInsert 更新时如果创建，设置其字段
- $unset 删除字段
- $addToSet 往数组插入
- $pop 删除数组中头部或者尾部条目
- $pullAll 删除多个条目
- $pull 删除条目
- $push 添加条目
- $each 修改$push，追加多个
- $slice 限制数组大小
- $sort 排序
- $bit 整数按位更新



## shell 罗列待整理
一、常用命令
1、Help查看命令提示
help

db.help();

db.yourColl.help();

db.youColl.find().help();

rs.help();

2、切换/创建数据库
use yourDB; 当创建一个集合(table)的时候会自动创建当前数据库
3、查询所有数据库
show dbs;
4、删除当前使用数据库
db.dropDatabase();
5、从指定主机上克隆数据库
db.cloneDatabase(“127.0.0.1”); 
将指定机器上的数据库的数据克隆到当前数据库
6、从指定的机器上复制指定数据库数据到某个数据库
db.copyDatabase("mydb", "temp", "127.0.0.1");
将本机的mydb的数据复制到temp数据库中
7、修复当前数据库
db.repairDatabase();
8、查看当前使用的数据库
db.getName();

db; db和getName方法是一样的效果，都可以查询当前使用的数据库
9、显示当前db状态
db.stats();
10、当前db版本
db.version();
11、查看当前db的链接机器地址
db.getMongo();
二、Collection(table)聚集集合
1、创建一个聚集集合（table）
db.createCollection(“collName”, {size: 20, capped: 5, max: 100});//创建成功会显示{“ok”:1}
2、得到指定名称的聚集集合（table）
db.getCollection("account");
3、得到当前db的所有聚集集合
db.getCollectionNames();
4、显示当前db所有聚集索引的状态
db.printCollectionStats();
三、用户相关
1、添加一个用户
db.addUser("name");

db.addUser("userName", "pwd123", true); 
添加用户、设置密码、是否只读
2、显示当前所有用户
show users;
3、删除用户
db.removeUser("userName");  
以上都是一些最基本的命令，我就当做笔记来看了。更加深入的crud我都还没有尝试，等我尝试过了再写。


### 语句块操作
1、简单Hello World
print("Hello World!");
这种写法调用了print函数，和直接写入"Hello World!"的效果是一样的；
2、将一个对象转换成json
tojson(new Object());

tojson(new Object('a'));

3、循环添加数据
for (var i = 0; i < 30; i++) {

... db.users.save({name: "u_" + i, age: 22 + i, sex: i % 2});

... };

这样就循环添加了30条数据，同样也可以省略括号的写法
for (var i = 0; i < 30; i++) db.users.save({name: "u_" + i, age: 22 + i, sex: i % 2});
也是可以的，当你用db.users.find()查询的时候，显示多条数据而无法一页显示的情况下，可以用it查看下一页的信息；
4、find 游标查询
var cursor = db.users.find();

while (cursor.hasNext()) {

printjson(cursor.next());

}

这样就查询所有的users信息，同样可以这样写
var cursor = db.users.find();

while (cursor.hasNext()) { printjson(cursor.next); }

同样可以省略{}号
5、forEach迭代循环
db.users.find().forEach(printjson);
forEach中必须传递一个函数来处理每条迭代的数据信息
6、将find游标当数组处理
var cursor = db.users.find();

cursor[4];

取得下标索引为4的那条数据
既然可以当做数组处理，那么就可以获得它的长度：cursor.length();或者cursor.count();
那样我们也可以用循环显示数据
for (var i = 0, len = c.length(); i < len; i++) printjson(c[i]);
7、将find游标转换成数组
var arr = db.users.find().toArray();

printjson(arr[2]);

用toArray方法将其转换为数组
8、定制我们自己的查询结果
只显示age <= 28的并且只显示age这列数据
db.users.find({age: {$lte: 28}}, {age: 1}).forEach(printjson);

db.users.find({age: {$lte: 28}}, {age: true}).forEach(printjson);

排除age的列
db.users.find({age: {$lte: 28}}, {age: false}).forEach(printjson);
9、forEach传递函数显示信息
db.things.find({x:4}).forEach(function(x) {print(tojson(x));});

其他
1、查询之前的错误信息
db.getPrevError();
2、清除错误记录
db.resetError();
3、显示数据库列表
show dbs

4、显示当前数据库中的集合（类似关系数据库中的表）
show collections

5、显示用户
show users
 
6、切换当前数据库，这和MS-SQL里面的意思一样

## mongoose 一种ODM库 对象文档模型库
- Node.js+MongoDB+AngularJS开发第16章 Mongoose
