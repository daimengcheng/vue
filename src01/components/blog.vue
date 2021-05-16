<template>
  <li>
    <h2>{{blog.title}}</h2>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    // 声明接收属性
    // 接收的所有标签属性都会成为组件对象的属性
    props:['blog']
  }
</script>

<style scoped>

 
</style>
