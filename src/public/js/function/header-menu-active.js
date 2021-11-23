'use strict';

const headerMenuActive = () => {
	const iconMenu = document.querySelector('.page-header__icon');
	const menuBody = document.querySelector('.menu__body');
	const links = document.querySelectorAll('.menu__list>li>.menu__link');

	if (iconMenu) {
		iconMenu.addEventListener('click', () => {
			document.body.classList.toggle('lock');
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});

		links.forEach((link) => {
			link.addEventListener('click', () => {
				if (iconMenu.classList.contains('active')) {
					document.body.classList.remove('lock');
					iconMenu.classList.remove('active');
					menuBody.classList.remove('active');
				}
			});
		});
	}
};

export {
	headerMenuActive
};