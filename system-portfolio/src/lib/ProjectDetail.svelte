<script>
	export let name;
	export let description;
	export let skills;
	export let link;
	export let image;
	let width = 0;
</script>

<section>
	<div
		class="project-long grid 2xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 p-2"
		bind:clientWidth={width}
	>
		<div class="text col-start-1 col-end-3">
			<div class="title flex justify-between">
				<div class="grid justify-items-stretch">
					{name}
				</div>
				{#if width > 800}
				<div class="grid justify-items-stretch flex items-center">
					<a href={link} target="_blank">
						<img src="/github.png" alt="Github Link" style="width: min(64px, 10vw)" />
					</a>
				</div>
					{/if}
			</div>
				<div class="container-separator">
					<div class="separator"></div>
				</div>
			<div class="description">
				{description}
			</div>
		</div>
		<div class="gallery p-5 ml-5 grid grid-cols-1 justify-center">
			<div class="flex justify-center image">
				<img class="grow m-3" src={image} style="border-radius: 3px;" alt="{name} illustration" />
			</div>
			<div class="description 2xl:m-4 2xl:m-4 xl:m-3 sm:m-1" style="width: auto; padding-left: 15px">
				<ul>
					{#each skills as skill}
						<li>{skill}</li>
					{/each}
				</ul>
			</div>
			<div class="image-mobile">
				<img src={image} style="border-radius: 3px; transform: translateX(-10%)" alt="{name} illustration" />
			</div>
		</div>
	</div>
</section>

<style>
	.project-long {
		font-weight: 600;
		font-size: 0.7rem;
		letter-spacing: 0.05em;
		text-decoration: none;
	}
	section {
		min-height: 100vh;
		padding: 40px;
	}
	.title {
		font-size: 5rem;
	}

	.container-separator {
		padding-bottom: 100px;
	}

	.text {
		width: 100%;
	}

	.gallery {
	}

	.description {
		font-size: 2rem;
		text-align: justify;
	}

	.image-mobile {
		display: none;
	}

	@media only screen and (max-width: 800px) {
		.description {
			font-size: 1.2rem;
		}
		li {
			font-size: 1.2rem;
			width: 90vw;
		}
		.title {
			font-size: 2rem;
			padding-bottom: 15px;
		}
		.container-separator {
			padding-bottom: 20px;
		}
		section {
			padding: 10px;
		}
		.image-mobile {
			display: inline;
			width: 85vw;
		}
		.image {
			display: none;
		}
	}

	.separator {
		height: 100%;
		border: 1px solid white;
		width: 100%;
	}

	ul {
		list-style-type: '➜ ';
	}
</style>
