
/* 
 * created by zengping
 * 17/3/21
 */

const http = require('http');
const PORT = 9000;
const App = require('./app');
const server = new App();
http.createServer(server.initServer()).listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});



