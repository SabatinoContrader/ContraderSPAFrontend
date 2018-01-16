logout.$inject=['$scope','NavService','$location','StorageService'];

function logout($scope,NavService,$location,StorageService)
{
    NavService.get($scope);

    $scope.esc= function ()
    {
        StorageService.set("user",null);//azzero il valore del user logato

        var menu = document.getElementById("menu");
        menu.innerHTML="<a href=\"#!wheelsStore\" class=\"header item\">Wheels Store</a>";

        var butLogout=document.getElementById("butLogout");
        var menuRight = document.getElementById("nav");
        menuRight.innerHTML = "        <a href=\"#!login\" class=\"item\">\n" +
            "            <i class=\"sign in icon\">\n" +
            "            </i> Accedi\n" +
            "        </a>\n" +
            "        <a href=\"#!insertUser\" class=\"item\">\n" +
            "            <i class=\"add user icon\">\n" +
            "            </i> Registrati\n" +
            "        </a>";
        menuRight.appendChild(butLogout);
        NavService.get($scope);
        var home = document.getElementById("home");
        home.innerHTML="";
    }

}

module.exports = logout;

