/// <reference path="./typings/tsd.d.ts" />
import Hapi = require('hapi');
import Joi = require('joi');
import ServerRoutes = require('./routes/ServerRoutes');

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

ServerRoutes.RegisterRoutes(server);

server.start(function (err: any) {
  if (err) {
    throw err;
  }
  console.log('hapi server started');
});