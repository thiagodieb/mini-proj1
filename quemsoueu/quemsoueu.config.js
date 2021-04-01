function XConfig($stateProvider) {
  "ngInject";

  $stateProvider.state("quemsoueu", {
    url: "/quemsoueu",
    controller: "QuemsoueuCtrl",
    controllerAs: "$",
    templateUrl: "quemsoueu/quemsoueu.html"
  });
}

export default XConfig;
