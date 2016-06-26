angular.module('commentCtrl',[]).controller('commentCtrl',['$scope', '$location', 'commentFactory',
 function($scope, $location, commentFactory){
  	$scope.id=$location.search().id;
    $scope.authenticated=false;
    console.log($scope.id);
  	commentFactory.initStylesArray($scope.id).then(function(response){
  		$scope.styleArray=response;
  	});
  	commentFactory.getComments($scope.id).then(function(response){
  		$scope.comments=response;
  		console.log($scope.comments);
  	});
  	$scope.paginationSelected=function(num){
  		commentFactory.changePage(num);
  		commentFactory.getStyleArray();
  		$scope.currentPage=commentFactory.getCurrentPage();
  	}
  	$scope.currentPage=commentFactory.getCurrentPage();
    $scope.post = function(){
      var comment={};
    }
    $scope.cancel = function(){
        this.text='';
        $scope.text='';
    }
    function getDate(){
    	var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		if(dd<10) {
    		dd='0'+dd
		}
		if(mm<10) {
    		mm='0'+mm
		}
		return today = mm+' '+dd+' '+yyyy;
	}
}]);
