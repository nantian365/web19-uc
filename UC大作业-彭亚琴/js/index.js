window.onload=function() {
	var xiala=document.getElementsByClassName('xiala')[0];
	var xz=document.getElementsByClassName('xz')[0];
	var erji=document.getElementsByClassName("erji")[0];
	var p=erji.getElementsByTagName('p');
	var flage=true;
	xiala.onclick=function() {
		if (flage) {
			erji.style.display="block";
			flage=false;
		}else{
			erji.style.display="none";
			flage=true;
		}
	}
	for (var i = 0; i < p.length; i++) {
		
		p[i].onclick=function () {
			xz.innerText=this.innerText;
		}
	}
	
	// var oul=document.getElementsByClassName('.oul')[0];
	// var li=document.children;
	// for (var i = 0; i <li.length; i++) {
	// 	li[i].onclick=function() {
	// 		if (flage) {
	// 			this.children.style.borderColor="orange";
	// 			flage=false;
	// 		}else{
	// 			this.children.style.borderColor="";
	// 			flage=true;
	// 		}
	// 	}
		
	// }
}