var mongoose=require('mongoose');

module.exports=mongoose.model('User',mongoose.Schema({
    name:String,
    password:String,
    admin:Boolean
}));