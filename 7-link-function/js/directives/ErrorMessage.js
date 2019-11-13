function ErrorMessage()
{
    return { 
        restrict: 'A',
        link: function ($scope, $element, $attrs){
            $element.addClass('error');
            $element.addClass('error--' + $attrs.type); //Called twice
        }
    }
}

angular
    .module('app')
    .directive('errorMessage', ErrorMessage);