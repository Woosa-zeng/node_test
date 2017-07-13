/**
 * Created by zp on 2017/7/12.
 * 嵌套查询
 */
const mongoose = require('mongoose');
const {blogSchema, categorySchema}= require('./schema');
//第一个参数是collection的名字
const BlogModel = mongoose.model('Blog', blogSchema);
const CategoryModel = mongoose.model('Category',categorySchema);
exports.$_saveBlog = (blog)=>{
  //去重 upsert
  let condition = {title:blog.title}
  blog.date = new Date().toLocaleString()
  return BlogModel.findOneAndUpdate(condition,blog,{
    upsert: true,
    new: true
  }).exec()
    .then(blog=>{
      return {
        status:1,data:blog
      }
    })
}
exports.$_saveCategory = category=>{
  return CategoryModel.findOneAndUpdate({
    name:category.name
  },category).then(_category=>{
    return{
      status:1,
      date:_category
    }
  })
}
exports.$_getCategoryList=query=>{
  return CategoryModel.find(query).exec().then(categoryList=>{
    return {
      status: 1,
      date: categoryList||[]
    }
  })
}
//获取博客详情页
exports.$_getBlogDetail = query=>{
  //let {id} = query
  // _id ===> objectId
  //id = mongoose.Types.ObjectId(id)
  let condition = {
    _id:mongoose.Types.ObjectId(query.id)
  }
  return BlogMoudel.findOne({condition}).then(blog=>{
    return {
      status: 1,
      data: '删除博客成功'
    }
  })
}
exports.$_getBlogList = query=>{
  return BlogModel.find(query).exec().then(blogList=>{
    return {
      status: 1,
      data: blogList
    }
  })
}
exports.$_deleteBlog = query=>{
  let condition = {
    _id:mongoose.Types.ObjectId(query.id)
  }
  return BlogModel.remove(condition).exec().then(blog=>{
    return{
      status:1,
      data:blog
    }
  })
}