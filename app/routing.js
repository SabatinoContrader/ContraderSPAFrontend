app.config(function($routeProvider) {
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
      .otherwise({
          redirectTo: "/index.html"
      });
});
