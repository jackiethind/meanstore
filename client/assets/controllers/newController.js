app.controller('newController', function($scope, PollFactory, $location){
    console.log("newController activated!");
    $scope.user;
    // checks to see if the user is still logged in
    if(PollFactory.user) {
        $scope.user = PollFactory.user;
        console.log("The logged in user is " + $scope.user);
    }
    else {
        $location.url('/');
    }


    $scope.createPoll = function() {
        console.log("Clicked the create Poll button");
        if ($scope.new_poll.question === undefined){
            $scope.errormessage = "You have left some fields blank! Please fill out all fields.";
        }
        $scope.new_poll.user = $scope.user;
        $scope.new_poll.option1vote = 0;
        $scope.new_poll.option2vote = 0;
        $scope.new_poll.option3vote = 0;
        $scope.new_poll.option4vote = 0;
        console.log("about to create new poll object", $scope.new_poll);
        $scope.message = false;
        PollFactory.create($scope.new_poll, function (data) {
            if (data) {
                $location.url('/dashboard');
              } else {
                $scope.errormessage = "Cannot make poll. Please make sure all options are filled, your question is 8 characters long and your options are at least 3 characters long";
              }
        });
    };
});
