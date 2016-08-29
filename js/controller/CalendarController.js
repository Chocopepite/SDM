SDM.angular.controller('CalendarController', ['$scope', '$http', 'InitService', 'DataService', 'sharedProperties','$filter', function ($scope, $http, InitService, DataService, sharedProperties, $filter) {
  'use strict';
	
	var LocalDepartement = localStorage.getItem("departement");
	var LocalRegion = localStorage.getItem("region");
	
	$scope.InfoDep = sharedProperties.getInfoDep;		
		
}]);