var app=angular.module('teaserListApp',['Constants']);
app.controller("teaserListCtrl",['$scope','teaserListFactory', 
	function($scope, teaserListFactory){
	teaserListFactory.getTeasers().then(function(response){
		$scope.teasers=response;
	});
}]);