'use strict';

const vertexShader = `
	precision lowp float;

	uniform float time;
	uniform float waveLength;
	varying vec2 vUv;
	varying vec4 vPosition;

	void main() {
		vUv = uv;

		float vWave = sin(time + (position.x + position.y) * waveLength);

		gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, vWave * 0.015, 1.);
	}
`;

export default vertexShader;