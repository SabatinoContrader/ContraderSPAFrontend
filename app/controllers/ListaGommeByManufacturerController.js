ListaGommeByManufacturerController.$inject = ['$scope','RemoteCallService'];

function ListaGommeByManufacturerController($scope, RemoteCallService) {
    RemoteCallService.get("gomme/allgommeManufacturer").then(function(data) {
        $scope.gomme = data.data.data;
    });
}

module.exports = ListaGommeByManufacturerController;
