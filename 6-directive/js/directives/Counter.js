function Counter (){
    return {
        scope: {},
        template:  `
            <div class="counter">
                <h5> Counter: {{counter.count}}</h5>
                <a class="counter__increment" href="" ng-click="counter.increment()">Increment</a>
                <a class="counter__decrement" href="" ng-click="counter.decrement()">Decrement</a>
            </div>
        `,
        controller: 'CounterController as counter'
    }
}

angular
    .module('app')
    .directive('counter', Counter);