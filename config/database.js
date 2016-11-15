module.exports = function(uri){ //<-- make it generic 

	var mongoose = require('mongoose');

	mongoose.connect('mongodb://' + uri); //<-- create connection

	mongoose.connection.on('connected', function(){
			console.log('Connected on MongoDB through mongoose module (Driver) by consign...');
	});  // <-- access connecion

	mongoose.connection.on('error', function(){
			console.log('Error when tryied to connect MongoDB through mongoose module (Driver) by consign...');
	});  // <-- error connecion

	mongoose.connection.on('disconnected', function(){ 
			console.log('You were disconnected from MongoDB...'); 
	});  // <-- disconnection

	process.on('SIGINT', function(){ 
			mongoose.connection.close(function(){
				console.log('Connection Closed...');
				process.exit(0);  // <-- like shell script 
			});
	}); // <-- when application finish

};