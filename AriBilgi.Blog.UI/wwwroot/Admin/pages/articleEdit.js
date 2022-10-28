var app = angular.module('ArticleEditApp', []);

app.controller("ArticleEditController", function ($scope, $http) {


    angular.element(document).ready(function () {
        $scope.ArticleGet();
        $scope.GetCategoryList();
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

    $scope.GetCategoryList = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Category/CategoryGetList",
        }).then(function (d) {
            $scope.CategoryList = d.data.data;
        });
    }

    $scope.ArticleGet = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/ArticleGet?articleId=" + $scope.GetUrlParameter("Id")
        }).then(function (d) {
            $scope.article = d.data.data;
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }



    $scope.ArticleEdit = function () {
        $http({
            method: "PUT",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/ArticleUpdate?articleId=" + $scope.GetUrlParameter("Id"),
            data: $scope.article
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});