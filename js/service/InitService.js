SDM.angular.factory('InitService', ['$document', 'sharedProperties', function ($document, sharedProperties) {
  'use strict';

  var pub = {},
    eventListeners = {
      'ready' : []
    };
  
  pub.addEventListener = function (eventName, listener) {
    eventListeners[eventName].push(listener);
  };

  SDM.fw7.app.showIndicator();
  

  function onReady() {
   var fw7 = SDM.fw7,
     i;	 
	 
   fw7.views.push(fw7.app.addView('.view-main', fw7.options));	
   
		
    for (i = 0; i < eventListeners.ready.length; i = i + 1) {
      eventListeners.ready[i]();
    }
		
	
	// Gestion Back Button Android
	document.addEventListener("backbutton", function(e){
		var page=fw7.app.getCurrentView().activePage;
		fw7.app.hidePreloader();
		if(page.name=="Home"){
			e.preventDefault();
			
			var onConfirm = function (buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.clearHistory();
					navigator.app.exitApp();
				}
			}
			navigator.notification.confirm(
				"Voulez-vous quitter l'application?",
				 onConfirm,           
				'Quitter?',
				['OK', 'Annuler']
			);
		}
		else if (page.name=="Departement"){
			// On désactive le boutton des réglages
			sharedProperties.setbuttonDep(0);
			fw7.app.mainView.router.back();
		}
		else if (page.name=="index"){
			var Departement = localStorage.getItem("departement");
			var LocalRegion = localStorage.getItem("region");
			
			// On désactive le bouton Favoris
			sharedProperties.setbuttonFav(0);

			sharedProperties.setbuttonNew(0);

			// On désactive le boutton de Recherche
			sharedProperties.setbuttonSearch(0);

			// Désactivation de la FootBar
			sharedProperties.sethomevar(0);


			// Désactivation du filtre Favoris
			sharedProperties.setfiltreFav('0');
	
			// Désactivation du filtre sur les nouveautés
			sharedProperties.setfiltreNew('');

			sharedProperties.setshowSearch('0');	

			var mySearchbar = SDM.fw7.app.searchbar('.searchbar', {
				searchList: '.list-block-search',
				searchIn: '.item-title'
			});
			mySearchbar.clear();
			var myElement = document.querySelector(".navbar-fixed .page>.searchbar~.page-content, .navbar-fixed>.searchbar~.page-content, .navbar-through .page>.searchbar~.page-content, .navbar-through>.searchbar~.page-content");
			myElement.style.padding = "60px 0";			
			if (Departement != '' && Departement != null){
				sharedProperties.setInfoDep("dans le " + Departement);
				sharedProperties.setLocalisation(Departement);
				
			}
			else if (LocalRegion != '' && LocalRegion != null){
				sharedProperties.setInfoDep("dans votre région");
				sharedProperties.setLocalisation(LocalRegion);
			}
			else {
				sharedProperties.setInfoDep('');
				sharedProperties.setdisplay_limit(25);
			}			
			fw7.app.mainView.router.loadPage('#Home');
		}
		else {
			fw7.app.mainView.router.back();
		}
	}, false);
	
			
	
  }
  
  
  // Init
  (function () {
    $document.ready(function () {	

      if (document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1) {
        // Cordova
        document.addEventListener("deviceready", onReady, false);
		
      } else {
        // Web browser
        onReady(); 			
      }
      
    });
  }());

  return pub;
  
}]);