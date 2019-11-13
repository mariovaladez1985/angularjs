var counter = {
    bindings: {
        count: "="
    },
    template:  `
        <div class="counter">
            <button class="counter__increment" ng-click="$ctrl.increment()">+</button>
            <input type="text" value="{{$ctrl.count}}"></input>
            <button class="counter__decrement" ng-click="$ctrl.decrement()">-</button>
        </div>
    `,
    controller: "CounterController"
}

angular
    .module('app')
    .component('counter', counter);