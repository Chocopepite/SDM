// Init angular
var SDM = {};
var $$ = Dom7;

SDM.config = {
};

SDM.angular = angular.module('SDM', [])
.filter('custom', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return input;
    var expected = ('' + search).toLowerCase();
    var result = {};
    angular.forEach(input, function(value, key) {
	  if (value.IsFestivalConcert == '1'){
		var NomFest = 'festival ' +value.NomFestivalConcert;
	  }
	  else{
	    var NomFest = '';
	  }
	  
      var actual = ('' + value.groupe_1 + value.groupe_2 + value.groupe_3 + value.groupe_4 + value.groupe_5 + value.ville + NomFest).toLowerCase();
      if (actual.indexOf(expected) !== -1) {
        result[key] = value;	
      }
    });
    return result;
  }
})
.filter('IsPartenaire', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return input;
    var expected = ('' + search).toLowerCase();
    var result = {};
    angular.forEach(input, function(value, key) {
      var actual = value.IsPartenaire;
      if (actual.indexOf(expected) !== -1) {
        result[key] = value;	
      }
    });
    return result;
  }
})
.filter('exact', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return input;
    var expected = ('' + search).toLowerCase();
    var result = {};
    angular.forEach(input, function(value, key) {
      var actual = ('' + value.groupe_1).toLowerCase();
      var actual2 = ('' + value.groupe_2).toLowerCase();
      var actual3 = ('' + value.groupe_3).toLowerCase();
      var actual4 = ('' + value.groupe_4).toLowerCase();
      var actual5 = ('' + value.groupe_5).toLowerCase();
	  if (actual === expected || actual2 === expected || actual3 === expected || actual4 === expected || actual5 === expected){     
        result[key] = value;	
      }
    });
    return result;
  }
})
.filter('Filtre', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return input;
    var expected = ('' + search).toLowerCase();
    var result = {};
	var LocalDepartement = localStorage.getItem("departement");
	var LocalRegion = localStorage.getItem("region");	
		
	
	if (LocalDepartement != '' && LocalDepartement != null){
		  angular.forEach(input, function(value, key) {
			  var actual = ('' + value.departement ).toLowerCase();
			  if (actual.indexOf(expected) !== -1) {
				result[key] = value;
				}
			});
	}
	
	else if(LocalRegion != '' && LocalRegion != null){
		  angular.forEach(input, function(value, key) {
			  var actual = ('' + value.region ).toLowerCase();
			  if (actual.indexOf(expected) !== -1) {
			  result[key] = value;
				}
			});
	}	
    
    return result;
  }
})
.filter('customTime', function() {
  return function(input, search) {	
    if (!input) return '';
    if (!search) return '';
    var expected = search - 86400;
    var result = {};
    angular.forEach(input, function(value, key) {
      var actual = value.timestamp;
      if (actual > expected) {
        result[key] = value;	
      }
    });
    return result;
  }
})
// .filter('customRegion', function() {
  // return function(input, search) {
    // if (!input) return input;
    // if (!search) return input;
    // var expected = ('' + search).toLowerCase();
    // var result = {};
	// var i = 0;
	// var nbreg = 0;
	// var initial = 0;
	// var plage = 0;
	// var position = 0;
	// var max = 6;
	// var limite = 50;
    // angular.forEach(input, function(value, key) {
      // var actual = ('' + value.region ).toLowerCase();
      // if (actual.indexOf(expected) !== -1) {
        // result[key] = value;
		// nbreg++;
		// position = i - initial;	
      // }
	  // plage = position - initial;
	  // if ((limite < plage) && (max < 6)){
		// angular.element(document.getElementById('IndexPage')).scope().display_limit = angular.element(document.getElementById('IndexPage')).scope().display_limit + position;
		// max++;		
	  // }
	  // i++;
	  // initial = position;	
    // });
    // return result;
  // }
// })
.filter('customfav', function() {
  return function(input, filtreFav) {
    if (!input) return input;     
    var result = {};
	 if  (filtreFav != 1){		
		angular.forEach(input, function(value, key) {
		 result[key] = value;
		});
	 }
	 if (filtreFav === '1'){
		for ( var i = 0, len = localStorage.length; i < len; ++i ) {
			var LocalValue = localStorage.getItem( localStorage.key( i ) ) ;
			var LocalKey = localStorage.key(i);
			if ((LocalValue === "1") || (LocalValue === "10")){
				angular.forEach(input, function(value, key) {
					if ( value.id === LocalKey){
						result[key] = value;
					}
				});
			}
		}	
	 }
    return result;
  }
})
.filter('customnew', function() {
  return function(input, filtrenew) {
    if (!input) return input;     
    var result = {};
	 if  (filtrenew != 1){		
		angular.forEach(input, function(value, key) {
		 result[key] = value;
		});
	 }
	 if (filtrenew === '1'){
		for ( var i = 0, len = localStorage.length; i < len; ++i ) {
			var LocalValue = localStorage.getItem( localStorage.key( i ) ) ;
			var LocalKey = localStorage.key(i);
			if (LocalValue === "new" || LocalValue === '10'){
				angular.forEach(input, function(value, key) {
					if ( value.id === LocalKey){
						result[key] = value;
					}
				});
			}
		}	
	 }
    return result;
  }
})
.filter('customDate', function() {
   return function(input, search) { 
    if (!input) return input;
    if (!search) return input;
    var expected = ('' + search).toLowerCase();
    var result = {};
    angular.forEach(input, function(value, key) {
      var actual = ('' + value.date ).toLowerCase();
      if (actual.indexOf(expected) !== -1) {
        result[key] = value;	
      }
    });
    return result;
  }
});

SDM.angular.directive('scrollPosition',  function (sharedProperties, $window) {
  return function (scope, element, attrs) {      
    var w = element[0];
    angular.element(w).bind('scroll', function () {
      scope.$apply(function () {                
        if (w.scrollTop + w.offsetHeight >= w.scrollHeight) {
         var actual = sharedProperties.getdisplay_limit;
         var next = actual() + 50;
        sharedProperties.setdisplay_limit(next);
        }
      });
    });
  }
});

SDM.fw7 = {
  app : new Framework7({   
	material: true,	
	indexedlist: true,
  }),
  options : {
    domCache: true,
  },
  views : []
};

