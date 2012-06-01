/* Author: Luke Gall

*/
(function($){

	$.getDocHeight = function(){
     var D = document;
     return Math.max(Math.max(D.body.scrollHeight,    D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
};

log('scroll height', $.getDocHeight(),  $(document).height() - $(window).height()
 );

	
	log($('#second'));
	
	var rectangleTop = $('#second').position().top;
	var timeoutId;
	var scrollHeight =  $(document).height() - $(window).height(); // Document height - viewport height

	log(rectangleTop);
	
	
	function positionSecond() { 
		//log($(window).scrollTop())	
		 if ($(window).scrollTop() > rectangleTop) {
			$('#second').stop();
			clearTimeout(timeoutId);
			$('#second').offset({top:$(window).scrollTop()});	
		}
		 else {
			var viewportFactor = scrollHeight / $(window).height();
			var duration = 500 * viewportFactor;
			log('scrollTop', $('#second').offset().top, 'scrollHeight', scrollHeight, 'duration', duration, viewportFactor);
	//	 	timeoutId = setTimeout(function() {
				$('#second').stop().animate({top:rectangleTop + 'px'}, duration, 'easeOutElastic' );
//			}, 1);
		 }

    }
	
	$(window).scroll(positionSecond);

	
	setInterval(function() {
	//	positionSecond(); 			
//		log($('#second').position());
	}, 0);

	

})(jQuery);




