var app=angular.module('teaserListApp',['Constants']);
app.controller("teaserListCtrl",['$scope','teaserFactory', 
	function($scope, teaserFactory){
	teaserFactory.getTeasers().then(function(response){
		$scope.teasers=response;
	});
}]);