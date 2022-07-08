<script>
	import { main } from '../lib/3d/scene_contact.js';
	import { onMount } from 'svelte';

	let el;

	onMount(() => {
		main(el, window);
		console.log('in');
	});
</script>

<svelte:head>
	<title>Portfolio | Contact</title>
	<meta name="description" content="Send me a message" />
</svelte:head>

<section>
	<canvas bind:this={el} />
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
</style>
