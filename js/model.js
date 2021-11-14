import * as THREE from '../three/three.module.js';
import {
	GLTFLoader
} from '../three/GLTFLoader.js';

let scene, camera, renderer, canvas, sizes;

function init() {
	// ===== variables =====
	sizes = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xfcf6f6);

	camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
	camera.position.set(0, 0, 0.8);

	canvas = document.querySelector('.webgl');

	renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		antialias: true
	});

	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2);

	// ===== loaderModel =====
	let model = null;

	const loader = new GLTFLoader();
	loader.load('./models/bust.glb', (glb) => {
		model = glb.scene.children[0];
		model.position.y = -0.03;
		model.rotation.z = 2;

		scene.add(model);
	});

	// ===== spotLight =====
	const spotLight = new THREE.SpotLight(0xf7f7e8, 1.3);
	spotLight.position.set(1, 1, 10);
	scene.add(spotLight);

	// ===== onWindowResize =====
	const onWindowResize = () => {
		window.addEventListener('resize', () => {
			// ? update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// ? update camera
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			// ? update renderer
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2);
		});
	};

	onWindowResize();

	// ===== animate =====
	const animate = () => {
		requestAnimationFrame(animate);

		model.rotation.z -= 0.005;

		renderer.render(scene, camera);
	};

	animate();
}

init();