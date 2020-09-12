$(document).ready(function(){
 
  $('.slider1').slick({
		arrows:true,
		slidesToShow:1,
		autoplay: false,
		variableWidth:false,
		asNavFor:'.slider2',     
	});

  $('.slider2').slick({
		arrows:false,
		slidesToShow:1,
		autoplay: false,
		variableWidth:false, 
		fade:true,
		asNavFor:'.slider1',      
	});

   $('.slider_blog').slick({
		arrows:true,
		slidesToShow:1,
		autoplay: false,
		variableWidth:false,     
	});
});