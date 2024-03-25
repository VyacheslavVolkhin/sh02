//btn tgl
let tglButtons = document.querySelectorAll('.js-btn-tgl')
for (i = 0;i < tglButtons.length;i++) {
	tglButtons[i].addEventListener('click', function(e) {
		this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
		e.preventDefault()
		e.stopPropagation()
		return false
	})
}


$(document).ready(function(){
	
	
	//main-tiles-box
	if (!!$('.main-tiles-box .slider-categories').offset()) {
		$('.main-tiles-box .slider-categories .slider').slick({
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			touchThreshold: 100,
			variableWidth: true,
			infinite: true,
			adaptiveHeight: false,
			rows: 1,
			swipeToSlide: true,
			autoplay: false,
			autoplaySpeed: 5000,
			prevArrow: false,
			nextArrow: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},
			]
		});
		
	}

	//item-tile-catalog-main
	if (!!$('.item-tile-catalog-main').offset()) {
		$('.item-tile-catalog-main .tile-slider').slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			touchThreshold: 100,
			variableWidth: false,
			infinite: true,
			adaptiveHeight: false,
			rows: 1,
			swipeToSlide: true,
			autoplay: false,
			autoplaySpeed: 5000,
			prevArrow: false,
			nextArrow: false,
		});
		
	}


	//gallery slider
	if (!!$('.photos-slider-box').offset()) {
		let pSlider = $('.photos-slider-box .slider-wrap .slider').slick({
			dots: false,
			slidesToShow: 1,
			infinite: false,
			prevArrow: false,
			nextArrow: false,
		});
		let pSliderPreview = $('.photos-slider-box .slider-preview-wrap .slider').slick({
			dots: false,
			slidesToShow: 4,
			vertical: false,
			infinite: true,
			prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
			nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
					}
				},
				{
					breakpoint: 640,
					settings: {
					}
				},
			]
		});
		//pSlider.slick('refresh');
		//pSliderPreview.slick('refresh');
		$('.photos-slider-box .slider-wrap .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			$('.photos-slider-box .slider-preview-wrap .sl-wrap.active').removeClass('active');
			$('.photos-slider-box .slider-preview-wrap .elm-photo[data-slide="' + currentSlide + '"]').parent().addClass('active');
		});
		$('.photos-slider-box .slider-preview-wrap .slider .elm-photo').click(function () {
			let newSlide = $(this).attr('data-slide');
			$('.photos-slider-box .slider-preview-wrap .sl-wrap.active').removeClass('active');
			$(this).parent().addClass('active');
			$('.photos-slider-box .slider-wrap .slider').slick('slickGoTo', newSlide);
			return false;
		})
		$('.photos-slider-box .elm-photo[data-slide="0"]').parent('.sl-wrap').addClass('active');
	}
	
});