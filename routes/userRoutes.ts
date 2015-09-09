/// <reference path="../typings/tsd.d.ts" />
import Hapi = require('hapi');
import Joi = require('joi');

export function RegisterRoutes(server: Hapi.Server): void {
	let routes: Hapi.IRouteConfiguration[] = [
		{
			method: 'GET',
			path: '/users',
			handler: function(request: Hapi.Request, reply: Hapi.IReply) {
				reply('This is the /users route: GET');
			}
		},
		{
			method: 'POST',
			path: '/user',
			handler: function(request: Hapi.Request, reply: Hapi.IReply) {
				reply('You posted: ' + JSON.stringify(request.payload));
			},
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
			handler: function(request: Hapi.Request, reply: Hapi.IReply) {
				reply('You are looking for username: ' + request.params['username']);
			},
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