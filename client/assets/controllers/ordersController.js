app.controller('ordersController', function($scope, $location, ProductFactory, CustomerFactory, OrderFactory){
    console.log("ordersController activated!");
    CustomerFactory.index(function(data){
        console.log('got the customer data from the server to the order controller', data);
        $scope.customers = data;
    })
    OrderFactory.index(function(data) {
        console.log('got the order data from the server to the order controller', data);
        $scope.placedOrders = data;
        for(var i=0; i<$scope.placedOrders.length; i++){
           var date = new Date($scope.placedOrders[i].createdAt);
           $scope.placedOrders[i].createdAt = date.toDateString();
         }
    })

    ProductFactory.index(function (data) {
        console.log('got the product data from the server to the order controller', data);
        $scope.orderProducts = data;
    })


    $scope.orderQuantity = [];
    for(var i = 1; i <= 30; i++) {
        $scope.orderQuantity.push(i);
    }



    // $scope.message = false;
    // $scope.initialQuantity = [];
    // for(var i=1; i<=200; i++){
    //   $scope.initialQuantity.push(i);
    // };
    $scope.createOrder = function() {
        console.log("Clicked the place order button");
        console.log($scope.new_order.name._id);
        console.log($scope.new_order.product._id);
        var fulfill = false;
        var i = 0;
        $scope.errormessage = false;
        while (i<$scope.orderProducts.length) {
            if($scope.orderProducts[i].name == $scope.new_order.product.name) {
                console.log("Found the product for sale");
                if($scope.orderProducts[i].quantity < $scope.new_order.quantity) {
                    $scope.errormessage = "Blimey, we dun 'ave any " + $scope.new_order.product.name + "'s left!'" ;
                    console.log("We don't have enough");
                    return false;
                }
            }
            else {
                console.log("Should have enough in the back");
                var confirmedOrder = {name:$scope.new_order.name.first_name, product: $scope.new_order.product.name, quantity: $scope.new_order.quantity}
                fulfill = true;
            }
            i++;
        }
        console.log("going to place order:", confirmedOrder);
        OrderFactory.create(confirmedOrder, function (data) {
            if (data) {
                $location.url('/');
              } else {
                $scope.errormessage = "Cannot make order."
              }
        })
        ProductFactory.updateQuantity({id:$scope.new_order.product._id, amount:$scope.new_order.quantity}, function (data) {
            console.log('got the updated quantity from the server to the order controller', data);
        });
    }
    $scope.deleteOrder = function(doomed) {
        console.log("Clicked the delete order button with doomed:", doomed);
        $scope.message = false;
        OrderFactory.delete(doomed, function (data) {
            if (data) {
                $location.url('/');
              } else {
                $scope.errormessage = "Cannot delete order."
              }
        })
    }


})
