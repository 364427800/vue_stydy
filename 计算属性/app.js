new Vue({
    el: "#app",
    data: {
        a: 0,
        b: 0,
        age: 20,
        message: "Hello"
    },
    methods: {
        // adda: function() {
        //     console.log("add to a");
        //     return this.age + this.a;
        // },
        // addb: function() {
        //     console.log("add to b");
        //     return this.age + this.b;
        // }
    },
    computed: {
        adda: function() {
            console.log("add to a");
            return this.age + this.a;
        },
        addb: function() {
            console.log("add to b");
            return this.age + this.b;
        },
        reversedMessage: function() {
            // `this` 指向 vm 实例
            return this.message
                .split("")
                .reverse()
                .join("");
        }
    }
});