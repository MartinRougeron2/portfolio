<script>
	export let name;
	export let description;
	export let skills;
	export let link;
	export let image;
</script>

<section>
	<div
		class="project-long grid 2xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 p-2"
	>
		<div class="text col-start-1 col-end-3">
			<div class="title">
				{name}
				<div class="separator" />
			</div>
			<div class="description">
				{description}
			</div>
			<div class="py-4" style="width: 65px">
				<a href={link}>
					<img src="/github.png" alt="Github Link" />
				</a>
			</div>
		</div>
		<div class="gallery p-5 ml-5 grid grid-cols-1 justify-center">
			<div class="flex justify-center image">
				<img class="grow m-3" src={image} style="border-radius: 3px;" alt="{name} illustration" />
			</div>
			<div class="description 2xl:m-4 2xl:m-4 xl:m-3 sm:m-1" style="width: auto">
				<ul>
					{#each skills as skill}
						<li>{skill}</li>
					{/each}
				</ul>
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
	@media only screen and (max-width: 800px) {
		.description {
			font-size: 1.4rem;
		}
		.title {
			font-size: 2rem;
		}
		section {
			padding: 10px;
		}
		.image {
			display: none;
		}
	}

	.separator {
		border: 1px solid white;
		width: 100%;
	}

	ul {
		list-style-type: '➜ ';
	}
</style>
