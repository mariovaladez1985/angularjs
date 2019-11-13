function TodoController (TodoService)
{
    var ctrl = this;
    ctrl.title = '';
    ctrl.list = TodoService.query();

    ctrl.addTodo = function()
    {
        var newTodo = new TodoService();
        newTodo.title = ctrl.title;
        newTodo.completed = false;
        newTodo.userId = 999;
        newTodo.$save( function () {
           ctrl.list.unshift(newTodo);
        });
    };

    ctrl.deleteTodo = function(todo)
    {
        todo.$delete(function () {
            ctrl.list = ctrl.list.filter( function(item){
                return item.id !== ctrl.id;
            });
        });
    };

    ctrl.updateTodo = function(todo)
    {
        todo.$update(function () {
            //Feedback for update complete
            console.log('Updated!', todo);
        });
    };

}

angular
    .module('app')
    .controller('TodoController', TodoController);