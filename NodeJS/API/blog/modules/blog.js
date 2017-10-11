var mongoose=require('mongoose');

module.exports=mongoose.model('Blog',new mongoose.Schema({
	title:  String,
	body:   String,
	author: String,
	comments: [{ body: String, date: Date }],
	tags: [{title: String}],
	date: { type: Date, default: Date.now },
	hidden: Boolean,
	meta: {
	  votes: Number,
	  favs:  Number
	}
}));