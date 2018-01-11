LoginPageController.$inject = ['$scope','RemoteCallService', '$location'];

function LoginPageController($scope, RemoteCallService) {
    $scope.insertSuccess = false;
    $scope.sendUser = function () {
        var data = {
            username: $scope.username,
            password: $scope.password
        }
        RemoteCallService.post("login/menu", data).then(function(data) {
            if (data.status >= 200) {
                $scope.insertSuccess = true;
            }
        });
    }

}

module.exports = LoginPageController;
