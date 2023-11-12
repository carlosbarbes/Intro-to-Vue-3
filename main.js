const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Blue warm socks for winter time.',
      image: './assets/images/socks_blue.jpg',
      inventory: 5,
      onSale: false
    }
  }
});

//app.mount('#app');