
LoginPageController.$inject = ['$scope','RemoteCallService','StorageService', '$location'];

function LoginPageController($scope, RemoteCallService,StorageService,$location) {

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
                {
                    StorageService.set("butlog",false);
                    $scope.user = data.data.data;
                    StorageService.set("user",$scope.user);
                   /* var menuRight = document.getElementById("nav");
                    menuRight.innerHTML = " <div class=\"item\">\n" +
                        "        <i class=\"user icon\"></i>\n" +$scope.user.firstname+" "+$scope.user.lastname+
                        "        \n" +
                        "      </div>";*/
                    $location.path('/menuAdmin');

                }
                else
                    if (data.data.response == 3)
                    {
                        $scope.user = data.data.data;
                        StorageService.set("user",$scope.user);
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
