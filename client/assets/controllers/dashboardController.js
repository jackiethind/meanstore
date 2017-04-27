app.controller('dashboardController', function($scope, PollFactory, $location){
    console.log("dashboardController activated!");
    $scope.user;
    // checks to see if the user is still logged in
    if(PollFactory.user) {
        $scope.user = PollFactory.user;
        console.log("The logged in user is " + $scope.user);
    }
    else {
        $location.url('/');
    }
    // logs user out from this page
    $scope.logout = function () {
        $scope.user = null;
        PollFactory.logOut();
    }

    $scope.polls =[];

    // lets grab all the polls from our db
    var index = function () {
        PollFactory.index(function (data) {
            console.log(data);
            $scope.polls = data;
            // convert date
            for(var i=0; i<$scope.polls.length; i++){
               var date = new Date($scope.polls[i].createdAt);
               $scope.polls[i].createdAt = date.toDateString();
             }
        });
    };
    index();

    // delete button is clicked, lets go delete from our db by passing an id
    $scope.deletePoll = function (id) {
        PollFactory.delete(id, index);
    }


})
