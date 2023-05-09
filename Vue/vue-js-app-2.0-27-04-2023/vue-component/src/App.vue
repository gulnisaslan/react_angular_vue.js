// eslint-disable-next-line vue/valid-template-root
<template>
  <div> <Titles :titleText="text" :text="text2" /> 
  <h3>Baslık.Vue.App</h3>
  <Buttons @clean="cleanInput"/>
  <input type="text" ref="inputText">
  </div>
  
</template>

<script>

import Titles from './components/Title-title.vue'
import Buttons from './components/Button-buttom.vue'
export default{
  name: 'App',
  components:{
    // eslint-disable-next-line vue/no-unused-components
    Titles,
    Buttons
  },
  data() {
    return {
      text : 'Vue 3 e  Giris',
      text2 : "Vue'ye Hosgeldiniz."
    }
  },
  methods:{
    cleanInput(){
      this.$refs.inputText.value=''
    }
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
