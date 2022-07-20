<script>
	import { browser } from '$app/env';
	import projects from './3d/projects.js';
	let projectSelected;
	setInterval(() => {
		if (browser) {
			projectSelected = JSON.parse(localStorage.project);
		}
	}, 100);

	function nextProject() {
		let nextId = projectSelected.index + 1;
		if (nextId === projects.projects.length) {
			localStorage.setItem('project', JSON.stringify(projects.sun));
			return;
		}
		for (const project of projects.projects) {
			if (project.index === nextId) {
				localStorage.setItem('project', JSON.stringify(project));
				return;
			}
		}
	}
</script>

<section>
	<div class="project pos p-4">
		{#if projectSelected}
			<div class="card">
				<div class="title p-2 flex justify-between">
					{projectSelected.name}
					<button
						class="mr-3 little-title lg:invisible xl:invisible 2xl:invisible"
						on:click={nextProject}
						id="next"
					>
						Next >
					</button>
				</div>
				<div class="description">
					{projectSelected.description}
				</div>
				<div class="github-link p-1 m-1 mt-5">
					<a href="/{projectSelected.page}" class="flex justify-center" id="about"
						>About this project</a
					>
				</div>
			</div>
		{:else}
			<div class="title">
				Click on planets !
				<div class="description">
					<br />
					Each planet is a project,<br />
					Planet size is Project size
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.project {
		right: 10px;
		position: absolute;
		width: min(400px, calc(95vw - 10px));
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-backdrop-filter: blur(10px);
		background: rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(3px);
		transition: color 0.2s linear;
		border: 1px solid white;
		border-radius: 5px;
	}
	.pos {
		top: 25vh;
	}
	@media only screen and (max-width: 1000px) {
		.pos {
			bottom: 20px;
			top: auto;
		}
	}
	.title {
		font-weight: 900;
		font-size: 1.6rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
	}
	.description {
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: 0.05em;
		text-decoration: none;
	}

	.github-link {
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		background: rgba(238, 174, 202, 1);
		vertical-align: center;
		border-radius: 20px;
	}

	.github-link:hover {
		background: rgba(238, 174, 202, 0.7);
	}

	#next {
		text-decoration: white solid underline;
	}

	.little-title {
		font-size: 1.2rem;
	}
</style>
