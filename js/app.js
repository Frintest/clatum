import * as THREE from '../three/build/three.module.js';

// ***** sizes *****
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
};

// ***** scene, camera, renderer *****
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfcfcfc);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 17);

const canvas = document.querySelector('.page-main-block__canvas');

const renderer = new THREE.WebGLRenderer({
	canvas,
	antialias: true
});
renderer.setSize(sizes.width, sizes.height);

// ***** loader rorus *****
const geometry = new THREE.TorusGeometry(4, 2, 30, 50);
const material = new THREE.MeshPhongMaterial({
	color: 0x000000
});
const torus = new THREE.Mesh(geometry, material);

const width = window.innerWidth;

if (width > 520) {
	scene.add(torus);
}


// ***** light *****
const directionalLight = new THREE.DirectionalLight(0xcccccc);
scene.add(directionalLight);
directionalLight.position.set(0, 0, 30);

const spotLight = new THREE.SpotLight(0xcccccc, 1.5);
scene.add(spotLight);

// ***** window resize *****
const onWindowResize = () => {
	window.addEventListener('resize', () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	});
};

onWindowResize();

// ***** render function *****

const animate = () => {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	torus.rotation.y -= 0.01;

	spotLight.position.set(
		camera.position.x + 20,
		camera.position.y + 20,
		camera.position.z + 20
	);
};

animate();