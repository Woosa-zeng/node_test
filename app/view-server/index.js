/**
 * view-server
 * @author  zengping
 */

//映射表
//ejs 动态渲染

const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const urlrewriteMap = require('./urlrewrite');
//路由 routers ==> controller ==> 结果 MVC
module.exports = (ctx)=>{
	let { req,resCtx } = ctx;
	let { url } = req;
	return Promise.resolve({
		then: (resolve,reject)=>{
			if(url.match('action') || url.match(/\./)){
				resolve();
			}else{
				const viewPath = path.resolve(__dirname,'ejs');
				let ejsName = urlrewriteMap[url];
				if(ejsName) {

					let layoutPath = path.resolve(viewPath,'layout.ejs');
					let layoutHtml = fs.readFileSync(layoutPath, 'utf8');
					let render = ejs.compile(layoutHtml,{
						compileDebug: true,
						filename: layoutPath
					});
					let html = render({
						templateName:ejsName,
						hasUser:resCtx.hasUser
					})

					resCtx.headers = Object.assign(resCtx.headers,{
						'Content-Type': 'text/html'
					});
					resCtx.body = html;
					resolve();


				}else{
					//重定向的功能
					resCtx.headers = Object.assign(resCtx.headers,{
						'Location': '/'
					});
					resCtx.statusCode = 302;
					resCtx.statusMessage = 'redirect';
					resCtx.body = '';
					resolve();
				}
			}

			
		}
	})
}
