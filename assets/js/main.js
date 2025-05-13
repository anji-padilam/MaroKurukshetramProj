(function ($) {
	"use strict";

	/*=============================================
		=    		 Preloader			      =
	=============================================*/
	function preloader() {
		$('#preloader').delay(0).fadeOut();
	};

	$(window).on('load', function () {
		preloader();
		wowAnimation();
	});



	/*=============================================
		=    		Mobile Menu			      =
	=============================================*/
	//SubMenu Dropdown Toggle
	if ($('.menu-area li.menu-item-has-children ul').length) {
		$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		var mobileMenuContent = $('.menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

		//Dropdown Button
		$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(300);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
	}



	/*=============================================
		=     Menu sticky & Scroll to top      =
	=============================================*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$('.scroll-to-target').removeClass('open');
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$('.scroll-to-target').addClass('open');
			$("#header-fixed-height").addClass("active-height");
		}
	});


	/*=============================================
		=    		 Scroll Up  	         =
	=============================================*/
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}


	/*=============================================
		=           Data Background             =
	=============================================*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})

	/*===========================================
		=            OffCanvas Active     =
	=============================================*/
	$('.offcanvas-toggle a').on('click', function () {
		$('body').addClass('offCanvas-menu-visible');
		return false;
	});

	$('.offCanvas-overlay, .offCanvas-toggle').on('click', function () {
		$('body').removeClass('offCanvas-menu-visible');
	});


	/*=============================================
		=            Header Search            =
	=============================================*/
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
	});


	/*=============================================
		=          Dark Light Toggler     =
	=============================================*/
	function tg_theme_toggler() {

		$('.modeSwitch').on("change", function () {
			toggleTheme();
		});

		// set toggle theme scheme
		function tg_set_scheme(tg_theme) {
			localStorage.setItem('tg_theme_scheme', tg_theme);
			document.documentElement.setAttribute("tg-theme", tg_theme);
		}

		// toggle theme scheme
		function toggleTheme() {
			if (localStorage.getItem('tg_theme_scheme') === 'dark') {
				tg_set_scheme('light');
			} else {
				tg_set_scheme('dark');
			}
		}

		// set the first theme scheme
		function tg_init_theme() {
			if (localStorage.getItem('tg_theme_scheme') === 'dark') {
				tg_set_scheme('dark');
				document.querySelector('.modeSwitch').checked = true;
			} else {
				tg_set_scheme('light');
				document.querySelector('.modeSwitch').checked = false;
			}
		}
		tg_init_theme();
	}
	if ($(".modeSwitch").length > 0) {
		tg_theme_toggler();
	}


	/*=============================================
		=    		Brand Active		      =
	=============================================*/
	$('.brand-active').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false,
		slidesToShow: 6,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});



	/*=============================================
		=    		Featured Active		      =
	=============================================*/
	$('.featured-post-active').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="flaticon-next"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="flaticon-next"></i></button>',
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});


	/*=============================================
		=    		Editor Active		      =
	=============================================*/
	$('.editor-post-active').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		appendArrows: ".editor-nav",
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});

	/*=============================================
		=    		Editor Active		      =
	=============================================*/
	$('.editor-post-active-two').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		appendArrows: ".editor-nav-two",
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});


	/*=============================================
		=    		overlay post Active		      =
	=============================================*/
	$('.overlay-post-active').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});


	/*=============================================
		=    		Trending Active		      =
	=============================================*/
	$('.trending-post-active').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="flaticon-next"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="flaticon-next"></i></button>',
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});


	/*=============================================
		=    		Coin Active		      =
	=============================================*/
	$('.coin-active').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false,
		slidesToShow: 7,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});

	/*=============================================
		=    		overlay post Active		      =
	=============================================*/
	$('.instagram-active').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false,
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});


	/*=============================================
		=    		Trending slider  	       =
	=============================================*/
	const TrendingSlider = new Swiper(".ta-trending-slider", {
		slidesPerView: 1,
		loop: true,
		slideToClickedSlide: true,
		direction: "vertical",
		autoplay: {
			delay: 4000,
		},
		speed: 800,
	});


	/*=============================================
		=    		Magnific Popup		      =
	=============================================*/
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	/*=============================================
		=    		 Wow Active  	         =
	=============================================*/
	function wowAnimation() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();
	}


})(jQuery);













document.addEventListener("DOMContentLoaded", () => {
	console.log("Page Loaded Successfully!");
});


// Add Section Start

document.getElementById("stateSelect").addEventListener("change", function () {
	// alert("You selected: " + this.value);
});

// Add Section End



// LOCAL MANDI JS CODE START

