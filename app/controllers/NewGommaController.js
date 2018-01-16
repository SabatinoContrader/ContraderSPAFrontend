NewGommaController.$inject = ['$scope','RemoteCallService', '$location'];

function NewGommaController($scope, RemoteCallService, $location) {
  $scope.insertSuccess = true;
  $scope.sendGomma = function () {
    var data = {
      model: $scope.model,
      manufacturer: $scope.manufacturer,
      price: $scope.price,
      width: $scope.width,
      height: $scope.height,
      diameter: $scope.diameter,
      weight: $scope.weight,
      speed: $scope.speed,
      season: $scope.season,
      typeVehicle: $scope.typeVehicle,
      quantity: $scope.quantity
    }
    RemoteCallService.post("gomme/insertGomme", data).then(function(data) {
        if (data.status >= 200) {
          if(data.data.response == 0)
            $location.path('/listaGomme');
          else
            (data.data.response == 1)
            $scope.insertSuccess =false;
        }
        else
            $scope.insertSuccess =false;
    });
  }

}

module.exports = NewGommaController;