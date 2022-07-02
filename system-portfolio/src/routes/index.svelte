<script>
	import { onMount } from 'svelte';
	import { createScene } from './scene';
	let el;
	onMount(() => {
		createScene(el, window);
	});
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="My works" />
</svelte:head>

<section>
	<canvas bind:this={el} />
</section>
