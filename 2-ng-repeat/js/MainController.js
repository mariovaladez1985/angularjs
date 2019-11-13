function MainController($scope)
{
	this.movies = [{
		title: 'The Shawshank Redemption',
		year: '1994'
	}, {
		title: 'Inception',
		year: '2010'
	}, {
		title: 'The matrix',
		year: '1999'
	}];
	
}

angular
.module('app')
.controller('MainController', MainController);