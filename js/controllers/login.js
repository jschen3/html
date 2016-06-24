// This is called with the results from from FB.getLoginStatus().
angular.module('loginFactory',[]).controller('loginFactory',['$scope', function($scope){
    $scope.status='';
    $scope.checkLoginState = function(){
        FB.getLoginStatus().then(function(response) {
            statusChangeCallback(response);
        });
    }
    statusChangeCallback = function(response){
        console.log('statusChangeCallback');
        console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
        if (response.status === 'connected') {
      // Logged into your app and Facebook.
        testAPI();
        } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
            $scope.status='';
        } else {
            $scope.status='';
        }
    }
    testAPI = function() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            $scope.status='Welcome, ' + response.name + '.';
        });
  }
}]);
