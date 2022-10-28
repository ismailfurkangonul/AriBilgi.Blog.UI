var app = angular.module('CategoryEditApp', []);

app.controller("CategoryEditController", function ($scope, $http) {


    angular.element(document).ready(function () {
        $scope.CategoryGet();
    });


    $scope.GetUrlParameter = function (parmeterName) {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        }
        else {
            return result;
        }
    }

    $scope.CategoryGet = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Category/CategoryGet?Id=" + $scope.GetUrlParameter("Id"),
          
        }).then(function (d) {
            $scope.category = d.data.data;
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }



    $scope.CategoryEdit = function () {
        $http({
            method: "PUT",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Category/CategoryUpdate?categoryId=" + $scope.GetUrlParameter("Id"),
            data: $scope.category
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});