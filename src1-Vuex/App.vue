<template>
  <div>
    <p>click:{{count}}times,{{count}} is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
/**
 *store对象： 
 *  1.state
 *  2.getter
 *  3.dispatch(actionName,data)
 *  4.commit(mutationName,data)
 */
  export default{
  
    computed:{
      // count(){
      //   return this.$store.state.count
      // },
      // evenOrOdd(){
      //   return this.$store.state.evenOrOdd
      // }
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
    },
    methods:{
      // increment(){
      //   this.$store.commit('INCREMENT')
      // },
      // decrement(){
      //   this.$store.commit('DECREMENT')
      // },
      // incrementIfOdd(){
      //   this.$store.dispatch('incrementIfOdd')
      // },
      // incrementAsync(){
      //  this.$store.dispatch('incrementAsync')
      // },
      ...mapActions(['incrementIfOdd','incrementAsync']),
      ...mapMutations({
        increment:'INCREMENT',
        decrement:'DECREMENT'
      })
    }
  }
</script>

<style>

</style>
