<script>
	import { main, destroy } from '../lib/3d/scene_contact.js';
	import { onDestroy, onMount } from 'svelte';
	import linkedin from '../lib/3d/models/linkedin.js';
	import github from "../lib/3d/models/github.js";
	import discord from "../lib/3d/models/discord.js";

	let el;

	onMount(() => {
		main(el, window, { linkedin: linkedin, github: github, discord: discord });
		console.log('in');
	});

	onDestroy(() => {
		destroy();
		console.log('out');
	});
</script>

<svelte:head>
	<title>Portfolio | Contact</title>
	<meta name="description" content="Send me a message" />
</svelte:head>

<section>
	<canvas bind:this={el} />
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
		background: #11e8bb; /* Old browsers */
		background: -moz-linear-gradient(top, #11e8bb 0%, #8200c9 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(
			top,
			#11e8bb 0%,
			#8200c9 100%
		); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(
			to bottom,
			#11e8bb 0%,
			#8200c9 100%
		); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
</style>
