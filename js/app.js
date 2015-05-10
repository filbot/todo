/**
 * The main Todo app module
 *
 * @type {angular.Module}
 */
var todoApp = angular.module('todoapp', ['ngRoute'])

.config(function ($routeProvider) {
	'use strict'

	var routeConfig = {
		controller: 'TodoCtrl',
		templateUrl: 'index.html',
		resolve: {
			store: function(todoStorage) {
				return todoStorage.then(function (module) {
					module.get();
					return module;
				});
			}
		}
	};

	$routeProvider
		.when('/', routeConfig)
		.when('/:status', routeConfig)
		.otherwise({
			redirectTo: '/'
		});
});