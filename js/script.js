window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__menu'),
	menuItem = document.querySelectorAll('.menu_item'),
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		menu.classList.toggle('header__menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.toggle('header__menu_active');
		})
	})
})