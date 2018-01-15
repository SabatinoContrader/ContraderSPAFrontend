ListVehicleController.$inject = ['$scope','RemoteCallService'];

function ListVehicleController($scope, RemoteCallService) {
    RemoteCallService.get("vehicle/allvehicles").then(function(data) {
        $scope.vehicle= data.data.data;
    });
}

module.exports = ListVehicleController;