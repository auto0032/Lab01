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

            ,link: 'https://www.camt.cmu.ac.th/'
        }
    }
})