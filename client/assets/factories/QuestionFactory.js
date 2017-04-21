app.factory('QuestionFactory', function($http) {
    console.log("question Factory activated!");
    var factory = {};
    var questions = [];
    factory.login;
    factory.user;
      factory.loginCheck = function(callback) {
        if (!factory.login) {
          while (loginAttempt == null || loginAttempt == "" || loginAttempt.length < 3) {
            if (!counter) {
              var counter = 0
            }
            counter += 1
            var loginAttempt = prompt("Please insert a name that is at least 3 characters in length.")
            console.log("On attempt " + counter + ", you inserted", loginAttempt)
          }
        }
        factory.user = loginAttempt;
        callback(loginAttempt)
      }
  factory.logOut = function() {
    factory.login = null
  }

    factory.messages = [];
    factory.index = function(callback){
        $http.get('/questions').then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              questions = data.data.Questions;
              callback(questions);
            }
            else {
              callback(false);
            }
        })
    }
    factory.create = function (new_question, callback) {
        $http.post('/createquestion', new_question).then(function(data){
            console.log("this is from the server:", data);
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
        $http.delete('questions/' + doomed._id, doomed).then(function(data){
            console.log("this is data we got from the db delete:", data);
            callback(data);
        })
    }
    factory.show = function (id, callback) {
        console.log('made it to the show factory with question', id);
        $http.get('/questions/' + id).then(function(data){
            console.log("Factory recieved data from db", data);
            if(data.data.message=="Success"){
              questions = data.data.Question;
              callback(questions);
            }
            else {
              callback(false);
            }
        })
    }
    return factory;
})
