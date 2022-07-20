<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		background: rgba(148, 187, 233, 1);
		height: 100%;
		width: 100%;
	}
</style>
