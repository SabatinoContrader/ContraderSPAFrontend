ListaGommeByVehicleController.$inject = ['$scope','RemoteCallService', 'StorageService','$location'];

function ListaGommeByVehicleController($scope, RemoteCallService, StorageService,$location) {
    $scope.insertSuccess = false;
    $scope.sendByVehicle= function () {
        var data={
            brand: $scope.brand,
            model: $scope.model,
            fuel: $scope.fuel,
            version: $scope.version,
            capacity: $scope.capacity
        }
        RemoteCallService.post("vehicle/searchVehicle",data).then(function (data) {
            $scope.gomme= data.data.data;
            if((data.data.response==1)|(data.data.response==2)|(data.data.status<200)){
                $scope.insertSuccess =true;
                }
                else{
            StorageService.set("gommeByVehicle", $scope.gomme);
            $location.path('/listaGommeByVehicle');}

        });



    }
}

module.exports = ListaGommeByVehicleController;