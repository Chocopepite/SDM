SDM.angular.controller('FAQController', ['$scope', '$http', 'InitService', 'DataService', 'sharedProperties','$filter', function ($scope, $http, InitService, DataService, sharedProperties, $filter) {
  'use strict';
	
	$scope.ContactBeastFB = function(){
		function onConfirm(buttonIndex) {
			if (buttonIndex == 1) {
				navigator.app.loadUrl('https://www.facebook.com/BeastCreation', { openExternal:true });
			}
		}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le Facebook Beast Creation.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']			
		);
		// if(confirm("Vous allez être redirigé sur le Facebook Beast Creation.")){
				// window.open('https://www.facebook.com/BeastCreation', '_blank');		 
			// }		
		
	};
	
	$scope.ContactSDMFB = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('https://www.facebook.com/SueurDeMetal/', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le Facebook Sueur De Metal.', 
			 onConfirm,          
			'Redirection',
			['OK', 'Annuler']			
		);
		// if(confirm("Vous allez être redirigé sur le Facebook Sueur De Metal.")){
				// window.open('https://www.facebook.com/SueurDeMetal/', '_blank');		 
			// }
	};

	$scope.ContactSDMInsta = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('https://www.instagram.com/sueurdemetal', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur la page Instagram Sueur De Metal.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']			
		);
		// if(confirm("Vous allez être redirigé sur la page Instagram Sueur De Metal.")){
				// window.open('https://www.instagram.com/sueurdemetal', '_blank');		 
			// }
	};
	
	$scope.SDMAnnonce = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.sueurdemetal.com/ajouterconcert.php', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site Sueur de Metal.',
			 onConfirm,          
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Sueur de Metal.")){
				// window.open('http://www.sueurdemetal.com/ajouterconcert.php', '_blank');		 
			// }
	};
	
	$scope.SDMHome = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.sueurdemetal.com', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site Sueur de Metal.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']			
		);
		// if(confirm("Vous allez être redirigé sur le site Sueur de Metal.")){
				// window.open('http://www.sueurdemetal.com', '_blank');		 
			// }
	};
	
	$scope.Amen = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.amen.fr', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site Amen.', 
			 onConfirm,       
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Sueur de Metal.")){
				// window.open('http://www.amen.fr', '_blank');		 
			// }
	};
	
	$scope.SDMCGU = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.sueurdemetal.com/cgu.php', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site Sueur de Metal.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Sueur de Metal.")){
				// window.open('http://www.sueurdemetal.com/cgu.php', '_blank');		 
			// }
	};
	
	$scope.Framework7 = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.framework7.io/', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site Framework7.',
			 onConfirm,         
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Framework7.")){
				// window.open('http://www.framework7.io/', '_blank');		 
			// }
	};
	
	$scope.Phonegap = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://phonegap.com/', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site Phonegap.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('http://phonegap.com/', '_blank');		 
			// }
	};
	
	$scope.AngularJS = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('https://angularjs.org/', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site AngularJS.', 
			 onConfirm,          
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site AngularJS.")){
				// window.open('https://angularjs.org/', '_blank');		 
			// }
	};	

	$scope.ContactSDMMail = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('contact@sueurdemetal.com', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Souhaitez-vous écrire un mail à Sueur de Metal?', 
			 onConfirm,         
			'Redirection',
			['OK', 'Annuler']			
		);
		// if(confirm("Souhaitez-vous écrire un mail à Sueur de Metal?")){
				// window.open('contact@sueurdemetal.com', '_blank');		 
			// }
	};		
	
	
	$scope.ContactAPPTwitter= function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('https://twitter.com/app_sdm', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			"Vous allez être redirigé sur le Twitter de l'Application.", 
			 onConfirm,        
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le Twitter de l'Application.")){
				// window.open('https://twitter.com/app_sdm', '_blank');		
			// }		
		 
	};
	
}]);