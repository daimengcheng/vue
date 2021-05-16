<template>
  <div>
    <h2>Blog列表</h2>
    <ul>
      <Blog v-for="(blog) in blogs" :key="blog.id" :blog='blog'/>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Blog from './blog.vue'
  export default {
    data(){
      return {
        blogs:[
        {id:1,title:'blog1'},
        {id:2,title:'blog2'},
        {id:3,title:'blog3'},
      ]
      }
    },
    components:{ //注册局部组件
      Blog
    }
  }
</script>

<style scoped>

 
</style>
