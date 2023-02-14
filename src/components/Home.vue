<template>
  <div class="hello">
    <div class="aside">
      <my-aside></my-aside> 
    </div> 
    <div class="message">{{$store.state.count  }}</div>
    <div class="Header">
      <Header/>
      <Delete/>
    </div>
    <div class="Footer"></div>
  </div>
</template>

<script>
import Aside from './Aside.vue'
import Header from './Header.vue'
import Delete from './delete.vue'
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  components:{
    'my-aside':Aside, //改名小写
    Header,
    Delete
  },
  mounted(){
    this.add()
  },  
  methods:{
     add(){
      console.log(this.$store.state.count);
    }
  },
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  width: 100%;
  height: 100%;
  display: flex;
  .aside{
    width: 40%;
    height: 100%;
  }
  .message{
    margin: 100px;
    font-size: 40px;
    color: aqua;
  }
}
</style>
