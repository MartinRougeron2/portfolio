import * as THREE from 'three';
import projects from './projects.js';
import * as TREE from 'three/examples/jsm/controls/OrbitControls.js';
import { randInt } from 'three/src/math/MathUtils.js';
import { Vector3 } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 2, 1, 20000);
let window;
const dist = 1.3
let mouse = new THREE.Vector2();
let animation = true;

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
const sun = new THREE.Object3D();
sun.name = "sun";
let renderer;
var planets = [];
var time = 0;
const mat = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	flatShading: true
});
let particle = new THREE.Object3D();
const geometry = new THREE.TetrahedronGeometry(2, 0);
const material = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	flatShading: true
});
var lights = [];
var lightsSide = [];

sun.add(
	new THREE.Mesh(
		new THREE.IcosahedronGeometry(8, 3),
		new THREE.MeshPhongMaterial({
			color: 0xffffff,
			flatShading: true
		})
	)
);

camera.position.z = 1050;
camera.position.x = 50;
camera.position.y = 1050;
camera.lookAt(0, 0, 0);

for (const project of projects) {
	const planet = new THREE.Object3D();
	planet.add(
		new THREE.Mesh(new THREE.IcosahedronGeometry(project.size, project.size > 4 ? 1 : 0), mat)
	);
	project.speed = randInt(5, 20);
	project.time = time;
	time += randInt(10, 20) / 10;
	planet.userData = project;
	planet.name = `planet ${project.name}`;
	planets.push(planet);
	scene.add(planet);
}

for (var i = 0; i < 1000; i++) {
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

const animate = () => {
	requestAnimationFrame(animate);
	planets.forEach((planet) => {
		planet.rotation.y += 0.005 * (8 - planet.userData.size);
		planet.position.x = -Math.cos(planet.userData.time) * (10 * dist * (4.5 - planet.userData.year));
		planet.position.z = -Math.sin(planet.userData.time) * (10 * dist * (4.5 - planet.userData.year));
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

	if (animation) {
		camera.position.y -= camera.position.y > 150 ? 10 : 5;
		camera.position.z -= camera.position.z > 150 ? 10 : 5;
		if (camera.position.y <= 50) {
			animation = false;
		}
		camera.lookAt(0, 0, 0);
	}


	renderer.render(scene, camera);
};

const resize = (width, height) => {
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
};

function onDocumentMouseMove( event )
{
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

export const createScene = (el, _window) => {
	window = _window;
	const controls = new TREE.OrbitControls(camera, el);
	renderer = new THREE.WebGLRenderer({antialias: true, canvas: el, alpha: true});
	resize(_window.innerWidth, _window.innerHeight);
	animate();
	controls.update();
	_window.addEventListener('resize', resize);

	// when the mouse moves, call the given function
	document.addEventListener('mousemove', onDocumentMouseMove, false);
}
