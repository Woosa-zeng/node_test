
/* 
 * created by zengping
 * 17/3/21
 */

const http = require('http');
const PORT = 9000;
const App = require('./app');
const server = new App();

const staticServer = require('./app/staic-server');
const apiServer = require('./app/api');
const urlParser = require('./app/url-parser');
const viewServer = require('./app/view-server');

server.use(urlParser);
server.use(apiServer);
server.use(staticServer);
server.use(viewServer);

http.createServer(server.initServer()).listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});



