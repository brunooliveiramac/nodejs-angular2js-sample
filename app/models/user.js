var mongoose = require('mongoose');

 
var schema = mongoose.Schema({

	email: {
		type: String, 
		required: true
	},
	name: {
		type: String, 
		required: true
	},
	last_name: {
		type: String, 
		required: true
	}
	password: {
		type: String,
		required: true
	} 
});

mongoose.model('User', schema);