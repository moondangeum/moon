$(window).ready(function(){
  // 풀페이지
  $('#wrap').fullpage({
		navigation : true,
    navigationTooltips: ['MAIN', 'ABOUT', 'PROJECT', 'CONTACT'],
    anchors: ['MAIN', 'ABOUT', 'PROJECT', 'CONTACT'],
    autoScrolling: true,
		css3:false,
		scrollHorizontally: false,
		responsiveWidth: 680 ,
		onLeave: function(index, nextIndex, direction){
			$('.fp-tooltip').removeClass('action');
			$('.fp-tooltip').eq(nextIndex - 1).addClass('action');
		},
		afterLoad: function(direction, index){
			console.log(index)
			if(index == 1){
				$('.main h2').addClass('bottomD1')
				$('.main .scroll').addClass('centerD2')
				$('.main .vid').addClass('bottomD3')
			}else if(index == 2){
				$('.main h2').addClass('bottomD1')
				$('.main .scroll').addClass('centerD2')
				$('.main .vid').addClass('bottomD3')
				$('.about h3').addClass('centerD1')
				$('.about .left').addClass('leftD2')
				$('.about .right').addClass('rightD3')
			}else if(index == 3){
				$('.main h2').addClass('bottomD1')
				$('.main .scroll').addClass('centerD2')
				$('.main .vid').addClass('bottomD3')
				$('.about h3').addClass('centerD1')
				$('.about .left').addClass('leftD2')
				$('.about .right').addClass('rightD3')
				$('.project h3').addClass('centerD1')
				$('.project .left').addClass('leftD2')
				$('.project .right').addClass('rightD3')
			}else if(index == 4){
				$('.main h2').addClass('bottomD1')
				$('.main .scroll').addClass('centerD2')
				$('.main .vid').addClass('bottomD3')
				$('.about h3').addClass('centerD1')
				$('.about .left').addClass('leftD2')
				$('.about .right').addClass('rightD3')
				$('.project h3').addClass('centerD1')
				$('.project .left').addClass('leftD2')
				$('.project .right').addClass('rightD3')
				$('.contact h3').addClass('centerD1')
				$('.contact .left').addClass('leftD2')
				$('.contact .right').addClass('rightD3')
			}
		}
	})
	//풀페이지 fp툴팁 클릭 시 이동
	Array.prototype.forEach.call(document.querySelectorAll('#fp-nav ul li .fp-tooltip'), function(t, i){
		t.addEventListener('click', function(e) {
			e.target.parentElement.querySelector('a').dispatchEvent(new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			}))
		});
	});
  // 유튜브
  $('.jarallax').jarallax({
    speed:1,
    videoVolume: 0
  });
  //슬라이더
  $('.site_slider').slick({
		//infinite: true,
		slidesToShow: 1,
		speed: 700,
		arrows : true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
		draggable: true,
		//autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		dots: true,
		appendDots : $('.dot'),
		dotsClass: 'indicator',
	});
	$('.site_slider').on('afterChange', function(event, slick, nextSlide){
		$('.site_info').removeClass('active');
		$('.site_info').eq(nextSlide).addClass('active');
  });
	$('.site_slider').on('beforeChange', function(event, slick, nextSlide){
		$('.site_info').removeClass('active');
  });


$('.background').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
		});

	setInterval(function() {
		var $el = $('.background');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.08 + Math.random() * 0.08;
		$el.ripples('drop', x, y, dropRadius, strength);
	}, 1000);;
})


