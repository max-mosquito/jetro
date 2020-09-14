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
//aclive_link
   var location = window.location.href;
    var cur_url = '/' + location.split('/').pop(); 
    $('.nav li').each(function () {
        var link = $(this).find('a').attr('href'); 
        if (cur_url == link) {
            $(this).addClass('pactive');
        }
    });
});