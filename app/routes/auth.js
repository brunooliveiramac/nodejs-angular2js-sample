module.exports = function(app){

		var api = app.api.auth; 
		app.post('/auth', api.auth); 
		app.use('/*', api.verifyToken);  // <-- app.use (GET, POST, PUT, DELETE). Qualuqer Requisição Sera Verificada.
 
};