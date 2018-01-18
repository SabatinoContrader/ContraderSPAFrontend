
LoginPageController.$inject = ['$scope','RemoteCallService','StorageService', '$location','UserService'];

function LoginPageController($scope, RemoteCallService,StorageService,$location,UserService) {

    $scope.insertSuccess = true;
    $scope.sendUser = function () {
        var data = {
            username: $scope.username,
            password: $scope.password
        }
        RemoteCallService.post("login/menu", data).then(function(data) {
            if (data.status >= 200)
            {
                if(data.data.response == 2)
                {//case admin

                    $scope.user = data.data.data;
                    UserService.setCred($scope.user.firstname,$scope.user.lastname,$scope.user.role);
                    $location.path('/menuAdmin');
                }
                else
                    if (data.data.response == 3)
                    {//case user

                        $scope.user = data.data.data;
                        UserService.setCred($scope.user.firstname,$scope.user.lastname,$scope.user.role);
                        $location.path('/menuUser');
                    }
                    else
                        $scope.insertSuccess = false;
            }
            else
                $scope.insertSuccess = false;

        });

    }



}

module.exports = LoginPageController;
