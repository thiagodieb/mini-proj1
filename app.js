import angular from "angular";
import "@uirouter/angularjs";

// Import your app stylesheets
import "./style.css";

// Import your app functionality
import "./home";
import "./quemsoueu";
import "./hobbies";
import "./oquefaco";

// Create and bootstrap application
const requires = ["ui.router", "home", "quemsoueu", "hobbies", "oquefaco"];

window.app = angular.module("app", requires);

angular.bootstrap(document.getElementById("app"), ["app"]);
