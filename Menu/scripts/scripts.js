

$(document).ready(function(){
	$('#mDescrip p:not(:first)').hide();
	
	$('#monsterNav li').click(function(e) {
		$('#mDescrip p').hide();
		$('#monsterNav .current').removeClass("current");
		$(this).addClass('current');
		
		var clicked=$(this).find('a:first').attr('href');
		$('#mDescrip ' + clicked).fadeIn('fast');
		e.preventDefault();
	}).eq(0).addClass('current');
});



