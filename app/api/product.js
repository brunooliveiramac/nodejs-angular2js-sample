//* BUSSINESS LOGIC
var mongoose = require('mongoose');
var api = {};
 
var model = mongoose.model('Product');

 api.findAll = function(req, res){
 
        model  
            .find({}) 
            .then(function(products){
                res.json(products);
            }, function(error){
                res.status(500).json(error);
                console.log('Error to find Products');             
            });

};

api.add = function(req, res){

        var product = req.body;

        model
        .create(product) // <-- from req
        .then(function(product){ //<-- from bd with id

            res.json(product);

        }, function(error){
            console.log(error);
            res.status(500).json(error);
        });
};


//exporting api
module.exports = api;
