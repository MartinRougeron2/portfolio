import * as THREE from 'three';
import { Vector3 } from 'three';

import { OrbitControls } from './OrbitControls.js';
import { randInt } from './MathUtils.js';
import { GLTFLoader } from './GLTFLoader.js';

import projects from './projects.js';

class Circle {
	constructor(radius) {
		let pts = new THREE.Path().absarc(0, 0, radius, 0, Math.PI * 2).getPoints(90);
		let ptsZ = [];
		pts.forEach((p) => {
			ptsZ.push(new Vector3(p.x, 0, p.y));
		});
		let g = new THREE.BufferGeometry().setFromPoints(ptsZ);
		let m = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
		this.line = new THREE.Line(g, m);
		this.line.name = `orbit ${radius}`;
	}
}

let window;
let loaded = false;
let scene_index = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, 2, 1, 20000);
let dist = 1.3;
let mouse = new THREE.Vector2(3, 3);
let animation = true;
let intersect;
let selected;
let sun = new THREE.Object3D();
let renderer;
let planets = [];
let time = 0;
let particle = new THREE.Object3D();
let geometry = new THREE.TetrahedronGeometry(2, 0);
let material = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	flatShading: true
});
let lights = [];
let lightsSide = [];
let raycaster = new THREE.Raycaster();
let skelet = new THREE.Object3D();
let geom2 = new THREE.IcosahedronGeometry(1, 1);
let mat2 = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	wireframe: true,
	side: THREE.DoubleSide
});
let planet2 = new THREE.Mesh(geom2, mat2);
let loader = new GLTFLoader();

function load_model(model, planet_index, scale, position) {
	loader.parse(
		model,
		'',
		function (gltf) {
			gltf.scene.children.forEach((mesh) => {
				mesh.material = new THREE.MeshPhongMaterial({
					color: 0xe0e0e0,
					flatShading: true
				});
			});
			gltf.scene.scale.x = scale;
			gltf.scene.scale.y = scale;
			gltf.scene.scale.z = scale;
			gltf.scene.position.x = position.x;
			gltf.scene.position.y = position.y;
			gltf.scene.position.z = position.z;
			gltf.scene.name = 'decoration';
			if (planet_index >= 0) planets[planet_index].add(gltf.scene);
			else {
				sun.add(gltf.scene);
			}
		},
		undefined,
		function (error) {
			console.error(error);
		}
	);
}

