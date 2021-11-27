const app=Vue.createApp({
    data(){
        return{
            books:[
                {
                    title:"Book1",
                    auther:"Shine Wonna",
                    date:"12-10-2021"
                },
                {
                    title:"Book1",
                    auther:"Thung Tin",
                    date:"19-9-2021"
                },
                {
                    title:"Book3",
                    auther:"Aung Min",
                    date:"01-10-2021"
                },
            ],
            showBook:true

        }
    },

});
app.mount('#app');