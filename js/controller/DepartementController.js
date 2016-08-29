SDM.angular.controller('DepartementController', ['$scope', '$http', 'InitService', 'DataService', 'sharedProperties', '$timeout', function ($scope, $http, InitService, DataService, sharedProperties, $timeout) {
  'use strict';

  $scope.selectDep = localStorage.getItem("departement");
  $scope.selectReg = localStorage.getItem("region");
  
  var raz = localStorage.getItem("raz");
  if (raz === null) {
	$scope.ParamNew = '1';
	var ad = localStorage.setItem("raz", '1');
  }
  else{
	$scope.ParamNew = raz;
  }
 
  
  $scope.ResetDep = function(){
	// On désactive le boutton des réglages
	sharedProperties.setbuttonDep(0);
  };
  
  $scope.Nouveautes = [
		{value:'1', nom:'Activé'},
		{value:'0', nom:'Désactivé'}
		];
  
  $scope.departements = [
		{value:'01', nom:'Ain'},
		{value:'02', nom:'Aisne'},
		{value:'03', nom:'Allier'},
		{value:'04', nom:'Alpes de Haute Provence'},
		{value:'05', nom:'Hautes Alpes'},
		{value:'06', nom:'Alpes Maritimes'},
		{value:'07', nom:'Ardèche'},
		{value:'08', nom:'Ardennes'},
		{value:'09', nom:'Ariège'},
		{value:'10', nom:'Aube'},
		{value:'11', nom:'Aude'},
		{value:'12', nom:'Aveyron'},
		{value:'13', nom:'Bouches du Rhône'},
		{value:'14', nom:'Calvados'},
		{value:'15', nom:'Cantal'},
		{value:'16', nom:'Charente'},
		{value:'17', nom:'Charente Maritime'},
		{value:'18', nom:'Cher'},
		{value:'19', nom:'Corrèze'},
		{value:'2A', nom:'Corse du Sud'},
		{value:'2B', nom:'Haute-Corse'},
		{value:'21', nom:"Côte d'Or"},
		{value:'22', nom:"Côtes d'Armor"},
		{value:'23', nom:'Creuse'},
		{value:'24', nom:'Dordogne'},
		{value:'25', nom:'Doubs'},
		{value:'26', nom:'Drôme'},
		{value:'27', nom:'Eure'},
		{value:'28', nom:'Eure et Loir'},
		{value:'29', nom:'Finistère'},
		{value:'30', nom:'Gard'},
		{value:'31', nom:'Haute Garonne'},
		{value:'32', nom:'Gers'},
		{value:'33', nom:'Gironde'},
		{value:'34', nom:'Hérault'},
		{value:'35', nom:'Ille et Vilaine'},
		{value:'36', nom:'Indre'},
		{value:'37', nom:'Indre et Loire'},
		{value:'38', nom:'Isère'},
		{value:'39', nom:'Jura'},
		{value:'40', nom:'Landes'},
		{value:'41', nom:'Loir et Cher'},
		{value:'42', nom:'Loire'},
		{value:'43', nom:'Haute Loire'},
		{value:'44', nom:'Loire Atlantique'},
		{value:'45', nom:'Loiret'},
		{value:'46', nom:'Lot'},
		{value:'47', nom:'Lot et Garonne'},
		{value:'48', nom:'Lozère'},
		{value:'49', nom:'Maine et Loire'},
		{value:'50', nom:'Manche'},
		{value:'51', nom:'Marne'},
		{value:'52', nom:'Haute Marne'},
		{value:'53', nom:'Mayenne'},
		{value:'54', nom:'Meurthe et Moselle'},
		{value:'55', nom:'Meuse'},
		{value:'56', nom:'Morbihan'},
		{value:'57', nom:'Moselle'},
		{value:'58', nom:'Nièvre'},
		{value:'59', nom:'Nord'},
		{value:'60', nom:'Oise'},
		{value:'61', nom:'Orne'},
		{value:'62', nom:'Pas de Calais'},
		{value:'63', nom:'Puy de Dôme'},
		{value:'64', nom:'Pyrénées Atlantiques'},
		{value:'65', nom:'Hautes Pyrénées'},
		{value:'66', nom:'Pyrénées Orientales'},
		{value:'67', nom:'Bas Rhin'},
		{value:'68', nom:'Haut Rhin'},
		{value:'69', nom:'Rhône'},
		{value:'70', nom:'Haute Saône'},
		{value:'71', nom:'Saône et Loire'},
		{value:'72', nom:'Sarthe'},
		{value:'73', nom:'Savoie'},
		{value:'74', nom:'Haute Savoie'},
		{value:'75', nom:'Paris'},
		{value:'76', nom:'Seine Maritime'},
		{value:'77', nom:'Seine et Marne'},
		{value:'78', nom:'Yvelines'},
		{value:'79', nom:'Deux Sèvres'},
		{value:'80', nom:'Somme'},
		{value:'81', nom:'Tarn'},
		{value:'82', nom:'Tarn et Garonne'},
		{value:'83', nom:'Var'},
		{value:'84', nom:'Vaucluse'},
		{value:'85', nom:'Vendée'},
		{value:'86', nom:'Vienne'},
		{value:'87', nom:'Haute Vienne'},
		{value:'88', nom:'Vosges'},
		{value:'89', nom:'Yonne'},
		{value:'90', nom:'Territoire de Belfort'},
		{value:'91', nom:'Essonne'},
		{value:'92', nom:'Hauts de Seine'},
		{value:'93', nom:'Seine Saint Denis'},
		{value:'94', nom:'Val de Marne'},
		{value:'95', nom:"Val d'Oise"}	
  ];
  
   $scope.regions = [
		{value:'44', nom:'Alsace-Lorraine-Champagne-Ardenne'},
		{value:'75', nom:'Aquitaine-Poitou-Charentes-Limousin'},
		{value:'22', nom:'Bourgogne-France Comté'},
		{value:'53', nom:'Bretagne'},
		{value:'24', nom:'Centre'},
		{value:'94', nom:'Corse'},
		{value:'11', nom:'Île-de-France'},
		{value:'76', nom:'Midi-Pyrénées-Languedoc-Roussillon'},
		{value:'32', nom:'Nord-Pas-de-Calais-Picardie'},
		{value:'28', nom:'Normandie'},
		{value:'52', nom:'Pays-de-la-Loire'},
		{value:'93', nom:"Provence-Alpes-Côte-d'Azur"},
		{value:'84', nom:'Rhône-Alpes-Auvergne'}		
  ];
  
	$$('select#theselect').on('change', function(){
		SDM.fw7.app.showIndicator();
		localStorage.removeItem("region");	
		sharedProperties.setLocalisation('');
				
		
		$scope.selectReg = '';
		$$('.smart-select.region select option[value=""]').prop('selected', true);
		$$('.smart-select.region .item-after').text('Aucun');
		
		var selectvalue = this.value;
		if (selectvalue == ''){			
			sharedProperties.setfiltreRegion('0');
			sharedProperties.setInfo('');
		}
		else{
			sharedProperties.setfiltreRegion('1');
			sharedProperties.setInfo('département');
		}
		localStorage.setItem("departement", selectvalue);
		sharedProperties.setLocalisation(selectvalue);
		InitListe();
		
		var myEl = angular.element( document.querySelector( '#calendar-inline-container' ) );
		myEl.empty();
		DataService.ResetTitre();
		DataService.InitCalendar();	
		DataService.Reset();		
		
		$scope.$apply();	
		if (selectvalue == ''){
			sharedProperties.setCountFiltre(null);
		}
		else{
			var concertfiltre = angular.element(document.getElementById('IndexPage')).scope().filteritem;
			var countconcert = Object.keys(concertfiltre);
			if (countconcert.lenght === 'undefined'){
				countconcert.length = 0;
			}
			sharedProperties.setCountFiltre(countconcert.length);
		}		
		$timeout(function() {
				SDM.fw7.app.hideIndicator();
				SDM.fw7.app.mainView.router.loadPage('#index');
		}, 500);
	});	
	
	$$('select#selectRegion').on('change', function(){
		SDM.fw7.app.showIndicator();
		localStorage.removeItem("departement");	
		sharedProperties.setLocalisation('');			
		$scope.selectDep = '';
		$$('.smart-select.departement select option[value=""]').prop('selected', true);
		$$('.smart-select.departement .item-after').text('Aucun');
		sharedProperties.setInfoDep('');		
		var selectvalue = this.value;
		if (selectvalue == ''){
			sharedProperties.setfiltreRegion('0');
			sharedProperties.setInfo('');
		}
		else{
			sharedProperties.setfiltreRegion('1');
			sharedProperties.setInfo('région');
		}
		localStorage.setItem("region", selectvalue);
		sharedProperties.setLocalisation(selectvalue);		
		InitListe();
		var myEl = angular.element( document.querySelector( '#calendar-inline-container' ) );
		myEl.empty();
		DataService.InitCalendar();	
		DataService.ResetTitre();
		DataService.Reset();
		
		$scope.$apply();
		if (selectvalue == ''){
			sharedProperties.setCountFiltre(null);
		}
		else{
			var concertfiltre = angular.element(document.getElementById('IndexPage')).scope().filteritem;
			var countconcert = Object.keys(concertfiltre);
			if (countconcert.lenght === 'undefined'){
				countconcert.length = 0;
			}
			sharedProperties.setCountFiltre(countconcert.length);
				
		}
		$timeout(function() {
				SDM.fw7.app.hideIndicator();
				SDM.fw7.app.mainView.router.loadPage('#index');
		}, 500);
		
	});	
	
	var InitListe  = function () {
		sharedProperties.setTITRE("Concerts");
		// On désactive le bouton Favoris
		sharedProperties.setbuttonFav(0);

		// Activation de la FootBar
		sharedProperties.sethomevar(1);

		sharedProperties.setbuttonNew(0);

		// On désactive le boutton de Recherche
		sharedProperties.setbuttonSearch(0);

		// On désactive le boutton des réglages
		sharedProperties.setbuttonDep(0);

		sharedProperties.setshowSearch('0');	

		// Initialisation de la barre de recherche
		var mySearchbar = SDM.fw7.app.searchbar('.searchbar', {
			searchList: '.list-block-search',
			searchIn: '.item-title'
		});
		mySearchbar.clear();
	};
	
	$$('select#ParamNouveaute').on('change', function(){
		var selectvalue = this.value;
		var add = localStorage.setItem("raz", selectvalue);
		if (selectvalue == '0'){
			var update = localStorage.setItem("RazAuto", selectvalue);
		}
	});
	
	

}]);