// 导航部分
function dao() {
    var li = document.querySelectorAll(".nav li")
    var chu = document.getElementsByClassName("chu")
    for (i = 0; i < li.length; i++) {
        li[i].index = i
        li[i].onclick = function() {
            for (j = 0; j < li.length; j++) {
                li[j].className = ""
            }
            for (h = 0; h < chu.length; h++) {
                chu[h].style.display = "none"
            }
            this.className = "navLi"
            chu[this.index].style.display = "block"
        }
    }
}
dao()