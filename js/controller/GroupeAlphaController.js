SDM.angular.controller('GroupeAlphaController', ['$scope', '$window', '$http', 'InitService', 'sharedProperties','DataService', '$timeout', function ($scope, $window, $http, InitService, sharedProperties, DataService, $timeout) {

	$scope.CountFav = sharedProperties.getCountFav;
	$scope.CountNew = sharedProperties.getCountNew;
	$scope.CountConcert = sharedProperties.getCountConcert;
	$scope.CountFiltre = sharedProperties.getCountFiltre;
	$scope.preload = sharedProperties.getpreload;
	$scope.Info = sharedProperties.getInfo;
	$scope.ArrayA = sharedProperties.getArrayA;
	$scope.ArrayB = sharedProperties.getArrayB;
	$scope.ArrayC = sharedProperties.getArrayC;
	$scope.ArrayD = sharedProperties.getArrayD;
	$scope.ArrayE = sharedProperties.getArrayE;
	$scope.ArrayF = sharedProperties.getArrayF;
	$scope.ArrayG = sharedProperties.getArrayG;
	$scope.ArrayH = sharedProperties.getArrayH;
	$scope.ArrayI = sharedProperties.getArrayI;
	$scope.ArrayJ = sharedProperties.getArrayJ;
	$scope.ArrayK = sharedProperties.getArrayK;
	$scope.ArrayL = sharedProperties.getArrayL;
	$scope.ArrayM = sharedProperties.getArrayM;
	$scope.ArrayN = sharedProperties.getArrayN;
	$scope.ArrayO = sharedProperties.getArrayO;
	$scope.ArrayP = sharedProperties.getArrayP;
	$scope.ArrayQ = sharedProperties.getArrayQ;
	$scope.ArrayR = sharedProperties.getArrayR;
	$scope.ArrayS = sharedProperties.getArrayS;
	$scope.ArrayT = sharedProperties.getArrayT;
	$scope.ArrayU = sharedProperties.getArrayU;
	$scope.ArrayV = sharedProperties.getArrayV;
	$scope.ArrayW = sharedProperties.getArrayW;
	$scope.ArrayX = sharedProperties.getArrayX;
	$scope.ArrayY = sharedProperties.getArrayY;
	$scope.ArrayZ = sharedProperties.getArrayZ;
	$scope.Array0 = sharedProperties.getArray0;

    $scope.ListeGroupe = function(name){
        sharedProperties.setname(name);
        SDM.fw7.app.mainView.router.loadPage('#Liste-event-groupe');
    };	
    
}]);