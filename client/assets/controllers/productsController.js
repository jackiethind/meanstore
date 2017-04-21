app.controller('productsController', function($scope, $location, ProductFactory){
    console.log("productsController activated!");
    ProductFactory.index(function(data){
        console.log('got the data from the server to the product controller', data);
        $scope.products = data;
    })

    $scope.message = false;
    $scope.initialQuantity = [];
    for(var i=1; i<=200; i++){
      $scope.initialQuantity.push(i);
    };
    $scope.createProduct = function() {
        console.log("Clicked the create product button");
        console.log($scope.new_product);
        $scope.message = false;
        ProductFactory.create($scope.new_product, function (data) {
            if (data) {
                $location.url('/');
              } else {
                $scope.errormessage = "Cannot make product."
              }
        })
    }


})
