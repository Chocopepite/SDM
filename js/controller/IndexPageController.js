SDM.angular.controller('IndexPageController', ['$scope', '$http', '$filter', 'InitService', 'DataService', 'sharedProperties','$timeout',    function ($scope, $http, $filter, InitService, DataService, sharedProperties,$timeout) {
  'use strict';
 		
	$scope.onItemClicked = function (concert) {
		DataService.movieClicked(concert);
	}
	
	// var ListEvent = '';
	// var DetailEvent = ''; 	
	// var ListVersion = '';
	// var CountFiltre = localStorage.getItem("nbfiltre");
	
	$scope.filtreFav = sharedProperties.getfiltreFav;	
	$scope.TITRE = sharedProperties.getTITRE;
	$scope.Localisation = sharedProperties.getLocalisation;
	$scope.display_limit = sharedProperties.getdisplay_limit;
	$scope.filtreNew = sharedProperties.getfiltreNew;
	$scope.InfoDep = sharedProperties.getInfoDep;
	$scope.showSearch = sharedProperties.getshowSearch;
	$scope.buttonNew = sharedProperties.getbuttonNew;
	$scope.filtreRegion = sharedProperties.getfiltreRegion;
	$scope.Info = sharedProperties.getInfo;

	var ListConcerts = '';	
	var ConcertsVersion = '';
	var OffLine = false;
	var LocalDepartement = localStorage.getItem("departement");
	var LocalRegion = localStorage.getItem("region");	

	$scope.DateNow = Math.round(new Date().getTime()/1000);	
	$scope.SearchNull = 0;
	$scope.DepNull = 0;	
	
	$scope.GotoDep = function(){	
		SDM.fw7.app.mainView.router.loadPage('#Departement');		
	}
	
	if (LocalDepartement != '' && LocalDepartement != null){	
		sharedProperties.setLocalisation(LocalDepartement);
		sharedProperties.setInfo('département');
		sharedProperties.setfiltreRegion('1');
		sharedProperties.setdisplay_limit(1500);
		
	}
	else if(LocalRegion != '' && LocalRegion != null){
		sharedProperties.setLocalisation(LocalRegion);
		sharedProperties.setInfo('région');
		sharedProperties.setfiltreRegion('1');
		sharedProperties.setdisplay_limit(1500);
	}
	else {
		sharedProperties.setdisplay_limit(25);
		sharedProperties.setfiltreRegion('0');	
	}
	
	SDM.fw7.app.onPageAfterAnimation('index', function(page){		
		if (Object.keys($scope.filteritem).length === 0){
			$scope.DepNull = 1;					
		}
		else{
			$scope.DepNull = 0;
			$scope.SearchNull = 0;
		}
		$scope.$apply();
	});
		
	InitService.addEventListener('ready', function () {	
		
		// Initialisation du titre de la page concert en fonction du parametrage Region / Departement
		DataService.ResetTitre();
		
		// Récupération de la liste des concerts
		$http({
		  method: 'GET',
		//   url: '../../json/event.txt',
		  url: 'http://sueurdemetal.com/json/event.txt',
		  timeout: 7000
		}).then(function successCallback(result) {
			ListConcerts = result.data['results']['collection1'];
			ConcertsVersion = result.data['version'];			
			MergeJson();
		  }, function errorCallback(result) {
			ListConcerts = "offline";	
			MergeJson();	
		  });
				
		
		// AJOUT FAVORIS
		$scope.AddFav = function (url) {
			DataService.AddFav(url);
		};
		
		// SUPPRESSION FAVORIS
		$scope.DeleteFav = function (url) {		
			DataService.DeleteFav(url);
		};
		
		// TEST FAVORIS
		$scope.IsFav = function (url){
			return DataService.IsFav(url);
		};
		
		// TEST NEW
		$scope.IsNew = function (url) {
			return DataService.IsNew(url);
		};
		
		// Test s'il y a des nouveaux concerts | Si pas de nouveau concert on affiche un texte le précisant 
		$scope.NewInLocal = function () {
			for ( var i = 0, len = localStorage.length; i <= len; ++i ) {
				var LocalValue = localStorage.getItem( localStorage.key( i ) ) ;
				var LocalKey = localStorage.key(i);
				if (LocalValue === "new"){						
					return true;
				}
			}
		};
		
		// Test s'il y a des concerts en favoris | Si pas de concerts en favoris on affiche un texte le précisant 
		$scope.FavInLocal = function () {
			for ( var i = 0, len = localStorage.length; i <= len; ++i ) {
				var LocalValue = localStorage.getItem( localStorage.key( i ) ) ;
				var LocalKey = localStorage.key(i);
				if ((LocalKey != 'json') && (LocalKey != 'date') && (LocalKey != 'raz') && (LocalKey != 'region') && (LocalKey != 'departement') && (LocalKey != 'version') && (LocalKey != 'RazAuto')){
					if ((LocalValue === "1") || (LocalValue === "10")){						
						return true;
					}
				}
			}
		};
		
		// Bouton Suppression des Nouveaux concerts
		$scope.DeleteNew = function(){
			DataService.EraseNew();
			sharedProperties.setTITRE("Concerts");
			sharedProperties.setCountNew('0');

			// On réinitialise les états des boutons à 0	
			DataService.Reset();			
		};

		// On réinitialise les états des boutons à 0
		$scope.Reset = function(){
			SDM.fw7.app.mainView.router.loadPage('#Home');

			$timeout(function() {
				DataService.Reset();
				DataService.ResetTab();
				 }, 250);
			if ($scope.search != "" && $scope.search != null){
				$timeout(function() {
					// Initialisation de la barre de recherche
					var mySearchbar = SDM.fw7.app.searchbar('.searchbar', {
						searchList: '.list-block-search',
						searchIn: '.item-title'
					});
					mySearchbar.clear();
				 }, 500);
			}
			if ($scope.filtreFav() != "" && $scope.filtreFav() != null){
				$timeout(function() {
					sharedProperties.setfiltreFav('');
				}, 500);
			}
			if ($scope.filtreNew() != "" && $scope.filtreNew() != null){
				$timeout(function() {
					sharedProperties.setfiltreNew('');					
				 }, 500);
			}
			sharedProperties.setdisplay_limit(50);
		};
		
   });
   
	var count = 0;
	var countnew = 0;
	
	var alertCallback = function() {
		console.log('ok');
	}; 
	
   // Fonction affichage de la liste des concerts
   var MergeJson = function(){

		// Mode Offline
		if (ListConcerts === 'offline'){
			if (OffLine === false){
				OffLine = true;	

				// On va récupérer la liste de concerts stockée en local
				var json = localStorage.getItem('json');
				var json = ('json: ', JSON.parse(json));

				// Si une liste des concerts est présente en localStorage: on la traite
				if (json != null){
					// On enleve la roue de Loading
					SDM.fw7.app.hideIndicator();

					// On affiche l'ecran d'accueil										
					sharedProperties.setpreload(1);

					// On Récupère la Version (timestamp) du Json stockée en local 
					var version = localStorage.getItem('version');	

					// On récupère la date de la liste des concerts traitée
					var date = formatDate(version);

					// On alerte l'utiliseteur qu'on est en mode OFFLINE					
					// alert('Connexion impossible, données du '+date+' chargées.');
					navigator.notification.alert('Connexion impossible, données du '+date+' chargées.', alertCallback, 'Connexion', 'Ok');

					// Efface les nouveautés anciennement consultées
					DataService.InitNew();	

					// On affiche la liste des concerts stockées 
					$scope.concerts = json;

					// Date du Jour 
					var datenow = Math.round(new Date().getTime()/1000);

					// Compteur Nombre Total de Concerts >= la Date du Jour
					var NbConcert = DataService.NbTotal(json, datenow);			
					sharedProperties.setCountConcert(NbConcert);

					// Compteur Nombre de Concerts suivant Filtre Departement ou Region
					var NbFiltre = DataService.NbFiltre(json);			
					sharedProperties.setCountFiltre(NbFiltre);				
					
					// On Partage la liste des concerts avec les controllers UneController / ListeDateController / ListeGroupeController
					sharedProperties.setConcerts(json);

					// Initialisation de la liste alphabétique des groupes pour le controller ListeGroupes
					DataService.ListeGroupe();

					// Initialisation du Calendrier. Controller : CalendarController
					DataService.InitCalendar();					

										
					// COMPTEUR FAV & NEW OFFLINE
					// On parcours les variables contenues dans le localStorage
					// value = 1 : Favoris
					// value = 10 : Favoris & New 
					// value = new : New
					for ( var i = 0, len = localStorage.length; i < len; ++i ) {
						var LocalValue = localStorage.getItem( localStorage.key( i ) ) ;
						var LocalKey = localStorage.key(i);						
						if ((LocalKey != 'json') && (LocalKey != 'date') && (LocalKey != 'raz') && (LocalKey != 'region') && (LocalKey != 'departement') && (LocalKey != 'version') && (LocalKey != 'RazAuto')){
							if ((LocalValue === "1") || (LocalValue === "10")){
								 count = count + 1;
							}
							if ((LocalValue === "new") || (LocalValue === "10")){	
								 countnew = countnew + 1;
							}	
						}
					}

					// Mise a jour du badge "Nombre de Favoris"			
					sharedProperties.setCountFav(count);
					
					// Mise a jour du badge "Nombre de Nouveaux events"
					sharedProperties.setCountNew(countnew);
				}

				// S'il aucune liste des concerts n'est dans le localStorage on ferme l'application
				else{
					// navigator.notification.alert('Connexion impossible au serveur.', alertCallback, 'Connexion', 'Ok');	
					$timeout(function() {	
						navigator.app.clearHistory();
						navigator.app.exitApp();
					 }, 3000);
				}
			}
		}
		
		else if (ListConcerts != '' && ListConcerts != 'offline'){
			// Efface les nouveautés anciennement consultées
			DataService.InitNew();

			// MAJ COMPTEUR FAV & NEW ONLINE
			// Si FAV ou le NEW existe encore dans la liste, on incremente le Compteur
			// SINON on efface le FAV, NEW du localStorage
			for ( var i = 0, len = localStorage.length; i <= len; ++i ) {
				var LocalValue = localStorage.getItem( localStorage.key( i ) ) ;
				var LocalKey = localStorage.key(i);				
				if ((LocalKey != 'json') && (LocalKey != 'date') && (LocalKey != 'raz') && (LocalKey != 'region') && (LocalKey != 'departement') && (LocalKey != 'version') && (LocalKey != 'RazAuto')){
					if ((LocalValue === "1") || (LocalValue === "10")){
						var found = $filter('filter')(ListConcerts, {id: LocalKey}, true);
						if (found.length) {
						 count = count + 1;
						} 
						else {
							localStorage.removeItem(LocalKey);
						}
					}
					if ((LocalValue === "new") || (LocalValue === "10")){
						var found = $filter('filter')(ListConcerts, {id: LocalKey}, true);
						if (found.length) {
						 countnew = countnew + 1;
						}
						else {
							localStorage.removeItem(LocalKey);
						}	
					}
				}				
			}

			// Mise a jour du badge "Nombre de Favoris"			
			sharedProperties.setCountFav(count);
			
			// Mise a jour du badge "Nombre de Nouveaux events"
			sharedProperties.setCountNew(countnew);
			
			// On affiche la liste des concerts récupérée
			$scope.concerts = ListConcerts;	

			// Date du Jour
			var datenow = Math.round(new Date().getTime()/1000);	

			// Compteur Nombre Total de Concerts => Date du Jour
			var NbConcert = DataService.NbTotal(ListConcerts, datenow);			
			sharedProperties.setCountConcert(NbConcert);

			// Compteur Nombre de Concerts suivant Filtre Departement ou Region
			var NbFiltre = DataService.NbFiltre(ListConcerts);			
			sharedProperties.setCountFiltre(NbFiltre);

			// On Partage la liste des concerts avec les controllers UneController / ListeDateController / ListeGroupeController
			sharedProperties.setConcerts(ListConcerts);

			
			// On Récupère la Version (timestamp) de l'ancienne version de la liste des concerts'
			var version = localStorage.getItem('version');	
			
			// Mise a jour de la liste des concerts en local si version serveur est plus récente que celle en local
			if (ConcertsVersion != version){			
				localStorage.setItem("version", ConcertsVersion);
				var json = localStorage.getItem('json');
				var json = ('json: ', JSON.parse(json));	
				// Si on a un json stocké en local => on recherche les nouveaux events
				if (json != null){
					FindNew(ListConcerts);
				}
				else{
					var add = localStorage.setItem("json", JSON.stringify(ListConcerts));					
				}
			}
					
			// On enleve le splashscreen
			// navigator.splashscreen.hide();	

			// On enleve la roue de Loading
			SDM.fw7.app.hideIndicator();

			// On affiche l'ecran d'accueil										
			sharedProperties.setpreload(1);
									
			// Initialisation de la liste alphabétique des groupes pour le controller ListeGroupes
			DataService.ListeGroupe();

			// Initialisation du Calendrier. Controller : CalendarController
			DataService.InitCalendar();	
		
		}	

		// Recherche nulle 
		$scope.$watch("search", function(query){
			if (Object.keys($scope.filteritem).length === 0){					
				$scope.SearchNull = 1;
			}
			else{
				$scope.SearchNull = 0;
			}
		});	
	};
	
			

	// Recherche des Nouveaux events si un filtre est paramétré
	var FindNew = function(ListConcerts){
		var dep = localStorage.getItem("departement");
		var reg = localStorage.getItem("region");
		var json = localStorage.getItem('json');
		var json = ('json: ', JSON.parse(json));
		angular.forEach(ListConcerts, function(value1, key1) {
			var keepGoing = true;
			angular.forEach(json, function(value2, key2) {
				if(keepGoing) {
					if (value1.id === value2.id){
						 keepGoing = false;
					}
				}			
			 });
			 if (keepGoing === true){
				if(dep != '' && dep != null){
					if (value1.departement === dep){
						var add = localStorage.setItem(value1.id, 'new');
						var CurrentNumber = sharedProperties.getCountNew;
						var AddNumber = CurrentNumber() + 1;
						sharedProperties.setCountNew(AddNumber);
					}
				}
				else if(reg != '' && reg != null){
					if (value1.region === reg){
						var add = localStorage.setItem(value1.id, 'new');
						var CurrentNumber = sharedProperties.getCountNew;
						var AddNumber = CurrentNumber() + 1;
						sharedProperties.setCountNew(AddNumber);
					}
				}
			 }

		});		
		var add = localStorage.setItem("json", JSON.stringify(ListConcerts));		
	};
	
	var formatDate = function(d){
		d = new Date(d * 1000);
		var month = d.getMonth() + 1;
		return   d.getDate() + '/' + month + '/' + d.getFullYear();
	};

}]);