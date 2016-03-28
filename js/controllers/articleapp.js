var app = angular.module('articleapp', ['Constants']);
app.controller("ArticleCtrl", ['$scope', '$http', '$location', 'articleFactory', function ($scope, $http, $location, articleFactory) {
      // do stuff with $routeParams
    $scope.id=$location.search().id;
    console.log($location.search().id);
    articleFactory.getArticle($scope.id).then(function(response){
    	$scope.article=response;
    });
    articleFactory.getImageAppend($scope.id).then(function(response){
    	$scope.imageAppend=response;
    });
}]);
