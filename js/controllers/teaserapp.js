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
	$scope.teaser={"title":"The Coin Changer", "date":"April 17, 2016",
		"articleComponents":
			[{
			"images":null,
			"texts":["A cash register has coins of values 1 cent, 4 cents and 6 cents.Programmatically determine the fewest number of coins needed to make 8. How would you generalize the algorithm to any given set of coins and total sum? Is it possible to change this algorithm to state the way to find the combination to make the fewest coins?"]
			}],
		"solutionComponents":[{
			"texts":["The secret to this question is thinking about this question like anyother recursive question. How do you break this problem into simpler cases.",
				   "Are there any cases that are the simplest? In this case are there any cases where the solution is only 1 coin away. Those are your base cases. And then how do you get to your base cases. Is the problem any simpler if you take away a coin? In this example the problem gets significantly easier after you take a coin away. You only need to figure out the fewest coins to make 7 cents, 4 cents and 2 cents. After realizing the recursion all thats left is programming it out.",
				   "How can you make sure you call all the cases in recursion. Also be careful thinking that the fewest amount of coins is found by taking as many of the largest coin first. This case doesn't work as taking the largest value first results in 6,1,1 rather than the fewest 4,4. "],
			"codes":[
"void change(int current, int coins){    \n    if (current==1){\n        coins++;\n        if (this.minimum>coins);\n            this.minimum=coins;\n\n    }\n    else if (current==4){\n        coins++;\n        if (this.minimum>coins);\n            this.minimum=coins;\n    }\n    else if (current==6){\n        coins++;\n        if (this.minimum>coins);\n            this.minimum=coins;\n    }\n    else{\n        if (current>6){\n            change(current-6,coins+1);\n            change(current-4,coins+1);\n            change(current-1,coins+1);\n        }\n        else if (current>4){\n            change(current-4,coins+1);\n            change(current-1,coins+1);\n        }\n        else{\n            change(current-1,coins+1);\n        }\n    }\n}"			],
			images:null
		}]
	};
	console.log($scope.teaser);
}]);