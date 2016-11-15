var mongoose = require('mongoose');

 
//MongoDB doesn't provide a kind of validation of fields so, mongoose provide it for us.
var schema = mongoose.Schema({

	name: {
		type: String, 
		required: true
	},
	price: {
		type: String,
		required: true
	}
});

mongoose.model('Product', schema);