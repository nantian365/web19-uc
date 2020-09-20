layui.use('carousel', function() {
				var carousel = layui.carousel;
				//建造实例化
				carousel.render({
					elem: '#test1',
					width: '937px', //设置背景容器的宽度
					height:'345px',
					arrow: 'always', //始终显示箭头,不会消失
					// anim: 'updown' //切换动画方式:anim
					//indicator:'outside',
					// indicator: 'outside' //这个属性：小圆点在外面	
				});
			});