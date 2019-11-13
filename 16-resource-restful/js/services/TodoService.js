function TodoService ($resource)
{
    /*
        Resource provider only works with the following methods so we have to create update if needed.
        defaults:
        {
            'get': {method: 'GET'}, 
            'save': {method: 'POST'}, 
            'query': {method: 'GET', isArray: true}, 
            'remove': {method: 'DELETE'}, 
            'delete': {method: 'DELETE'}, 
        }

    */

   return $resource('http://jsonplaceholder.typicode.com/todos/:id',
   {
    id: '@id'
   }, {
    update: {
        method: 'PUT'
    }
   });
    
}

angular
    .module('app')
    .service('TodoService', TodoService);