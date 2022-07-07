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

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 2, 1, 20000);
let window;
const dist = 1.3;
let mouse = new THREE.Vector2(3, 3);
let animation = true;
let intersect;
var selected;
const sun = new THREE.Object3D();
let renderer;
var planets = [];
var time = 0;
let particle = new THREE.Object3D();
const geometry = new THREE.TetrahedronGeometry(2, 0);
const material = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	flatShading: true
});
var lights = [];
var lightsSide = [];
let raycaster = new THREE.Raycaster();
let skelet = new THREE.Object3D();
var geom2 = new THREE.IcosahedronGeometry(1, 1);
var mat2 = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	wireframe: true,
	side: THREE.DoubleSide
});
var planet2 = new THREE.Mesh(geom2, mat2);

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

camera.position.z = 550;
camera.position.x = 50;
camera.position.y = 550;
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
	planet.name = `planet ${project.name}`;
	planets.push(planet);
	scene.add(planet);
}


const loader = new GLTFLoader()

function load_model(model, planet_index) {


	loader.parse(
		model, '',
		function (gltf) {
			console.log(gltf);

			gltf.scene.children.forEach((mesh) => {
				mesh.material = new THREE.MeshPhongMaterial({
				color: 0xe0e0e0,
				flatShading: true
			});
			})
			gltf.scene.position.x = -4
			gltf.scene.position.y = 4
			gltf.scene.position.z = -5
			gltf.scene.scale.x = 0.5
			gltf.scene.scale.y = 0.5
			gltf.scene.scale.z = 0.5
			planets[planet_index].add(gltf.scene);
		},
		undefined,
		function (error) {
			console.error(error);
		}
	);
}


for (var i = 0; i < 200; i++) {
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
	mesh.position.multiplyScalar(90 + Math.random() * 700);
	mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
	particle.add(mesh);
}

lights[0] = new THREE.DirectionalLight(0xffffff, 0.6);
lights[0].position.set(1, 0, 0);
lights[1] = new THREE.DirectionalLight(0x11e8bb, 0.6);
lights[1].position.set(0.75, 1, 0.5);
lights[2] = new THREE.DirectionalLight(0x8200c9, 0.6);
lights[2].position.set(-0.75, -1, 0.5);

lightsSide[0] = new THREE.DirectionalLight(0xffffff, 0.6);
lightsSide[0].position.set(1, 0, 0);
lightsSide[1] = new THREE.DirectionalLight(0x11e8bb, 0.6);
lightsSide[1].position.set(0.75, 1, 0.5);
lightsSide[2] = new THREE.DirectionalLight(0x8200c9, 0.6);
lightsSide[2].position.set(-0.75, -1, 0.5);

scene.add(sun);
scene.add(new Circle(15 * dist).line);
scene.add(new Circle(25 * dist).line);
scene.add(new Circle(35 * dist).line);
scene.add(particle);
scene.add(lights[0]);
scene.add(lights[1]);
scene.add(lights[2]);
scene.add(lightsSide[0]);
scene.add(lightsSide[1]);
scene.add(lightsSide[2]);
scene.add(skelet);
skelet.add(planet2);

const animate = () => {
	requestAnimationFrame(animate);
	planets.forEach((planet) => {
		planet.rotation.y += 0.005 * (8 - planet.userData.size);
		planet.position.x =
			-Math.cos(planet.userData.time) * (10 * dist * (0.5 + planet.userData.year));
		planet.position.z =
			-Math.sin(planet.userData.time) * (10 * dist * (0.5 + planet.userData.year));
		planet.userData.time += 0.0025;
	});
	const time = Date.now() * 0.0005;
	lights.forEach((light) => {
		light.position.x = -Math.cos(time);
		light.position.z = -Math.sin(time);
	});
	lightsSide.forEach((light) => {
		light.position.x = Math.cos(time);
		light.position.z = Math.sin(time);
	});
	particle.rotation.x += 0.0;
	particle.rotation.y -= 0.002;
	sun.rotation.y += 0.005;
	const speeds = (distance) => {
		if (distance > 150) return 10;
		return 5;
	};

	if (animation) {
		camera.position.y -= speeds(camera.position.y);
		camera.position.z -= speeds(camera.position.z);
		if (camera.position.y <= 50) {
			animation = false;
		}
		camera.lookAt(0, 0, 0);
	}

	raycaster.setFromCamera(mouse, camera);
	var intersects = raycaster.intersectObjects([...planets, sun], true);

	if (intersect) {
		// reset
		intersect.material.color.set(0xe0e0e0);
	}
	if (intersects.length > 0 && !animation) {
		document.body.style.cursor = 'pointer';
		var object = intersects[0].object;
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

	renderer.render(scene, camera);
};

const resize = (width, height) => {
	renderer.setSize(width, height);
	camera.aspect = width / height;
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
	var intersects = raycaster.intersectObjects([...planets, sun], true);

	if (intersects.length > 0) {
		selected = intersects[0].object.parent;
		intersects[0].object.material.color.set(0xffffff);
		localStorage.setItem('project', JSON.stringify(selected.userData));
	} else {
		selected = null;
	}
}

export const createScene = (el, _window, document, path) => {
	window = _window;
	load_model(path, 1)
	const controls = new OrbitControls(camera, el);
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el, alpha: true });
	resize(_window.innerWidth, _window.innerHeight);
	animate();
	controls.update();
	_window.addEventListener('resize', resize);

	// when the mouse moves, call the given function
	_window.addEventListener('mousemove', onDocumentMouseMove, false);
	_window.addEventListener('mousedown', onDocumentMouseClick, false);
};
