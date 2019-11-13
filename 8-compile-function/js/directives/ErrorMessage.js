function ErrorMessage()
{
    return { 
        restrict: 'A',
        //compile doesn't have an scope variable, because it is before the element is bound to scope
        compile: function ($element, $attrs){ 
            //Any manipulation is only done once
            //raw template
            $element.addClass('error');
            return {
                pre: function ($scope, $element, $attrs) {
                    //Access to the elements that are not linked
                },
                post: function ($scope, $element, $attrs) {
                    //Access to the elements that are linked
                    $element.addClass('error--' + $attrs.type); //Called twice
                }
            }
        }
    }
}

angular
    .module('app')
    .directive('errorMessage', ErrorMessage);