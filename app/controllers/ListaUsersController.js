ListaUsersController.$inject = ['$scope','RemoteCallService'];

function ListaUsersController($scope, RemoteCallService) {
    RemoteCallService.get("users/getUsers").then(function(data) {
        $scope.users= data.data.data;
    });
}

module.exports = ListaUsersController;