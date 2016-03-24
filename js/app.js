angular.module('app',['ngAnimate','ui.bootstrap', 'Constants']);
angular.module('app').controller('CarouselCtrl', ['$scope', '$http', 'SLIDE_URL', function($scope, $http, slideUrl){
    $http.get(slideUrl).then(function(response){
        $scope.slides = response.data;
        var m = $scope.slides.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = $scope.slides[m];
            $scope.slides[m] = $scope.slides[i];
            $scope.slides[i] = t;
        }
        console.log($scope.slides);
    });

}]);
angular.module('app').controller('articleCtrl', ['$scope', '$http', 'ARTICLE_URL', function($scope, $http, articleUrl){
 /*
    $scope.articles=[{
        title: "Article 1",
        dateNumbers: "01-22-2016",
        dateText: "January 22, 2016",
        text: "Here is some random text. Will be replaced with actual text shortly. Making templates work.",
        linkUrl: ""
    },
    {
        title: "Article 1",
        dateNumbers: "01-22-2016",
        dateText: "January 22, 2016",
        text: "Here is some random text. Will be replaced with actual text shortly. Making templates work.",
        linkUrl: ""
    }];
    */
    $scope.currentPage=1;
    var pages;
    $scope.paginationNumber=2
    $http.get(articleUrl).then(function(response){
        $scope.articles=response.data;
        $scope.paginationNumber=Math.ceil($scope.articles.length/4);  
    });
   
    console.log($scope.paginationNumber);
    $scope.styleArray=new Array($scope.paginationNumber);
    for (i=0; i<$scope.styleArray.length;i++){
        $scope.styleArray[i]="";
    }
    $scope.styleArray[$scope.currentPage-1]="active";
    $scope.paginationSelected = function(num){
        if (num===-2){
            if ($scope.currentPage-1 <1 )
                $scope.currentPage=1;
            else
                $scope.currentPage=$scope.currentPage-1;
        }
        else if (num===-1){
                if ($scope.currentPage+1>pages)
                    $scope.currentPage=pages;
                else
                    $scope.currentPage=$scope.currentPage+1;
        }
        else{
            $scope.currentPage=num;
        }
        for (i=0; i<$scope.styleArray.length;i++){
            $scope.styleArray[i]="";
        }
        $scope.styleArray[$scope.currentPage-1]="active";
        console.log($scope.currentPage);
    }
    $scope.months=[{
        url: "",
        month:"January Articles"
    },
    {
        url: "",
        month: "February Articles"
    }];
}]);
