'use strict';

import * as THREE from '../three/three.module.js';
import {
	GLTFLoader
} from '../three/GLTFLoader.js';

const init = () => {
	// ? ======= variables =======
	let scene, camera, renderer, canvas;

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xfcf6f6);

	canvas = document.querySelector('.webgl');

	renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		antialias: true
	});

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);

	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
	camera.position.set(0, 0, 0.9);

	// ? ======= loaderModel =======
	let model = null;

	const loader = new GLTFLoader();
	loader.load('./models/bust.glb', (glb) => {
		model = glb.scene.children[0];
		model.position.y = -0.03;
		model.rotation.z = 2;

		scene.add(model);
	});

	// ? ======= spotLight =======
	const spotLight = new THREE.SpotLight(0xf7f7e8, 1.3);
	spotLight.position.set(1, 1, 10);
	scene.add(spotLight);

	// ? ======= resize =======
	const resize = () => {
		window.addEventListener('resize', () => {
			const w = window.innerWidth;
			const h = window.innerHeight;
			renderer.setSize(w, h);
			camera.aspect = w / h;

			camera.updateProjectionMatrix();
		});
	};

	resize();

	// ? ======= render =======
	const render = () => {
		renderer.render(scene, camera);
	};

	// ? ======= animate =======
	const animate = () => {
		requestAnimationFrame(animate);

		model.rotation.z -= 0.005;

		render();
	};

	animate();
}

init();