app.controller('customersController', function($scope, $location, CustomerFactory){
    CustomerFactory.index(function(data){
        console.log(data);
        $scope.customers = data;
        for(var i=0; i<$scope.customers.length; i++){
           var date = new Date($scope.customers[i].createdAt);
           $scope.customers[i].createdAt = date.toDateString();
         }
    })
    console.log("customersController activated!");
    $scope.createCustomer = function() {
        console.log("Clicked the create customer button");
        console.log($scope.new_customer);
        $scope.message = false;
        CustomerFactory.create($scope.new_customer, function (data) {
            if (data) {
                $location.url('/');
              } else {
                $scope.errormessage = "Cannot make friend."
              }
        })
    }
    $scope.deleteCustomer = function(doomed) {
        console.log("Clicked the delete customer button with doomed:", doomed);
        $scope.message = false;
        CustomerFactory.delete(doomed, function (data) {
            if (data) {
                $location.url('/');
              } else {
                $scope.errormessage = "Cannot delete friend."
              }
        })
    }
})
