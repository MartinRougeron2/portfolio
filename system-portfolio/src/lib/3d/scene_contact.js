import { GLTFLoader } from './GLTFLoader.js';

import font from './models/font.json';

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
	particles,
	planets,
	geometry_planets,
	planets_metadata,
	mouse,
	ray_caster,
	intersect,
	text,
	models,
	textGeo;

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

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

	ray_caster = new THREE.Raycaster();

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

	const loaded_font = new FontLoader().parse(font);

	geometry_planets = new THREE.OctahedronGeometry(50, 5);

	particles = [];
	particles.push(new THREE.Object3D());
	particles.push(new THREE.Object3D());
	particles.push(new THREE.Object3D());

	particles[1].position.y = 500;
	particles[0].position.y = 1000;
	particles[2].position.y = 1500;
	particles.forEach((obj) => {
		for (let i = 0; i < 500; i++) {
			let mesh = new THREE.Mesh(geometry_stars, material_stars);
			mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
			mesh.position.multiplyScalar(500);
			mesh.rotation.set(Math.random(), Math.random(), Math.random());
			obj.add(mesh);
		}
		scene.add(obj);
	});

	planets = [];
	planets_metadata = [
		{
			x: -340,
			y: 100,
			z: 40,
			finished: false,
			material: new THREE.MeshStandardMaterial({
				color: 0x00ffff,
				flatShading: true
			}),
			name: 'Linkedin',
			rotation: 3.14,
			scale: 10,
			link: 'https://www.linkedin.com/signup/public-profile-join?vieweeVanityName=martin-rougeron-495b86171&trk=public_profile-settings_top-card-primary-button-join-to-connect'
		},

		{
			x: 300,
			y: 0,
			z: 40,
			finished: false,
			material: new THREE.MeshStandardMaterial({
				color: 0x262626,
				flatShading: true
			}),
			name: 'Github',
			rotation: 0,
			rotationY: -0.5,
			scale: 2,
			link: 'https://github.com/MartinRougeron2/'
		},

		{
			x: -220,
			y: -100,
			z: 40,
			finished: false,
			material: new THREE.MeshStandardMaterial({
				color: 0x835ad1,
				flatShading: true
			}),
			name: 'Discord',
			rotation: 3.14,
			scale: 0.21,
			link: 'https://discord.gg/Zu7aJUsdTK'
		}
	];

	textGeo = [];
	for (let i = 0; i < 3; i += 1) {
		planets.push(new THREE.Object3D());
		loader.parse(models[planets_metadata[i].name], '', (gltf) => {
			gltf.scene.children.forEach((mesh) => {
				mesh.material = new THREE.MeshPhongMaterial({
					color: 0xe0e0e0,
					flatShading: true
				});
			});
			gltf.scene.name = '';
			const logo = gltf.scene;
			logo.scale.set(
				planets_metadata[i].scale,
				planets_metadata[i].scale,
				planets_metadata[i].scale
			);
			logo.rotation.y = planets_metadata[i].rotation;
			if (planets_metadata[i].rotationY) logo.rotation.x = planets_metadata[i].rotationY;
			planets[i].add(logo);
		});
		planets[i].position.x = planets_metadata[i].x;
		planets[i].position.y = planets_metadata[i].y + 500;
		planets[i].position.z = planets_metadata[i].z;
		planets[i].name = planets_metadata[i].link;
		text = planets_metadata[i].name;
		textGeo.push(
			new TextGeometry(text, {
				font: loaded_font,
				size: 15,
				height: 30,
				curveSegments: 4,
				bevelThickness: 2,
				bevelSize: 1.5,
				bevelEnabled: true
			})
		);
		textGeo[i].computeBoundingBox();
		textGeo[i].center();
		textGeo[i].translate(0, -80, 0);
		let meshTmp = new THREE.Mesh(
			textGeo[i],
			new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true })
		);
		meshTmp.quaternion.copy(camera.quaternion);
		planets[i].add(meshTmp);
		scene.add(planets[i]);
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
	const ambientLight = new THREE.HemisphereLight(0x696969, 0x404040, 2);

	const directionalLight = new THREE.DirectionalLight(0x1cc1eb, 1);
	directionalLight.position.set(-400, -100, 300);

	const pointLight = new THREE.PointLight(0xe81e76, 1.5, 1000, 2);
	pointLight.position.set(200, 0, 300);

	scene.add(ambientLight, directionalLight, pointLight);
};

const loop = () => {
	renderer.render(scene, camera);

	if (rocket) {
		if (rocket.position.y < 0 && launch) {
			rocket.position.y += 10;
		} else {
			launch = false;
			rocket.position.y = 0;
		}
		rocket.rotation.y += 0.05;
	}

	particles.forEach((obj) => {
		obj.position.y -= 6;
		if (obj.position.y < -200) obj.position.y = 1000;
	});

	planets.forEach((planet, index) => {
		if (planet.position.y > planets_metadata[index].y && !planets_metadata[index].finished) {
			planet.position.y -= 10;
		} else {
			planets_metadata[index].finished = true;
			planet.position.y = planets_metadata[index].y;
		}
	});
	ray_caster.setFromCamera(mouse, camera);
	let intersects = ray_caster.intersectObjects(planets, true);

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
	ray_caster.setFromCamera(mouse, camera);
	let intersects = ray_caster.intersectObjects(planets, true);

	if (intersects.length > 0 && scene.children.length > 0) {
		while (
			intersects[0].object.parent.name === '' ||
			(intersects[0].object.parent.name !== '' && intersects[0].object.parent.name[0] !== 'h')
		)
			intersects[0].object = intersects[0].object.parent;
		const url = intersects[0].object.parent.name;
		window.open(url, '_blank').focus();
	}
}

export function main(el, window, _models) {
	models = _models;
	createScene(el, window);
	createLights();

	renderer.render(scene, camera);
	loop();

	window.addEventListener('mousemove', onDocumentMouseMove, false);
	window.addEventListener('mousedown', onDocumentMouseClick, false);
}

export function destroy() {
	if (scene)
		while (scene.children.length > 0) {
			scene.remove(scene.children[0]);
		}
}
