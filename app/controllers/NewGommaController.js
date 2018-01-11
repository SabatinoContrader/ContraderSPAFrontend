NewGommaController.$inject = ['$scope','RemoteCallService'];

function NewGommaController($scope, RemoteCallService) {
  $scope.insertSuccess = false;
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
          $scope.insertSuccess = true;
        }
    });
  }

}

module.exports = NewGommaController;
