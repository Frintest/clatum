'use strict';

const onPageMainBlockResize = () => {
	const sectionPageMainBlock = document.querySelector('.page-main-block');
	const pageHeaderContainer = document.querySelector('.page-header__container');

	if (sectionPageMainBlock) {
		sectionPageMainBlock.style.height = `${window.innerHeight - pageHeaderContainer.clientHeight - pageHeaderContainer.offsetTop}px`;

		window.addEventListener('resize', () => {
			sectionPageMainBlock.style.height = `${window.innerHeight - pageHeaderContainer.scrollHeight - pageHeaderContainer.offsetTop}px`;
		});
	}
};

export {
	onPageMainBlockResize
};