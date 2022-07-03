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
		background: #444444;
		height: 100vh;
		width: 100vw;
	}
</style>
