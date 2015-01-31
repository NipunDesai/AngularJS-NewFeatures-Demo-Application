/// <reference path="../app.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-resource.d.ts" />

interface IangularDemoControllerScope extends ng.IScope {
    dataCollectionList: any;
    gridOptions:any;
}

interface IangularDemoController {
 
}

class angularDemoController implements IangularDemoController {
    static controllerId: string = "angularDemoController";
    
    constructor(private $scope: IangularDemoControllerScope) {

        this.$scope.dataCollectionList = [{
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

        this.$scope.gridOptions = {
            data: 'dataCollectionList' };

    }

  
}

// Update the app1 variable name to be that of your module variable
app.controller(angularDemoController.controllerId, ['$scope', ($scope) =>
    new angularDemoController($scope)
]);
