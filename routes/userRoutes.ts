/// <reference path="../typings/tsd.d.ts" />
import Hapi = require('hapi');
import Joi = require('joi');
import UserController = require('../controllers/userControllers');

export function RegisterRoutes(server: Hapi.Server): void {
	let routes: Hapi.IRouteConfiguration[] = [
		{
			method: 'GET',
			path: '/users',
			handler: UserController.listUsersHandler
		},
		{
			method: 'POST',
			path: '/user',
			handler: UserController.postUsersHandler,
			config: {
				validate: {
					payload: {
						username: Joi.string(),
						age: Joi.number().integer()
					}
				}
			}
		},
		{
			method: 'GET',
			path: '/user/{username}',
			handler: UserController.getUserHandler,
			config: {
				validate: {
					params: {
						username: Joi.string()
					}
				}
			}
		}
	];

	server.route(routes);
}