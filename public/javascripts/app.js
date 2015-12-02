(function () {
  angular.module('app', ['ngFileUpload'])
    .controller('BodyCtrl', function (Upload) {
      var vm = this;

      /**
       * When the form is submitted, check it for validity.
       */
      vm.submit = function submit() {
        var form = vm.fileUpload;
        if (form.$valid) return vm.upload(vm.file);
      };

      /**
       * Upload the file.
       *
       * @param file
       */
      vm.upload = function upload(file) {
        Upload.upload({
          url: '/upload',
          data: {file: file}
        })
          .then(function (res) {
            debugger;
          });
      };
    });
}());
