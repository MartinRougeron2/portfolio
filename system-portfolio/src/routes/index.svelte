<script>
	import { onDestroy, onMount } from "svelte";
	import { createScene, destroy } from '../lib/3d/scene_index.js';
	import Project from '../lib/Project.svelte';
	import bomb from '$lib/3d/models/bomb.js';
	import cap from '$lib/3d/models/cap.js';
	import chart from '$lib/3d/models/chart.js';
	import chip from '$lib/3d/models/chip.js';
	import phone from '$lib/3d/models/phone.js';
	//import pizza from '$lib/3d/models/pizza.js';
	import sword from '$lib/3d/models/sword.js';
	import web from '$lib/3d/models/web.js';
	import bag from '$lib/3d/models/travel_bag.js';
	import * as Sentry from '@sentry/browser';
	import { BrowserTracing } from '@sentry/tracing';

	let el;
	let animation = true;
	let display = 'display: none';
	let displayLoading = 'display: inline';
	let loadingText = 'Reaching the planets';

	class ProjectDecoration {
		constructor(model, position, scale, project_index) {
			this.model = model;
			this.position = position;
			this.scale = scale;
			this.project_index = project_index;
		}
	}

	const models = [
		new ProjectDecoration(bomb, { x: 0, y: 9, z: 0 }, 15, 4),
		new ProjectDecoration(sword, { x: -4, y: 6.5, z: -4 }, 0.5, 1),
		new ProjectDecoration(web, { x: 0, y: 7, z: 0 }, 1, 0),
		new ProjectDecoration(phone, { x: 0, y: 6, z: 0 }, 1, 2),
		new ProjectDecoration(chart, { x: 0, y: 6, z: 0 }, 10, 3),
		new ProjectDecoration(chip, { x: -3, y: -3, z: 22 }, 0.2, 5),
		//new ProjectDecoration(pizza, { x: 0, y: 6, z: 0 }, 1, 6),
		new ProjectDecoration(cap, { x: 0, y: 10, z: 0 }, 2, -1),
		new ProjectDecoration(bag, { x: 0, y: 8, z: 0 }, 4, 7),
	];

	onMount(() => {
		Sentry.init({
			dsn: 'https://dd9ebc11dc764361a9445b261d535b23@o1322275.ingest.sentry.io/6579376',
			integrations: [new BrowserTracing()],

			// Set tracesSampleRate to 1.0 to capture 100%
			// of transactions for performance monitoring.
			// We recommend adjusting this value in production
			tracesSampleRate: 1.0,
			maxBreadcrumbs: 1000,
			beforeBreadcrumb(breadcrumb, hint) {
				if (breadcrumb.category === 'fetch') {
					return null;
				}
				return breadcrumb;
			}
		});
		createScene(el, window, document, models);
	});

	const load = setInterval(() => {
		loadingText += '.';
	}, 50);

	setTimeout(() => {
		animation = false;
	}, 4000);

	setTimeout(() => {
		displayLoading = display;
		display = 'display: block';
		clearInterval(load);
	}, 60);

	onDestroy(() => {
		destroy()
	});
</script>

<svelte:head>
	<title>Martin Rougeron Portfolio</title>
	<meta name="description" content="Martin Rougeron Portfolio. This is my portfolio showcasing my projects and skills. You can find my contact information and my social media links.">
	<meta name="keywords" content="Martin Rougeron, Portfolio, Projects, Skills, Contact, Social Media">
	<meta name="author" content="Martin Rougeron">
</svelte:head>

<section>
	<div>
		<div class="loading" style={displayLoading}>
			{loadingText}
		</div>
		<div style={display}>
			<canvas bind:this={el}></canvas>
		</div>
		<div style={animation ? 'display: none' : ''}>
			<Project />
		</div>
	</div>
</section>

<style>
	div {
		width: 100vw;
		height: 100vh;
		background: #11e8bb;
		background: -moz-linear-gradient(top, #11e8bb 0%, #8200c9 100%);
		background: -webkit-linear-gradient(top, #11e8bb 0%, #8200c9 100%);
		background: radial-gradient(circle, rgba(238, 174, 202, 0.52) 0%, rgba(148, 187, 233, 1) 100%);
		overflow: hidden;
	}

	.loading {
		position: absolute;
		left: calc(50vw - 200px);
		right: auto;
		top: 50vh;
		text-align: center;
		background: transparent;
		width: 400px;
		height: 200px;
		color: white;
		font-weight: 900;
		font-size: 1.6rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
	}
</style>
