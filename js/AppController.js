var app = angular.module('LiveTRStApp', []);
app.controller('MainController',function($http,$scope){
	$scope.getResult = function(){

		console.log($scope.options);

		if ($scope.options == null) {
			 Materialize.toast('You need to Choose a date !!', 3000, 'rounded');
		}else{
		if (isNaN($scope.trainNumber) == true) {
			console.log($scope.trainNumber);
			$http.get('http://api.railwayapi.com/name_number/train/'+$scope.trainNumber+"/apikey/gcahw26s")
			.then(function(response){
				$scope.data = response.data;
				console.log(response.data.train.number);
				console.log(response.data.response_code);
				if (response.data.response_code === 200) {
					window.location.href = "runningstatus.html/?tt="+response.data.train.number+"&dd="+$scope.options;
					
				}else if(response.data.response_code === 204){
					  Materialize.toast('Add Correct Details!', 3000, 'rounded');
					  
				}

			})
}
		}else{
			console.log($scope.trainNumber);
			$http.get('http://api.railwayapi.com/name_number/train/'+$scope.trainNumber+"/apikey/gcahw26s")
			.then(function(response){
				$scope.data = response.data;
				console.log(response.data);
console.log(response.data.response_code);

				if (response.data.response_code === 200) {
										// window.location.href = "runningstatus.html/?tt="+response.data.train.number+"&dd="+$scope.options;
				console.log("undefined he yr bc");
				
				}else if(response.data.response_code === 204){
					Materialize.toast('Add Correct Details!', 3000, 'rounded');
				}



// $http.get('http://api.railwayapi.com/live/train/'+response.data.train.number+"/doj/"+ $scope.options +"/apikey/gcahw26s/").then(function(response){
// 				console.log(response.data);
			})

			

		}



	}
});