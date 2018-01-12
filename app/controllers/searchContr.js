searchContr.$inject = ['$scope', 'StorageService'];

function searchContr($scope, StorageService)
{
  $scope.gomme = StorageService.get("gommeByManufacturer");
}

module.exports = searchContr;
