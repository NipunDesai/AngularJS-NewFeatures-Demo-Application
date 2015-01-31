/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

var demoDirective = (function () {
    function demoDirective($window) {
        this.$window = $window;
        this.restrict = "A";
        this.require = 'ngModel';
        this.link = function (scope, element, attrs, ngModel) {
            var req = [
                /\d+/
            ];

            ngModel.$validators.numeric = function (value) {
                var status = true;
                angular.forEach(req, function (pattern) {
                    status = status && pattern.test(value);
                });
                return status;
            };
        };
    }
    demoDirective.directiveId = "demoDirective";
    return demoDirective;
})();

// Update the app1 variable name to be that of your module variable
app.directive(demoDirective.directiveId, [
    '$window', function ($window) {
        return new demoDirective($window);
    }
]);
//# sourceMappingURL=demoDirective.js.map
