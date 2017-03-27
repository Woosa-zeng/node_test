/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
const staticServer = require('./staic-server');
const apiServer = require('./api');

class App {
	constructor(){

	}
	initServer(){
		return (request, response) => {
			let { url } = request;
			if(url.match('action')){
				let body = apiServer(url)
				response.writeHead(200,'ok',{
					'X-powered-by': 'Node.js',
					'Content-Type': 'application/json'
				})
				response.end(JSON.stringify(body));
			}else{
				let body = staticServer(url);
				response.end(body);
			}
			
		}
	}
}

module.exports =  App