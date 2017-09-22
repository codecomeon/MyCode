var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function (callback) {
    console.log('connection success!');
});

//用mongoose创建方案
var kittySchema=mongoose.Schema({
    name:String,
});
var monkeySchema=mongoose.Schema({
    class:Array,
});

//为方案增加方法，供该方案的实例调用
kittySchema.methods.speak=function () {
    var greeting=this.name
        ?"Meow name is "+this.name
        :"I don't have a name";
    console.log(greeting);
};
monkeySchema.methods.say=function () {
    var greeting=this.class
        ?"Monkey class is "+this.class
        :"I don't have a name";
    console.log(greeting);
};

//生成数据集，第一个参数就是collection的名字
var Kitten=mongoose.model('Kitten',kittySchema);
var Monkey=mongoose.model('这是猴子',monkeySchema);

//用数据集对象生成文档对象
var silence=new Kitten({name:'Silence'});
var firstMonkey=new Monkey({class:[1,2,3]});

silence.save(function (err,silence) {
    silence.speak();
});
firstMonkey.save(function (err,obj) {
    obj.say();
});

var fluffy=new Kitten({name:'fluffy'});
fluffy.speak();

fluffy.save(function (err,fluffy) {
    if(err) return console.error(err);
    fluffy.speak();
});

//方案查询
Kitten.find(function (err,kittens) {
    if(err) console.error(err);
    console.log(kittens);
});

Kitten.find({name:/^Silence/},function (err,result) {
    console.log(result);
});
Monkey.find(function (err,arrs) {
    if(err) console.error(err);
    console.log(arrs);
});
mongoose.disconnect();