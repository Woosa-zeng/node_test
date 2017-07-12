/**
 * Created by zp on 2017/7/12.
 */

let Router = require('./router')

let {$_saveBlog,
    $_saveCategory,
    $_getCategoryList } = require('./mongo')
//获取分类列表
Router.get('/categoryList.action',ctx=>{
  return $_getCategoryList()
})
//增加分类
Router.post('/category.action',ctx=>{
  let category = ctx.reqCtx.body
  return $_saveCategory(category)
})
//添加博客
Router.post('/blog.action',ctx=>{
  let blog = ctx.reqCtx.body
  return $_saveBlog(blog)
})

module.exports = Router;