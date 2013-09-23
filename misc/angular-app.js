angular.module('app', [
  'ngRoute',
  'ngResource',
  'app.tpls',
  'ngResource',
  'github.activity'
])

.config(['$routeProvider', '$locationProvider', '$githubActivityProvider', function ($routeProvider, $locationProvider, $githubActivityProvider) {
  
  $locationProvider.html5Mode(true);
  
  $githubActivityProvider.set({
    params:{
      access_token:'ef39c49946b602db1e249feda19bd3514ec8f08c'
    }
  });
  $routeProvider.when('/angular-github-activity', {
    templateUrl:'views/angular-github-activity.tpl.html',
    controller:'AppCtrl'
  });
  
  $routeProvider.otherwise({redirectTo:'/angular-github-activity'});
}])


.controller('AppCtrl', ['$scope','GithubActivityService', function($scope,GithubActivityService) {
 
  GithubActivityService.events({
    job:'1',
    id:'gigablox'
  });

  $scope.$on('githubActivityEvents1', function(e,d){
    $scope.events = d;
  });
  
  $scope.options = {
    limit:5
  };
  
}]);