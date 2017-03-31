/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
const staticServer = require('./staic-server');
const apiServer = require('./api');
const urlParser = require('./url-parser');

class App {
	constructor(){

	}
	initServer(){
		return (request, response) => {
			let { url,method } = request;
	
			//返回字符串，或者buffer
			request.context = {
				body: '',
				query: {},
				method: 'get'
			};
			debugger;
			urlParser(request).then(()=>{
				return apiServer(request)
			}).then(val=>{
				if(!val){
					return staticServer(request)
				}else{
					return val
				}
			}).then(val=>{
				let base = {'X-powered-by': 'Node.js'};
				let body = '';
				if(val instanceof Buffer) {
					body = val;
				}else{
					body =JSON.stringify(val);
					let fianlHeader = Object.assign(base,{
						'Content-Type': 'application/json'
					});
					response.writeHead(200,'ok',fianlHeader)
				}
				response.end(body)
			})
		}
	}
}

module.exports =  App


