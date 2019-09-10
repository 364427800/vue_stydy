new Vue({
    el: "#app",
    data: {
        msg: "键盘事件"
    },
    mothods: {
        logname: function() {
            console.log("正在输入姓名");
        },
        logage: function() {
            console.log("正在输入年龄");
        }
    }
});