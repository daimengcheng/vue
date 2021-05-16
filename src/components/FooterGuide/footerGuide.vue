<template>
  <div class="footer-guide">
    <span class="footer-item" :class="{on:$route.path==='/msite'}" @click="goto('/msite')">     
      <span>
        <i class="iconfont icon-shouye">
      </i></span>
      <span>首页</span>
    </span>
    <span class="footer-item" :class="{on:$route.path==='/search'}" @click="goto('/search')">
      <span>
        <i class="iconfont icon-sousuo"></i>
      </span>     
      <span>搜索</span>
    </span>
    <span class="footer-item" :class="{on:$route.path==='/order'}" @click="goto('/order')">
      <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="footer-item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>     
      <span>个人</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'footerGuide',
    methods:{
      goto(path){
        // 编程式路由跳转
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.footer-guide
  top-border-1px(#cccccc)
  display flex 
  position fixed  
  height 100px
  width 100%
  left 0
  bottom 0
  .footer-item
    display flex 
    flex-direction column 
    width 25%
    text-align center
    &.on
      color green 
</style>
