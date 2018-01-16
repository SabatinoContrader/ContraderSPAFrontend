function NavService()
{
    var scope;
    return {
        get($scope)
        {
            scope=$scope;
            scope.butLogout=true;
        },
        set()
        {
            scope.butLogout=false;
        }
    }
}
module.exports = NavService;
