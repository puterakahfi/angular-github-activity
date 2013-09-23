angular.module('github.activity', ['github.activity.tpls'])

.provider("$githubActivity", function(){
    var options = {};
    this.set= function(value){
        options = value;
    };

    this.$get = ["$resource","$http","$q",function($resource,$http,$q){
        function GithubActivity(opts) {
            this.options = angular.extend({}, opts);
        }
        GithubActivity.prototype.users = function(opts){
            var options = angular.extend({}, this.options, opts);
            return $resource('https://api.github.com/users/:id',{id:opts.id},{
                'query':{
                    method:'JSONP',
                    isArray: false,
                    params:angular.extend({},{callback:'JSON_CALLBACK'},options.params)
                }
            });
        };
        GithubActivity.prototype.events = function(opts){
            var options = angular.extend({}, this.options, opts);
            return $resource('https://api.github.com/users/:id/events',{id:opts.id},{
                'query':{
                    method:'JSONP',
                    isArray: false,
                    params:angular.extend({},{callback:'JSON_CALLBACK'},options.params)
                }
            });
        };
        return {
            githubActivity: function(opts){
                return new GithubActivity(opts);
            }
        };
    }];
})

.factory('GithubActivityService', function($q,$githubActivity,$rootScope) {

    var _githubActivity = {};
    var githubActivityProvider = $githubActivity.githubActivity();

    _githubActivity.users = function(opts){
        githubActivityProvider.users(opts).query().$promise.then(
        function(users){
            $rootScope.$broadcast('githubActivityUsers'+opts.job, users.data);
        });
    }

    _githubActivity.events = function(opts){
        
        githubActivityProvider.events(opts).query().$promise.then(
        function(events){
            $rootScope.$broadcast('githubActivityEvents'+opts.job, events.data);
        });
    }
    
    return _githubActivity;
  })

.directive('githubActivity', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          events: '=',
          options: '=',
        },
        templateUrl: 'views/github.activity.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityPushEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.pushEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityIssuesEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.issuesEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityIssuesCommentEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.issuesCommentEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityForkEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.forkEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityPullRequestEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.pullRequestEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityWatchEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.watchEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityFollowEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.followEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityCommitCommentEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.commitCommentEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityCreateEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.createEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityReleaseEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.releaseEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityForkApplyEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.forkApplyEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityGistEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.gistEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityGollumEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.gollumEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityMemberEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.memberEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityPublicEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.publicEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityPullRequestReviewCommentEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.pullRequestReviewCommentEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityTeamAddEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.teamAddEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
})

.directive('githubActivityDeleteEvent', function() {
    return {
        restrict: 'E',
        replace: true,
        scope:{
          event: '=',
        },
        templateUrl: 'views/github.activity.deleteEvent.tpl.html',
        link: function(scope, controller) {
        }
    };
});


/*  -14/18 Complete
    -Need to set up public repo.
    -Need to work in template caching.
    
    CommitCommentEvent              Complete
    CreateEvent                     Complete
    DeleteEvent                     Complete
    ReleaseEvent                    Complete        
    FollowEvent                     Complete
    ForkEvent                       Complete
    ForkApplyEvent                  Need        --- Made directive and template. Not working on github?
    GistEvent                       Need        --- Made directive and template. Not working on github?
    GollumEvent                     Complete
    IssueCommentEvent               Complete
    IssuesEvent                     Complete
    MemberEvent                     Complete
    PublicEvent                     Complete
    PullRequestEvent                Complete
    PullRequestReviewCommentEvent   Need        --- Made directive and template. Not working on github?
    PushEvent                       Complete
    TeamAddEvent                    Need        --- Made directive and template. Not working on github?
    WatchEvent                      Complete
*/