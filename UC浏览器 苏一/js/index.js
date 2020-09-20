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


