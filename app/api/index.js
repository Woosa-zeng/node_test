
/**
 * Created by zengping on 2017/3/27 0027.
 * api server
 */

module.exports = (ctx)=>{
	let {url, method} = ctx.req;
	let {resCtx,reqCtx} = ctx;
	let {res} = ctx;

  	let apiMap = {
    	'/list.action': ['吉它','钢琴','小提琴'],
    	'/user.action': ['hello','world','vicky']
  	};
  	method = method.toLowerCase();

  	return Promise.resolve({
  		then:(resolve,reject)=>{
  			if(url.match('action')){
  				if(method == 'get'){
			  		resCtx.body =JSON.stringify(apiMap[url]) 
			  		
			  	}else{
			  		let {body} = reqCtx;
			  		resCtx.body = JSON.stringify(body);
			  	};
			  	resCtx.headers = Object.assign(resCtx.headers,{
			  		"Content-Type":"application/json"
			  	})
  			}
		  	resolve();
  		
  	}})
}



