// var dataProduct = {
//   imgClass: 'img-fluid',
//   products: [
//     {
//       name: 'Bamboo Thermal ski coat',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, dicta placeat dignissimos autem rerum cupiditate maxime, unde voluptates nemo magni libero eum reiciendis, eligendi suscipit ullam quam minima incidunt!',
//       price: '10',
//       image: 'https://source.unsplash.com/360x200?ski+coat',
//     },
//     {
//       name: 'Mechanical Keyboard',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, dicta placeat dignissimos autem rerum cupiditate maxime, unde voluptates nemo magni libero eum reiciendis, eligendi suscipit ullam quam minima incidunt!',
//       price: '300',
//       image: 'https://source.unsplash.com/360x200?mechanical+Keyboard',
//     },
//     {
//       name: 'Action Figure Anime',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, dicta placeat dignissimos autem rerum cupiditate maxime, unde voluptates nemo magni libero eum reiciendis, eligendi suscipit ullam quam minima incidunt!',
//       price: '600',
//       image: 'https://source.unsplash.com/360x200?Action+Figure',
//     },
//     {
//       name: 'Anime',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, dicta placeat dignissimos autem rerum cupiditate maxime, unde voluptates nemo magni libero eum reiciendis, eligendi suscipit ullam quam minima incidunt!',
//       price: '720',
//       image: 'https://source.unsplash.com/360x200?Anime',
//     },
//     {
//       name: 'Tank',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, dicta placeat dignissimos autem rerum cupiditate maxime, unde voluptates nemo magni libero eum reiciendis, eligendi suscipit ullam quam minima incidunt!',
//       price: '1000',
//       image: 'https://source.unsplash.com/360x200?tank',
//     },
//     {
//       name: 'Orange Juice',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, dicta placeat dignissimos autem rerum cupiditate maxime, unde voluptates nemo magni libero eum reiciendis, eligendi suscipit ullam quam minima incidunt!',
//       price: '300',
//       image: 'https://source.unsplash.com/360x200?Juice',
//     },
//     {
//       name: 'Bakso',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, dicta placeat dignissimos autem rerum cupiditate maxime, unde voluptates nemo magni libero eum reiciendis, eligendi suscipit ullam quam minima incidunt!',
//       price: '230',
//       image: 'https://source.unsplash.com/360x200?meatball',
//     },
//     {
//       name: 'Laptop',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, dicta placeat dignissimos autem rerum cupiditate maxime, unde voluptates nemo magni libero eum reiciendis, eligendi suscipit ullam quam minima incidunt!',
//       price: '900',
//       image: 'https://source.unsplash.com/360x200?laptop',
//     },
//     {
//       name: 'Server',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias, dicta placeat dignissimos autem rerum cupiditate maxime, unde voluptates nemo magni libero eum reiciendis, eligendi suscipit ullam quam minima incidunt!',
//       price: '500',
//       image: 'https://source.unsplash.com/360x200?server',
//     },
//   ],
// };

var app = new Vue({
  el: '#app',
  data: {
    slugText: 'The Quick ##!@$@# konyol 20',
  },
  computed: {
    // now: function () {
    //   var date = new Date();
    //   return (
    //     String(date.getHours()) +
    //     String(date.getMinutes()) +
    //     String(date.getSeconds())
    //   );
    // },
    slugetize: function () {
      return (
        this.slugText
          .toLowerCase()
          .replace(/[^\w] +/g, '')
          .replace(/ +/g, '-') +
        '-' +
        this.now()
      );
    },
  },
  methods: {
    now: function () {
      var date = new Date();
      return (
        String(date.getHours()) +
        String(date.getMinutes()) +
        String(date.getSeconds())
      );
    },
  },
});
