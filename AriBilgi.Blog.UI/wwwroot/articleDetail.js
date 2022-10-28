app.controller("DetailController", function ($scope, $http) {

    angular.element(document).ready(function () {
        $scope.GetArticleDetail();
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

    $scope.GetArticleDetail = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/ArticleGet?articleId=" + $scope.GetUrlParameter("Id"),

        }).then(function (d) {
            $scope.article = d.data.data;
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }
   
});