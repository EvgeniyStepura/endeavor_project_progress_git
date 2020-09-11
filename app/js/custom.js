$(window).on('load',function(){

  $(".js-bg").each(function () {
      $(this).css('background-image', 'url(' + $(this).data("preload") + ')');
  });
  $(".js-img").each(function () {
      $(this).attr('src', $(this).data("src"));
  });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('body').addClass('ios');
        
  } else{
  $('body').addClass('web');
    $(window).bind('resize', handler);    
  };

  setTimeout(function () {        
      var wow = new WOW({
          boxClass: 'wow', // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset: 100, // distance to the element when triggering the animation (default is 0)
          mobile: true, // trigger animations on mobile devices (default is true)
          live: true, // act on asynchronously loaded content (default is true)
          scrollContainer: null // optional scroll container selector, otherwise use window
      });
      wow.init();
      
  }, 800);
  setTimeout(function () {
     $('body').removeClass('loaded');
  }, 900);



});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
document.addEventListener("touchstart", function(){}, true);

$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/ 


  //


  function showDiv() {
    if($(window).scrollTop() > 0 && $('.header').data('positioned') == 'false') {
      $(".header").data('positioned', 'true');
      $(".header").addClass('fix');
    }
    else if($(window).scrollTop() <= 0 && $('.header').data('positioned') == 'true') {
      $(".header").removeClass('fix').data('positioned', 'false');
    }
  }
  $(window).scroll(showDiv);
  //$(window).load(showDiv);
  $('.header').data('positioned', 'false');

  //
  $('.mobile-button').on('click', function(){
    $(this).toggleClass('open'); 
    $('.mobile_nav').toggleClass('open'); 
    $('.header').toggleClass('open'); 
    return false;    
  });


  //
  if ($('.fancybox').length) {
    $('.fancybox').fancybox({touch: false});
  }

  //
  $('.work_us_slider_js').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
		centerPadding:0,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  autoplaySpeed: 3000,
	   centerMode: true,
	   
	  responsive: [
	  {
		  breakpoint: 1224,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}


	  ]

	});

	//
	$('.videogallery_slider_js').slick({
		dots: false,
		infinite: true,
		speed: 300,
		centerPadding:0,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 3000
	  });
	//

	$('.video_category_slider_js').slick({
		infinite: true,
		speed: 300,
		dots: false,
		centerPadding:0,
		slidesToShow: 10,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		variableWidth: true
	  });
	
	//
	//
	$('.panes_item:first-child').addClass('active');
	$('.video_category_tabs >li:first-child').addClass('active');
	$('.video_category_tabs >li').click(function() {      
		var idx = $(this).index();  
		$('.panes_item').not($('.panes_item').eq(idx)).removeClass('active');
		$('.panes_item').eq(idx).addClass('active');  
		$('.video_category_tabs >li').not($(this)).removeClass('active');
		$(this).addClass('active');    
		return false;
	});

});


//

document.addEventListener('DOMContentLoaded', function () {
  
});

var handler = function(){
	
	var height_footer = $('.footer').height();	
	var height_header = $('.header').height();		
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

  $('.js-vh').css({'min-height': $(window).height()});

	if (viewport_wid <= 1023) {
		$
	}
	else if (viewport_wid > 1023){
		
	}

}
$(window).bind('load', handler);



$(window).on('orientationchange', function() {
  setTimeout(function() {
    handler();
  }, 100);
});
 


