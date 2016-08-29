SDM.angular.service('sharedProperties', function () {
      var CountFav = "";
	  var CountNew = "";
	  var CountConcert = "";
	  var CountFiltre = "";
	  var Concerts = "";
	  var preload = "";
	  var filtreFav = "0";
	  var TITRE = "Concerts";
	  var Localisation = "";
	  var display_limit = 0;
	  var filtreNew = "0";
	  var InfoDep = "";
	  var showSearch = "0";
	  var buttonNew = buttonFav = buttonSearch = buttonDep = homevar = 0;
	  var filtreRegion = Info = LocalDepartement = name = "";
	  var ArrayA = ArrayB = ArrayC = ArrayD = ArrayE = ArrayF = ArrayG = ArrayH = ArrayI = ArrayJ = ArrayK = ArrayL = ArrayM = ArrayN = ArrayO = ArrayP = ArrayQ = ArrayR = ArrayS = ArrayT = ArrayU = ArrayV = ArrayW = ArrayX = ArrayY = ArrayZ = Array0 = "";


        return {
            getCountFav:function () {
                return CountFav;
            },
            setCountFav:function (value) {
                CountFav = value;
            },
			getCountNew:function () {
                return CountNew;
            },
            setCountNew:function (value) {
                CountNew = value;
            },
			getCountConcert:function () {
                return CountConcert;
            },
            setCountConcert:function (value) {
                CountConcert = value;
            },
			getCountFiltre:function () {
                return CountFiltre;
            },
            setCountFiltre:function (value) {
                CountFiltre = value;
            },
			getConcerts:function () {
                return Concerts;
            },
            setConcerts:function (value) {
                Concerts = value;
            },
			getpreload:function () {
                return preload;
            },
            setpreload:function (value) {
                preload = value;
            },
			getfiltreFav:function () {
                return filtreFav;
            },
            setfiltreFav:function (value) {
                filtreFav = value;
            },
			getTITRE:function () {
                return TITRE;
            },
            setTITRE:function (value) {
                TITRE = value;
            },
			getLocalisation:function () {
                return Localisation;
            },
            setLocalisation:function (value) {
                Localisation = value;
            },
			getdisplay_limit:function () {
                return display_limit;
            },
            setdisplay_limit:function (value) {
                display_limit = value;
            },
			getfiltreNew:function () {
                return filtreNew;
            },
            setfiltreNew:function (value) {
                filtreNew = value;
            },
			getInfoDep:function () {
                return InfoDep;
            },
            setInfoDep:function (value) {
                InfoDep = value;
            },
			getshowSearch:function () {
                return showSearch;
            },
            setshowSearch:function (value) {
                showSearch = value;
            },
			getbuttonNew:function () {
                return buttonNew;
            },
            setbuttonNew:function (value) {
                buttonNew = value;
            },
			getbuttonFav:function () {
                return buttonFav;
            },
            setbuttonFav:function (value) {
                buttonFav = value;
            },
			getbuttonSearch:function () {
                return buttonSearch;
            },
            setbuttonSearch:function (value) {
                buttonSearch = value;
            },
			getbuttonDep:function () {
                return buttonDep;
            },
            setbuttonDep:function (value) {
                buttonDep = value;
            },
			gethomevar:function () {
                return homevar;
            },
            sethomevar:function (value) {
                homevar = value;
            },
			getfiltreRegion:function () {
                return filtreRegion;
            },
            setfiltreRegion:function (value) {
                filtreRegion = value;
            },
			getInfo:function () {
                return Info;
            },
            setInfo:function (value) {
                Info = value;
            },
			getLocalDepartement:function () {
                return LocalDepartement;
            },
            setLocalDepartement:function (value) {
                LocalDepartement = value;
            },
			getname:function () {
                return name;
            },
            setname:function (value) {
                name = value;
            },
			getArrayA:function () {
                return ArrayA;
            },
            setArrayA:function (value) {
                ArrayA = value;
            },
			getArrayB:function () {
                return ArrayB;
            },
            setArrayB:function (value) {
                ArrayB = value;
            },
			getArrayC:function () {
                return ArrayC;
            },
            setArrayC:function (value) {
                ArrayC = value;
            },
			getArrayD:function () {
                return ArrayD;
            },
            setArrayD:function (value) {
                ArrayD = value;
            },
			getArrayE:function () {
                return ArrayE;
            },
            setArrayE:function (value) {
                ArrayE = value;
            },
			getArrayF:function () {
                return ArrayF;
            },
            setArrayF:function (value) {
                ArrayF = value;
            },
			getArrayG:function () {
                return ArrayG;
            },
            setArrayG:function (value) {
                ArrayG = value;
            },
			getArrayH:function () {
                return ArrayH;
            },
            setArrayH:function (value) {
                ArrayH = value;
            },
			getArrayI:function () {
                return ArrayI;
            },
            setArrayI:function (value) {
                ArrayI = value;
            },
			getArrayJ:function () {
                return ArrayJ;
            },
            setArrayJ:function (value) {
                ArrayJ = value;
            },
			getArrayK:function () {
                return ArrayK;
            },
            setArrayK:function (value) {
                ArrayK = value;
            },
			getArrayL:function () {
                return ArrayL;
            },
            setArrayL:function (value) {
                ArrayL = value;
            },
			getArrayM:function () {
                return ArrayM;
            },
            setArrayM:function (value) {
                ArrayM = value;
            },
			getArrayN:function () {
                return ArrayN;
            },
            setArrayN:function (value) {
                ArrayN = value;
            },
			getArrayO:function () {
                return ArrayO;
            },
            setArrayO:function (value) {
                ArrayO = value;
            },
			getArrayP:function () {
                return ArrayP;
            },
            setArrayP:function (value) {
                ArrayP = value;
            },
			getArrayQ:function () {
                return ArrayQ;
            },
            setArrayQ:function (value) {
                ArrayQ = value;
            },
			getArrayR:function () {
                return ArrayR;
            },
            setArrayR:function (value) {
                ArrayR = value;
            },
			getArrayS:function () {
                return ArrayS;
            },
            setArrayS:function (value) {
                ArrayS = value;
            },
			getArrayT:function () {
                return ArrayT;
            },
            setArrayT:function (value) {
                ArrayT = value;
            },
			getArrayU:function () {
                return ArrayU;
            },
            setArrayU:function (value) {
                ArrayU = value;
            },
			getArrayV:function () {
                return ArrayV;
            },
            setArrayV:function (value) {
                ArrayV = value;
            },
			getArrayW:function () {
                return ArrayW;
            },
            setArrayW:function (value) {
                ArrayW = value;
            },
			getArrayX:function () {
                return ArrayX;
            },
            setArrayX:function (value) {
                ArrayX = value;
            },
			getArrayY:function () {
                return ArrayY;
            },
            setArrayY:function (value) {
                ArrayY = value;
            },
			getArrayZ:function () {
                return ArrayZ;
            },
            setArrayZ:function (value) {
                ArrayZ = value;
            },
			getArray0:function () {
                return Array0;
            },
            setArray0:function (value) {
                Array0 = value;
            }


        };
}); 

