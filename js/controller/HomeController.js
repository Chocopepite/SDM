SDM.angular.controller('HomeController', ['$scope', '$window', '$http', 'InitService', 'sharedProperties','DataService', '$timeout', function ($scope, $window, $http, InitService, sharedProperties, DataService, $timeout) {

	$scope.CountFav = sharedProperties.getCountFav;
	$scope.CountNew = sharedProperties.getCountNew;
	$scope.CountConcert = sharedProperties.getCountConcert;
	$scope.CountFiltre = sharedProperties.getCountFiltre;
	$scope.preload = sharedProperties.getpreload;
	$scope.Info = sharedProperties.getInfo;
		
	$scope.Home = function(){
		// Activation de la FootBar
		
		sharedProperties.setbuttonNew(0);	
		sharedProperties.setfiltreNew('0');	
		sharedProperties.setfiltreFav('0');	
		
		// Compte les concerts à afficher
		var CountFiltre = sharedProperties.getCountFiltre;

		if (CountFiltre() > 50){
			SDM.fw7.app.showIndicator();	
			$timeout(function() {
				SDM.fw7.app.hideIndicator();
			}, 350);
			$timeout(function() {
			SDM.fw7.app.mainView.router.loadPage('#index');
			sharedProperties.setTITRE("Concerts");
			sharedProperties.sethomevar(1);
			}, 350);
		}
		else{
			SDM.fw7.app.mainView.router.loadPage('#index');
			sharedProperties.setTITRE("Concerts");
			sharedProperties.sethomevar(1);
		}
		
		DataService.ResetTitre();
	};
	
	$scope.HomeUne = function(){
		// Désactivation de la FootBar
		sharedProperties.sethomevar(0);
		SDM.fw7.app.mainView.router.loadPage('#Une');
	};	
	
	$scope.HomePartenaires = function(){
		// Désactivation de la FootBar
		sharedProperties.sethomevar(0);
		SDM.fw7.app.mainView.router.loadPage('#Partenaires');
	};
	
	$scope.BackHome = function(){
			SDM.fw7.app.mainView.router.loadPage('#Home');
	};
	
	$scope.HomeFav = function(){
		sharedProperties.setfiltreFav("1");
		sharedProperties.setLocalisation('');
		// On active le bouton Favoris
		sharedProperties.setbuttonFav(1);
		// Activation de la FootBar
		sharedProperties.sethomevar(1);
		sharedProperties.setTITRE("Favoris");
		sharedProperties.setInfoDep('');
		sharedProperties.setdisplay_limit(1000);
		SDM.fw7.app.mainView.router.loadPage('#index');		
	};
	
	$scope.HomeNew = function(){
		sharedProperties.setLocalisation('');
		sharedProperties.setbuttonNew(1);	
		sharedProperties.setfiltreNew("1");
		// Activation de la FootBar
		sharedProperties.sethomevar(1);
		sharedProperties.setTITRE("Nouveaux concerts");
		sharedProperties.setInfoDep('');
		sharedProperties.setdisplay_limit(1000);
		var add = localStorage.setItem('RazAuto', "1");
		SDM.fw7.app.mainView.router.loadPage('#index');
	};
	
	$scope.HomeSearch = function(){
		var myElement = document.querySelector(".navbar-fixed .page>.searchbar~.page-content, .navbar-fixed>.searchbar~.page-content, .navbar-through .page>.searchbar~.page-content, .navbar-through>.searchbar~.page-content");
		myElement.style.padding = "100px 0";
		// Activation de la FootBar
		sharedProperties.sethomevar(1);
		// On active le boutton de Recherche
		sharedProperties.setbuttonSearch(1);
		sharedProperties.setTITRE("Concerts");	
		sharedProperties.setshowSearch('1');
		sharedProperties.setdisplay_limit(1000);
		DataService.ResetTitre();
		SDM.fw7.app.mainView.router.loadPage('#index');
	};
	
	$scope.HomeCalendar = function(){
		// Désactivation de la FootBar
		sharedProperties.sethomevar(0);
		SDM.fw7.app.mainView.router.loadPage('#calendar');
	};
	
	$scope.HomeFAQ = function(){
		// Désactivation de la FootBar
		sharedProperties.sethomevar(0);
		SDM.fw7.app.mainView.router.loadPage('#FAQ');
	};
	
	$scope.HomeListeGroupes = function(){
		// Désactivation de la FootBar
		sharedProperties.sethomevar(0);
		SDM.fw7.app.showIndicator();	
		$timeout(function() {
			SDM.fw7.app.hideIndicator();
		}, 200);
		$timeout(function() {
			SDM.fw7.app.mainView.router.loadPage('#ListeGroupes');
		}, 200);
	};
	
	$scope.Dep = function(){
		// Désactivation de la FootBar
		sharedProperties.sethomevar(0);		
		SDM.fw7.app.mainView.router.loadPage('#Departement');		
	};			


}]);