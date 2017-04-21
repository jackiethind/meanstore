app.controller('dashboardController', function($scope, QuestionFactory, $location){
    QuestionFactory.index(function(data){
        console.log('controller got data from factory');
        console.log(data);
        $scope.questions = data;
    })
    var loginCheck = function() {
        QuestionFactory.loginCheck(function(data) {
        //This function will only return once a username is inserted
        //In which case, we can store the name and load the page as normal
        $scope.login = data
      })
    }
    loginCheck()

    $scope.logOut = function() {
      console.log("hit logOut button")
      QuestionFactory.logOut()
      //Other controllers should redirect to this page with $location.url()
      //After the logOut function is complete

      //After someone logs out, they can log back in with a new name
      $location.url("/")
      loginCheck()
    }
    console.log("dashboardController activated!");
    $scope.showQuestion = function(question){

      $scope.message = false;
      QuestionFactory.show(question._id, function(data){
        $scope.message = data;
        console.log("got the question show data from factory", data);
        $scope.showquestion = data;
        $scope.answerquestion = null;
      });
    //   CustomerFactory.index(function(data){
    //     $scope.customers = data;
    //     for(var i=0; i<$scope.customers.length; i++){
    //       var date = new Date($scope.customers[i].createdAt);
    //       $scope.customers[i].createdAt = date.toDateString();
    //     }
    //   })
    }
    $scope.answerQuestion = function(question){

      $scope.message = false;
      QuestionFactory.show(question._id, function(data){
        $scope.message = data;
        console.log("got the question show data from factory", data);
        $scope.answerquestion = data;
        $scope.showquestion = null;
      });
    //   CustomerFactory.index(function(data){
    //     $scope.customers = data;
    //     for(var i=0; i<$scope.customers.length; i++){
    //       var date = new Date($scope.customers[i].createdAt);
    //       $scope.customers[i].createdAt = date.toDateString();
    //     }
    //   })
    $scope.answerCounter = 0;
    }
    $scope.createAnswer = function() {
        console.log("Clicked the create Answer button");
        $scope.answerCounter ++ ;
        console.log($scope.answerquestion);
        // console.log($scope.new_answer.details);
        // console.log(QuestionFactory.user);
        // var answerToCreate = {user: QuestionFactory.user,
        //   answer: $scope.new_question.question ,
        //   details: $scope.new_question.description,
        //   likes: 0
        // }
        $scope.message = false;
        // QuestionFactory.create(questionToCreate, function (data) {
        //     if (data) {
        //         $location.url('/');
        //       } else {
        //         $scope.errormessage = "Cannot make question."
        //       }
        // })
    }

})
