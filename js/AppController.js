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
					  Materialize.toast('Error!', 3000, 'rounded');	  
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

/* RunningStatus.html code   */
app.controller('LiveTRSController', function($scope,$http){
 
 var preloader = document.getElementById("preloaderid");
 var trandata = document.getElementById("dataTrainLiveStatus");
 var trainNumber = getParameterByName("tt");
 var date = getParameterByName("dd");

 console.log(trainNumber);
 console.log(date);

 $http.get('http://api.railwayapi.com/live/train/'+trainNumber+"/doj/"+date+"/apikey/gcahw26s/")
 .then(function(response){

 	console.log(response.data.error);
 	 if (response.data.error == "") {
 	 		
 	$scope.data = response.data;
 	document.getElementById("box").style.display = 'none';
 	preloader.style.display = 'none';
 	trandata.style.display = 'block';
 	console.log($scope.data);
 	console.log($scope.data.position);
 	$scope.runningheading = $scope.data.position;
 	console.log($scope.runningheading);

 	document.getElementById('trainshortstatus').innerHTML = $scope.runningheading +" ("+$scope.data.current_station.station_.name+")";
 	document.getElementById('headingStatus').innerHTML = "Running Status of Train No ("+$scope.data.train_number+") Starting From"+$scope.data.start_date; 
 	 }else{
 	 	document.getElementById('preloaderid').style.display = 'none' ; 
 	 	document.getElementById('errorpic').style.display = 'block';
 	 	document.getElementById("errorheading").innerHTML = response.data.error;
 }
 })

 $scope.Previous = function(){
 	var todaysdate = getParameterByName("dd");
 	var previousdayfinderlog = todaysdate.substring(6,8); 	
 	var frontdate = todaysdate.substring(0,6);
 	console.log(previousdayfinderlog);
 	if (previousdayfinderlog == "30") {
 		window.location.href = "runningstatus.html?tt="+trainNumber+"&dd="+frontdate+"29";
 	}else{
 		var finalPreviousDay = todaysdate - 1 ;
 		console.log(finalPreviousDay);
 		window.location.href = "runningstatus.html?tt="+trainNumber+"&dd="+finalPreviousDay;
 	}

 }

$scope.Next = function(){
	 	var todaysdate = getParameterByName("dd");
 	var nextdayfinderlog = todaysdate.substring(6,8); 	
 	var frontdate = parseInt(todaysdate.substring(0,6));
 	console.log(nextdayfinderlog);
 	if (nextdayfinderlog == "31") {
 		var monthchange = frontdate + 1 ;
 		window.location.href = "runningstatus.html?tt="+trainNumber+"&dd="+monthchange+"01";
 	}else{
 		var finalNextDay = parseInt(todaysdate) + 1 ;
 		console.log(finalNextDay);
 		window.location.href = "runningstatus.html?tt="+trainNumber+"&dd="+finalNextDay;
 	}

}


function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

});