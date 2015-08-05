import hapi = require('hapi');

let server: hapi.Server = new hapi.Server();

server.connection({
	port: 3000,
	host: 'localhost',
	labels: ['web']
});

server.ext('onRequest', function(request: hapi.Request, reply: hapi.IReply) {
  console.log(request.path);
  reply.continue();
});

server.route([
	{
		method: 'GET',
		path: '/',
		handler: function(request: hapi.Request, reply: hapi.IReply) {
			reply('This is the base route: GET');
		}
	}
]);