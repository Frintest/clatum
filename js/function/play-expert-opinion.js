const playExpertOpinion = () => {
	const sectionExpertOpinion = document.querySelector('.page-expert-opinion');

	if (sectionExpertOpinion) {
		const btn = document.querySelector('.page-expert-opinion__btn');
		const play = document.querySelector('.page-expert-opinion__play');
		const pause = document.querySelector('.page-expert-opinion__pause');

		const audio = new Audio('/audio/opinion.mp3');
		const volume = document.querySelector('.page-expert-opinion__volume-track');

		audio.volume = Number(volume.value) / 100;

		volume.addEventListener('input', () => {
			audio.volume = Number(volume.value) / 100;
		});

		play.style.display = 'block';
		pause.style.display = 'none';

		btn.addEventListener('click', () => {
			if (play.style.display == 'block') {
				play.style.display = 'none';
				pause.style.display = 'block';

				audio.play();
			} else {
				play.style.display = 'block';
				pause.style.display = 'none';

				audio.pause();
			}
		});
	}
};

export {
	playExpertOpinion
};