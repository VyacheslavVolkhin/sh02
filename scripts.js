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
	
});