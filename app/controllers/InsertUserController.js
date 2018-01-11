InsertUserController.$inject = ['$scope','RemoteCallService'];

function InsertUserController($scope, RemoteCallService) {
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
            role: $scope.role
        }
        RemoteCallService.post("users/newUser", data).then(function(data) {
            if (data.status >= 200) {
                $scope.insertSuccess = true;
            }
        });
    }

}

module.exports = InsertUserController;