/*
 *    搜索框的失焦和获焦事件：
 *      使用方式：
 *      search("输入框的id","默认文本")
 *      例如：search("textarea","Type Your Message Here...")
 */
window.onload=function(){
    search("tel","在此输入您的手机号码")
    search("yzm","输入验证码")
    function search(id,text) {
        // 获取搜索条的输入框的id
        var ipt = document.getElementById(id);
        // 可以设置搜索框的默认文本
        var text = ipt.value = text;
        // 获得焦点
        ipt.onfocus = function () {
            if (this.value == text) {
                ipt.value = "";
                ipt.style.color = "black";
            }
        }
        // 失去焦点
        ipt.onblur = function () {
            if (this.value == "") {
                ipt.value = text;
                ipt.style.color = "gray";
            }
        }
    }
}