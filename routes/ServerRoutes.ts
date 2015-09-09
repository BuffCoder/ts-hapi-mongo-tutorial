/// <reference path="../typings/tsd.d.ts" />
import Hapi = require('hapi');
import BaseRoutes = require('./baseRoutes');
import UserRoutes = require('./userRoutes');

export function RegisterRoutes(server: Hapi.Server): void {
	BaseRoutes.RegisterRoutes(server);
	UserRoutes.RegisterRoutes(server);
}