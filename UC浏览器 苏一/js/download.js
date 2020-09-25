$(".flag").click(function(){
	$(".yc").toggle();
	if($(".yc").css("display")=="block"){
		$(".ali").height(70);
	}else{
		$(".ali").height(35);
	};
	
});

$(".flag1").click(function(){
	$(".yc1").toggle();
	if($(".yc1").css("display")=="block"){
		$(".yq").height(70);
	}else{
		$(".yq").height(35);
	};
});

//失焦 获取焦点
var phoneipt=document.getElementById("phoneipt");
phoneipt.onfocus=function(){
	this.placeholder='';
	
};

phoneipt.onblur=function(){
	this.placeholder="在此输入您的手机号码";
};

var yzmipt=document.getElementById("yzmipt");

yzmipt.onfocus=function(){
	this.placeholder='';
	
};

yzmipt.onblur=function(){
	this.placeholder="输入验证码";
};

//验证手机号
var reg=/^1[3-9]\d{9}/;
var send=document.querySelector(".send");
// send.onclick=function(){
// 	if(reg.test(yzmipt.value)){
// 		// return true;
// 		console.log(1);
// 	}else{
// 		console.log(2);
// 	}
	
// };