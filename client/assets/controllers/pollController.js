app.controller('pollController', function($scope, PollFactory, $location, $routeParams){
    console.log("pollController activated!");
    $scope.user;
    // checks to see if the user is still logged in
    if(PollFactory.user) {
        $scope.user = PollFactory.user;
        console.log("The logged in user is " + $scope.user);
    }
    else {
        $location.url('/');
    }


    // lets grab the poll that was selected from our db
    $scope.selectedPoll ={};
    console.log($routeParams.id);
    var index = function () {
        PollFactory.show($routeParams.id, function (data) {
            console.log(data);
            $scope.selectedPoll = data;
        });
    };
    index();
    // here are functions that will be invoked when the user selected to upvote a particular option
    $scope.upvote1 = function () {
        PollFactory.upvote1($routeParams.id, index);
    }
    $scope.upvote2 = function () {
        PollFactory.upvote2($routeParams.id, index);
    }
    $scope.upvote3 = function () {
        PollFactory.upvote3($routeParams.id, index);
    }
    $scope.upvote4 = function () {
        PollFactory.upvote4($routeParams.id, index);
    }
})
