'use strict';

const fragmentShader = `
	precision lowp float;

	uniform float time;
	uniform sampler2D imageAsset;
	uniform float hover;
	varying vec2 vUv;

	void main() {
		vec4 img = texture2D(imageAsset, vUv);
		gl_FragColor = img;

		float r = gl_FragColor.r;
		float g = gl_FragColor.g;
		float b = gl_FragColor.b;

		if (hover == 0.) {
			gl_FragColor.r = (r + g + b) / 3.;
			gl_FragColor.g = (r + g + b) / 3.;
			gl_FragColor.b = (r + g + b) / 3.;
		}

		if (hover == 1.) {
			gl_FragColor.r = r;
			gl_FragColor.g = g;
			gl_FragColor.b = b;
		}
	}
`;

export default fragmentShader;