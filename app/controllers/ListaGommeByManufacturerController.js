
ListaGommeByManufacturerController.$inject = ['$scope','RemoteCallService', 'StorageService','$location'];

function ListaGommeByManufacturerController($scope, RemoteCallService, StorageService,$location) {
    $scope.sendManufacturer= function () {
        RemoteCallService.get("gomme/allgommeManufacturer?manufacturer=" + $scope.manufacturer + "&typeVehicle=" + $scope.typeVehicle).then(function (data) {
            $scope.gomme = data.data.data;
            StorageService.set("gommeByManufacturer", $scope.gomme);
            $location.path('/listaGommeByManufacturer');
        });

    }
}

module.exports = ListaGommeByManufacturerController;