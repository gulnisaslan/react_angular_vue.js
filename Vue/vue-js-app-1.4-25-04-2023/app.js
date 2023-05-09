// const app = Vue.createApp({template : '<h2>İlk Vue Uygulamamız'}</h2>);

// app.mount('.app')

const app = Vue.createApp(
        {
            template : 
            `
              <div v-bind:style ="style"> Deneme</div>
              <div :style ="style"> Deneme</div>
              `
            ,
          
            data(){
                return{
                style:"color:green"
                }
                
            },
            methods: {
                

                
            },
        }
    );

app.mount('.app')

