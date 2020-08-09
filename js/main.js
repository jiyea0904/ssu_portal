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
			'width' : parentBox.width() + 2 + 'px',
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

jQuery(function($){
	var tab = $('.Portlet_tab_normal');
	tab.removeClass('js_off');
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.Portlet_tab_normal:first').attr('class', 'Portlet_tab_normal '+myClass);
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});

jQuery(function($){
	var tab = $('.Portlet_tab_mini');
	tab.removeClass('js_off');
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.Portlet_tab_mini:first').attr('class', 'Portlet_tab_mini '+myClass);
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});

jQuery(function($){
	var tab = $('.Portlet_tab_small');
	tab.removeClass('js_off');
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.Portlet_tab_small:first').attr('class', 'Portlet_tab_small '+myClass);
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});

window.onload = function(){
//하나의 li의 width값을 구해 놓는다.
var item_width = $('.slider2 li').outerWidth(true);


//이전버튼 클릭시 
$('.prevBtn').click(function(){
    var left_indent = parseInt($('.slider2').css('left')) + item_width;
    $('.slider2').animate({'left':left_indent+'px'},400, function(){
        $('.slider2 li:first').before($('.slider2 li:last'));
        $('.slider2').css('left',-item_width+'px');
    });
});

//Next Button
$('.nextBtn').click(function(){
    var left_indent = parseInt($('.slider2').css('left')) - item_width; //
    $('.slider2').animate({'left':left_indent+'px'},400,function(){
        $('.slider2 li:last').after($('.slider2 li:first'));
        $('.slider2').css('left',-item_width+'px');
    });
});
} 

$(function(){
  $('.flexslider3').flexslider({
	animation: "slide",
	directionNav: true,
	controlNav: false,
	pausePlay:false,
	direction:"hrozinal"
  });

  //바로가기 서비스 이미지 hover 시 변경
  $(".slider2 li a").hover(
	function(){
	  var imgObj = $(this).find("img");	//a태그 하위의 img 태그 선택
	  var imgSrc = imgObj.attr("src"); //img src 속성 가져오기
		
	  if(imgSrc.search("_off.") > 0){ 
		//이미지 src 변경 
		imgObj.attr("src", imgSrc.replace("_off","_on"));
	  }
	},
	function(){
	  var imgObj = $(this).find("img");	//a태그 하위의 img 태그 선택
	  var imgSrc = $(this).find("img").attr("src"); //img src 속성 가져오기
		
	  if(imgSrc.search("_on.") > 0){
		//이미지 src 변경 
		imgObj.attr("src", imgSrc.replace("_on","_off"));
	  }
	}
  );
	
  //바로가기 서비스 이미지 hover 시 변경
  $(".school_service ul li a").hover(
	function(){
	  var imgObj = $(this).find("img");	//a태그 하위의 img 태그 선택
	  var imgSrc = imgObj.attr("src"); //img src 속성 가져오기
		
	  if(imgSrc.search("_off.") > 0){ 
		//이미지 src 변경 
		imgObj.attr("src", imgSrc.replace("_off","_on"));
	  }
	},
	function(){
	  var imgObj = $(this).find("img");	//a태그 하위의 img 태그 선택
	  var imgSrc = $(this).find("img").attr("src"); //img src 속성 가져오기
		
	  if(imgSrc.search("_on.") > 0){
		//이미지 src 변경 
		imgObj.attr("src", imgSrc.replace("_on","_off"));
	  }
	}
  );
	
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

//quickservice
$(function(){
	$(".quickservice #btn_setting").click(function(){
		$('.setArea').show();
	});	
	
	$(".quickservice .setArea #btn_setting_close").click(function(){
		$(".setArea").hide();
	});
});

//visual
$(function(){
	$(".open_idlist").click(function(){
		$('.idList').show();
	});	
	
	$(".close_idlist").click(function(){
		$(".idList").hide();
	});
});


$( document ).ready(function(){
	$(".ocrt_sub_tab").click(function(){
		var f = $(this).siblings();
		var num = $(this).attr("data");
		
		$(f).each(function( index ) {
			var n = $(this).attr("data");
			$(this).removeClass("sub_tab_on");
			$("." + n ).hide();
		});
		
		$(this).addClass("sub_tab_on");
		$("." + num ).show();
	});
});

