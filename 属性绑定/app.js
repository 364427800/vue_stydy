new Vue({
    el: "#app",
    data: {
        msg: "Major",
        job: "Web Dev.",
        link: "http://www.baidu.com",
        addr: "<a href='http://www.baidu.com'>v-html测试</a>",
        seen: true
    },
    methods: {
        saygood: function () {
            return "Hello," + this.msg + "!";
        },
        haha: function () {
            if (this.seen == true) {
              this.seen = false;
            } else {
              this.seen == true;
            }
        }
    }
});
