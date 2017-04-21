app.factory('CustomerFactory', function($http) {
    console.log("Customer Factory activated!");
    var factory = {};
    var customers = [];
    factory.customer;
    factory.messages = [];
    factory.index = function(callback){
        $http.get('/customers').then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              customers = data.data.customers;
              callback(customers);
            }
            else {
              callback(false);
            }
        })
    }
    factory.create = function (new_customer, callback) {
        $http.post('/addcustomers', new_customer).then(function(data){
            console.log("this is from the factory:", data);
            if(data.data.message === "Success") {
              factory.messages.push(data.data.message);
              callback(true);
            } else {
              callback(false);
            }
        })
    }
    factory.delete = function (doomed, callback) {
        console.log('made it to the delete factory with doomed', doomed);
        $http.delete('customers/' + doomed._id, doomed).then(function(data){
            console.log("this is data we got from the db delete:", data);
            callback(data);
        })
    }
    return factory;
})
