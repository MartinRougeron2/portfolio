<script>
	import ProjectDetail from '../lib/ProjectDetail.svelte';
	import { onMount } from 'svelte';

	let projects = [
		{
			image: 'area.png',
			link: '/',
			skills: ['Express', 'GraphQL', 'React', 'Backend Architecture', 'User Authentification', 'Web Security', 'UI/UX'],
			id: 'area',
			name: 'Area',
			description:
				'My own Zapier. With 4 other tek students, we build an action-reaction website. You want to send an email each time you send a discord message ? Done ! You want to create an event each time you receive a Slack message ? Done !'
		},
		{
			image: 'dashboard.png',
			link: '/',
			skills: ['VueJS', 'Express', 'Web Scrapping', 'OAuth 2'],
			id: 'dashboard',
			name: 'Dashboard',
			description:
				'You want to have a website featuring your most wanted apps ? The Dashboard ! Add Widgets to listen to Spotify, get some recipies, some cools pictures !'
		},
		{
			image: 'babel.jpg',
			link: '/',
			skills: ['C++', 'Network', 'Compressing Packages', 'TCP/UDP'],
			id: 'babel',
			name: 'Babel',
			description:
				"o you know Skype ? Do you know it's possible to create your version ? With 2 friends, we create a voIP system in 1 month."
		},
		{
			image: 'bomberman.jpg',
			link: '/',
			skills: ['C++', 'Network', 'Game Design'],
			id: 'bomberMan',
			name: 'BomberMan',
			description:
				'Bomberman is one of the most fun game, but you need to be on the same computer to play (at its release) ... So we create a multi player game and playable from 1 to 4 by network. '
		},
		{
			image: 'plazza.png',
			link: '/',
			skills: ['C++', 'Multi-Thread', 'Algorithms'],
			id: 'plazza',
			name: 'Plazza',
			description: 'Your own pizzeria with a multithreading kitchen'
		},
		{
			image: 'nanotek.png',
			link: '/',
			skills: ['C++', 'Software Architecture', 'Documentation'],
			id: 'nanotekSpice',
			name: 'NanotekSpice',
			description:
				'A C++ project to simulate a hardware piece working…ive a model, some input and simulate the output !'
		},
		{
			image: 'rpg.png',
			link: '/',
			skills: ['C', 'Game Design', 'Team Management'],
			id: 'my-rpg',
			name: 'My RPG',
			description:
				'ur own RPG Game ! Fight monsters, dragons and more to get 3 artifacts to free your village. My most fun work.'
		},
		{
			image: 'me.jpg',
			link: '/',
			skills: ['C++', 'Network', 'Security'],
			id: 'about-me',
			name: 'About me',
			description:
				"Hi I'm Martin ! 4th year student at EPITECH, this is my portfolio. If you're intrested to work with me, go to CONTACT page. Have fun !"
		}
	];

	let oldScroll = 0;
	let index = 0;
	let lastevt = 0;

	onMount(() => {
		console.log(projects);

		window.addEventListener('scroll', (evt) => {
			if (!(lastevt + 200 < evt.timeStamp) || Math.abs(window.scrollY - oldScroll) < 50) return;
			lastevt = evt.timeStamp;
			if (window.scrollY < oldScroll) {
				index -= !!index;
			} else {
				index += index < projects.length - 1;
			}
			console.log(projects[index].id);
			oldScroll = window.scrollY;
			evt.stopPropagation();
		});
	});
</script>

<svelte:head>
	<title>Portfolio | Projects</title>
	<meta
		name="description"
		content="This page presents all my projects. The projects are sorted by year, the youngest is at the top."
	/>
</svelte:head>

<section>
	<div id="all">
		{#each projects as project, index}
			<div class="flex flex-row">
				<div class="timeline-full">
					<div id={project.id}>
						<svg height="42" width="80">
							<circle cx="45" cy="21" r="20" stroke="white" stroke-width="3" fill="transparent" />
						</svg>
					</div>
					{#if (index !== projects.length - 1)}
					<div class="timeline" />
						{/if}
				</div>
				<ProjectDetail
					name={project.name}
					description={project.description}
					skills={project.skills}
					link={project.link}
					image={project.image}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	#all {
		padding-top: 100px;
		background: linear-gradient(0deg, rgba(238, 174, 202, 0.52) 0%, #94bbe9 100%);
	}
	.timeline {
		position: absolute;
		height: calc(100vh - 40px);
		border: 5px solid white;
		margin-left: 40px;
		width: 5px;
	}

	.timeline-full {
		margin-top: 100px;
	}
</style>
