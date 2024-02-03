'use strict';

const playVideoPhysics = () => {
	const sectionPhysics = document.querySelector('.page-physics');

	if (sectionPhysics) {
		const videos = document.querySelectorAll('.page-physics__video');
		const videoPlayer = document.querySelector('.page-physics__video-player');
		const videoPlayerWrap = document.querySelector('.page-physics__video-player-wrap');
		const btnPlayerExit = document.querySelector('.page-physics__btn-exit');

		const srcVideo = [
			'./video/classic.mp4',
			'./video/quantum.mp4'
		];

		videos.forEach((video) => {
			video.addEventListener('click', () => {
				videoPlayerWrap.classList.add('active');
				document.body.classList.add('lock');

				videoPlayer.style.display = 'block';

				if (video.dataset.id == 'classic') {
					videoPlayer.setAttribute('src', srcVideo[0]);
				}

				if (video.dataset.id == 'quantum') {
					videoPlayer.setAttribute('src', srcVideo[1]);
				}

				videoPlayer.play();

				btnPlayerExit.addEventListener('click', () => {
					document.body.classList.remove('lock');
					videoPlayerWrap.classList.remove('active');

					videoPlayer.pause();
					videoPlayer.style.display = 'none';
				});
			});
		});
	}
};

export {
	playVideoPhysics
};