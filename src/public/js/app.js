'use strict';

import {
	headerMenuActive
} from './function/header-menu-active.js';

import {
	onPageMainBlockResize
} from './function/on-page-main-block-resize.js';

import {
	playVideoPhysics
} from './function/play-video-physics.js';

import {
	playExpertOpinion
} from './function/play-expert-opinion.js';

import {
	toggleExperimentText
} from './function/toggle-experiment-text.js';

import {
	addTargetLinks
} from './function/add-target-links.js';

headerMenuActive();
onPageMainBlockResize();
playVideoPhysics();
playExpertOpinion();
toggleExperimentText();
addTargetLinks();