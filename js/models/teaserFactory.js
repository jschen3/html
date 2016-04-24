angular.module('teaserListApp').factory('teaserFactory',['$q','$http','TEASER_URL', function($q, $http, teaserUrl){
	var _teasers;
	var teaserFactory={};
	teaserFactory.getTeasers = function(){
		var defer=$q.defer();
		$http.get(teaserUrl).then(function(response){
			_teasers=response.data;
			defer.resolve(_teasers);
		});
		return defer.promise;
	}
	return teaserFactory;
}]);