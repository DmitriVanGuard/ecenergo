(function(){
	if(document.querySelector('.slider')){
	var visible = document.querySelector('.slider__visible'),
		item_width = document.querySelector('.slider__item').clientWidth,
		list = document.querySelector('.slider__list'),
		items = list.children,
		btns = document.querySelectorAll('.slider__link'),
		current_item = 0;
	list.style.width = item_width * items.length + 'px';
	visible.style.width = item_width + 'px';

	for(var i = 0; i < btns.length; i++){
		btns[i].setAttribute('data-href', i);
		btns[i].addEventListener('click', function(e){
			e.preventDefault();
			btns[current_item].classList.remove('slider__link_active');
			items[current_item].classList.remove('slider__item_active');
			current_item = this.getAttribute('data-href');
			changeActive();
		});
	}

	function changeActive(){
		btns[current_item].classList.add('slider__link_active');
		items[current_item].classList.add('slider__item_active');
		var result = -item_width * current_item;
		slide(result);
	}
	function slide(amount){
		list.style.transform='translate3d('+ amount +'px,0,0)';
	}
}
})();