<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{list}}</h3>
    <ul>
      <li v-for="(value,index) in list" :key="index">{{value.bookname}}</li>
    </ul>
  </div>
</template>

<script>
import testApi from '@/api/test.js'
export default {
  data(){
    return{
      list:[]
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    this.fetchData()
  },
  methods:{
    fetchData(){
      testApi.getList().then(resp=>{
        // console.log(resp.data)
        this.list=resp.data
      }).catch(err=>{
        console.log(err+'请求失败')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
