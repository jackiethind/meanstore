app.controller('showController', function($scope, QuestionFactory, $location){
    // QuestionFactory.index(function(data){
    //     console.log(data);
    //     $scope.questions = data;
    //     for(var i=0; i<$scope.questions.length; i++){
    //        var date = new Date($scope.questions[i].createdAt);
    //        $scope.questions[i].createdAt = date.toDateString();
    //      }
    // })

    console.log("showController activated!");
    $scope.showQuestion = function() {
        console.log("Clicked the show question button");

        $scope.message = false;
        // QuestionFactory.create(questionToCreate, function (data) {
        //     if (data) {
        //         $location.url('/');
        //       } else {
        //         $scope.errormessage = "Cannot make question."
        //       }
        // })
    }
    // $scope.deleteQuestion = function(doomed) {
    //     console.log("Clicked the delete question button with doomed:", doomed);
    //     $scope.message = false;
    //     QuestionFactory.delete(doomed, function (data) {
    //         if (data) {
    //             $location.url('/');
    //           } else {
    //             $scope.errormessage = "Cannot delete friend."
    //           }
    //     })
    // }
})
