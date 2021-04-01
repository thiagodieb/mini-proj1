function HomeConfig($stateProvider) {
  "ngInject";

  $stateProvider.state("home", {
    url: "",
    controller: "HomeCtrl",
    controllerAs: "$",
    templateUrl: "home/home.html"
  });
}

export default HomeConfig;
