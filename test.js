/**
 * Created by Administrator on 2017/3/27 0027.
 * 学习Promise
 * typeof Promise == 'function'
 * prototype ===> then/catch
 * 静态方法 ==> all/race/resolve/reject
 * 第一步 new Promise
 *
 */

const assert = require('assert');

// let p = new Promise((resolve,reject)=>{
//   setTimeout(reject,1000,'hello world')
// });
// console.log(p)
// then可接受两个参数, 第一个参数是resolve的结果
// then可接受两个参数, 第二个参数是reject的结果

//1、将这些回调函数 存入处理队列queue
//2、如果promise已经是fulfilled或者reject的状态了. autoRun
// 数据结构的角度来讲 ==> 链表
// var another = p.then(val=>{
//   //处理 resolve 的结果
//   console.log(`resolve val is ${val}`)
// },val=>
//   //处理 reject 的结果
//   console.log(`reject val is ${val}`)
// )
// console.log(another instanceof Promise)

const p = Promise.resolve(1);
const p1 = p.then(val=>{
	console.log(val); // 1
	return val+1
});// resolve 2

const p2 = p1.then(val=>{
	console.log(val);
	assert.equal(val,2)
})
//后续的执行完全依赖于前一步

