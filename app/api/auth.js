module.exports = function(app){ //Receiving Express

	var mongoose = require('mongoose');
	var jwt = require('jsonwebtoken');


	var api = {}; 
	var model = mongoose.model('User');

	api.auth = function(req, res){

			model.findOne({login: req.body.login, senha: req.body.password})
				 .then(function(user){

				 	if(!user){
				 		console.log('Wrong datas');
				 		res.sendStatus(401);
				 	}
				 	else{
				 		//create token                       //app <-- getting environment variable from express
				 		var token = jwt.sign(user.login, app.get('secret'),{
				 			expiresIn: 84600
				 		});

				 		console.log('Token  created... Retriving Token...');
				 		// <-- Puting token on Header
				 		res.set('x-access-token', token);
				 		res.end();

				 	}


				 }, function(error){
				 		console.log('Wrong datas');
				 		res.sendStatus(401);
				 });

	};	

	//Verify each request, except autentica
	api.verifyToken = function(req, res, next) {

	         var token = req.headers['x-access-token']; // busca o token no header da requisição

	         if (token) {
	             console.log('Token received, deconding...');
	             					//Our key created by express
	             jwt.verify(token, app.get('secret'), function(err, decoded) {
	                 if (err) {
	                     console.log('Invalid Token...');
	                     return res.sendStatus(401);
	                 } else {
	                     console.log('Token Accept...') 
	                     // Storing Token
	                     req.usuario = decoded;    
	                     next(); //<-- Next middleware can be executed
	                  }
	            });
	        } else {
	            console.log('Token not Found...');
	            return res.sendStatus(401);
	          }
	    }

	return api;
};
