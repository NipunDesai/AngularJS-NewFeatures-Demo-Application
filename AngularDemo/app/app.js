/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />

// Create the module and define its dependencies.
var app = angular.module('app', [
    'ngResource',
    'ngAnimate',
    'ngRoute',
    'ngGrid'
]);

// Execute bootstrapping code and any dependencies.
app.run([
    '$q', '$rootScope', function ($q, $rootScope) {
    }]);

app.config(function ($routeProvider) {
    $routeProvider.when('/AngularDemo', {
        templateUrl: 'Template/AngularDemo.html'
    });
    //$routeProvider.otherwise({ redirectTo: '/' });
});
//# sourceMappingURL=app.js.map
