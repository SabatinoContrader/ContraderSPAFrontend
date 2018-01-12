function StorageService() {
  var data = {}
  return {
      get(key) {
        return this.data[key];
      },
      set(key, value) {
          this.data.key = value;
      }
   }
}
module.exports = StorageService;
