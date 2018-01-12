AboutController.$inject = ['$scope', '$location']

function AboutController ($scope, $location) {
    $scope.redirectToListaGomme = function () {
      $location.path('listaGomme');
    }
}

module.exports = AboutController;
