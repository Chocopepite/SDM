SDM.angular.controller('UneController', ['$scope', '$http', '$filter', 'InitService', 'DataService', 'sharedProperties', '$timeout',    function ($scope, $http, $filter, InitService, DataService, sharedProperties, $timeout) {
  'use strict';
 	InitService.addEventListener('ready', function () {			
		$scope.onItemClicked = function (concert) {
			DataService.movieClicked(concert);
		}	
	});

	$scope.concerts = sharedProperties.getConcerts;

	$scope.DateNow = Math.round(new Date().getTime()/1000);
	
	// TEST FAVORIS
	$scope.IsFav = function (url) {
		return DataService.IsFav(url);
	};
	
	// AJOUT FAVORIS
	$scope.AddFav = function (url) {
		DataService.AddFav(url);
	};
	
	// DELETE FAVORIS
	$scope.DeleteFav = function (url) {		
		DataService.DeleteFav(url);
	};

	var FormatDay = function(day){
		var result = day
		if (day < 10){
			result = "0" + result;
		}
		return result;
	};
	// TEST NEW
	$scope.IsNew = function (url) {
		var isnew = localStorage.getItem(url);
		if ((isnew === "new") || (isnew === "10")){
			return 1;
		};
	};

	
}]);