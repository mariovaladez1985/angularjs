var tabs = 
{
    transclude: true,
    template: `
        <div class="tabs">
            <ul class="tabs__list">
                <li ng-repeat="tab in $ctrl.list">
                    <a href="" ng-bind="tab.label" ng-click="$ctrl.selectTab($index);">
                    {{tab.label}}
                    </a>
                </li>
            </ul>
            <div class="Tabs__content" ng-transclude></div>
        </div>
    `,
    controller: function () {
        this.list = [];
        this.addTab = function addTab (tab){
            this.list.push(tab);
        };
        
        this.selectTab = function selectTab(index) 
        {
            this.list.forEach(function(tab){
                tab.selected = false;
            });
            this.list[index].selected = true;
            console.log(index);
            console.log(this.list);
        }

        this.$postLink = function ()
        {
            this.selectTab(0);
        };
    }
};

angular
    .module('app')
    .component('tabs', tabs);