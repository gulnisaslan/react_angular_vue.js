// const app = Vue.createApp({template : '<h2>İlk Vue Uygulamamız'}</h2>);

// app.mount('.app')

const app = Vue.createApp(
        {
           /* template : 
            `
            <ul>
               <li v-for="gun in gunler">{{gun}}</li>
            </ul>
            `*/

            template : 
            `
            <ul>
               <li v-for="person in persons">Çalışan : {{person.isim}} Çalışan : {{person.maas}}</li>
            </ul>
            `
            ,
          
            data(){
                return{
                    //gunler:["Pazartesi","Salı","Çarsamba","Persembe","Cuma","Cumartesi","Pazar"]

                    persons:[
                        {isim :"Varol",maas:4250},
                        {isim :"Gülnisa",maas:25000},
                        {isim :"Kenan",maas:50000},
                        {isim :"Tolga",maas:10000}
                    ]
                }
                
            },
            methods: {
                

                
            },
        }
    );

app.mount('.app')

