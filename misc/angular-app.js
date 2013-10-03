angular.module('app', [
  'ngRoute',
  'ngResource',
  'app.tpls',
  'ngResource',
  'github.activity'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  
  $locationProvider.html5Mode(true);

  $routeProvider.when('/angular-github-activity', {
    templateUrl:'views/angular-github-activity.tpl.html',
    controller:'AppCtrl'
  });
  
  $routeProvider.otherwise({redirectTo:'/angular-github-activity'});
}])


.controller('AppCtrl', ['$scope','GithubActivityService', function($scope,GithubActivityService) {

  GithubActivityService.events({
    user:'gigablox',
    params:{
      callback:'JSON_CALLBACK',
      access_token:'ef39c49946b602db1e249feda19bd3514ec8f08c'
    }
  }).search().$promise.then(function(events){
    $scope.events = events.data;
  });

  $scope.options = {
    limit:5
  };
}]);