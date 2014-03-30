// Landing page arrow
(function(){

	var winHeight = $(window).height();
	
	$('.arrow').on('click', function(){
		$('html, body').animate({ 
			scrollTop: winHeight + 1
		}, 900, 'swing');
	});

})();

// Navigation scrolling effect
(function(){

	// Changing navigation link state on passing sections 
	
	$(document).scroll(function(){
	
		if ($(this).scrollTop() >= $('#landing').offset().top) {
        $('.1').css({'color':'#ffffff'});
		$('.2').css({'color':'#ffffff'});
		$('.3').css({'color':'#ffffff'});
		$('.4').css({'color':'#ffffff'});
		}
		
		if ($(this).scrollTop() >= $('#about').offset().top) {
        $('.1').css({'color':'#AFACA7'});
		$('.2').css({'color':'#ffffff'});
		$('.3').css({'color':'#ffffff'});
		$('.4').css({'color':'#ffffff'});
		}
		
		if ($(this).scrollTop() + (1/8)*$('#team').height() > $('#team').offset().top) {
        $('.1').css({'color':'#ffffff'});
		$('.2').css({'color':'#AFACA7'});
		$('.3').css({'color':'#ffffff'});
		$('.4').css({'color':'#ffffff'});
		}
		
		if ($(this).scrollTop() + $('#share').height() > $('#share').offset().top) {
        $('.1').css({'color':'#ffffff'});
		$('.2').css({'color':'#ffffff'});
		$('.3').css({'color':'#AFACA7'});
		$('.4').css({'color':'#ffffff'});
		}
		
		if ($(this).scrollTop() + $('#notify').height() > $('#notify').offset().top) {
        $('.1').css({'color':'#ffffff'});
		$('.2').css({'color':'#ffffff'});
		$('.3').css({'color':'#ffffff'});
		$('.4').css({'color':'#AFACA7'});
		}

	});

})();

(function(){

	// Changing navigation position

	var navHeight = $('#nav').css('height'); // With units

	$('#nav').waypoint(function(direction) {
		if ( direction == 'down' ) {
			$('#about').css('padding-top', navHeight);
			$('#site-nav').css('position', 'fixed');
		}
	});

	$('#end-of-landing').waypoint(function(direction){
		if ( direction == 'up' ) {
			$('#about').css('padding-top', 0);
			$('#site-nav').css('position', 'static');
		}
	});

})();

(function(){

	var navHeight = $('#site-nav').outerHeight(); // Without units

	// Smooth scroll to anchors

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    if (target == '#about') {
	    	$('html, body').stop().animate({
		        'scrollTop': $target.offset().top 
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
	    } else {
	    	$('html, body').stop().animate({
		        'scrollTop': $target.offset().top - navHeight
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
	    }
	});
		
})();

// Make heights of children equal
(function(){
	$('.equalize').equalize();
})();