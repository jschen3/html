angular.module('articleapp').factory('articleFactory',['$q', '$http', 'ARTICLE_URL','IMAGE_URL',
	 function($q, $http, articleUrl, imageUrl){
	 	var _article;
	 	var _imageAppend;
	 	var articleFactory= {};
	 	articleFactory.getArticle = function(id){
	 		var defer=$q.defer();
	 		$http.get(articleUrl+"/"+id).then(function(response){
	 			_article=response.data;
	 			defer.resolve(_article);
	 		});
	 		return defer.promise;
	 	}
	 	articleFactory.getImageAppend = function(id){
	 		var defer = $q.defer();
	 		$http.get(articleUrl+"/"+id).then(function(response){
	 			_article=response.data;
	 			if (_article.title===undefined)
	 				_imageAppend="";
	 			else
	 				_imageAppend=imageUrl+"/"+_article.locator+"/";
	 			defer.resolve(_imageAppend);
	 		});
	 		return defer.promise;
	 	}
	 	return articleFactory;
}]);