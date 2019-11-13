function ErrorController($scope)
{
	this.list = [{
		message: 'Oh no, an error ocurred!', 
		type: 'error'
	}, {
		message: 'Make sure you fill in all the fields!', 
		type: 'warning'
	}, {
		message: 'This is invalid', 
		type: 'invalid'
	}];
}

angular
.module('app')
.controller('ErrorController', ErrorController);