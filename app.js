const myChestBox = {
  data: function () {
    return {
      yourCard1: null,
      yourCard2: null,
      yourCard3: null,
      opCard1: null,
      opCard2: null,
    };
  },
  methods: {
    play() {
      this.yourCard1 = Math.floor(Math.random() * 10) + 1;
      this.yourCard2 = Math.floor(Math.random() * 10) + 1;
      this.yourCard3 = null;
    },
    draw() {},
    check() {},
    end() {},
  },
};
const app = Vue.createApp(myChestBox);
app.mount("#mini-app");
