

app.controller("HomeController", function ($scope, $http) {

    angular.element(document).ready(function () {
        $scope.GetLastArticle();
        $scope.GetLastArticleList10();
    });

    $scope.GetLastArticle = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/LastArticleGet",
        }).then(function (d) {

            $scope.LastArticle = d.data.data;
        });
    }

    $scope.GetLastArticleList10 = function () {
        $scope.count = 10;
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/ArticleLastList?count=" + $scope.count
        }).then(function (d) {
            $scope.LastArticleList = d.data.data;
        });
    }
});