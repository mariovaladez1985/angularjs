function Tabs()
{
    return {
        transclude: true,
        template: `
            <div class="tabs">
                <ul class="tabs__list">
                    <li ng-repeat="tab in tabs.list">
                        <a href="" ng-click="tabs.selectTab($index);">
                            {{tab.label}}
                        </a>
                    </li>
                </ul>
                <div class="Tabs__content" ng-transclude></div>
            </div>
        `,
        controller: function () {
            var control = this;
            control.list = [];
            control.addTab = function (tab){
                if(!control.list.length)
                {
                    tab.selected = true;
                }
                control.list.push(tab);
            };
           
            control.selectTab = function (index) 
            {
                control.list.forEach(function(tab){
                    tab.selected = false;
                });
                control.list[index].selected = true;
            }
        },
        controllerAs: 'tabs'
    }
}

angular
    .module('app')
    .directive('tabs', Tabs);