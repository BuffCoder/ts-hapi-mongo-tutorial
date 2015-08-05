import hapi = require('hapi');

let server: hapi.Server = new hapi.Server();

server.connection({
	port: 3000,
	host: 'localhost',
	labels: ['web']
});