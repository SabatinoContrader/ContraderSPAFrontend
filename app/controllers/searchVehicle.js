searchVehicle.$inject = ['$scope', 'StorageService'];

function searchVehicle($scope, StorageService)
{
    $scope.gommeByVehicle = StorageService.get("gommeByVehicle");
}

module.exports = searchVehicle;