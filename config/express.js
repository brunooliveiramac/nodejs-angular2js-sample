var express = require('express')();
var consign = require('consign');
var bodyParser = require('body-parser');

//express configuration
//middleware - filters 
//make public the express instance
 
express.set('secret', 'onurbolivbrua'); // <-- environment variable
express.use(express.static('./public')); //share public folder, all project resource etc..
express.use(bodyParser.json()); // <-- module used in order to popule the body from req


//load all folders with their files .css and apis etc...  			
consign({ cwd: 'app'})
		 .include('models')
		 .then('api') 
		 .then('routes')  
		  //express instace
		 .into(express);

module.exports = express; // <-- Export instance