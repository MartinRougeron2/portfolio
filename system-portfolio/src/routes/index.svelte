<script>
	import { onMount } from 'svelte';
	import { createScene } from './scene';
	import Project from '../lib/Project.svelte';
	let el;
	let animation = true;

	onMount(() => {
		createScene(el, window, document);
	});

	setTimeout(() => (animation = false), 2000);
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="My works" />
</svelte:head>

<section>
	<div>
		<canvas bind:this={el} />
		{#if !animation}
			<Project />
		{/if}
	</div>
</section>

<style>
	canvas {
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
