logout.$inject=['$scope','RemoteCallService','StorageService'];

function logout($scope, RemoteCallService,StorageService)
{
    if(StorageService.get("butlog")==null)
    {
        $scope.IsHidden = true;
        StorageService.set("butlog",true);
    }
    else
        $scope.IsHidden = false;

    $scope.esc= function ()
    {
        alert("asdasda");
    }

}

module.exports = logout;

