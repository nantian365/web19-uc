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

	// 轮播图
	$(".banner").tabsType({
		tabList:'a',
		isAuto:true
	})

});