new Vue({
    el:"#app",
    data:{
        msg:"Major",
        job:"Web Dev."
    },
    methods: {
        saygood:function() {
            return "Hello,"+ this.msg +"!";   
        }
    },
})