SDM.angular.factory('DataService', ['$http', 'sharedProperties', function ($http, sharedProperties) {
  'use strict';

  var pub = {},
    eventListeners = {
      'movieClicked' : []
    };
  
  pub.addEventListener = function (eventName, callback) {
    eventListeners[eventName].push(callback);
  };
  
  pub.movieClicked = function (concert) {
    for (var i=0; i<eventListeners.movieClicked.length; i++) {
      eventListeners.movieClicked[i](concert);
    }
  };
  
  // Fonction qui réinitialise l'état des boutons à 0, ainsi que leur affichage
  pub.Reset = function() {
		var Departement = localStorage.getItem("departement");
		var Region = localStorage.getItem("region");
		if(Region != '' && Region != null){
			sharedProperties.setLocalisation(Region);
			sharedProperties.setfiltreRegion('1');
		}
		else if(Departement != '' && Departement != null){
			sharedProperties.setLocalisation(Departement);
			sharedProperties.setfiltreRegion('1');
		}
		else{
			sharedProperties.setInfoDep('');
			sharedProperties.setfiltreRegion('0');
		}
		var myElement = document.querySelector(".navbar-fixed .page>.searchbar~.page-content, .navbar-fixed>.searchbar~.page-content, .navbar-through .page>.searchbar~.page-content, .navbar-through>.searchbar~.page-content");
		myElement.style.padding = "60px 0";		
  };
  
  
  pub.ResetTab = function() {
		// On désactive le bouton Favoris
		sharedProperties.setbuttonFav(0);

		sharedProperties.setbuttonNew(0);
	
		// On désactive le boutton de Recherche
		sharedProperties.setbuttonSearch(0);	
	
		sharedProperties.setshowSearch('0');
  };
  
  pub.ResetTitre = function(){
		var Departement = localStorage.getItem("departement");
		var Region = localStorage.getItem("region");
		if(Region != '' && Region != null){
			sharedProperties.setInfoDep('dans votre région');
		}
		else if(Departement != '' && Departement != null){
			sharedProperties.setInfoDep("dans le " + Departement);
		}
		else{
			sharedProperties.setInfoDep('');
		}
	}
  
  pub.NbTotal = function(input, search) {
    var expected = search - 86400;
	var i = 0;
    angular.forEach(input, function(value, key) {
      var actual = value.timestamp;
      if (actual > expected) {
        i++;
      }
    });
    return i;
  };
  
  pub.NbFiltre = function(input) {
	var datenow = Math.round(new Date().getTime()/1000);
	var date2 = datenow - 86400;
	var i = 0;
	var LocalDepartement = localStorage.getItem("departement");
	var LocalRegion = localStorage.getItem("region");			
	
	if (LocalDepartement != '' && LocalDepartement != null){
		  angular.forEach(input, function(value, key) {
			  var actual = ('' + value.departement ).toLowerCase();
			  if (actual.indexOf(LocalDepartement) !== -1) {
					if (value.timestamp > date2){
						i++;
					}
				}
			});
	}	
	else if(LocalRegion != '' && LocalRegion != null){
		  angular.forEach(input, function(value, key) {
			  var actual = ('' + value.region ).toLowerCase();
			  if (actual.indexOf(LocalRegion) !== -1) {
					if (value.timestamp > date2){
						i++;
					}
				}
			});
	}	
    return i;
  };
  
  // Initialisation du calendrier 
  // InitCalendar va traiter le résultat de pub.GetDate() pour afficher un evenenemnt au jour indiqué
  pub.InitCalendar = function(destroy){ 
	
	var listdate = pub.GetDate();
	var DateEvent = [];
	angular.forEach(listdate, function(item) {			
		DateEvent.push(item.event);
	});	

	var $$ = Dom7;

	var monthNames = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août' , 'Septembre' , 'Octobre', 'Novembre', 'Decembre'];

	var calendarInline = SDM.fw7.app.calendar({
		container: '#calendar-inline-container',
		dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
		weekHeader: true,
		dateFormat:'dd/MM/yyyy',
		header: false,
		footer: false,	 
		toolbarTemplate: 
			'<div class="toolbar calendar-custom-toolbar">' +
				'<div class="toolbar-inner">' +
					'<div class="left">' +
						'<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
					'</div>' +
					'<div class="center"></div>' +
					'<div class="right">' +
						'<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
					'</div>' +
				'</div>' +
			'</div>',
		onOpen: function (p) {
			$$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
			$$('.calendar-custom-toolbar .left .link').on('click', function () {
				calendarInline.prevMonth();
			});
			$$('.calendar-custom-toolbar .right .link').on('click', function () {
				calendarInline.nextMonth();
			});
		},
		onMonthYearChangeStart: function (p) {
			$$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
		},
		events: eval(DateEvent),
		onDayClick: function(p, dayContainer, year, month, day){
			var fullmonth = pub.GetMonthBis(month);
			var fullday = pub.FormatDay(day);
			var fulldate = fullday + " " + fullmonth + " " + year;
			var add = localStorage.setItem("date", fulldate);					
			SDM.fw7.app.mainView.router.loadPage('#Liste-date');
		}
	   
	});
	
	
  };
  
	pub.FormatDay = function(day){
		var result = day
		if (day < 10){
			result = "0" + result;
		}
		return result;
	};
  
  // TEST FAVORIS
	pub.IsFav = function (url) {
		var fav = localStorage.getItem(url);
		if ((fav === "1") || (fav === "10")){
			return 1;
		};
	};
	
	// TEST NEW
	pub.IsNew = function (url) {
		var isnew = localStorage.getItem(url);
		if ((isnew === "new") || (isnew === "10")){
			return 1;
		};
	};
	
	pub.FuncDate = function(item){
		if(item){
		var words = item.split(' ');
		var day =  words[1];		
		var month = pub.GetMonth(words[2]);
		var year = words[3];
		var result = new Date(year, month, day);
		}
		return result;
	};	
	
	pub.GetMonth = function(month){
	switch(month.toLowerCase()) {
		case 'janvier':
			return '0';
			break;
		case 'février':
			return '1';
			break;
		case 'mars':
			return '2';
			break;
		case 'avril':
			return '3';
			break;
		case 'mai':
			return '4';
			break;
		case 'juin':
			return '5';
			break;
		case 'juillet':
			return '6';
			break;	
		case 'août':
			return '7';
			break;	
		case 'septembre':
			return '8';
			break;	
		case 'octobre':
			return '9';
			break;	
		case 'novembre':
			return '10';
			break;	
		case 'décembre':
			return '11';
			break;	
		};		
	};
	
	pub.GetMonthBis = function(month){
	switch(month.toLowerCase()) {
		case '0':
			return 'janvier';
			break;
		case '1':
			return 'février';
			break;
		case '2':
			return 'mars';
			break;
		case '3':
			return 'avril';
			break;
		case '4':
			return 'mai';
			break;
		case '5':
			return 'juin';
			break;
		case '6':
			return 'juillet';
			break;	
		case '7':
			return 'août';
			break;	
		case '8':
			return 'septembre';
			break;	
		case '9':
			return 'octobre';
			break;	
		case '10':
			return 'novembre';
			break;	
		case '11':
			return 'décembre';
			break;	
		};		
	};
	
	pub.GetDate = function(){
		var DateNow = Math.round(new Date().getTime()/1000);
		DateNow = DateNow - 126400;
		var json = localStorage.getItem('json');
		var json = ('json: ', JSON.parse(json));
		var LocalDepartement = localStorage.getItem("departement");
		var LocalRegion = localStorage.getItem("region");
		var arrayDate = [];
		
		if (LocalDepartement != '' && LocalDepartement != null){
			angular.forEach(json, function(value1, key1) {
				var timestamp = value1.timestamp;				
				if ( DateNow < timestamp ){
					if ( value1.departement === LocalDepartement){
						arrayDate.push({value: value1.date, event: pub.FuncDate(value1.date)});
					}
				}
			});
		}
		
		if (LocalRegion != '' && LocalRegion != null){			
			angular.forEach(json, function(value1, key1) {	
				var timestamp = value1.timestamp;				
				if ( DateNow < timestamp ){
					if ( value1.region === LocalRegion){
						arrayDate.push({value: value1.date, event: pub.FuncDate(value1.date)});
					}
				}
			});
		}
		
		if ((LocalRegion === '' || LocalRegion === null) && (LocalDepartement === '' || LocalDepartement === null)){					
			angular.forEach(json, function(value1, key1) {
				var timestamp = value1.timestamp;				
				if ( DateNow < timestamp ){
					arrayDate.push({value: value1.date, event: pub.FuncDate(value1.date)});
				}
			});		
		}
		var newarrDate = [];
		var unique = {};
		
		angular.forEach(arrayDate, function(item) {
			if (!unique[item.value]) {
				newarrDate.push(item);
				unique[item.value] = item;
			}
		});		
		return newarrDate;	
	};
	
	// Efface les nouveautés anciennement consultées
	pub.InitNew = function () {
		var raz = localStorage.getItem('raz');	
		if (raz === '1'){
			var razauto = localStorage.getItem('RazAuto');	
			if (razauto === '1'){
				pub.EraseNew();
			}
		}
		var add = localStorage.setItem('RazAuto', "0");
	};
	
	// DELETE FAVORIS
	pub.DeleteFav = function (url) {		
		var fav = localStorage.getItem(url);	
		if (fav === "10"){	
			var add = localStorage.setItem(url, "new");
		}
		else{
			var del = localStorage.removeItem(url);
		}
		var CurrentNumber = sharedProperties.getCountFav;
		var MinusNumber = CurrentNumber() - 1;
		sharedProperties.setCountFav(MinusNumber);
	};
	
	// DELETE NEW
	pub.EraseNew = function (url) {		
		for ( var i = 0, len = localStorage.length; i <= len; ++i ) {
				var LocalValue = localStorage.getItem( localStorage.key( i ) ) ;
				var LocalKey = localStorage.key(i);	
				if ((LocalKey != 'json') && (LocalKey != 'date') && (LocalKey != 'raz') && (LocalKey != 'region') && (LocalKey != 'departement') && (LocalKey != 'version') && (LocalKey != 'RazAuto')){
					if (LocalValue === "new"){						
						localStorage.removeItem(LocalKey);
						pub.EraseNew();
					}
					if (LocalValue === "10"){
						var add = localStorage.setItem(LocalKey, "1");
						pub.EraseNew();
					}
				}
			}
	};
	
	// AJOUT FAVORIS
	pub.AddFav = function (url) {
		var isnew = localStorage.getItem(url);
		if (isnew === "new"){
			var add = localStorage.setItem(url, "10");
		}
		else{
			var add = localStorage.setItem(url, "1");
		}
		var CurrentNumber = sharedProperties.getCountFav;
		var AddNumber = CurrentNumber() + 1;
		sharedProperties.setCountFav(AddNumber);
	};
	
	// Initialisation de la liste alphabétique des groupes
	pub.ListeGroupe = function(){
		var json = localStorage.getItem('json');
		var json = ('json: ', JSON.parse(json));
		var arrayGroupes = [];
		var arrayDate = [];
		angular.forEach(json, function(value1, key1) {
			 if(arrayGroupes.indexOf(value1.groupe_1) < 0) {
					arrayGroupes.push({name : value1.groupe_1});
				}
			if (value1.groupe_2){
				 if(arrayGroupes.indexOf(value1.groupe_2) < 0) {
					arrayGroupes.push({name : value1.groupe_2});
				}				
			}
			if (value1.groupe_3){				
				if(arrayGroupes.indexOf(value1.groupe_3) < 0) {					
					arrayGroupes.push({name : value1.groupe_3});
				}
			}
			if (value1.groupe_4){			
				 if(arrayGroupes.indexOf(value1.groupe_4) < 0) {
					arrayGroupes.push({name : value1.groupe_4});
				}
			}
			if (value1.groupe_5){			
				 if(arrayGroupes.indexOf(value1.groupe_5) < 0) {
					arrayGroupes.push({name : value1.groupe_5});
				}
			}
			arrayDate.push({value: value1.date, event: pub.FuncDate(value1.date)});
				
		});
		
		// REMOVE DUPLICATE ENTRY
		var newarrGroupes = [];
		var unique = {};
		angular.forEach(arrayGroupes, function(item) {
			if (!unique[item.name]) {
				newarrGroupes.push(item);
				unique[item.name] = item;
			}
		});
		var ArrayA = [];
		var	ArrayB = [];
		var ArrayC = [];
		var ArrayD = [];
		var ArrayE = [];
		var ArrayF = [];
		var ArrayG = [];
		var ArrayH = [];
		var ArrayI = [];
		var ArrayJ = [];
		var ArrayK = [];
		var ArrayL = [];
		var ArrayM = [];
		var ArrayN = [];
		var ArrayO = [];
		var ArrayP = [];
		var ArrayQ = [];
		var ArrayR = [];
		var ArrayS = [];
		var ArrayT = [];
		var ArrayU = [];
		var ArrayV = [];
		var ArrayW = [];
		var ArrayX = [];
		var ArrayY = [];
		var ArrayZ = [];
		var Array0 = [];
		
		angular.forEach(newarrGroupes, function(item) {
			var letter = item.name.substring(0,1);
			switch (letter.toLowerCase()){
				case 'a':
				ArrayA.push(item);
				break;	
				case 'b':
				ArrayB.push(item);
				break;
				case 'c':
				ArrayC.push(item);
				break;
				case 'd':
				ArrayD.push(item);
				break;
				case 'e':
				ArrayE.push(item);
				break;
				case 'f':
				ArrayF.push(item);
				break;
				case 'g':
				ArrayG.push(item);
				break;
				case 'h':
				ArrayH.push(item);
				break;
				case 'i':
				ArrayI.push(item);
				break;
				case 'j':
				ArrayJ.push(item);
				break;
				case 'k':
				ArrayK.push(item);
				break;
				case 'l':
				ArrayL.push(item);
				break;
				case 'm':
				ArrayM.push(item);
				break;
				case 'n':
				ArrayN.push(item);
				break;
				case 'o':
				ArrayO.push(item);
				break;
				case 'p':
				ArrayP.push(item);
				break;
				case 'q':
				ArrayQ.push(item);
				break;
				case 'r':
				ArrayR.push(item);
				break;
				case 's':
				ArrayS.push(item);
				break;
				case 't':
				ArrayT.push(item);
				break;
				case 'u':
				ArrayU.push(item);
				break;
				case 'v':
				ArrayV.push(item);
				break;
				case 'w':
				ArrayW.push(item);
				break;
				case 'x':
				ArrayX.push(item);
				break;
				case 'y':
				ArrayY.push(item);
				break;
				case 'z':
				ArrayZ.push(item);
				break;
				default:
				Array0.push(item);				
			};
		});	
			
		sharedProperties.setArrayA(ArrayA);		
		sharedProperties.setArrayB(ArrayB);		
		sharedProperties.setArrayC(ArrayC);		
		sharedProperties.setArrayD(ArrayD);		
		sharedProperties.setArrayE(ArrayE);		
		sharedProperties.setArrayF(ArrayF);		
		sharedProperties.setArrayG(ArrayG);		
		sharedProperties.setArrayH(ArrayH);		
		sharedProperties.setArrayI(ArrayI);		
		sharedProperties.setArrayJ(ArrayJ);		
		sharedProperties.setArrayK(ArrayK);		
		sharedProperties.setArrayL(ArrayL);		
		sharedProperties.setArrayM(ArrayM);		
		sharedProperties.setArrayN(ArrayN);		
		sharedProperties.setArrayO(ArrayO);		
		sharedProperties.setArrayP(ArrayP);		
		sharedProperties.setArrayQ(ArrayQ);		
		sharedProperties.setArrayR(ArrayR);		
		sharedProperties.setArrayS(ArrayS);		
		sharedProperties.setArrayT(ArrayT);		
		sharedProperties.setArrayU(ArrayU);		
		sharedProperties.setArrayV(ArrayV);		
		sharedProperties.setArrayW(ArrayW);		
		sharedProperties.setArrayX(ArrayX);
		sharedProperties.setArrayY(ArrayY);		
		sharedProperties.setArrayZ(ArrayZ);		
		sharedProperties.setArray0(Array0);		

		sharedProperties.setname('A');
	};
	
	
  
  return pub;
  
}]);