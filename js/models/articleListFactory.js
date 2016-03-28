angular.module('app').factory('articleListFactory', ['$q', '$http', 'ARTICLE_URL', function($q, $http, articleUrl){
	var _articles;
	var _styleArray;
	var _currentPage = 1;
	var articleListFactory={};
	articleListFactory.getArticles = function(){
		var defer=$q.defer();
		$http.get(articleUrl).then(function(response){
			_articles=response.data;			
			defer.resolve(_articles);
		});
		return defer.promise;
	}
	articleListFactory.initStyleArray = function(){
		var defer=$q.defer();
		$http.get(articleUrl).then(function(response){
			_articles=response.data;
			_paginationNumber=Math.ceil(_articles.length/3);
			_styleArray = new Array(_paginationNumber);
			for (i=0; i<_styleArray.length;i++){
        		_styleArray[i]="";
    		}
    		_styleArray[_currentPage-1]="active";
    		console.log(_styleArray);
			defer.resolve(_styleArray);
		});
		return defer.promise;
	}
	articleListFactory.getStyleArray = function(){
		return _styleArray;
	}
	articleListFactory.getPaginationNumber = function(){
		var defer=$q.defer();
		$http.get(articleUrl).then(function(response){
			_articles=response.data;
			_paginationNumber=Math.ceil(_articles.length/3);
			defer.resolve(_paginationNumber);
		});
		return defer.promise;
	}
	articleListFactory.getCurrentPage = function(){
		return _currentPage;
	}
	articleListFactory.changePage = function(num){
		if (num===-2){
			if ((_currentPage-1)<1)
				_currentPage=1;
			else
				_currentPage=_currentPage-1;
		}
		else if (num===-1){
			if ((_currentPage+1)>_paginationNumber)
				_currentPage=_paginationNumber;
			else
				_currentPage=_currentPage+1;
			
		}
		else{
			_currentPage=num;
		}
		for (i=0; i<_styleArray.length;i++){
        		_styleArray[i]="";
    		}
    		_styleArray[_currentPage-1]="active";				
	}
	return articleListFactory;
}]);