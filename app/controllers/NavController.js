NavController.$inject = ['$scope','StorageService']

function NavController ($scope,StorageService)
{
    if(StorageService.get("user")==null)
    {
        var menuRight = document.getElementById("nav");
        menuRight.innerHTML = " <a href=\"#!login\" class=\"item\">\n" +
            "        <i class=\"sign in icon\"></i>\n" +
            "        Accedi\n" +
            "      </a>\n" +
            "      <a href=\"#!insertUser\" class=\"item\">\n" +
            "        <i class=\"add user icon\"></i>\n" +
            "        Registrati\n" +
            "      </a>";
    }
    else
    {
        alert("asdasas");
    }
}
module.exports = NavController;
