/// <reference path="./typings/tsd.d.ts" />
import Hapi = require('hapi');
import Joi = require('joi');

let server: Hapi.Server = new Hapi.Server();

server.connection({
	port: 3000,
	host: 'localhost',
	labels: ['web']
});

server.ext('onRequest', function(request: Hapi.Request, reply: Hapi.IReply) {
  console.log(request.path);
  reply.continue();
});

server.route([
	{
		method: 'GET',
		path: '/',
		handler: function(request: Hapi.Request, reply: Hapi.IReply) {
			reply('This is the base route: GET');
		}
	},
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
			
		},
		config: {
			validate: {
				query: {
					username: Joi.string()
				}
			}
		}
	},
]);

server.start(function (err: any) {
  if (err) {
    throw err;
  }
  console.log('hapi server started');
});