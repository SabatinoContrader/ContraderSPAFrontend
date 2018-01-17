app.config(function($routeProvider)
{
  $routeProvider
  .when("/wheelsStore", {
      templateUrl : "wheelsStore.html"
  })
  .when("/listaGomme", {
    templateUrl : "listaGomme.html"
  })
  .when("/newGomma", {
    templateUrl : "newGomma.html"
  })
  .when("/about", {
    templateUrl : "about.html"
  })
  .when("/listaGommeByManufacturer", {
    templateUrl : "listaGommeByManufacturer.html"
  })
  .when("/insertUser", {
      templateUrl : "InsertUser.html"
  })
  .when("/loginpage", {
    templateUrl : "loginpage.html"
  })
      .when("/search",{
          templateUrl : "search.html"
      })
      .when("/listaVehicle",{
          templateUrl: "listaVehicle.html"
      })
      .when ("/insertVehicle",{
          templateUrl: "insertVehicle.html"
      })
      .when("/getUsers", {
          templateUrl: "listaUsers.html"})

              .when("/searchForVehicle", {
                  templateUrl: "searchForVehicle.html"
              })
              .when("/listaGommeByVehicle", {
                  templateUrl: "listaGommeByVehicle.html"
              })
      .when("/login", {
          templateUrl : "loginpage.html"
      })
      .when("/menuAdmin", {
          templateUrl : "menuAdmin.html"
      })
      .when("/menuUser", {
          templateUrl : "menuUser.html"
      })
      .when("/listaGommeForSize", {
          templateUrl : "listaGommeForSize.html"
      })
      .otherwise({
          redirectTo: "/index.html"
      });
});
