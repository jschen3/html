angular.module('teaserListApp').factory('teaserListFactory',['$q','$http','TEASER_URL', function($q, $http, teaserUrl){
	var _teasers;
	var teaserListFactory={};
	teaserListFactory.getTeasers = function(){
		var defer=$q.defer();
		$http.get(teaserUrl).then(function(response){
			_teasers=response.data;
			defer.resolve(_teasers);
		});
		return defer.promise;
	}
	return teaserListFactory;
}]);