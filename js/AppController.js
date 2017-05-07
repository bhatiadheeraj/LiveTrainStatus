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
					window.location.href = "runningstatus.html?tt="+response.data.train.number+"&dd="+$scope.options;
					}else if(response.data.response_code === 204){
					  Materialize.toast('I am a toast!', 3000, 'rounded');	  
				}
			})
}		else{
			console.log($scope.trainNumber);
			$http.get('http://api.railwayapi.com/name_number/train/'+$scope.trainNumber+"/apikey/gcahw26s")
			.then(function(response){
				$scope.data = response.data;
				console.log(response.data);
				console.log(response.data.response_code);
		if (response.data.response_code === 200) {
										window.location.href = "runningstatus.html?tt="+response.data.train.number+"&dd="+$scope.options;
						}
					})		}
		}
	}
});


app.controller('LiveTRSController', function($scope,$http){
 
 var preloader = document.getElementById("preloaderid");
 var trandata = document.getElementById("dataTrainLiveStatus");
 var trainNumber = getParameterByName("tt");
 var date = getParameterByName("dd");

 console.log(trainNumber);
 console.log(date);

 $http.get('http://api.railwayapi.com/live/train/'+trainNumber+"/doj/"+date+"/apikey/gcahw26s/")
 .then(function(response){
 	$scope.data = response.data;
 	preloader.style.display = 'none';
 	trandata.style.display = 'block';
 	console.log($scope.data);
 	console.log($scope.data.position);
 	$scope.runningheading = $scope.data.position;
 	console.log($scope.runningheading);

 	document.getElementById('trainshortstatus').innerHTML = $scope.runningheading +" ("+$scope.data.current_station.station_.name+")";
 	document.getElementById('headingStatus').innerHTML = "Running Status of Train No ("+$scope.data.train_number+") Starting From"+$scope.data.start_date;
 })


function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

});