SDM.angular.controller('ListeGroupeController', ['$scope', '$http', '$filter', 'InitService', 'DataService', 'sharedProperties', '$timeout',    function ($scope, $http, $filter, InitService, DataService, sharedProperties,  $timeout) {
  'use strict';
 	SDM.fw7.app.onPageBeforeAnimation('ListeGroupes', function(page){	
		$scope.onItemClicked = function (concert) {
			DataService.movieClicked(concert);
		}
	});
	
    $scope.concerts = sharedProperties.getConcerts;
	$scope.name = sharedProperties.getname;

	// TEST FAVORIS
	$scope.IsFav = function (id){
		return DataService.IsFav(id);
	};
	
	// AJOUT FAVORIS
	$scope.AddFav = function (url) {
		DataService.AddFav(url);
	};
	
	// SUPPRESSION FAVORIS
	$scope.DeleteFav = function (id) {		
		DataService.DeleteFav(id);
	};
	
	
}]);