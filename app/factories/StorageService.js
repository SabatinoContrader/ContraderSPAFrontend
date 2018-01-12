function StorageService() {
  var data = {}
  return {
      get(key) {
        return data[key];
      },
      set(key, value) {
          data[key]= value;
      }
   }
}
module.exports = StorageService;
