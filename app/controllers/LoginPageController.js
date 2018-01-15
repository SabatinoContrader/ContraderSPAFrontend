LoginPageController.$inject = ['$scope','RemoteCallService', '$location'];

function LoginPageController($scope, RemoteCallService, $location) {
    $scope.insertSuccess = true;
    $scope.sendUser = function () {
        var data = {
            username: $scope.username,
            password: $scope.password
        }
        RemoteCallService.post("login/menu", data).then(function(data) {
            if (data.status >= 200) {

                if(data.data.response == 2)
                    $location.path('/menuAdmin');
                else if (data.data.response == 3)
                    $location.path('/menuUser');
                else
                    $scope.insertSuccess = false;
            }
            else
                $scope.insertSuccess = false;

        });
    }

}

module.exports = LoginPageController;
