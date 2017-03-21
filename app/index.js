/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');

class App {
	constructor(){

	}
	initServer(){
		let _package = require('../package');
		return (request, response) => {
			fs.readFile('./public/index.html', 'utf8', (error, data) => {
				response.end(JSON.stringify(_package), () => {
					console.log('data send');
				});
			})
		}
	}
}

module.exports =  App