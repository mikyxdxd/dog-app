angular.module('app.footer', [])
.controller('FooterCtrl', ['$scope', function($scope){
	$scope.url = "social_icons.png"
}])
.directive('footer', [function(){


	require('./footer.scss');
	return {
		restrict: 'AE',
		template: require('./footer.html'),
		link: function (scope, element, attr) {

		}

	}
}]);