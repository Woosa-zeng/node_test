/**
 * Created by zp on 2017/7/12.
 */
const mongoose = require('mongoose');
const {blogSchema, categorySchema}= require('./schema');
//第一个参数是collection的名字
const BlogModel = mongoose.model('Blog', blogSchema);
const CategoryModel = mongoose.model('Category',categorySchema);
const $_saveBlog = (blog)=>{
  //去重 upsert
  let condition = {title:blog.title}
  let { id } = blog
  if(id){
    condition = {_id: transObjectId(id)}
  }
  blog.date = new Date().toLocaleString()
  return Blog.findOneAndUpdate(condition,blog,{
    upsert: true,
    new: true
  }).exec()
      .then(db_blog=>{
        return {status:1,data:db_blog}
      })
}
const $_saveCategory = category=>{
  return CategoryModel.findOneAndUpdate({
    name:category.name
  },category).then(_category=>{
    return{
      status:1,
      date:_category
    }
  })
}
const $_getCategoryList=query=>{
  return CategoryModel.find(query).exec().then(categoryList=>{
    return {
      status: 1,
      date: categoryList||[]
    }
  })
}

module.exports = {
  $_saveBlog,
  $_saveCategory,
  $_getCategoryList
}