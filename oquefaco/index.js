import angular from "angular";

// Create the module where our functionality can attach to
let xModule = angular.module("oquefaco", []);

// Include our UI-Router config settings
import XConfig from "./oquefaco.config";
xModule.config(XConfig);

// Controllers
import XCtrl from "./oquefaco.controller";
xModule.controller("OquefacoCtrl", XCtrl);

export default xModule;
