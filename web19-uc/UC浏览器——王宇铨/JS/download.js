$(function(){

	// 底部selcet控件
	var $select=$('footer .select');
	var $list=$('footer .select ul')
	$select.click(function(){
		$list.toggle();
	});

	$list.children().click(function(){
		$('#langSelected').text($(this).text());
	});

	// 底部列表打开收缩
	$('footer .openBtn').click(function(){

		$(this).prev().find('.hideLi').toggle();
		$(this).toggleClass('listOpen');

	});

	//4位纯数字验证码
	
	function change(){
		var bgc="";
		var arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		for(var i=0;i<4;i++){
			bgc+=arr[Math.round(Math.random()*35)];
		}
		return bgc;
		// document.body.style.backgroundColor="#6895fa";
	}

	var yzmText=document.getElementById("yzmText");
	yzmText.innerText=change();

	// 短信验证
	$(".otherDownload form").submit(function(){
		if($(this).find("[name='yzm']").val()!=yzmText.innerText){
			alert("验证码错误");
			return false;
		}
	});



})