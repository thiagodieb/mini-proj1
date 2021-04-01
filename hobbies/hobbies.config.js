function XConfig($stateProvider) {
  "ngInject";

  $stateProvider.state("hobbies", {
    url: "/hobbies",
    controller: "HobbiesCtrl",
    controllerAs: "$",
    templateUrl: "hobbies/hobbies.html"
  });
}

export default XConfig;
