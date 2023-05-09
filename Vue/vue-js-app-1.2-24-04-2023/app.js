// const app = Vue.createApp({template : '<h2>İlk Vue Uygulamamız'}</h2>);

// app.mount('.app')

const app = Vue.createApp(
        {template : 
            `<div v-if =  "showInfo ">Deneme</div>
            <div v-show= "showInfo">Deneme 2</div>
            <button @click ="toggle">
            <span v-if ="!showInfo">Goster</span>
            <span v-else>gizle</span>
            </button>
            `
            ,
          
            data(){
                return{
                   showInfo:true

                }
            },
            methods: {
                toggle(){
                    this.showInfo=!this.showInfo;
                }
                
            },
        }
    );

app.mount('.app')

