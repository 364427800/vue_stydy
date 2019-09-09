new Vue({
  el: "#app",
  data: {
    age: 30,
    x=0,
    y=0
  },
  methods: {
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updatexy: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
