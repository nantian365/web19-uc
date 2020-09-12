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
	

}