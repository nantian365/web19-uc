;(function($){
	$.fn.extend({

		slidebanner:function(option){
			option=$.extend({
				list:undefined,
				tags:undefined,
				tagsChecked:undefined,
				next:undefined,
				prev:undefined,
				auto:undefined,
				speed:'normal',
				tittle:undefined,
				tagsType:'mouseover',
				width:undefined,
				box:undefined,
				time:3000
			},option)

			var $list=this.find(option.list);
			var len=$list.children().length;

			var index=1;
			// var width=$list.children(':first').width();
			var width=option.width;
			$list.width(len*width).css('left',-index*width);
			// console.log(width);
			//如果有标题轮播
			if(option.tittle){
				var $tittle=this.find(option.tittle);
			}

			// 轮播函数
			function go(){
				index++;
				$list.stop().animate({left:-index*width},option.speed,'linear',tofirst)
				// 标题内容切换
				if(option.tittle){
					$tittle.hide();
					$tittle.eq(index).slideDown();
				}
				if(option.tags){
					var tagsindex=index-1;
					if(tagsindex>$tags.length-1){
						tagsindex=0;
					}else if(tagsindex<0){
						tagsindex=$tags.length-1;
					}
					$tags.removeClass(option.tagsChecked);
					$tags.eq(tagsindex).addClass(option.tagsChecked);
				}
			};
			// 返回第一个图片的回调函数
			function tofirst(){
				if(index==len-1){

					index=1;
					$list.css('left',-index*width);
				}
			};
			// 如果要自动轮播
			if(option.auto==true){
				var timer=setInterval(go,option.time);

				this.mouseover(function(){
					clearInterval(timer);
				});
				this.mouseout(function(){
					timer=setInterval(go,option.time);
				});
			}

			// 切换标签
			if(option.tags){
				var $tags=this.find(option.tags);
				$tags.mouseover(function(){
					$tags.removeClass(option.tagsChecked);
					$(this).addClass(option.tagsChecked);
					index=$(this).index()+1;
					$list.stop().animate({left:-index*width},option.speed,'linear',tofirst);
					if(option.tittle){
					$tittle.hide();
					$tittle.eq(index).slideDown();
				}
				})
			}

			// 上下按钮切换
			if(option.next){
				var $prev=this.find(option.prev);
				var $next=this.find(option.next);

				$next.click(function(){
					if(!$list.is(':animated')){
						go();
					};

				});

			};

		},


		tabsType:function(option){
			option=$.extend({
				tabBtn:undefined,
				tabList:undefined,
				prevBtn:undefined,
				nextBtn:undefined,
				checkedName:undefined,
				eventType:'click',
				animateType:'fade',
				isAuto:false,
				paused:true,
				autoSpeed:3000
			},option)
			// 声明目录
			var index=0;
			// 声明轮播列表
			var $list=this.find(option.tabList);
			// 轮播切换函数
			function go(){
				// 如果有导航按钮则改变导航按钮样式
				if(option.tabBtn!=undefined){
					$btn.removeClass(option.checkedName);
					$btn.eq(index).addClass(option.checkedName);
				}
				// 切换轮播图
				$list.hide();
				if(option.animateType=='fade'){
					$list.eq(index).fadeIn();
				};
			};
			// 如果有导航按钮则声明按钮，并且赋予指定事件类型的轮播
			if(option.tabBtn!=undefined){
				var $btn=this.find(option.tabBtn);
				index=$(this).index();
				$btn.bind(option.eventType,function(){
					go();
					
				});
			}
			// 如果需要自动轮播，将isAuto属性设置为true
			if(option.isAuto==true){
				// 设置自动轮播定时器
				var timer=setInterval(function(){
					index++;
					if(index>$list.length-1){
						index=0;
					}
					go()
				},option.autoSpeed);
				// 触摸停止的设置 默认为true 如果不需要可改为false
				if(option.paused==true){
					this.mouseover(function(){
						clearInterval(timer);
					});
					this.mouseout(function(){
						timer=setInterval(function(){
							index++;
							if(index>$list.length-1){
								index=0;
							}
							go()
						},option.autoSpeed);
					});
				}

			}
			
			

			

		},


	});



})(jQuery);