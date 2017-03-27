/**
 * Created by Administrator on 2017/3/27 0027.
 * api server
 */

module.exports = (url)=>{
  let apiMap = {
    '/list.action': ['吉它','钢琴','小提琴'],
    '/user.action': ['hello','world','vicky']
  }
  return apiMap[url]
}



