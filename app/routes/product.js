module.exports = function(app){

        var api = app.api.product;// <-- loaded by consign
 
        app.route('/products')
           .get(api.findAll)
           .post(api.add);
} 