InsertUserController.$inject = ['$scope','RemoteCallService','StorageService','$location'];

function InsertUserController($scope, RemoteCallService,StorageService, $location) {
    $scope.insertSuccess = false;
    $scope.sendUser = function () {
        var data = {
            username: $scope.username,
            password: $scope.password,
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            dateofbirth: $scope.dateofbirth,
            fiscalcode: $scope.fiscalcode,
            businessname: $scope.businessname,
            vat: $scope.vat,
            municipality: $scope.municipality,
            post: $scope.post,
            city: $scope.city,
            address: $scope.address,
            telephone: $scope.telephone,
            role: "user"
        }
        RemoteCallService.post("users/newUser", data).then(function(data) {
            if (data.status >= 200) {
                $scope.insertSuccess = true;
                $location.path('/loginpage');
            }
        });
    }

}

module.exports = InsertUserController;