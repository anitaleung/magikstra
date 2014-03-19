// Navigation scrolling effect
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

// Make heights of about img and content equal
(function(){
	$('.equalize').equalize();
})();