function init() {
	loaded = false;
	scene_index = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, 2, 1, 20000);
	dist = 1.3;
	mouse = new THREE.Vector2(3, 3);
	animation = true;
	intersect;
	selected;
	sun = new THREE.Object3D();
	renderer;
	planets = [];
	time = 0;
	particle = new THREE.Object3D();
	geometry = new THREE.TetrahedronGeometry(2, 0);
	material = new THREE.MeshPhongMaterial({
		color: 0xffffff,
		flatShading: true
	});
	lights = [];
	lightsSide = [];
	raycaster = new THREE.Raycaster();
	skelet = new THREE.Object3D();
	geom2 = new THREE.IcosahedronGeometry(1, 1);
	mat2 = new THREE.MeshPhongMaterial({
		color: 0xffffff,
		wireframe: true,
		side: THREE.DoubleSide
	});
	planet2 = new THREE.Mesh(geom2, mat2);
	loader = new GLTFLoader();

	sun.name = 'sun';
	sun.userData = projects.sun;
	sun.add(
		new THREE.Mesh(
			new THREE.IcosahedronGeometry(8, 3),
			new THREE.MeshPhongMaterial({
				color: 0xe0e0e0,
				flatShading: true
			})
		)
	);

	planet2.scale.x = planet2.scale.y = planet2.scale.z = 1;
	skelet.visible = false;

	camera.position.z = 1050;
	camera.position.x = 50;
	camera.position.y = 1050;
	camera.lookAt(0, 0, 0);

	for (const project of projects.projects) {
		const planet = new THREE.Object3D();
		planet.add(
			new THREE.Mesh(
				new THREE.IcosahedronGeometry(project.size, project.size > 4 ? 1 : 0),
				new THREE.MeshPhongMaterial({
					color: 0xe0e0e0,
					flatShading: true
				})
			)
		);
		project.speed = randInt(5, 20);
		project.time = time;
		time += randInt(10, 20) / 10;
		planet.userData = project;
		planet.name = 'planet';
		planets.push(planet);
		scene_index.add(planet);
	}

	for (let i = 0; i < 1000; i++) {
		let mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
		mesh.position.multiplyScalar(90 + Math.random() * 700);
		mesh.rotation.set(Math.random(), Math.random(), Math.random());
		particle.add(mesh);
	}

	lights[0] = new THREE.DirectionalLight(0xffffff, 0.6);
	lights[0].position.set(1, 0, 0);
	lights[1] = new THREE.DirectionalLight(0x1cc1eb, 0.6);
	lights[1].position.set(0.75, 1, 0.5);
	lights[2] = new THREE.DirectionalLight(0xe81e76, 0.6);
	lights[2].position.set(-0.75, -1, 0.5);

	lightsSide[0] = new THREE.DirectionalLight(0xffffff, 0.6);
	lightsSide[0].position.set(1, 0, 0);
	lightsSide[1] = new THREE.DirectionalLight(0x1cc1eb, 0.6);
	lightsSide[1].position.set(0.75, 1, 0.5);
	lightsSide[2] = new THREE.DirectionalLight(0xe81e76, 0.6);
	lightsSide[2].position.set(-0.75, -1, 0.5);

	scene_index.add(sun);
	scene_index.add(new Circle(15 * dist).line);
	scene_index.add(new Circle(25 * dist).line);
	scene_index.add(new Circle(35 * dist).line);
	scene_index.add(particle);
	scene_index.add(lights[0]);
	scene_index.add(lights[1]);
	scene_index.add(lights[2]);
	scene_index.add(lightsSide[0]);
	scene_index.add(lightsSide[1]);
	scene_index.add(lightsSide[2]);
	scene_index.add(skelet);
	skelet.add(planet2);
}
const animate = () => {
	requestAnimationFrame(animate);
	const time = Date.now() * 0.0005;
	planets.forEach((planet) => {
		planet.rotation.y += time * 0.00000000001;
		planet.position.x =
			-Math.cos(planet.userData.time) * (10 * dist * (0.5 + planet.userData.year));
		planet.position.z =
			-Math.sin(planet.userData.time) * (10 * dist * (0.5 + planet.userData.year));
		planet.userData.time += time * 0.000000000008;
	});
	lights.forEach((light) => {
		light.position.x = -Math.cos(time);
		light.position.z = -Math.sin(time);
	});
	lightsSide.forEach((light) => {
		light.position.x = Math.cos(time);
		light.position.z = Math.sin(time);
	});
	particle.rotation.x += 0.0;
	particle.rotation.y -= 0.001;
	sun.rotation.y += 0.005;
	const speeds = (distance) => {
		if (distance > 150) return 10;
		return 5;
	};

	if (animation) {
		camera.position.y -= speeds(camera.position.y);
		camera.position.z -= speeds(camera.position.z);
		camera.lookAt(0, 0, 0);
		if (window.screen.width > 1000) {
			if (camera.position.y <= 50 || loaded) {
				animation = false;
				camera.position.y = 50;
			}
		} else {
			if (camera.position.y <= 100 || loaded) {
				animation = false;
				camera.position.y = 100;
			}
			camera.lookAt(10, 0, 20);
		}
	}

	raycaster.setFromCamera(mouse, camera);
	let intersects = raycaster.intersectObjects([...planets, sun], true);

	if (intersect) {
		// reset
		intersect.material.color.set(0xe0e0e0);
	}
	if (intersects.length > 0 && !animation) {
		document.body.style.cursor = 'pointer';
		let object = intersects[0].object;
		intersect = object;
		// reset
		object.material.color.set(0xffffff);
	} else {
		document.body.style.cursor = 'default';
		if (intersect) {
			// reset
			intersect.material.color.set(0xe0e0e0);
			intersect = null;
		}
	}

	if (selected) {
		skelet.visible = true;
		skelet.position.copy(selected.position);
		const size = selected.userData.size + 2;
		skelet.scale.set(size, size, size);
	} else {
		localStorage.setItem('project', null);
		skelet.visible = false;
	}

	renderer.render(scene_index, camera);
};

const resize = () => {
	const HEIGHT = window.innerHeight;
	const WIDTH = window.innerWidth;
	renderer.setSize(WIDTH, HEIGHT);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();
};

function onDocumentMouseMove(event) {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onDocumentMouseClick(event) {
	if (event.toElement.id === 'next' || event.toElement.id === 'about') return;
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	raycaster.setFromCamera(mouse, camera);
	let intersects = raycaster.intersectObjects([...planets, sun], true);

	if (intersects.length > 0) {
		selected = intersects[0].object.parent;
		while (
			selected.name !== 'decoration' &&
			selected.name !== 'planet' &&
			selected.name !== 'sun'
		) {
			selected = selected.parent;
		}
		if (selected.name === 'decoration') {
			selected = selected.parent;
		}
		intersects[0].object.material.color.set(0xffffff);
		localStorage.setItem('project', JSON.stringify(selected.userData));
	} else {
		selected = null;
	}
}

export const createScene = (el, _window, document, models) => {
	loaded = true
	window = _window;
	init();
	models.forEach((model) => {
		load_model(model.model, model.project_index, model.scale, model.position);
	});
	const controls = new OrbitControls(camera, el);
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el, alpha: true });
	resize(_window.innerWidth, _window.innerHeight);
	animate();
	controls.update();

	// when the mouse moves, call the given function
	_window.addEventListener('mousemove', onDocumentMouseMove, false);
	_window.addEventListener('mousedown', onDocumentMouseClick, false);
	_window.addEventListener('resize', resize, false);
	return true;
};

export function destroy() {
	if (scene_index)
		while (scene_index.children.length > 0) {
			scene_index.remove(scene_index.children[0]);
		}
	animation = true;
}
