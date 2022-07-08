class Project {
	constructor(name, description, size, year, index) {
		this.name = name;
		this.description = description;
		this.size = size;
		this.year = year;
		this.page = name.toLowerCase().replace(' ', '-');
		this.index = index;
	}
}

let projects = [
	new Project(
		'Area',
		'My own Zapier. With 4 other tek students, we build an action-reaction website. You want to send an email each time you send a discord message ? Done ! You want to create an event each time you receive a Slack message ? Done !',
		7,
		3,
		0
	),
	new Project(
		'My RPG',
		'Our own RPG Game ! Fight monsters, dragons and more to get 3 artifacts to free your village. My most fun work.',
		5,
		1,
		6
	),
	new Project(
		'Babel',
		"Do you know Skype ? Do you know it's possible to create your version ? With 2 friends, we create a voIP system in 1 month.",
		5,
		3,
		1
	),
	new Project(
		'Dashboard',
		'You want to have a website featuring your most wanted apps ? The Dashboard ! Add Widgets to listen to Spotify, get some recipies, some cools pictures !',
		3,
		3,
		2
	),
	new Project(
		'BomberMan',
		'Bomberman is one of the most fun game, but you need to be on the same computer to play (at its release) ... So we create a multi player game and playable from 1 to 4 by network. ',
		5,
		2,
		3
	),
	new Project(
		'NanotekSpice',
		'A C++ project to simulate a hardware piece working, you give a model, some input and simulate the output !',
		4,
		2,
		4
	),
	new Project('Plazza', 'Your own pizzeria with a multithreading kitchen', 3, 2, 5)
];

let sun = new Project(
	'About me',
	"Hi I'm Martin ! 4th year student at EPITECH, this is my portfolio. If you're intrested to work with me, go to CONTACT page. Have fun !",
	8,
	0,
	-1
);

export default { projects, sun };
