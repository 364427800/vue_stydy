new Vue({
    el: "#app",
    data: {
        msg: "双向绑定",
        name: "",
        age: ""
    },
    methods: {
        msd: function() {
            // this.name=this.$refs.name.value;
            this.name = this.$refs.name.value;
        }
    }
});