// При клике на якорь
$('.toggle-hover').on('click', function(e) {
	e.preventDefault();
	// Проверяем, есть ли у текущего .toggle-hover класс 'active'
	if ($(this).hasClass('active')) {
			// Если есть, то убираем у него класс 'active'
			$(this).removeClass('active');
			$('aside').removeClass('active');
	} else {
			// Если нет, то продолжаем с обычной логикой
			// Убираем класс 'active' у всех якорей
			$('.toggle-hover').removeClass('active');

			// Добавляем класс 'active' к выбранному якорю
			$(this).addClass('active');

			// Убираем класс 'active' у всех секций
			$('aside').removeClass('active');

			// Добавляем класс 'active' к соответствующей секции
			var sectionId = $(this).attr('href').substring(1);
			$('#' + sectionId).addClass('active');
	}
});

$('.toggle-button').click(function(){
	$(this).toggleClass('active')
	$('header nav,header').toggleClass('active')
	$('body').toggleClass('lock')
})
$('.back-btn').click(function(){
	$('.hero_mnu,.toggle-hover').removeClass('active')
});

var swiper = new Swiper(".categories_slider", {
	slidesPerView: 2.2,
	watchOverflow: true,
	loop: false,
	watchSlidesProgress: true,
	spaceBetween: 12,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".next_btn",
		prevEl: ".prev_btn",
	},
	breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3.1,
    },
	}
});
var swiper = new Swiper(".testimonials_slider", {
	slidesPerView: 1.1,
	watchOverflow: true,
	loop: false,
	watchSlidesProgress: true,
	spaceBetween: 12,
	navigation: {
		nextEl: ".next_btn",
		prevEl: ".prev_btn",
	},
	breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
			spaceBetween: 24,
    },
	}
});
var swiper = new Swiper(".certificates_slider", {
	slidesPerView: 2.1,
	watchOverflow: true,
	loop: false,
	watchSlidesProgress: true,
	spaceBetween: 12,
	navigation: {
		nextEl: ".next_btn",
		prevEl: ".prev_btn",
	},
	breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 4,
			spaceBetween: 24,
    },
	}
});
$('.faq_item p').hide();

$(".faq_item").click(function() {
	$(this).find("p").not(this).slideUp().prev().removeClass("active");
	$(this).find("p").not(":visible").slideDown().prev().addClass("active");
});
$('.page_filters_list > *,.color').click(function(e){
	e.preventDefault();
  $('.page_filters_list > *,.color').removeClass('active');	
	$(this).addClass('active');
	target = $(this).attr('href');
  $('.page_filters_content_item').not(target).hide();
	$('.page_filters_content_item').addClass('active');
	$('.page_filters_content_item').not(target).toggleClass('active');
})
$('.size').click(function(e){
	e.preventDefault();
  $('.size').removeClass('active');	
	$(this).addClass('active');
})

$('.contact').click(function(e){
	$('.for-contact').addClass('active');
	$('body').toggleClass('lock');
	e.preventDefault();
})
$(document).mouseup(function (e) {
	var container = $(".popup-dialog");
	if (container.has(e.target).length === 0){
			$('.popup').removeClass('active');
			$('body').removeClass('lock');
	}
});
$('.btn-close').click(function(){
	if ($(this).parent().parent().parent().hasClass("active")) {
		$(this).parent().parent().parent().removeClass("active");
		$('body').removeClass('lock');
	} else {
		$('body').removeClass('lock');
	}
});
//other
Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options
});
Fancybox.bind('[data-fancybox="gallery-full"]', {
  // Your custom options
});

$('.js-select-single').select2({
	minimumResultsForSearch: -1,
});