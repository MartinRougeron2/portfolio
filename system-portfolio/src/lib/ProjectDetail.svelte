<script>
	export let name;
	export let description;
	export let skills;
	export let link;
	export let image;
</script>

<section>
	<div class="project-long flex flex-row p-2">
		<div class="sm:basis-1 md:basis-1 lg:basis-2/3 xl:basis-2/3 2xl:basis-2/3 m-6">
			<div class="title">
				{name}
				<div class="separator" />
			</div>
			<div class="description">
				{description}
			</div>
			<div class="py-4" style="width: 65px">
				<a href={link}>
					<img src="/github.png" />
				</a>
			</div>
		</div>
		<div
			class="gallery grid grid-cols-1 justify-center lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3 sm:basis-1 sm:basis-1 md:basis-1"
		>
			<div class="flex justify-center">
				<img class="grow m-3" src={image} style="border-radius: 3px" />
			</div>
			<div class="description m-4">
				<ul style="padding-left: 50px">
					{#each skills as skill}
						<li>➜ {skill}</li>
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

	.description {
		font-size: 2rem;
		text-align: justify;
	}
	@media only screen and (max-width: 1000px) {
		.description {
			font-size: 1.4rem;
		}
		section {
			padding: 10px;
		}
	}

	.separator {
		border: 1px solid white;
		width: 100%;
	}
</style>
