/// <reference path="../typings/tsd.d.ts" />
import Hapi = require('hapi');

export function RegisterRoutes(server: Hapi.Server): void {
	let routes: Hapi.IRouteConfiguration[] = [
		{
			method: 'GET',
			path: '/',
			handler: function(request: Hapi.Request, reply: Hapi.IReply) {
				reply('This is the base route: GET');
			}
		}
	];

	server.route(routes);
}