ListaGommeForSizeController.$inject = ['$scope','RemoteCallService', 'StorageService','$location'];

function ListaGommeForSizeController($scope, RemoteCallService, StorageService,$location) {
    $scope.sendSize= function () {
        RemoteCallService.get("gomme/gommeForSize?width=" + $scope.width +"&height=" +$scope.height+"&diameter="+$scope.diameter+
            "&weight="+$scope.weight+"&speed="+$scope.speed+"&season="+$scope.season+"&typeVehicle="+$scope.typeVehicle).then(function (data) {
            $scope.gomme = data.data.data;
            StorageService.set("gommeForSize", $scope.gomme);
            $location.path('/listaGommeForSize');
        });


    }
}

module.exports = ListaGommeForSizeController;

/*width;
height;
diameter;
weight;
speed;
season;
typeVehicle;*/
