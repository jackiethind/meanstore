var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js');
var customers = require('./../controllers/customers.js');

module.exports = function(app){

    // CUSTOMER ROUTES
  app.get('/customers', function(req, res){
    customers.index(req, res);
  });
  app.delete('/customers/:id', function(req, res){
    console.log("got to server routes with doomed", req);
    customers.delete(req, res);
  });
  app.post('/addcustomers', function(req, res){
    customers.create(req, res);
  });
    // PRODUCTS ROUTES
  app.get('/products', function(req, res){
    products.index(req, res);
  });
  app.post('/createproduct', function(req, res){
    products.create(req, res);
  });
  app.put('/updateproduct/:id', function (req, res) {
      console.log(req.params.id);
      var id = req.params.id;
    products.update(id,req,res);
  });
    // ORDERS ROUTES
  app.get('/orders', function (req, res) {
      orders.index(req,res);
  });
  app.post('/addorders', function (req, res) {
      console.log("got to server routes with new order", req);
      orders.create(req, res);
  });
  app.delete('/deleteorder/:id', function(req, res){
    console.log("got to server routes with doomed order", req);
    orders.delete(req, res);
  });
}
