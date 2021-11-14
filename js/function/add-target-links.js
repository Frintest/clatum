const addTargetLinks = () => {
	const anchor = document.querySelectorAll('a.target');

	if (anchor) {
		anchor.forEach((link) => {
			link.setAttribute('target', '_blank');
		});
	}
}

export {
	addTargetLinks
};