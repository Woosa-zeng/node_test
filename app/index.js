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
			let body = '';
			let headers = {};
			if(url.match('action')){
				body =JSON.stringify(apiServer(url));
				headers = {
          'Content-Type': 'application/json'
				};
        let fianlHeader = Object.assign(headers,{'X-powered-by': 'Node.js'})
        response.writeHead(200,'ok',fianlHeader)
        response.end(body);
			}else{
				staticServer(url).then((body)=>{
          let fianlHeader = Object.assign(headers,{'X-powered-by': 'Node.js'});
          response.writeHead(200,'ok',fianlHeader)
          response.end(body)
				});
			}


		}
	}
}

module.exports =  App