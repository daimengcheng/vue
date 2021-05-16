import Vue from 'vue'
import App from './App.vue'
import { Button } from 'mint-ui'
import store from './vuex/store.js'
Vue.config.productionTip = false

Vue.component(Button.name, Button)

new Vue({
    render: h => h(App),
    template: '<App/>',
    store //所有的组件对象都有一个指定store属性 ： $store
}).$mount('#app')