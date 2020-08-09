
//Portlet_tab_main
jQuery(function($){
	var tab = $('.Portlet_tab_main');
	tab.removeClass('js_off');
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.Portlet_tab_main:first').attr('class', 'Portlet_tab_main '+myClass);
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});