function fetchMandiRates() {
	const state = document.getElementById("state").value;
	const crop = document.getElementById("crop").value;

	// Simulated API response with multiple districts for the same crop
	const mandiRates = {
		"Telangana": {
			"Tomato": [
				{ district: "నల్గొండ", mandi: "నకిరేకల్", min: 9, max: 18, avg: 13 }
			],
			"Onion": [
				{ district: "నిజామాబాద్", mandi: "బోధన్", min: 12, max: 22, avg: 17 }
			],
			"Potato": [
				{ district: "ఖమ్మం", mandi: "ఖమ్మం", min: 9, max: 19, avg: 14 }
			],
			"Carrot": [
				{ district: "వరంగల్", mandi: "హన్మకొండ", min: 13, max: 23, avg: 18 }
			],
			"Beans": [
				{ district: "మహబూబ్‌నగర్", mandi: "జడ్చర్ల", min: 16, max: 26, avg: 21 }
			],
			"Brinjal": [
				{ district: "నల్గొండ", mandi: "భువనగిరి", min: 11, max: 17, avg: 14 }
			],
			"Cabbage": [
				{ district: "కరీంనగర్", mandi: "జగిత్యాల", min: 7, max: 15, avg: 11 }
			],
			"Cauliflower": [
				{ district: "సిద్దిపేట", mandi: "దుబ్బాక", min: 11, max: 19, avg: 15 }
			],
			"GreenChilli": [
				{ district: "జనగామ", mandi: "జనగామ", min: 22, max: 37, avg: 29 }
			],
			"Drumstick": [
				{ district: "వనపర్తి", mandi: "వనపర్తి", min: 16, max: 29, avg: 22 }
			],
			"BottleGourd": [
				{ district: "మేడ్చల్", mandi: "షామీర్‌పేట్", min: 11, max: 19, avg: 15 }
			],
			"RidgeGourd": [
				{ district: "సంగారెడ్డి", mandi: "సిద్దిపేట", min: 10, max: 18, avg: 14 }
			],
			"SnakeGourd": [
				{ district: "భద్రాద్రి కొత్తగూడెం", mandi: "కొత్తగూడెం", min: 13, max: 21, avg: 17 }
			],
			"BitterGourd": [
				{ district: "నాగర్‌కర్నూల్", mandi: "ఆచంపేట", min: 15, max: 23, avg: 19 }
			],
			"Spinach": [
				{ district: "హైదరాబాద్", mandi: "బెగంపేట్", min: 6, max: 11, avg: 9 }
			],
			"Amaranthus": [
				{ district: "యాదాద్రి", mandi: "భువనగిరి", min: 5, max: 10, avg: 8 }
			],
			"CorianderLeaves": [
				{ district: "సూర్యాపేట", mandi: "హుజూరాబాద్", min: 9, max: 16, avg: 12 }
			],
			"MintLeaves": [
				{ district: "జోగులాంబ గద్వాల", mandi: "గద్వాల", min: 7, max: 13, avg: 10 }
			],
			"CurryLeaves": [
				{ district: "భూపాలపల్లి", mandi: "మూలుగు", min: 4, max: 8, avg: 6 }
			],
			"Garlic": [
				{ district: "నిజామాబాద్", mandi: "కమారెడ్డి", min: 55, max: 85, avg: 70 }
			],
			"Ginger": [
				{ district: "హైదరాబాద్", mandi: "మలక్‌పేట్", min: 65, max: 95, avg: 80 }
			],
			"Chicken": [
				{ district: "మేడ్చల్", mandi: "బాచుపల్లి", min: 110, max: 160, avg: 135 }
			],
			"Egg": [
				{ district: "వరంగల్", mandi: "హన్మకొండ", min: 6, max: 8, avg: 7 }
			],
			"Mutton": [
				{ district: "ఖమ్మం", mandi: "కొత్తగూడెం", min: 520, max: 720, avg: 620 }
			],
			"Fish": [
				{ district: "సూర్యాపేట", mandi: "కోడాడ", min: 85, max: 125, avg: 105 }
			],
			"Gold": [
				{ district: "హైదరాబాద్", mandi: "అబిడ్స్", min: 68500, max: 70500, avg: 69500 }
			],
			"Silver": [
				{ district: "కరీంనగర్", mandi: "కరీంనగర్", min: 81000, max: 86000, avg: 83500 }
			]
		},
		"Andhra Pradesh": {
			"Tomato": [
				{ district: "గుంటూరు", mandi: "తెనాలి", min: 8, max: 16, avg: 12 }
			],
			"Onion": [
				{ district: "చిత్తూరు", mandi: "పలమనేరు", min: 10, max: 20, avg: 15 }
			],
			"Potato": [
				{ district: "విశాఖపట్నం", mandi: "అనకాపల్లి", min: 8, max: 18, avg: 13 }
			],
			"Carrot": [
				{ district: "గుంటూరు", mandi: "తెనాలి", min: 12, max: 22, avg: 17 }
			],
			"Beans": [
				{ district: "కడప", mandi: "రాయచోటి", min: 15, max: 25, avg: 20 }
			],
			"Brinjal": [
				{ district: "తిరుపతి", mandi: "తిరుపతి", min: 10, max: 16, avg: 13 }
			],
			"Cabbage": [
				{ district: "అనంతపురం", mandi: "హిందూపురం", min: 6, max: 14, avg: 10 }
			],
			"Cauliflower": [
				{ district: "శ్రీకాకుళం", mandi: "ఇచ్ఛాపురం", min: 10, max: 18, avg: 14 }
			],
			"GreenChilli": [
				{ district: "నెల్లూరు", mandi: "గుడూరు", min: 20, max: 35, avg: 27 }
			],
			"Drumstick": [
				{ district: "ప్రకాశం", mandi: "ఒంగోలు", min: 15, max: 28, avg: 21 }
			],
			"BottleGourd": [
				{ district: "తూర్పుగోదావరి", mandi: "రాజమహేంద్రవరం", min: 10, max: 18, avg: 14 }
			],
			"RidgeGourd": [
				{ district: "పశ్చిమగోదావరి", mandi: "ఏలూరు", min: 9, max: 17, avg: 13 }
			],
			"SnakeGourd": [
				{ district: "విజయనగరం", mandi: "బొబ్బిలి", min: 12, max: 20, avg: 16 }
			],
			"BitterGourd": [
				{ district: "కర్నూలు", mandi: "ఆదోని", min: 14, max: 22, avg: 18 }
			],
			"Spinach": [
				{ district: "చిత్తూరు", mandi: "పుత్తూరు", min: 5, max: 10, avg: 8 }
			],
			"Amaranthus": [
				{ district: "తిరుపతి", mandi: "రేణిగుంట", min: 4, max: 9, avg: 7 }
			],
			"CorianderLeaves": [
				{ district: "గుంటూరు", mandi: "నరసరావుపేట", min: 8, max: 15, avg: 11 }
			],
			"MintLeaves": [
				{ district: "తూర్పుగోదావరి", mandi: "కాకినాడ", min: 6, max: 12, avg: 9 }
			],
			"CurryLeaves": [
				{ district: "నెల్లూరు", mandi: "కావలి", min: 3, max: 7, avg: 5 }
			],
			"Garlic": [
				{ district: "కర్నూలు", mandi: "కర్నూలు", min: 50, max: 80, avg: 65 }
			],
			"Ginger": [
				{ district: "విజయవాడ", mandi: "విజయవాడ", min: 60, max: 90, avg: 75 }
			],
			"Chicken": [
				{ district: "చిత్తూరు", mandi: "చిత్తూరు", min: 100, max: 150, avg: 125 }
			],
			"Egg": [
				{ district: "విశాఖపట్నం", mandi: "అనకాపల్లి", min: 5, max: 7, avg: 6 }
			],
			"Mutton": [
				{ district: "నెల్లూరు", mandi: "నెల్లూరు", min: 500, max: 700, avg: 600 }
			],
			"Fish": [
				{ district: "తూర్పుగోదావరి", mandi: "అమలాపురం", min: 80, max: 120, avg: 100 }
			],
			"Gold": [
				{ district: "విజయవాడ", mandi: "విజయవాడ", min: 68000, max: 70000, avg: 69000 }
			],
			"Silver": [
				{ district: "గుంటూరు", mandi: "గుంటూరు", min: 80000, max: 85000, avg: 82500 }
			]
		}


	};

	const resultTable = document.getElementById("resultTable").getElementsByTagName("tbody")[0];
	resultTable.innerHTML = "";

	if (mandiRates[state] && mandiRates[state][crop]) {
		const ratesList = mandiRates[state][crop];
		ratesList.forEach(rates => {
			const row = `<tr>
                            <td>${rates.district}</td>
                            <td>${rates.mandi}</td>
                            <td>${rates.min} .00</td>
                            <td>${rates.max} .00</td>
                            <td>${rates.avg} .00</td>
                        </tr>`;
			resultTable.innerHTML += row;
		});
	} else {
		resultTable.innerHTML = `<tr><td colspan="5">డేటా అందుబాటులో లేదు</td></tr>`;
	}
}

// LOCAL MANDI JS CODE END


// IPL Images Sliders Start

$(document).ready(function () {
	$('.custom-slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="flaticon-next">←</i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="flaticon-next">→</i></button>',
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});
});
