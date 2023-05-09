// const app = Vue.createApp({template : '<h2>İlk Vue Uygulamamız'}</h2>);

// app.mount('.app')

const app = Vue.createApp(
        {template : 
            `<h2>Başlık : {{baslik}}</h2>
            <h3>İçerik : {{icerik}}</h3>
            <p>Yorum Sayısı : {{yorumSayisi}}</p>
            <span>{{yazi}}</span>
            <button v-on:click = "ekle()">Yorum Ekle</button>
            
            `,
            data(){
                return{
                    baslik:'Vue',
                    icerik : "Vue Dersleri",
                    yorumSayisi : 0,
                    yazi:'Yazı eklemek için tıklayın.'

                }
            },
            methods: {
                ekle(){
                    console.log("yorum ekleme metodu çalıştı.")
                   this.yorumSayisi++;
                   this.yazi=`${this.yorumSayisi} tane yorum sayısı girildi.`
                }
            },
        }
    );

app.mount('.app')

