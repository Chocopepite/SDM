SDM.angular.controller('DetailPageController', ['$scope', '$http', 'InitService', 'DataService', function ($scope, $http, InitService, DataService) {
  'use strict';
  
	DataService.addEventListener('movieClicked', function (concert) {  
		$scope.concert = concert;
		
		// AJOUT FAVORIS
		$scope.AddFav = function (url) {
			DataService.AddFav(url);
		};
		
		// DELETE FAVORIS
		$scope.DeleteFav = function (url) {		
			DataService.DeleteFav(url);
		};
		
		// TEST FAVORIS
		$scope.IsFav = function (url) {
			return DataService.IsFav(url);
		};
		
		// TEST NEW
		$scope.IsNew = function (url) {
			var isnew = localStorage.getItem(url);
			if ((isnew === "new") || (isnew === "10")){
				return 1;
			};
		};
		
	});	
	

}]);