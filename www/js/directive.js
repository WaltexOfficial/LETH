angular.module('leth') 
.directive('dapplethTemplate', function($compile, $http, StoreEndpoint){
    return {
      restrict: "E",
      scope: true,
      link: function(scope,element,attrs){
        $http.get(StoreEndpoint.url + attrs.page) 
        .success(function(data){
          var customTemplate =  data;          
          element.append($compile(customTemplate)(scope));
        })
      }
    };
  })
  .directive('dapplethHeader', function($compile, $http){
    return {
      restrict: "E",
      scope: false,
      templateUrl: "templates/components/header.html",
      link: function(scope,element,attrs){
          //console.log("header component " );
      }
    };
  })
  .directive('dapplethNavbar', function($compile, $http){
    return {
      restrict: "E",
      scope: false,
      transclude: true,
      templateUrl: "templates/components/navbar.html",
      link: function(scope,element,attrs){
          //console.log("navbar component " );
      }
    };
  })
  .directive('dapplethContent', function($compile, $http){
    return {
      restrict: "E",
      scope: false,
      transclude: true,
      templateUrl: "templates/components/content.html",
      link: function(scope,element,attrs){
          //console.log("content component " );
      }
    };
  })
  .directive('dapplethChat', function($compile, $http, StoreEndpoint){
    return {
      restrict: "E",
      scope: false,
      templateUrl: "templates/components/chat.html",
      link: function(scope,element,attrs){
          scope.CHAT_HEIGHT = attrs.height;
          //console.log("chat component " + attrs.height);
      }
    };
  })
  .directive('dapplethFooter', function($compile, $http){
    return {
      restrict: "E",
      scope: false,
      transclude: true,
      templateUrl: "templates/components/footer.html",
      link: function(scope,element,attrs){
          //console.log("footer component " );
      }
    };
  })
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function($scope, $el) {
        $rootScope.hideTabs = 'tabs-item-hide';
        $scope.$on('$destroy', function() {
            $rootScope.hideTabs = '';
        });
        $scope.$on('$ionicView.beforeLeave', function() {
            $rootScope.hideTabs = '';
        });
        $scope.$on('$ionicView.beforeEnter', function() {
            $rootScope.hideTabs = 'tabs-item-hide';
        });
      }
    };
  })