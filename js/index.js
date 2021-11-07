// function headerMenuActive
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

headerMenuActive();


// function onPageMainBlockResize
const onPageMainBlockResize = () => {
	const pageMainBlock = document.querySelector('.page-main-block');
	const pageHeaderContainer = document.querySelector('.page-header__container');
	pageMainBlock.style.height = `${window.innerHeight - pageHeaderContainer.clientHeight - pageHeaderContainer.offsetTop}px`;

	window.addEventListener('resize', () => {
		pageMainBlock.style.height = `${window.innerHeight - pageHeaderContainer.scrollHeight - pageHeaderContainer.offsetTop}px`;
	});
};

onPageMainBlockResize();


// function playVideoPhysics
const playVideoPhysics = () => {
	const videos = document.querySelectorAll('.page-physics__video');
	const videoPlayerWrap = document.querySelector('.page-physics__video-player-wrap');
	const videoPlayerWrapClassic = document.querySelector('.page-physics__video-player-wrap>video[data-id="classic"]');
	const videoPlayerWrapQuantum = document.querySelector('.page-physics__video-player-wrap>video[data-id="quantum"]');
	const btnPlayerExit = document.querySelector('.player__btn-icon');

	videos.forEach((video) => {
		video.addEventListener('click', () => {
			videoPlayerWrap.classList.add('active');

			if (video.dataset.id == 'classic') {
				videoPlayerWrapClassic.style.display = 'block';
			}

			if (video.dataset.id == 'quantum') {
				videoPlayerWrapQuantum.style.display = 'block';
			}

			document.body.classList.add('lock');

			btnPlayerExit.addEventListener('click', () => {
				document.body.classList.remove('lock');
				videoPlayerWrap.classList.remove('active');
				videoPlayerWrapClassic.style.display = 'none';
				videoPlayerWrapQuantum.style.display = 'none';
			});
		});
	});
};

playVideoPhysics();


// function playExpertOpinion
const playExpertOpinion = () => {
	const btn = document.querySelector('.page-expert-opinion__btn');
	const play = document.querySelector('.page-expert-opinion__play');
	const pause = document.querySelector('.page-expert-opinion__pause');

	play.style.display = 'block';
	pause.style.display = 'none';

	btn.addEventListener('click', () => {
		if (play.style.display == 'block') {
			play.style.display = 'none';
			pause.style.display = 'block';
		} else {
			play.style.display = 'block';
			pause.style.display = 'none';
		}
	});
};

playExpertOpinion();


// function addTargetLink
const addTargetLink = () => {
	document.querySelectorAll('a.target').forEach((link) => {
		link.setAttribute('target', '_blank');
	});
}

addTargetLink();