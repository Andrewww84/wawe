$(function () {

  $(".header__list a, .header__content a, .footer a").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.slider-blog__wrapper').slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // speed: 1500,
  });

  $('.menu__btn').on('click', function () {
    $('.header__list').toggleClass('header__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });


  var mixer = mixitup('.gallary__content');

  
});


