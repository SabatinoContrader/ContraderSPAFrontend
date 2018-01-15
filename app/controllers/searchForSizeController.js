searchForSizeController.$inject = ['$scope', 'StorageService'];

function searchForSizeController($scope, StorageService)
{
  $scope.gomme = StorageService.get("gommeForSize");
}

module.exports = searchForSizeController;
