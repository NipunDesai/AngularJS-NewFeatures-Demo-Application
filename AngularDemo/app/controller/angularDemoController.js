/// <reference path="../app.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />

var angularDemoController = (function () {
    function angularDemoController($scope) {
        this.$scope = $scope;
        this.$scope.dataCollectionList = [
            {
                "name": "Lenovo",
                "procesor": "Intel i5",
                "age": 2011
            },
            {
                "name": "Toshiba",
                "procesor": "Intel i7",
                "age": 2010
            },
            {
                "name": "Toshiba",
                "procesor": "Intel core 2 duo",
                "age": 2008
            },
            {
                "name": "HP",
                "procesor": "Intel core 2 duo",
                "age": 2012
            }];

        this.$scope.gridOptions = { data: 'dataCollectionList' };
    }
    angularDemoController.controllerId = "angularDemoController";
    return angularDemoController;
})();

// Update the app1 variable name to be that of your module variable
app.controller(angularDemoController.controllerId, [
    '$scope', function ($scope) {
        return new angularDemoController($scope);
    }
]);
//# sourceMappingURL=angularDemoController.js.map
