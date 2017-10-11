var mongoose=require('mongoose');

module.exports=mongoose.model('User',new mongoose.Schema({
    title:String
}));