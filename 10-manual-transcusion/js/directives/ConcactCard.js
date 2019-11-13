function ConcactCard()
{
    return {
        transclude: true,
        template:  `
            <div>
                <span></span>
                <div></div>
            </div>
        `,
        link: function ($scope, $element, $attrs, $ctrl, $transclude)
        {
            var div = $element.find('div');
            var h4 = $element.find('span');
            var cloned = $transclude();
            //If we print the clone we found that the text we want come in the position 1, and 3 (due to spacing in html)
            h4.append(cloned[1]);
            div.append(cloned[3]);
        }
    }
}

angular
    .module('app')
    .directive('contactCard', ConcactCard);