import angular from "angular";

// Create the module where our functionality can attach to
let xModule = angular.module("hobbies", []);

// Include our UI-Router config settings
import XConfig from "./hobbies.config";
xModule.config(XConfig);

// Controllers
import XCtrl from "./hobbies.controller";
xModule.controller("HobbiesCtrl", XCtrl);

export default xModule;
