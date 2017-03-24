app.controller('homeCtrl',function($scope,$location,$rootScope){
    
    
    $scope.SatrtTest=function(name){
        $rootScope.User=name;
        $location.path('/StartTest');
    }
    
});