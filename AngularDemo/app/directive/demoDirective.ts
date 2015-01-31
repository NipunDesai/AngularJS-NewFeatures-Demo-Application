/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />


interface IdemoDirective extends ng.IDirective {
 }

interface IdemoDirectiveScope extends ng.IScope {
   
}

class demoDirective implements IdemoDirective {
    static directiveId: string = "demoDirective";
    restrict: string = "A";
    require = 'ngModel';


    constructor(private $window: ng.IWindowService) {
    }

    link = (scope: IdemoDirectiveScope, element, attrs, ngModel) => {
        var req = [
            /\d+/  //numeric values
          ];

        ngModel.$validators.numeric = (value) => {
            var status = true;
            angular.forEach(req, (pattern) => {
                status = status && pattern.test(value);
            });
            return status;
        };
    }
}

// Update the app1 variable name to be that of your module variable
app.directive(demoDirective.directiveId, ['$window', $window =>
    new demoDirective($window)
]);



