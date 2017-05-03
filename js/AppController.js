var app = angular.module('LiveTRStApp', []);
app.controller('MainController',function($http,$scope){
	$scope.getResult = function(){

		console.log($scope.options);
		if (isNaN($scope.trainNumber) == true) {
			console.log($scope.trainNumber);
			$http.get('http://api.railwayapi.com/name_number/train/'+$scope.trainNumber+"/apikey/gcahw26s")
			.then(function(response){
				$scope.data = response.data;
				console.log(response.data.train.number);
			})

		}else{
			console.log($scope.trainNumber);
			$http.get('http://api.railwayapi.com/name_number/train/'+$scope.trainNumber+"/apikey/gcahw26s")
			.then(function(response){
				$scope.data = response.data;
				console.log(response.data.train.number);

$http.get('http://api.railwayapi.com/live/train/'+response.data.train.number+"/doj/"+ $scope.options +"/apikey/gcahw26s/").then(function(response){
				console.log(response.data);
			})

			})

		}



	}
});