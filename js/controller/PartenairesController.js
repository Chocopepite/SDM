SDM.angular.controller('PartenairesController', ['$scope', '$http', 'InitService', 'DataService', 'sharedProperties','$filter', function ($scope, $http, InitService, DataService, sharedProperties, $filter) {
  'use strict';

	
	$scope.METALLIAN = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.metallian.net', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site METALLIAN.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('www.metallian.net', '_blank');		 
			// }
	};
	
	$scope.METALLIANPRODS = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.metallianprod.com', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site METALLIAN PRODS.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('www.metallianprod.com', '_blank');		 
			// }
	};
	
	$scope.GARMONBOZIA = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.facebook.com/Garmonbozia.Inc', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le Facebook GARMONBOZIA INC.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('www.facebook.com/Garmonbozia.Inc', '_blank');		 
			// }
	};
	
	$scope.XTREME = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.xtremefest.fr', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le site XTREME FEST.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('www.xtremefest.fr', '_blank');		 
			// }
	};
	
	$scope.ANTHEMS = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.facebook.com/anthems.ofsteel.9', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le Facebook ANTHEMS OF STEEL.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('www.facebook.com/anthems.ofsteel.9', '_blank');		 
			// }
	};
	
	$scope.BLACK = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.facebook.com/BlackFlagProduction666', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le Facebook BLACK FLAG PROD.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('www.facebook.com/BlackFlagProduction666', '_blank');		 
			// }
	};
	
	$scope.BLUE = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.facebook.com/bluewaveconcert', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le Facebook BLUE WAVE PROD.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('www.facebook.com/bluewaveconcert', '_blank');		 
			// }
	};
	
	$scope.RIFFEATER = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.facebook.com/profile.php?id=100008459522952', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le Facebook RIFFEATER.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('www.facebook.com/profile.php?id=100008459522952', '_blank');		 
			// }
	};
	
	$scope.SHAYTAN = function(){
		function onConfirm(buttonIndex) {
				if (buttonIndex == 1) {
					navigator.app.loadUrl('http://www.facebook.com/ShaytanDeathThrash', { openExternal:true });
				}
			}
		navigator.notification.confirm(
			'Vous allez être redirigé sur le Facebook SHAYTAN.', 
			 onConfirm,           
			'Redirection',
			['OK', 'Annuler']
		);
		// if(confirm("Vous allez être redirigé sur le site Phonegap.")){
				// window.open('www.facebook.com/ShaytanDeathThrash', '_blank');		 
			// }
	};
	
	

}]);