function ConcactCard()
{
    return {
        transclude: {
            name: 'h1',
            desc: '?p' //Use ? to define as optional
        },
        template:  `
            <div>
                <span ng-transclude="name"></span>
                <div ng-transclude="desc">No description</div>
            </div>
        `
        }
}

angular
    .module('app')
    .directive('contactCard', ConcactCard);