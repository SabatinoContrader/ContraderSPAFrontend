ListaGommeController.$inject = ['$scope','RemoteCallService'];

function ListaGommeController($scope, RemoteCallService) {
    RemoteCallService.get("gomme/allgomme").then(function(data) {
        $scope.gomme = data.data.data;
    });
}

module.exports = ListaGommeController;
