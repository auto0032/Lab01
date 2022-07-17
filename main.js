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
                {id:2234, color:'green',image:'./assets/image/socks_green.jpg' },
                {id:2235, color:'blue',image:'./assets/image/socks_blue.jpg'}
            ]
            ,size:['S','M','L']
            ,cart: 0

            ,link: 'https://www.camt.cmu.ac.th/'
        }
        
        },
        methods: {
            addToCart(){
                this.cart += 1
            },
            updateImage(variantImage){
                this.image=variantImage
            },
            changeStatus(){
                if (this.inventory > 0){
                    this.inventory -= 100
                } else{
                    this.inventory += 100
                }
            }
    }
})