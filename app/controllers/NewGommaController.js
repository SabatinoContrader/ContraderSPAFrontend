NewGommaController.$inject = ['$scope','RemoteCallService'];

function NewGommaController($scope, RemoteCallService) {
  $scope.sendGomma = function () {
    var data = {
      model: $scope.model,
      manufacturer: $scope.manufacturer,
      price: $scope.price
    }
    RemoteCallService.post("gomme/new", data).then(function(data) {
        if (data.status >= 200) {
          $scope.insertSuccess = true;
        }
    });
  }

}

module.exports = NewGommaController;
