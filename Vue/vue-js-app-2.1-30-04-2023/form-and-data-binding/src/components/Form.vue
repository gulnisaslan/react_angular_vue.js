<template>
    <form action="">
        <input type="text" v-model="text">
     <p>{{text}}</p>   
    </form>
</template>
<script>
   export default{
    data(){
        return{
            text:'deneme'
        }
    }
   }
</script>