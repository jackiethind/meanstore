app.controller('loginController', function($scope, PollFactory, $location){
    console.log("loginController activated!");
    $scope.user;

    $scope.login = function () {
        PollFactory.user = $scope.user;
        $location.url('/dashboard');
    }
    // checks to see if the user is still logged in
    if(PollFactory.user) {
        $scope.user = PollFactory.user;
    }
    else {
        $scope.user = null;
        $location.url('/');
    }

})
