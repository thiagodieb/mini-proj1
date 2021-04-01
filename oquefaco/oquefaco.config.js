function XConfig($stateProvider) {
  "ngInject";

  $stateProvider.state("oquefaco", {
    url: "/oquefaco",
    controller: "OquefacoCtrl",
    controllerAs: "$",
    templateUrl: "oquefaco/oquefaco.html"
  });
}

export default XConfig;
