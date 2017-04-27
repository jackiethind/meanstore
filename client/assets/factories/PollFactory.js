app.factory('PollFactory', function($http) {
    console.log("Poll Factory activated!");
    var factory = {};
    var polls = [];
    factory.user;
    factory.logOut = function() {
        factory.user = null;
    }

    factory.messages = [];
    factory.index = function(callback){
        $http.get('/polls').then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              polls = data.data.Polls;
              callback(polls);
            }
            else {
              callback(false);
            }
        });
    }
    factory.create = function (new_poll, callback) {
        $http.post('/createpoll', new_poll).then(function(data){
            console.log("this is from the server:", data);
            if(data.data.message === "Success") {
              factory.messages.push(data.data.message);
              callback(true);
            } else {
              callback(false);
            }
        });
    }
    factory.delete = function (doomed, callback) {
        console.log('made it to the delete method with doomed', doomed);
        $http.delete('polls/' + doomed).then(function(data){
            if (data.data.message === "Success") {
                callback(true);
            }
            else {
                callback(false);
            }
        });
    }
    factory.show = function (id, callback) {
        console.log('made it to the show factory with poll', id);
        $http.get('/polls/' + id).then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              poll = data.data.Poll;
              callback(poll);
            }
            else {
              callback(false);
            }
        })
    }
    factory.upvote1 = function (id, callback) {
        console.log('made it to the upvote1 factory with poll', id);
        $http.put('/polls/upvote1/' + id).then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              callback(true);
            }
            else {
              callback(false);
            }
        })
    }
    factory.upvote2 = function (id, callback) {
        console.log('made it to the upvote2 factory with poll', id);
        $http.put('/polls/upvote2/' + id).then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              callback(true);
            }
            else {
              callback(false);
            }
        })
    }
    factory.upvote3 = function (id, callback) {
        console.log('made it to the upvote3 factory with poll', id);
        $http.put('/polls/upvote3/' + id).then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              callback(true);
            }
            else {
              callback(false);
            }
        })
    }
    factory.upvote4 = function (id, callback) {
        console.log('made it to the upvote4 factory with poll', id);
        $http.put('/polls/upvote4/' + id).then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              callback(true);
            }
            else {
              callback(false);
            }
        })
    }
    return factory;
})
