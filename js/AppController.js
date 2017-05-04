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
				console.log(response.data.response_code);
				if (response.data.response_code === 204) {
					// window.location.href = "runningstatus.html/?tt="+response.data.train.number+"&dd="+$scope.options;
					console.log("undefined he yr bc");
				}

			})

		}else{
			console.log($scope.trainNumber);
			$http.get('http://api.railwayapi.com/name_number/train/'+$scope.trainNumber+"/apikey/gcahw26s")
			.then(function(response){
				$scope.data = response.data;
				console.log(response.data);
console.log(response.data.response_code);

				if (response.data.response_code === 204) {
										// window.location.href = "runningstatus.html/?tt="+response.data.train.number+"&dd="+$scope.options;
				console.log("undefined he yr bc");
				}



// $http.get('http://api.railwayapi.com/live/train/'+response.data.train.number+"/doj/"+ $scope.options +"/apikey/gcahw26s/").then(function(response){
// 				console.log(response.data);
			})

			

		}



	}
});