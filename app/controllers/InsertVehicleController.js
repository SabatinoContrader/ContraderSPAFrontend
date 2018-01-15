InsertVehicleController.$inject=['$scope','RemoteCallService'];

function InsertVehicleController($scope, RemoteCallService) {
    $scope.insertSuccess = false;
    $scope.sendVehicle = function () {
        var data={
            brand: $scope.brand,
            model: $scope.model,
            fuel: $scope.fuel,
            version: $scope.version,
            capacity: $scope.capacity,
        }
        RemoteCallService.post("vehicle/insertVehicle", data).then(function(data) {
            if (data.status >= 200) {
                $scope.insertSuccess = true;
    }
        });
    }

}

module.exports = InsertVehicleController;

