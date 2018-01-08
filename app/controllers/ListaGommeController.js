ListaGommeController.$inject = ['$scope','RemoteCallService'];

function ListaGommeController($scope, RemoteCallService) {
    RemoteCallService.get("gomme/all").then(function(data) {
        $scope.gomme = data.data;
    });
}

module.exports = ListaGommeController;
