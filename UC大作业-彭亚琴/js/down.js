window.onload=function() {
	// 短信下载输入框验证
	var ipt=document.getElementsByClassName('ipt')[0];
	var ipt2=document.getElementsByClassName('ipt2')[0];

	ipt.onfocus=function () {
		ipt.value="";
		ipt.style.color="black";
	}
	ipt.onblur=function() {
		ipt.style.color="";
		ipt.value="在此输入您的手机号码";
	}

	ipt2.onfocus=function () {
		ipt2.value="";
		ipt2.style.color="black";
	}
	ipt2.onblur=function() {
		ipt2.style.color="";
		ipt2.value="输入验证码";
	}
}
