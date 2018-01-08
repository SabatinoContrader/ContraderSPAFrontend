function RemoteCallService($http) {
  var baseUrl = "http://localhost:8080/gommastore/"
  return {
      get(url) {
        return $http.get(baseUrl + url)
          .then(function(data) {
            return data;
          })
      },
      post(url, data) {
        return $http({
          url:  baseUrl + url,
          method: "POST",
          data: data,
          headers: {'Content-Type': 'application/json'}
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
              return error;
        });
      }
   }
}

module.exports = RemoteCallService;
