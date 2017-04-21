app.factory('OrderFactory', function($http) {
    console.log("Order Factory activated!");
    var factory = {};
    var orders = [];
    factory.messages = [];
    factory.index = function(callback){
        $http.get('/orders').then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              orders = data.data.orders;
              callback(orders);
            }
            else {
              callback(false);
            }
        })
    }
    factory.create = function (new_order, callback) {
        console.log("got the new order TODAAAYYY", new_order);
        $http.post('/addorders', new_order).then(function(data){
            console.log("this is from the order factory:", data);
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
        $http.delete('/deleteorder/' + doomed._id, doomed).then(function(data){
            console.log("this is data we got from the db delete:", data);
            callback(data);
        })
    }
    return factory;
})
