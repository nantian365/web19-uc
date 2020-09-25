window.onload=function() {
	// 鼠标点击选择语言
	var ul0=document.getElementsByClassName('ul0')[0];
	var li1=document.getElementsByClassName('oli1');
	for (var i = 0; i <li1.length; i++) {
		li1[i].onclick=function() {
			for (var i = 0; i <li1.length; i++) {
				li1[i].removeAttribute("id");
			}
			this.setAttribute("id","cu");
		}
	}
	
	// 鼠标点击导航栏显示二级菜单
	var nav=document.getElementsByClassName('nav')[0];
	var ul=nav.firstElementChild;
	var li=ul.children;
	var a1=document.getElementsByClassName('a1');
	var span1=ul.getElementsByTagName('span');
	var erji=document.getElementsByClassName("erji");
	var d1=document.getElementById('d1');
	var d2=document.getElementById('d2');
	for (var i = 0; i <li.length; i++) {
		li[i].setAttribute("index",i);
		li[i].onclick=function() {
			for (var j = 0; j <a1.length; j++) {
				a1[j].removeAttribute("id");
				a1[this.getAttribute('index')].setAttribute("id","orange");
			}
			for (var z = 0; z <span1.length; z++) {
				span1[z].removeAttribute("id");
				span1[this.getAttribute('index')].setAttribute("id","shang");
			}
			for (var x = 0; x <erji.length; x++) {
				erji[x].style.display="none";
				erji[this.getAttribute('index')-1].style.display="block";
			}
		}
	}

	// 二级菜单点击变色
	function fun(ele) {
		for (var x = 0; x <ele.children.length; x++) {
			ele.children[x].onclick=function() {
				for (var x = 0; x <ele.children.length; x++) {
					ele.children[x].style.color="#656565";
				}
				this.style.color='#F86720';
			}
		}
	}
	fun(d1);
	fun(d2);

	//八宫格鼠标摸上去变色
	var x1=document.getElementsByClassName("x1");
	for (var i =0; i<x1.length; i++) {
		x1[i].onmouseover=function() {
			this.style.color="#F86720";
		}
		x1[i].onmouseout=function() {
			this.style.color="";
		}
	}
}