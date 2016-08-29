SDM.angular.controller('TabController', ['$scope', '$http', 'InitService', 'DataService', '$filter', 'sharedProperties','$timeout', function ($scope, $http, InitService, DataService, $filter, sharedProperties, $timeout) {
  'use strict';
	
	// Initialisation de la barre de recherche
	var mySearchbar = SDM.fw7.app.searchbar('.searchbar', {
		searchList: '.list-block-search',
		searchIn: '.item-title'
	});

	// Compteur du nombre de Favoris
  	$scope.CountFav = sharedProperties.getCountFav;

	// Compteur du nombre de nouveauté
	$scope.CountNew = sharedProperties.getCountNew;

	// Etat du boutton New
	$scope.buttonNew = sharedProperties.getbuttonNew;

	// Etat du boutton Favoris
	$scope.buttonFav = sharedProperties.getbuttonFav;

	// Etat du boutton Recherche
	$scope.buttonSearch = sharedProperties.getbuttonSearch;

	// Etat du boutton réglages
	$scope.buttonDep = sharedProperties.getbuttonDep;

	// FootBar
	$scope.homevar = sharedProperties.gethomevar;

	// Click sur le bouton "Favoris" de la FootBar
	$scope.ShowFav = function (){

		// NavFav : etat du bouton "Favoris"
		var NavFav = sharedProperties.getfiltreFav;

		// Si le bouton "Favoris" était activé
		if (NavFav() === "1" || NavFav() === "undefined"){	

			// On désactive le bouton Favoris
			sharedProperties.setbuttonFav(0);

			// Récupération du nombre de concerts à afficher
			var CountFiltre = sharedProperties.getCountFiltre;

			// S'il y a plus de 30 concerts à afficher on active un Loader pendant 350ms
			if (CountFiltre() > 50){
				SDM.fw7.app.showIndicator();	
				$timeout(function() {
					SDM.fw7.app.hideIndicator();
				}, 350);
			}

			$timeout(function() {
				// On désactive le Filtre Favoris
				sharedProperties.setfiltreFav('0');
			}, 200);

			// On change le titre de la page en "Concerts"
			sharedProperties.setTITRE("Concerts");

			// On limite l'affichage à 50 concerts
			sharedProperties.setdisplay_limit(50);

			// Mise a jour du titre de la page en fonction des filtres : IndexPageController + CalendarController
			DataService.ResetTitre();

			// On active le filtre sur la region ou département selectionné
			DataService.Reset();

		}

		// Si le bouton "Favoris" était désactivé
		else{	

			// On désactive le filtre des nouveautés		
			sharedProperties.setfiltreNew('0');	

			// On désactive le bouton des nouveautés
			sharedProperties.setbuttonNew(0);

			// On active le Filtre des Favoris
			sharedProperties.setfiltreFav('1');	

			// On active le bouton Favoris
			sharedProperties.setbuttonFav(1);

			// On enleve le filtre sur la region ou département
			sharedProperties.setLocalisation('');

			// On étend la limite d'affichage à 1000 concerts
			sharedProperties.setdisplay_limit(1000);

			// On change le titre de la page en "Favoris"		
			sharedProperties.setTITRE("Favoris");	

			// On supprime le complément de titre de la page qui concerne la region ou le departement		
			sharedProperties.setInfoDep('');
		}
	};
	
	// Click sur le bouton des réglages
	$scope.ClickDep = function(){

		// Si le boutton des réglages est déjà activé
		if ($scope.buttonDep() === 1){						
			SDM.fw7.app.mainView.router.back();

			// On désactive le boutton des réglages
			sharedProperties.setbuttonDep(0);
			
			// Si le boutton Favoris ou Nouveauté ne sont pas activé
			if (($scope.buttonFav() === 0) && ($scope.buttonNew() === 0)){

				// On change le titre de la page en "Concerts"
				sharedProperties.setTITRE("Concerts");

				// On désactive le complément du titre
				sharedProperties.setInfoDep('');

				// Mise a jour du titre de la page en fonction des filtres : IndexPageController + CalendarController
				DataService.ResetTitre();
			}
		}

		// Si le boutton des réglages n'est pas déjà activé
		else{
			// On désactive le bouton des nouveautés
			sharedProperties.setbuttonNew(0);

			// On désactive le bouton Favoris
			sharedProperties.setbuttonFav(0);

			// On active le boutton des réglages
			sharedProperties.setbuttonDep(1);

			// Timeout de 300ms pour éviter le Lag des désactivations des filtres
			$timeout(function() {
				// On désactive le filtre sur les nouveautés			
				sharedProperties.setfiltreNew('0');	

				// On désactive le filtre sur les Favoris				
				sharedProperties.setfiltreFav('0');			

				// Mise a jour du titre de la page en fonction des filtres : IndexPageController + CalendarController
				DataService.ResetTitre();

				// On active le filtre sur la region ou département selectionné
				DataService.Reset();	
			 }, 300);
		}
	};	
		
	// Bouton Rechercher: Affiche la barre de recherche avec un padding top
	$scope.ShowSearch = function (){
			
		// Recupération de l'état de la barre de recherche : affichée ou non	
		var NavSearch = sharedProperties.getshowSearch;	

		// Récupération du style de la barre des recherche pour forcer le padding
		var myElement = document.querySelector(".navbar-fixed .page>.searchbar~.page-content, .navbar-fixed>.searchbar~.page-content, .navbar-through .page>.searchbar~.page-content, .navbar-through>.searchbar~.page-content");

		// Si la barre de recherche est affichée
		if (NavSearch() === "1" || NavSearch() === "undefined"){
			// On désactive l'affichage de la barre de recherche
			sharedProperties.setshowSearch('0');

			// On décale les concerts de 60px vers le bas
			myElement.style.padding = "60px 0";

			// On désactive le boutton de Recherche
			sharedProperties.setbuttonSearch(0);

			// Initialisation de la barre de recherche
			var mySearchbar = SDM.fw7.app.searchbar('.searchbar', {
				searchList: '.list-block-search',
				searchIn: '.item-title'
			});

			// Affichage 'Spinner Loading''
			SDM.fw7.app.showIndicator();

			// Input de la barre de recherche		
			var inputSearch =  mySearchbar.input['0'].value;				
			
			// Si il y a une recherche
			if (inputSearch != ''){

				// On vide l'Input de la barre de recherche						
				mySearchbar.clear();

				// On désactive le 'Spinner Loading' dans 500ms le temps que les concerts s'affichent
				$timeout(function() {
					SDM.fw7.app.hideIndicator();
				}, 500);
			}
			// S'il n'y a pas de recherche
			else{
				// On désactive le 'Spinner Loading'
				SDM.fw7.app.hideIndicator();
			}
		}

		// Si la barre de recherche n'est pas affichée
		else{	
			// On active le boutton de Recherche
			sharedProperties.setbuttonSearch(1);	

			// On décale les concerts de 100px vers le bas : 40px height barre de recherche
			myElement.style.padding = "100px 0";	
			$timeout(function() {
				// On limite l'affichage à 1000 concerts		
				sharedProperties.setdisplay_limit(1000);
			}, 350);	

			// On active l'affichage de la barre de recherche
			sharedProperties.setshowSearch('1');
		}	
	};
	
	// Bouton Nouveauté: filtre le scope sur les Nouveaux events et retire le filtre sur les Favoris
	$scope.ShowNew = function (){
		
		// Récupération de l'activation des nouveautés
		var NavNew = sharedProperties.getfiltreNew;		
		
		// Si les nouveautés sont déjà affichées
		if (NavNew() === "1" || NavNew() === "undefined"){	
			
			// Désactivation du boutton New
			sharedProperties.setbuttonNew(0);

			// Compte les concerts à afficher
			var CountFiltre = sharedProperties.getCountFiltre;

			// Si plus de 30 concerts à afficher on affiche un Loader
			if (CountFiltre() > 50){
				SDM.fw7.app.showIndicator();	
				$timeout(function() {
					SDM.fw7.app.hideIndicator();
				}, 350);
			}
			
			$timeout(function() {
				// Désactivation du filtre sur les nouveautés
				sharedProperties.setfiltreNew('0');
			}, 200);
			
			// Affiche le titre 'Concerts'
			sharedProperties.setTITRE("Concerts");
			
			// On limite l'affichage à 50 concerts
			sharedProperties.setdisplay_limit(50);

			// Mise a jour du titre de la page en fonction des filtres : IndexPageController + CalendarController
			DataService.ResetTitre();

			// On active le filtre sur la region ou département selectionné
			DataService.Reset();
		}

		// Si les nouveautés ne sont pas affichées
		else{			
			// Désactivation du filtre sur les Favoris
			sharedProperties.setfiltreFav('0');

			// On désactive le bouton Favoris
			sharedProperties.setbuttonFav(0);

			// Activation du boutton New
			sharedProperties.setbuttonNew(1);

			// Désactivation du filtre sur département ou région
			sharedProperties.setLocalisation('');
			
			// On limite l'affichage à 1000 concerts
			sharedProperties.setdisplay_limit(1000);
			
			// On active le filtre sur les nouveautés
			sharedProperties.setfiltreNew('1');
		
			// Affichage du titre "Nouveaux concerts"
			sharedProperties.setTITRE("Nouveaux concerts");

			// Désactivation du titre complémentaire	
			sharedProperties.setInfoDep('');	
		}

		// On enregistre la prise de connaissance de l'utilisateur des nouveaux concerts
		// Les nouveaux concerts seront supprimés à la prochaine ouverture de l'application
		// voir DataService.pub.InitNew()
		var add = localStorage.setItem('RazAuto', "1");		
	};
	

}]);