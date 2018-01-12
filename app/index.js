window.$ = window.jQuery = require('jquery');
var angular = require('angular');
require('angular-route');
require('../node_modules/semantic-ui/dist/semantic.min.css');
require('../node_modules/semantic-ui/dist/semantic');
require('../assets/css/style.css');

window.app= angular.module('GommaStoreApp', ["ngRoute"]);

require('./routing.js');
require('./factories');
require('./controllers');
