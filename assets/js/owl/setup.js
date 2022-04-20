// CAROUSEL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
// CAROUSEL END

// ACTIVE MENU
$('.menu-items').click(function (e)
	{
		$('.menu-items').removeClass('active');
		$(this).addClass('active');
	});
// ACTIVE MENU END

// MENU BACKGROUND SCROLLING DOWN
$(function () {
    $(document).scroll(function () {
      var $nav = $(".container-header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
// MENU BACKGROUND SCROLLING DOWN END



