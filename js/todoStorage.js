/**
 * Services that persists and retrieves todos from localStorage.
 *
 * It returns promises for all changes to the model.
 * 
 */
 todoApp.factory('localStorage', function($q) {
 	'use strict';

 	var STORAGE_ID = 'todos-angularjs';

 	var store = {
 		
 		todos: [],

 		_getFromLocalStorage: function() {
 			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
 		},

 		_saveToLocalStorage: function(todos) {
 			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
 		},

 		clearCompleted: function() {
 			var deferred = $q.defer();

 			var completeTodos = [];
 			var incompleteTodos = [];
 			store.todos.forEach(function(todo) {
 				if (todo.completed) {
 					completeTodos.push(todo);
 				} else {
 					incompleteTodos.push(todo);
 				}
 			});

 			angular.copy(incompleteTodos, store.todos);

 			store._saveToLocalStorage(store.todos);
 			deferred.resolve(store.todos);

 			return deferred.promise;
 		},

 		get: function() {
 			var deferred = $q.defer();

 			angular.copy(store._getFromLocalStorage(), store.todos);
 			deferred.resolve(store.todos);

 			return deferred.promise;
 		},

 		insert: function(todo) {
 			var deferred = $q.defer();

 			store.todos.push(todo);

 			store._saveToLocalStorage(store.todos);
 			deferred.resolve(store.todos);

 			return deferred.promise;
 		},

 		put: function(todo, index) {
 			var deferred = $q.defer();

 			store.todos[index] = todo;

 			store._saveToLocalStorage(store.todos);
 			deferred.resolve(store.todos);

 			return deferred.promise;
 		}
 	};

 	return store;
 });
