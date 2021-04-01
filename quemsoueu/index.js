import angular from "angular";

// Create the module where our functionality can attach to
let xModule = angular.module("quemsoueu", []);

// Include our UI-Router config settings
import XConfig from "./quemsoueu.config";
xModule.config(XConfig);

// Controllers
import XCtrl from "./quemsoueu.controller";
xModule.controller("QuemsoueuCtrl", XCtrl);

export default xModule;
