
/**
 * Created by zengping on 2017/3/27 0027.
 * api server
 */

module.exports = (request)=>{
	let { url,method,context } = request;
  	let apiMap = {
    	'/list.action': ['吉它','钢琴','小提琴'],
    	'/user.action': ['hello','world','vicky']
  	};
  	method = method.toLowerCase();
  	// 没有过滤method
  	if(method == 'get'){
  		return Promise.resolve(apiMap[url])
  	}else{
  		let {body} = context;
  		// 处理post B post ==socket== S 		
  		return Promise.resolve(body)
  	}
  
}



