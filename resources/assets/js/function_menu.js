$(document).ready(function(){
	$( window ).scroll(function() {
		if($(this).scrollTop()){
			$(".menu_subwrapper").addClass("default").fadeIn('slow');
		}else{
			$(".menu_subwrapper").removeClass("default").fadeIn('slow');
		}
	});
	var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if (posTop > 0){
		$("#content").addClass("down").fadeIn('slow');
		$(".menu_subwrapper").addClass("default").fadeIn('slow');

	}

	$('.about').addClass("hiddens").viewportChecker({
	classToAdd: 'visible animated zoomIn',
	offset: 100
	});

	$('.portfolio').addClass("hiddens").viewportChecker({
		classToAdd: 'visible animated zoomIn',
		offset: 100
		});


	$('.projects').addClass("hiddens").viewportChecker({
	classToAdd: 'visible animated zoomIn',
	offset: 100
	});
	
	$('.form').addClass("hiddens").viewportChecker({
	classToAdd: 'visible animated zoomIn',
	offset: 100
	});
})