var app = new Vue({
  el: '#app',
  data: {
    maximum: 0,
    products: null,
    cart: [],
    style: {
      label: ['font-weight-bold', 'mr-2'],
      inputWidth: 120,
      sliderStatus: true,
    },
  },
  mounted: function () {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  filters: {
    currencyFormat: function (value) { 
      return 'Rp' + Number.parseFloat(value).toFixed(2);
    }
  },
  computed: {
    sliderState: function () {
      return this.style.sliderStatus ? 'd-flex' : 'd-none';
    },
  },
  methods: {
    before: function (el) {
      el.className = 'd-none';
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          'row d-flex mb-3 align-items-center animate__animated animate__fadeInRight';
      }, delay);
    },
    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          'row d-flex mb-3 align-items-center animate__animated animate__fadeOutRight';
      }, delay);
    },
    addItem: function (product) {
      this.cart.push(product);
    },
  },
});
