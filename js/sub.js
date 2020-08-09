//select Box
$(document).ready(function(){
	$('.inputbox').find('select').each(function() {
		var self = $(this),
			parentBox = self.parents('.inputbox'),
			change = function() {
				$(this).prev('.txt').text($(this).find('option:selected').text());
			},
			focusin = function() {
				$(this).parents('.inputbox').addClass('selected');
			},
			focusout = function() {
				$(this).parents('.inputbox').removeClass('selected');
			};

		self.css({
			'width' : parentBox.width() + 'px',
			'height' : parentBox.height() + 'px'
		}).on({
			'change' : change,
			'focusin' : focusin,
			'focusout' : focusout
		});
	}).end().find('.txt').each(function(){
		var self = $(this);
		self.text(self.next('select').find('option:selected').text());
	});
});


$(function(){

	///Mobile Header
	$('.btn_menu').on('click',function(){
		$('.gnbmenu').show();
		$('.bg').show();
	});

	$('.btn_close').on('click',function(){
		$('.gnbmenu').hide();
		$('.bg').hide();
	});
	
	$('.gnbmenu > ul > li > a').on('click',function(){
		$(this).parent().siblings().children('.depth_2').slideUp()
		$(this).parent().siblings().removeClass('on')
		$(this).next('.depth_2').slideToggle(200)
		$(this).next('.depth_2').toggleClass('on')
		$(this).parent().toggleClass('on');
	});

	
	$('.gnbmenu ul.depth_2 li a').on('click',function(){
		$(this).next('.depth_3').slideToggle(200);
		$(this).toggleClass('on');
	});

})

//search
$(function(){
	$(".gnb .btn_search").click(function(){
		$('#searchArea').show();
		$('.gnb .btn_search_close').show();
	});	
	
	$(".gnb .btn_search_close").click(function(){
		$("#searchArea").hide();
		$(".gnb .btn_search_close").hide();
	});
});


//siteLink
$(function(){
	$(".btn_opensitelink").click(function(){
		$('.sitelinkWarp').slideDown();
		$('.btn_opensitelink').hide();
		$('.btn_closesitelink').show();
	});	
	$(".btn_closesitelink").click(function(){
		$('.sitelinkWarp').slideUp();
		$('.btn_closesitelink').hide();
		$('.btn_opensitelink').show();
	});	
});

//설정
$(document).ready(function () {
	$('.settingArea .btn_off').click(function () {
		$('.settingArea .btn_on').show();
		$('#settingdown').toggle();
	});
	$('.settingArea .btn_on').click(function () {
		if ($("#pQuery").val() != null && $("#pQuery").val() != "") {
			fn_search();
		} else {
			$('.settingArea .btn_on').hide();
			$('#settingdown').toggle();
		}
	});
});


//leftmenu
$(function(){
	$(".menudepth_2").hide();
	$(".menudepth_1 li").hover(function(){
		$(this).addClass('on');
		$(".menudepth_2:not(:animated)",this).slideDown(150);


	},
	function(){
		$(".menudepth_2", this).slideUp(100); 
		$(this).removeClass('on');
	})
});
