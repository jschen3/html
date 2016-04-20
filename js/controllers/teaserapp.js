var app=angular.module('teaserApp', ['Constants']);
app.controller("TeaserCtrl",['$scope','$http','$location', function($scope,$http,$location){
	$scope.showSolution=false;
	$scope.buttonText="Show Solution"
	$scope.toggleSolution=function(){
		if ($scope.showSolution===false){
			$scope.buttonText="Hide Solution"
			$scope.showSolution=true;
		}
		else{
			$scope.buttonText="Show Solution";
			$scope.showSolution=false;
		}
	}
}]);