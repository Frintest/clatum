'use strict';

import * as THREE from '../three/three.module.js';
import vertex from './shaders/vertex.glsl.js';
import fragment from './shaders/fragment.glsl.js';

const canvasAll = document.querySelectorAll('.webgl').forEach((canvas) => {
	const init = () => {
		// ? ======= variables =======
		let scene, renderer, camera;

		scene = new THREE.Scene();
		scene.background = new THREE.Color(0xffffff);

		renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true
		});

		renderer.setSize(350, 350);
		renderer.setPixelRatio(window.devicePixelRatio);

		camera = new THREE.PerspectiveCamera(70, 350 / 350);
		camera.position.set(0, 0, 0.74);

		// ? ======= hover canvas =======
		let hover = 0;

		canvas.addEventListener('mouseover', () => {
			hover = 1;
		});

		canvas.addEventListener('mouseout', () => {
			hover = 0;
		});

		// ? ======= texture =======
		let plane, material, texture;

		switch (canvas.dataset.id) {
			case 'shroedinger-cat':
				texture = new THREE.TextureLoader().load('./img/shroedinger-cat.png');
				break;
			case 'electron-diffraction':
				texture = new THREE.TextureLoader().load('./img/electron-diffraction.png');
				break;

			case 'heated-fullerenes':
				texture = new THREE.TextureLoader().load('./img/heated-fullerenes.png');
		}

		material = new THREE.ShaderMaterial({
			uniforms: {
				time: {
					type: 'f',
					value: 0
				},
				waveLength: {
					type: 'f',
					value: 3
				},
				imageAsset: {
					type: 't',
					value: texture
				},
				hover: {
					type: 'f',
					value: hover
				}
			},
			vertexShader: vertex,
			fragmentShader: fragment
		});
		plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 64, 64), material);
		scene.add(plane);

		// ? ======= resize =======
		const resize = () => {
			window.addEventListener('resize', () => {
				const w = 350;
				const h = 350;
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
		let time = 0;

		const animate = () => {
			time += 0.05;
			material.uniforms.time.value = time;
			material.uniforms.hover.value = hover;

			requestAnimationFrame(animate);
			render();
		};

		animate();
	}

	init();
});