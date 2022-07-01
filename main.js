const product = 'Socks'
const app =Vue.createApp({
    data(){
        return{
            product: 'shoes'
            ,description: 'sells things'
            ,image:'./assets/images/socks_green.jpg'
            ,onSale: true
            ,inStock: true
            ,inventory:100
            ,details: ['50% cotton','30% wool','20% polyester']
            ,variants:[
                {id:2234, color:'green'},
                {id:2235, color: 'blue'}
            ]

            ,link: 'https://www.camt.cmu.ac.th/'
        }
    }
})