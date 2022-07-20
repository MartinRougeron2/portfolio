<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({}) {
		return {};
	}
</script>

<svelte:head>
	<title>404 error</title>
</svelte:head>

<div class="page">
	<a href="/">Go to Home</a>
</div>

<style>
	.page {
		position: relative;
		background: #444444;
		height: 100vh;
	}
	a {
		position: absolute;
		top: 50vh;
		left: calc(50vw - 25rem);
		background: white;
		font-size: 10rem;
		border-radius: 30px;
		color: #444444;
	}
</style>
