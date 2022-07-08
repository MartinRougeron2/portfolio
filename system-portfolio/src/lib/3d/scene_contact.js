import { OrbitControls } from './OrbitControls.js';
import { randInt } from './MathUtils.js';
import { GLTFLoader } from './GLTFLoader.js';

let scene,
	camera,
	fieldOfView,
	aspectRatio,
	nearPlane,
	farPlane,
	renderer,
	rocket,
	HEIGHT,
	WIDTH,
	launch,
	geometry_stars,
	material_stars,
	particules,
	planets,
	geometry_planets,
	planets_metadata,
	mouse,
	raycaster,
	selected,
	intersect
;

import * as THREE from 'three';

const createScene = (el, window) => {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;

	scene = new THREE.Scene();

	scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

	aspectRatio = WIDTH / HEIGHT;
	fieldOfView = 60;
	nearPlane = 1;
	farPlane = 10000;
	camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

	camera.position.x = 0;
	camera.position.z = 500;
	camera.position.y = -10;

	renderer = new THREE.WebGLRenderer({
		alpha: true,
		antialias: true,
		canvas: el
	});
	renderer.setSize(WIDTH, HEIGHT);

	renderer.shadowMap.enabled = true;

	mouse = new THREE.Vector2();

	raycaster = new THREE.Raycaster();


	window.addEventListener('resize', handleWindowResize, false);

	let loader = new GLTFLoader();
	loader.load('https://www.stivaliserna.com/assets/rocket/rocket.gltf', (gltf) => {
		rocket = gltf.scene;
		rocket.position.y = -400;
		scene.add(rocket);
	});
	launch = true;

	geometry_stars = new THREE.SphereGeometry(1, 6, 6);
	material_stars = new THREE.MeshStandardMaterial({
		color: 0xffffff,
		emissive: 0xffffff
	});

	geometry_planets = new THREE.OctahedronGeometry(50, 3);

	particules = []
	particules.push(new THREE.Object3D());
	particules.push(new THREE.Object3D());
	particules.push(new THREE.Object3D());

	particules[1].position.y = 500;
	particules[0].position.y = 1000;
	particules[2].position.y = 1500;
	particules.forEach(obj => {
			for (var i = 0; i < 500; i++) {
				var mesh = new THREE.Mesh(geometry_stars, material_stars);
				mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
				mesh.position.multiplyScalar(500);
				mesh.rotation.set(Math.random(), Math.random(), Math.random());
				obj.add(mesh);
			}
			scene.add(obj)
		})

	planets = []
	planets_metadata = [
		{x: -340, y: 100, z: 40, finished: false, material: new THREE.MeshStandardMaterial({
		color: 0x00ffff,
		flatShading: true
	}), link: "https://www.linkedin.com/signup/public-profile-join?vieweeVanityName=martin-rougeron-495b86171&trk=public_profile-settings_top-card-primary-button-join-to-connec"},

		{x: 300, y: 0, z: 40, finished: false, material: new THREE.MeshStandardMaterial({
		color: 0x262626,
		flatShading: true
	}), link: "https://github.com/MartinRougeron2/"},

		{x: -250, y: -150, z: 40, finished: false, material: new THREE.MeshStandardMaterial({
		color: 0x835ad1,
		flatShading: true
	}), link: "https://discord.gg/Zu7aJUsdTK"},

	]

	for (let i = 0; i < 3; i += 1) {
		planets.push(
			new THREE.Object3D()
		);
		var mesh = new THREE.Mesh(geometry_planets, planets_metadata[i].material);
		planets[i].add(mesh)
		planets[i].position.x = planets_metadata[i].x
		planets[i].position.y = planets_metadata[i].y + 500
		planets[i].position.z = planets_metadata[i].z
		planets[i].name = planets_metadata[i].link
		scene.add(planets[i])
	}
};

const handleWindowResize = () => {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	renderer.setSize(WIDTH, HEIGHT);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();
};

const createLights = () => {
	const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);

	const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
	directionalLight.position.set(-300, 0, 600);

	const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
	pointLight.position.set(200, -100, 50);

	scene.add(ambientLight, directionalLight, pointLight);
};

const targetRocketPosition = 40;
const animationDuration = 2000;

const loop = () => {
	const t = (Date.now() % animationDuration) / animationDuration;

	renderer.render(scene, camera);

	const delta = targetRocketPosition * Math.sin(Math.PI * 2 * t);
	if (rocket) {
		if (rocket.position.y < delta && launch) {
			rocket.position.y += 5;
		} else {
			launch = false;
			rocket.position.y = delta;
		}
		rocket.rotation.y += 0.05;
	}

	particules.forEach(obj => {
		obj.position.y -= 6;
		if (obj.position.y < -200)
			obj.position.y = 1000
	})

	planets.forEach((planet, index) => {
		if (planet.position.y > (-delta + planets_metadata[index].y) && !planets_metadata[index].finished) {
			planet.position.y -= 5;
		} else {
			planets_metadata[index].finished = true;
			planet.position.y = -delta * 0.7 + planets_metadata[index].y
		}
		planet.rotation.y -= 0.04
	})
	raycaster.setFromCamera(mouse, camera);
	var intersects = raycaster.intersectObjects(planets, true);


	if (intersects.length > 0) {
		document.body.style.cursor = 'pointer';
	} else {
		document.body.style.cursor = 'default';
		if (intersect) {
			intersect = null;
		}
	}

	requestAnimationFrame(loop);
};

function onDocumentMouseMove(event) {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onDocumentMouseClick(event) {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	raycaster.setFromCamera(mouse, camera);
	var intersects = raycaster.intersectObjects(planets, true);

	if (intersects.length > 0) {
		const url = intersects[0].object.parent.name
		window.open(url, '_blank').focus();
	} else {
		selected = null;
	}
}


export function main(el, window) {
	createScene(el, window);
	createLights();

	renderer.render(scene, camera);
	loop();

	window.addEventListener('mousemove', onDocumentMouseMove, false);
	window.addEventListener('mousedown', onDocumentMouseClick, false);
}
