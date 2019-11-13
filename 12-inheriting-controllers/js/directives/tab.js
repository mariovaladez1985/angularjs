function Tab()
{
    return {
        scope: {},
        transclude: true,
        template:  `
            <div ng-if="tab.selected">
                <div ng-transclude></div>
            </div>
        `,
        require: '?^^tabs', //Is going to look for it only in the father
        link: function ($scope, $element, $attrs, $ctrl)
        {
            if($ctrl == null ) return;
            $scope.tab = {
                label: $attrs.label,
                selected: false
            };
            $ctrl.addTab($scope.tab);
        }
    }
}

angular
    .module('app')
    .directive('tab', Tab);