<script>
	import { main, destroy } from '../lib/3d/scene_contact.js';
	import { onDestroy, onMount } from 'svelte';
	import linkedin from '../lib/3d/models/linkedin.js';
	import github from '../lib/3d/models/github.js';
	import discord from '../lib/3d/models/discord.js';
	import rocket from '../lib/3d/models/rocket.js';
	import * as Sentry from '@sentry/browser';
	import { BrowserTracing } from '@sentry/tracing';

	let el;

	onMount(() => {
		main(el, window, {
			Linkedin: linkedin, Github: github, Discord: discord, rocket: rocket
		});
		Sentry.init({
			dsn: 'https://dd9ebc11dc764361a9445b261d535b23@o1322275.ingest.sentry.io/6579376',
			integrations: [new BrowserTracing()],
			tracesSampleRate: 1.0,
			maxBreadcrumbs: 1000,
			beforeBreadcrumb(breadcrumb, hint) {
				if (breadcrumb.category === 'fetch') {
					return null;
				}
				return breadcrumb;
			}
		});
	});

	onDestroy(() => {
		destroy();
	});
</script>

<svelte:head>
	<title>Portfolio | Contact</title>
	<meta name="description" content="Send me a message" />
</svelte:head>

<section>
	<canvas bind:this={el}></canvas>
	<div class="media 2xl:invisible xl:invisible lg:invisible">
		<a
			class="my-5"
			href="https://www.linkedin.com/signup/public-profile-join?vieweeVanityName=martin-rougeron-495b86171&trk=public_profile-settings_top-card-primary-button-join-to-connect"
			>Linkedin</a
		><br /><br />
		<a class="my-5" href="https://github.com/MartinRougeron2/">Github</a><br /><br />
		<a class="my-5" href="https://discord.gg/Zu7aJUsdTK">Discord</a>
	</div>
</section>

<style>
	section {
		width: 100vw;
		height: 100vh;
		background: #11e8bb;
		background: -moz-linear-gradient(top, #11e8bb 0%, #8200c9 100%);
		background: -webkit-linear-gradient(top, #11e8bb 0%, #8200c9 100%);
		background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
		overflow: hidden;
	}

	.media {
		position: absolute;
		bottom: 10vh;
		left: calc(50vw - 60px);
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-backdrop-filter: blur(10px);
		font-weight: 900;
		font-size: 1.6rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
	}

	@media only screen and (max-width: 800px) {
		.media {
			bottom: 20px;
		}
	}
</style>
