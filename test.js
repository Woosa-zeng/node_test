/**
 * Created by Administrator on 2017/3/27 0027.
 * 学习Promise
 * typeof Promise == 'function'
 * prototype ===> then/catch
 * 静态方法 ==> all/race/resolve/reject
 * 第一步 new Promise
 *
 */

let p = new Promise((resolve,reject)=>{
  setTimeout(reject,1000,'hello world')
});
console.log(p)
// then可接受两个参数, 第一个参数是resolve的结果
// then可接受两个参数, 第二个参数是reject的结果

//1、将这些回调函数 存入处理队列queue
//2、如果promise已经是fulfilled或者reject的状态了. autoRun
// 数据结构的角度来讲 ==> 链表
var another = p.then(val=>{
  //处理 resolve 的结果
  console.log(`resolve val is ${val}`)
},val=>
  //处理 reject 的结果
  console.log(`reject val is ${val}`)
)
console.log(another instanceof Promise)
