function MainController($scope)
{
	$scope.name='Mario';
}

angular
.module('app')
.controller('MainController', MainController);