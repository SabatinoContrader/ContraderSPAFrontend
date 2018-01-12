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
  .when("/loginpage", {
    templateUrl : "loginpage.html"
  })
      .otherwise({
          redirectTo: "/user.html"
      });
});
