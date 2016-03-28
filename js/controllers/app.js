var app=angular.module('app',['ngAnimate','ui.bootstrap', 'Constants']);
angular.module('app').controller('CarouselCtrl', ['$scope', '$http', 'SLIDE_URL','slideFactory', 
 function($scope, $http, slideUrl, slideFactory){
    slideFactory.getSlides().then(function(response){
        $scope.slides=response;
    });

}]);
angular.module('app').controller('articleCtrl', ['$scope', '$http', 'ARTICLE_URL', 'articleListFactory', 
    function($scope, $http, articleUrl, articleListFactory){
    articleListFactory.initStyleArray().then(function(response){
        $scope.styleArray=response;
        console.log($scope.styleArray);
    });
    articleListFactory.getArticles().then(function(response){
        $scope.articles=response;
        console.log($scope.articles);
    });
    articleListFactory.getPaginationNumber().then(function(response){
        $scope.paginationNumber=response;
    });
    $scope.paginationSelected = function(num){
        articleListFactory.changePage(num);
        articleListFactory.getStyleArray();
        $scope.currentPage=articleListFactory.getCurrentPage();
    };
    $scope.currentPage=articleListFactory.getCurrentPage();
    $scope.months=[{
        url: "",
        month:"January Articles"
    },
    {
        url: "",
        month: "February Articles"
    }];
}]);
