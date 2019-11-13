function MainController($scope)
{
	this.movies = [{
		title: 'The Shawshank Redemption',
		year: '1994',
		isPopular : false
	}, {
		title: 'Inception',
		year: '2010',
		isPopular : true
	}, {
		title: 'The matrix',
		year: '1999', 
		isPopular : true
	}];
	
}

angular
.module('app')
.controller('MainController', MainController);