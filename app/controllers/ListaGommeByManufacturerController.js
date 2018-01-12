ListaGommeByManufacturerController.$inject = ['$scope','RemoteCallService', 'StorageService'];

function ListaGommeByManufacturerController($scope, RemoteCallService, StorageService) {
    RemoteCallService.get("gomme/allgommeManufacturer").then(function(data) {
        $scope.gomme = data.data.data;
        StorageService.set("gommeByManufacturer",data.data.data);
    });
}

module.exports = ListaGommeByManufacturerController;
