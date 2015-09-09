/// <reference path="../typings/tsd.d.ts" />
import Hapi = require('hapi');

export function listUsersHandler(request: Hapi.Request, reply: Hapi.IReply) {
	reply('This is the /users route: GET');
}

export function postUsersHandler(request: Hapi.Request, reply: Hapi.IReply) {
	reply('You posted: ' + JSON.stringify(request.payload));
}

export function getUserHandler(request: Hapi.Request, reply: Hapi.IReply) {
	reply('You are looking for username: ' + request.params['username']);
}