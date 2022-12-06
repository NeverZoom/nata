import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'slick-carousel/slick/slick.js';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';

document.addEventListener('DOMContentLoaded', () => {

	$('.animate').on('mouseover', () => {
		$('.hero__wrapper h1 svg path').addClass('active');
		$('.hero__wrapper .hero_image').addClass('active');
	});
	$('.animate').on('mouseout ', () => {
		$('.hero__wrapper h1 svg path').removeClass('active');
		$('.hero__wrapper .hero_image').removeClass('active');
	});

	$('.primary_slider').slick({
		infinite: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		mobileFirst: true,
		prevArrow: '<svg class="slick-prev" width="72" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="path" d="M0.5 20C0.5 14.7412 4.3427 9.8751 10.787 6.29494C17.2143 2.7242 26.1275 0.5 36 0.5C45.8725 0.5 54.7857 2.7242 61.213 6.29494C67.6573 9.8751 71.5 14.7412 71.5 20C71.5 25.2588 67.6573 30.1249 61.213 33.7051C54.7857 37.2758 45.8725 39.5 36 39.5C26.1275 39.5 17.2143 37.2758 10.787 33.7051C4.3427 30.1249 0.5 25.2588 0.5 20Z" fill="#E7F2E5" stroke="#161616"/><path d="M56 20L16.5195 20M23.7922 28C20.2757 21.9048 17.9181 21.2191 16 20C21.9369 16.3898 22.6048 13.9692 23.7922 12" stroke="#161616"/></svg>',
		nextArrow: '<svg class="slick-next" width="72" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="path" d="M71.5 20C71.5 25.2588 67.6573 30.1249 61.213 33.7051C54.7857 37.2758 45.8725 39.5 36 39.5C26.1275 39.5 17.2143 37.2758 10.787 33.7051C4.3427 30.1249 0.5 25.2588 0.5 20C0.5 14.7412 4.3427 9.8751 10.787 6.29494C17.2143 2.7242 26.1275 0.5 36 0.5C45.8725 0.5 54.7857 2.7242 61.213 6.29494C67.6573 9.8751 71.5 14.7412 71.5 20Z" fill="#E7F2E5" stroke="#161616"/><path d="M16 20L55.4805 20M48.2078 12C51.7243 18.0952 54.0819 18.7809 56 20C50.0631 23.6102 49.3952 26.0308 48.2078 28" stroke="#161616"/></svg>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false,
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: true,
				}
			}
		]
	});


	$('.accordion-item .heading').on('click', function(e) {
		e.preventDefault();

		if($(this).closest('.accordion-item').hasClass('active')) {
			$('.accordion-item').removeClass('active');
		} else {
			$('.accordion-item').removeClass('active');
			$(this).closest('.accordion-item').addClass('active');
		}

		var $content = $(this).next();
		$content.slideToggle(200);
		$('.accordion-item .content').not($content).slideUp('fast');

		$('.content-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			dots: false,
			arrows: true,
			prevArrow: '<svg class="slick-prev" width="72" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="path" d="M0.5 20C0.5 14.7412 4.3427 9.8751 10.787 6.29494C17.2143 2.7242 26.1275 0.5 36 0.5C45.8725 0.5 54.7857 2.7242 61.213 6.29494C67.6573 9.8751 71.5 14.7412 71.5 20C71.5 25.2588 67.6573 30.1249 61.213 33.7051C54.7857 37.2758 45.8725 39.5 36 39.5C26.1275 39.5 17.2143 37.2758 10.787 33.7051C4.3427 30.1249 0.5 25.2588 0.5 20Z" fill="#E7F2E5" stroke="#161616"/><path d="M56 20L16.5195 20M23.7922 28C20.2757 21.9048 17.9181 21.2191 16 20C21.9369 16.3898 22.6048 13.9692 23.7922 12" stroke="#161616"/></svg>',
			nextArrow: '<svg class="slick-next" width="72" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="path" d="M71.5 20C71.5 25.2588 67.6573 30.1249 61.213 33.7051C54.7857 37.2758 45.8725 39.5 36 39.5C26.1275 39.5 17.2143 37.2758 10.787 33.7051C4.3427 30.1249 0.5 25.2588 0.5 20C0.5 14.7412 4.3427 9.8751 10.787 6.29494C17.2143 2.7242 26.1275 0.5 36 0.5C45.8725 0.5 54.7857 2.7242 61.213 6.29494C67.6573 9.8751 71.5 14.7412 71.5 20Z" fill="#E7F2E5" stroke="#161616"/><path d="M16 20L55.4805 20M48.2078 12C51.7243 18.0952 54.0819 18.7809 56 20C50.0631 23.6102 49.3952 26.0308 48.2078 28" stroke="#161616"/></svg>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 320,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});

	});


	let mouseCursor = document.querySelector('.cursor');
	function cursor(e) {
		mouseCursor.style.top = e.pageY + "px";
		mouseCursor.style.left = e.pageX + "px";
	}
	if (window.screen.width > 990) {
		window.addEventListener('mousemove', cursor);
	}

	$('.accordion-item .heading').on('mouseover', () => {
		$('body').addClass('cursor-body');
		$('.cursor').addClass('active-cursor');
	});
	$('.accordion-item .heading').on('mouseout ', () => {
		$('.cursor').removeClass('active-cursor');
		$('body').removeClass('cursor-body');
	});

	$('.popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300, 
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.rewiews_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<svg class="slick-prev" width="72" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="path" d="M0.5 20C0.5 14.7412 4.3427 9.8751 10.787 6.29494C17.2143 2.7242 26.1275 0.5 36 0.5C45.8725 0.5 54.7857 2.7242 61.213 6.29494C67.6573 9.8751 71.5 14.7412 71.5 20C71.5 25.2588 67.6573 30.1249 61.213 33.7051C54.7857 37.2758 45.8725 39.5 36 39.5C26.1275 39.5 17.2143 37.2758 10.787 33.7051C4.3427 30.1249 0.5 25.2588 0.5 20Z" fill="#E7F2E5" stroke="#161616"/><path d="M56 20L16.5195 20M23.7922 28C20.2757 21.9048 17.9181 21.2191 16 20C21.9369 16.3898 22.6048 13.9692 23.7922 12" stroke="#161616"/></svg>',
		nextArrow: '<svg class="slick-next" width="72" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="path" d="M71.5 20C71.5 25.2588 67.6573 30.1249 61.213 33.7051C54.7857 37.2758 45.8725 39.5 36 39.5C26.1275 39.5 17.2143 37.2758 10.787 33.7051C4.3427 30.1249 0.5 25.2588 0.5 20C0.5 14.7412 4.3427 9.8751 10.787 6.29494C17.2143 2.7242 26.1275 0.5 36 0.5C45.8725 0.5 54.7857 2.7242 61.213 6.29494C67.6573 9.8751 71.5 14.7412 71.5 20Z" fill="#E7F2E5" stroke="#161616"/><path d="M16 20L55.4805 20M48.2078 12C51.7243 18.0952 54.0819 18.7809 56 20C50.0631 23.6102 49.3952 26.0308 48.2078 28" stroke="#161616"/></svg>',
	});

})
