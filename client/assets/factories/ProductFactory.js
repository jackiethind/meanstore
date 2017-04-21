app.factory('ProductFactory', function($http) {
    console.log("Product Factory activated!");
    var factory = {};
    var products = [];

    factory.messages = [];
    factory.index = function(callback){
        $http.get('/products').then(function(data){
            console.log("Product Factory recieved data from db", data);
            if(data.data.message=="Success"){
              products = data.data.products;
              callback(products);
            }
            else {
              callback(false);
            }
        })
    }
    factory.create = function (new_product, callback) {
        $http.post('/createproduct', new_product).then(function(data){
            console.log("this is from the product factory:", data);
            if(data.data.message === "Success") {
              factory.messages.push(data.data.message);
              callback(true);
            } else {
              callback(false);
            }
        })
    }
    factory.updateQuantity = function (idObject, callback) {
        console.log("got to factory update quantity");
        $http.put('/updateproduct/' + idObject.id, idObject).then(function (data) {
            callback(data);
        })
    }
    return factory;
})
