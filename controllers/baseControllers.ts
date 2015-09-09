/// <reference path="../typings/tsd.d.ts" />
import Hapi = require('hapi');

export function getHandler(request: Hapi.Request, reply: Hapi.IReply) {
	reply('This is the base route: GET');
}