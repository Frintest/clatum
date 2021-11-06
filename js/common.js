// window.onload = () => {
// 	const parallax = document.querySelector('.page-main-block');

// 	if (parallax) {
// 		const bg = document.querySelector('.page-main-block__bg');

// 		const forTriangle = 10;
// 		const speed = 0.05;

// 		let positionX = 0, positionY = 0;
// 		let coordXprocent = 0, coordYprocent = 0;

// 		const setMouseParallaxStyle = () => {
// 			const distX = coordXprocent - positionX;
// 			const distY = coordYprocent - positionY;

// 			positionX += (distX * speed);
// 			positionY += (distY * speed);

// 			bg.style.cssText = `transform: translate(${positionX / forTriangle}%,${positionY / forTriangle}%);`;

// 			requestAnimationFrame(setMouseParallaxStyle);
// 		};

// 		setMouseParallaxStyle();
// 	}
	
// 	parallax.addEventListener('mousemove', (event) => {
// 		const parallaxWidth = parallax.offsetWidth;
// 		const parallaxHeight = parallax.offsetHeight;

// 		const coordX = event.pageX - parallaxWidth / 2;
// 		const coordY = event.pageY - parallaxHeight / 2;

// 		coordXprocent = coordX / parallax * 100;
// 		coordYprocent = coordY / parallax * 100;
// 	});
// }


// const pageMainBlock = document.querySelector('.page-main-block');
// pageMainBlock.style.height = `${window.innerHeight}`;

// const moveMouse = (e) => {
// 	const cursor = document.querySelector('.cursor');

// 	const x = e.clientX;
// 	const y = e.clientY;

// 	cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
// };

// document.addEventListener('mousemove', moveMouse);
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', (e) => {
// 	cursor.setAttribute("style", "top:" + (e.clientX - 10) + "px; left:" + (e.pageX - 10) + "px");
// });

/* efefe6 */


// import {
// 	GLTFLoader
// } from '../three/examples/jsm/loaders/GLTFLoader.js';

// const loader = new GLTFLoader();
// loader.load('../models/scene.gltf', (gltf) => {
// 	scene.add(gltf.scene);
// });