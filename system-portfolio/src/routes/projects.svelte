<script>
	import ProjectDetail from '../lib/ProjectDetail.svelte';
	import Saos from "saos";

	let projects = [
		{
			image: 'area.png',
			link: 'https://github.com/MartinRougeron2/Area',
			skills: [
				'Express',
				'GraphQL',
				'React',
				'Backend Architecture',
				'User Authentification',
				'Web Security',
				'UI/UX'
			],
			id: 'area',
			name: 'Area',
			description:
				'Focus on automation between systems. The aim is to reproduce a tool such as Zapier or IFTTT by using APIs from different internet services, such as Deezer, Gmail or the school\'s intranet, in order to interconnect them. I implement a software architecture that is flexible and robust enough to allow implementations, and choose the appropriate application and web technologies.'
		},
		{
			image: 'dashboard.png',
			link: 'https://github.com/MartinRougeron2/DashboardEpitech',
			skills: ['VueJS', 'Express', 'Web Scrapping', 'OAuth 2'],
			id: 'dashboard',
			name: 'Dashboard',
			description:
				'As part of this project, you will take on the role of a Software Architect.Your main goal is neither reinventing the wheel nor writing numerous lines of code. On the contrary, yourmain action is to understand, select and integrate a wide range of existing libraries.The code you write will only implement the so-called business logic. In other words, your main job will be to write glue between selected software components to complete the requested project.'
		},
		{
			image: 'babel.jpg',
			link: 'https://github.com/MartinRougeron2/DashboardEpitech',
			skills: ['C++', 'Network', 'Compressing Packages', 'TCP/UDP'],
			id: 'babel',
			name: 'Babel',
			description:
				"The babel is an Epitech project who's goal is to create a VoIP protocol and implement it in c++. The project should be cross platform (windows/linux) and consists of a server and a client. The server connects clients between them and handle messages/commands, but the voice communication should be done in p2p using udp between two clients."
		},
		{
			image: 'bomberman.jpg',
			link: 'https://github.com/MartinRougeron2/Indie',
			skills: ['C++', 'Network', 'Game Design'],
			id: 'bomberMan',
			name: 'BomberMan',
			description:
				'\n' +
				'Realization of a Bomberman working with different types of 2D and 3D graphics rendering. We develop a local multiplayer mode. This project is an opportunity to use libraries and to work on the architecture of a complex and modular project. To enhance the multiplayer experience we create a multi player game in LAN and playable from 1 to 4 by network. '
		},
		{
			image: 'plazza.png',
			link: 'https://github.com/MartinRougeron2/Plazza',
			skills: ['C++', 'Multi-Thread', 'Algorithms'],
			id: 'plazza',
			name: 'Plazza',
			description: 'The purpose of this project is to make you realize a simulation of a pizzeria, which is composed of thereception that accepts new commands, of several kitchens, themselves with several cooks, themselvescooking several pizzas.You will learn to deal with various problems, including load balancing, process and thread synchronizationand communication.'
		},
		{
			image: 'nanotek.png',
			link: 'https://github.com/MartinRougeron2/Tekspice',
			skills: ['C++', 'Software Architecture', 'Documentation'],
			id: 'nanotekSpice',
			name: 'NanotekSpice',
			description:
				'The project : Nanotekspice is a logic simulator that builds a graph (the nodes of which will be simulated digital electronic components, inputs or outputs) from a configuration file, and injects values into that graph to get result.'
		},
		{
			image: 'rpg.png',
			link: 'https://github.com/MartinRougeron2/myRPG',
			skills: ['C', 'Game Design', 'Team Management'],
			id: 'my-rpg',
			name: 'My RPG',
			description:
				'My_rpg is a creative project, indeed, the goal is to create a true, RPG game. With 3 other people, we create "Ghost of Lies". It happens in a medieval/fantasy world.'
		},
		{
			image: 'me.jpg',
			link: '/',
			skills: ['C/C++', 'VueJS', 'Management', 'Django', 'Python', 'Network', 'Security'],
			id: 'about-me',
			name: 'About me',
			description:
				"Hi I'm Martin ! 4th year student at EPITECH, this is my portfolio. If you're intrested to work with me, go to CONTACT page. Have fun !"
		}
	];

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
			<div id="{project.id}" class="id"></div>
			<div class="flex flex-row">
				<div class="timeline-full">
					<div>
						<svg height="42" width="80">
							<circle cx="45" cy="21" r="20" stroke="white" stroke-width="3" fill="transparent" />
						</svg>
					</div>
					{#if index !== projects.length - 1}
						<div class="timeline" ></div>
					{/if}
				</div>
				<Saos animation={'slide-in-elliptic-top-fwd 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
					<ProjectDetail
						name={project.name}
						description={project.description}
						skills={project.skills}
						link={project.link}
						image={project.image}
					/>
				</Saos>
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

	.id {
		transform: translateY(-50px);
	}

	@keyframes -global-slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }
</style>
