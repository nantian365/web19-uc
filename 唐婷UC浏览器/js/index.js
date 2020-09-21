var oli = document.querySelectorAll(".nav>ul>li");
var index = document.getElementsByClassName("index")[0]
var domland = document.getElementsByClassName("domland")[0]
oli[0].onclick = function () {
    index.style.display = "block";
    this.className = "navLi";
    domland.style.display = "none";
    oli[1].className = ""
}
oli[1].onclick = function () {
    index.style.display = "none";
    oli[0].className = ""
    domland.style.display = "block";
    this.className = "navLi"
}
var dom_header = document.querySelectorAll(".dom_header>a");
dom_header[0].onclick = function () {
    index.style.display = "block";
    oli[0].className = "navLi";
    domland.style.display = "none";
    oli[1].className = ""
}

var tel = document.getElementsByClassName("tel")[0];
tel.onfocus = function () {
    this.value = "";
    this.style.color = "#000";
    this.style.border = "1px solid #cacaca"
}
tel.onblur = function () {
    if (!/^1[0-9]/g.test(this.value)) {
        this.style.border = "1px solid red";
        this.style.color = "red";
        this.value = "手机号格式有误"
    }
}
var yan = document.getElementsByClassName("yan")[0];
var show = document.getElementsByClassName("show")[0];
var shua = document.querySelector(".yanzheng a");
shua.onclick = function () {
    show.innerText = erwei()
}
show.innerText = erwei()

yan.onfocus = function () {
    this.value = "";
    this.style.color = "#000";
    this.style.border = "1px solid #cacaca"
}

yan.onblur = function () {
    if (this.value != show.innerText) {
        this.style.border = "1px solid red";
        this.style.color = "red";
        this.value = "验证码有误"
    }
}

var fasong = document.getElementsByClassName("fasong")[0];
fasong.onclick = function () {
    if (!/^1[0-9]/g.test(tel.value)) {
        tel.style.border = "1px solid red";
        tel.style.color = "red";
        tel.value = "手机号格式有误";
        return false
    }
    if (yan.value != show.innerText) {
        yan.style.border = "1px solid red";
        yan.style.color = "red";
        yan.value = "验证码有误";
        return false
    }
    alert("发送成功，请您及时查看！")
}
function erwei() {
    var code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g']

    function yzm() {
        return Math.round(Math.random() * 16);
    }
    var arr = []
    for (var i = 0; i < 4; i++) {
        arr.push(code[yzm()]);
    }
    return arr.join().replace(/,/g, "")
}

$(".icon-xiala").first().click(function(){
    $(".banquan2").fadeToggle()
})

$(".icon-xiala").last().click(function(){
    $(".banquan3").fadeToggle()
})