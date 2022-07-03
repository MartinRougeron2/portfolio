<script>
	import { browser } from '$app/env';
	import projects from "../routes/projects.js";
	let projectSelected;
	setInterval(() => {
		if (browser) {
			projectSelected = JSON.parse(localStorage.project);
		}
	}, 300);

	function nextProject() {
		let nextId = ( projectSelected.index + 1)
		if (nextId === projects.projects.length) {
			localStorage.setItem("project", JSON.stringify(projects.sun));
			return;
		}
		for (const project of projects.projects) {
			if (project.index === nextId) {
				localStorage.setItem("project", JSON.stringify(project));
				return;
			}
		}

	}

</script>

<section>
	<div class="project p-4">
		{#if projectSelected}
			<div class="card">
				<div class="title p-2 flex justify-between">
					{projectSelected.name}
					<button class="mr-3" on:click={nextProject} id="next"> > </button>
				</div>
				<div class="description">
					{projectSelected.description}
				</div>
				<div class="github-link p-1 m-1 mt-5">
					<a href="/{projectSelected.page}" class="flex justify-center" id="about">About this project</a>
				</div>
			</div>
		{:else}
			<div class="title">Click on planets !</div>
		{/if}
	</div>
</section>

<style>
	.project {
		top: 25vh;
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
		background: blue;
		vertical-align: center;
		border-radius: 20px;
	}

	.github-link:hover {
		background: rgba(0, 0, 255, 0.4);
	}
</style>
