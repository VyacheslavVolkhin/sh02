//js popup wrap
const togglePopupButtons = document.querySelectorAll('.js-btn-popup-toggle')
const closePopupButtons = document.querySelectorAll('.js-btn-popup-close')
const popupElements = document.querySelectorAll('.js-popup-wrap')
const wrapWidth = document.querySelector('.wrap').offsetWidth
const bodyElem = document.querySelector('body')

function popupElementsClear() {
	document.body.classList.remove('menu-show')
	document.body.classList.remove('filter-show')
	document.body.classList.remove('search-show')
	popupElements.forEach(element => element.classList.remove('popup-right'))
}

function popupElementsClose() {
	togglePopupButtons.forEach(element => {
		if (!element.closest('.no-close')) {
			element.classList.remove('active')
		}
	})
}

function popupElementsContentPositionClass() {
	popupElements.forEach(element => {
		let pLeft = element.offsetLeft
		let pWidth = element.querySelector('.js-popup-block').offsetWidth
		let pMax = pLeft + pWidth;
		if (pMax > wrapWidth) {
			element.classList.add('popup-right')
		} else {
			element.classList.remove('popup-right')
		}
	})
}

for (i = 0; i < togglePopupButtons.length; i++) {
	togglePopupButtons[i].addEventListener('click', function (e) {
		popupElementsClear()
		if (this.classList.contains('active')) {
			this.classList.remove('active')
		} else {
			popupElementsClose()
			this.classList.add('active')
			if (this.closest('.popup-menu-wrap')) {
				document.body.classList.add('menu-show')
			}
			if (this.closest('.popup-search-wrap')) {
				document.body.classList.add('search-show')
			}
			if (this.closest('.popup-filter-wrap')) {
				document.body.classList.add('filter-show')
			}
			popupElementsContentPositionClass()
		}
		e.preventDefault()
		e.stopPropagation()
		return false
	})
}
for (i = 0; i < closePopupButtons.length; i++) {
	closePopupButtons[i].addEventListener('click', function (e) {
		popupElementsClear()
		popupElementsClose()
		e.preventDefault()
		e.stopPropagation()
		return false;
	})
}
document.onclick = function (event) {
	if (!event.target.closest('.js-popup-block')) {
		popupElementsClear()
		popupElementsClose()
	}
}
popupElements.forEach(element => {
	if (element.classList.contains('js-popup-select')) {
		let popupElementSelectItem = element.querySelectorAll('.js-popup-block li a')
		if (element.querySelector('.js-popup-block .active')) {
			element.classList.add('select-active')
			let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
			let popupElementButton = element.querySelector('.js-btn-popup-toggle')
			popupElementButton.innerHTML = ''
			popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
		} else {
			element.classList.remove('select-active')
		}
		for (i = 0; i < popupElementSelectItem.length; i++) {
			popupElementSelectItem[i].addEventListener('click', function (e) {
				this.closest('.js-popup-wrap').classList.add('select-active')
				if (this.closest('.js-popup-wrap').querySelector('.js-popup-block .active')) {
					this.closest('.js-popup-wrap').querySelector('.js-popup-block .active').classList.remove('active')
				}
				this.classList.add('active')
				let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
				let popupElementButton = element.querySelector('.js-btn-popup-toggle')
				popupElementButton.innerHTML = ''
				popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
				popupElementsClear()
				popupElementsClose()
				if (!this.closest('.js-tabs-nav')) {
					e.preventDefault()
					e.stopPropagation()
					return false
				}
			})
		}
	}
})


$(window).on('load', function () {



	//main-tiles-box
	if (!!$('.main-tiles-box .slider-mobile').offset()) {
		$('.main-tiles-box .slider-mobile .slider').slick({
			dots: true,
			slidesToShow: 4,
			variableWidth: false,
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
					breakpoint: 1400,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						variableWidth: true,
					}
				},
			]
		});
	}

	
	//main-tiles-box
	if (!!$('.main-tiles-box .slider-reviews').offset()) {
		$('.main-tiles-box .slider-reviews .slider').slick({
			dots: false,
			slidesToShow: 1,
			variableWidth: false,
			infinite: true,
			adaptiveHeight: true,
			rows: 1,
			swipeToSlide: true,
			autoplay: false,
			autoplaySpeed: 5000,
			prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
			nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
		});

	}

	//main-tiles-box
	if (!!$('.main-tiles-box .slider-teams').offset()) {
		$('.main-tiles-box .slider-teams .slider').slick({
			dots: false,
			slidesToShow: 5,
			variableWidth: false,
			infinite: true,
			adaptiveHeight: false,
			rows: 1,
			swipeToSlide: true,
			autoplay: false,
			autoplaySpeed: 5000,
			prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
			nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
			responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});

	}

	//main-tiles-box
	if (!!$('.main-tiles-box .slider-logos').offset()) {
		$('.main-tiles-box .slider-logos .slider').slick({
			dots: true,
			slidesToShow: 5,
			variableWidth: false,
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
				{
					breakpoint: 1024,
					settings: {
						dots: false,
						prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
						nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 768,
					settings: {
						dots: false,
						prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
						nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 640,
					settings: {
						dots: false,
						prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
						nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots: false,
						prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
						nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
						slidesToShow: 1,
					}
				},
			]
		});

	}
});