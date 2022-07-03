<script>
	import { onMount } from 'svelte';
	import { createScene } from './scene';
	import Project from '../lib/Project.svelte';
	let el;
	let animation = true;
	let display = "display: none";
	let displayLoading = "display: inline";

	onMount(() => {
		createScene(el, window, document);
	});

	setTimeout(() => {
		animation = false;
	}, 2000);
	setTimeout(() => {
		displayLoading = display;
		display = "display: block";
	}, 200);
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="My works" />
</svelte:head>

<section>
	<div>
		<div class="loading" style={displayLoading}>
			Reaching the planets...
		</div>
		<div style={display}>
			<canvas bind:this={el} />
		</div>
		{#if !animation}
			<Project />
		{/if}
	</div>
</section>

<style>
	div {
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

	.loading {
		position: absolute;
		left: 45vw;
		top: 50vh;
		background: transparent;
		width: 200px;
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
