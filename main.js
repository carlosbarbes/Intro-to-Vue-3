const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Blue warm socks for winter time.',
      image: './assets/images/socks_blue.jpg',
      inventory: 5,
      onSale: false,
      details: ['50% cotton','30% wool','20% polyester'],
      variants: [
        { id: 2234, color: 'green'},
        { id: 2235, color: 'blue'}
      ]
    }
  }
});

//app.mount('#app');