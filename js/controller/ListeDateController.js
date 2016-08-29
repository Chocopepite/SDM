SDM.angular.controller('ListeDateController', ['$scope', '$http', '$filter', 'InitService', 'DataService', 'sharedProperties', '$timeout',    function ($scope, $http, $filter, InitService, DataService, sharedProperties, $timeout) {
  'use strict';
 	InitService.addEventListener('ready', function () {			
	$scope.onItemClicked = function (concert) {
		DataService.movieClicked(concert);
	}
	
	SDM.fw7.app.onPageBeforeAnimation('Liste-date', function(page){			
		$scope.concerts = sharedProperties.getConcerts;
		$scope.Localisation = sharedProperties.getLocalisation;
		
		var date = localStorage.getItem('date');		
		$scope.date = FormatDay(date);
		$scope.DateNow = Math.round(new Date().getTime()/1000);
		var LocalDepartement = localStorage.getItem("departement");	
		var LocalRegion = localStorage.getItem("region");	
		var date = localStorage.getItem('date');	
	
		if (LocalDepartement != '' && LocalDepartement != null){
			sharedProperties.setLocalisation(LocalDepartement);
			$scope.departement = " dans le département " + LocalDepartement;
		}
		else if(LocalRegion != '' && LocalRegion != null){	
			sharedProperties.setLocalisation(LocalRegion);
			$scope.departement = '';
		}
					
		
		$scope.date = date;
		$scope.$apply();
		if (Object.keys($scope.filteritem).length === 0){
			$scope.DateNull = 1;					
		}
		else{
			$scope.DateNull = 0;			
		}
		$scope.$apply();
	});	
	
	var date = localStorage.getItem('date');		
	$scope.date = FormatDay(date);
	
	});
	
	

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