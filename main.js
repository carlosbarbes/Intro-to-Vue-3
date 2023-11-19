const app = Vue.createApp({
  data() {
    return {
      cart:0,
      product: 'Socks',
      description: 'Blue warm socks for winter time.',
      image: './assets/images/socks_blue.jpg',
      inventory: 5,
      onSale: false,
      details: ['50% cotton','30% wool','20% polyester'],
      variants: [
        { id: 2234, color: 'green', image:'./assets/images/socks_green.jpg'},
        { id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg'}
      ]
    }
  },
  methods: {
    addToCart(){
      this.cart += 1;
    },
    updateImage(variantImage){
      this.image = variantImage;
    },
    removeFromCart(){
      this.cart -=1;
    }
  }
});

//app.mount('#app');