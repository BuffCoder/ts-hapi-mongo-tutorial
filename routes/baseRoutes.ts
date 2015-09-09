/// <reference path="../typings/tsd.d.ts" />
import Hapi = require('hapi');
import BaseController = require('../controllers/baseControllers');

export function RegisterRoutes(server: Hapi.Server): void {
	let routes: Hapi.IRouteConfiguration[] = [
		{
			method: 'GET',
			path: '/',
			handler: BaseController.getHandler
		}
	];

	server.route(routes);
}