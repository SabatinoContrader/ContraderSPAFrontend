
LoginPageController.$inject = ['$scope','RemoteCallService','StorageService','NavService', '$location'];

function LoginPageController($scope, RemoteCallService,StorageService,NavService,$location) {

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

                    $scope.user = data.data.data;
                    StorageService.set("user",$scope.user);
                    var butLogout=document.getElementById("butLogout");

                    var menu = document.getElementById("menu");
                    menu.innerHTML="<a href=\"#!wheelsStore\" class=\"header item\">Wheels Store</a>" +
                        "<a class=\"item\" href=\"#!menuAdmin\">Menu</a>    " +
                        "    <div class=\"ui simple dropdown item\">" +
                        "      Scopri <i class=\"dropdown icon\"></i>" +
                        "              <div class=\"menu\">" +
                        "                  <a class=\"item\" href=\"#!listaGomme\">I nostri pneumatici</a>" +
                        "                  <a class=\"item\" href=\"#!newGomma\">Inserisci un nuovo pneumatico</a>" +
                        "                  <a class=\"item\" href=\"#!search\">Ricerca pneumatico per brand</a>" +
                        "                  <a class=\"item\" href=\"#!listaVehicle\">I nostri veicoli</a>" +
                        "                  <a class=\"item\" href=\"#!insertVehicle\">Inserisci nuovo veicolo</a>" +
                        "              </div>" +
                        "          </div>" +
                        "          <div class=\"ui simple dropdown item\">" +
                        "              Chi siamo <i class=\"dropdown icon\"></i>" +
                        "              <div class=\"menu\">\n" +
                        "                  <a class=\"item\" href=\"#\">La nostra storia</a>"+
                        "                  <a class=\"item\" href=\"#!about\">Contattaci</a>" +
                        "              </div>" +
                        "          </div>";


                    var menuRight = document.getElementById("nav");
                    menuRight.innerHTML = " <div class=\"item\">" +
                        " <i class=\"user icon\"></i><p class=\"texticon\">" +$scope.user.firstname+" "+$scope.user.lastname+
                        "" + "</p></div>";
                    menuRight.appendChild(butLogout);
                    NavService.set();
                    $location.path('/menuAdmin');

                }
                else
                    if (data.data.response == 3)
                    {
                        $scope.user = data.data.data;
                        StorageService.set("user",$scope.user);

                        var menu = document.getElementById("menu");
                        menu.innerHTML="<a href=\"#!wheelsStore\" class=\"header item\">Wheels Store</a>" +
                            "<a class=\"item\" href=\"#!menuUser\">Menu<a/>";

                        var butLogout=document.getElementById("butLogout");
                        var menuRight = document.getElementById("nav");
                        menuRight.innerHTML = " <div class=\"item\">" +
                            "        <i class=\"user icon\"></i><p class=\"texticon\">" +$scope.user.firstname+" "+$scope.user.lastname+
                            " " +
                            " </p> </div>";
                        menuRight.appendChild(butLogout);
                        NavService.set();

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
