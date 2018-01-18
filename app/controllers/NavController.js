NavController.$inject = ['$rootScope','UserService','$location']

function NavController ($rootScope,UserService,$location)
{
    $rootScope.isAdmin=UserService.getisAdmin();
    $rootScope.userLogged=UserService.get();
    $rootScope.credenziali=UserService.getCred();
    if(UserService.getRole()=="user")
      $rootScope.menuNav="#!menuUser";
    else
        $rootScope.menuNav="#!menuAdmin";

    $rootScope.esc = function ()
    {
       UserService.set();
       $rootScope.userLogged=UserService.get();
       $rootScope.isAdmin=UserService.setisAdmin();
       $location.path('./index');
    }
}
module.exports = NavController;
