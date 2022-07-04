var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  createScene: () => createScene
});
module.exports = __toCommonJS(stdin_exports);
var THREE = __toESM(require("three"));
var import_three = require("three");
var import_projects = __toESM(require("./projects.js"));
var TREE = __toESM(require("three/examples/jsm/controls/OrbitControls.js"));
var import_MathUtils = require("three/src/math/MathUtils.js");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 2, 1, 2e4);
let window;
const dist = 1.3;
let mouse = new THREE.Vector2(3, 3);
let animation = true;
let intersect;
var selected;
class Circle {
  constructor(radius) {
    let pts = new THREE.Path().absarc(0, 0, radius, 0, Math.PI * 2).getPoints(90);
    let ptsZ = [];
    pts.forEach((p) => {
      ptsZ.push(new import_three.Vector3(p.x, 0, p.y));
    });
    let g = new THREE.BufferGeometry().setFromPoints(ptsZ);
    let m = new THREE.LineBasicMaterial({ color: 16777215, transparent: true, opacity: 1 });
    this.line = new THREE.Line(g, m);
    this.line.name = `orbit ${radius}`;
  }
}
const sun = new THREE.Object3D();
sun.name = "sun";
sun.userData = import_projects.default.sun;
let renderer;
var planets = [];
var time = 0;
let particle = new THREE.Object3D();
const geometry = new THREE.TetrahedronGeometry(2, 0);
const material = new THREE.MeshPhongMaterial({
  color: 16777215,
  flatShading: true
});
var lights = [];
var lightsSide = [];
let raycaster = new THREE.Raycaster();
sun.add(new THREE.Mesh(new THREE.IcosahedronGeometry(8, 3), new THREE.MeshPhongMaterial({
  color: 14737632,
  flatShading: true
})));
let skelet = new THREE.Object3D();
scene.add(skelet);
var mat2 = new THREE.MeshPhongMaterial({
  color: 16777215,
  wireframe: true,
  side: THREE.DoubleSide
});
var geom2 = new THREE.IcosahedronGeometry(1, 1);
var planet2 = new THREE.Mesh(geom2, mat2);
planet2.scale.x = planet2.scale.y = planet2.scale.z = 1;
skelet.add(planet2);
skelet.visible = false;
camera.position.z = 1050;
camera.position.x = 50;
camera.position.y = 1050;
camera.lookAt(0, 0, 0);
for (const project of import_projects.default.projects) {
  const planet = new THREE.Object3D();
  planet.add(new THREE.Mesh(new THREE.IcosahedronGeometry(project.size, project.size > 4 ? 1 : 0), new THREE.MeshPhongMaterial({
    color: 14737632,
    flatShading: true
  })));
  project.speed = (0, import_MathUtils.randInt)(5, 20);
  project.time = time;
  time += (0, import_MathUtils.randInt)(10, 20) / 10;
  planet.userData = project;
  planet.name = `planet ${project.name}`;
  planets.push(planet);
  scene.add(planet);
}
for (var i = 0; i < 1e3; i++) {
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
  mesh.position.multiplyScalar(90 + Math.random() * 700);
  mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
  particle.add(mesh);
}
lights[0] = new THREE.DirectionalLight(16777215, 0.6);
lights[0].position.set(1, 0, 0);
lights[1] = new THREE.DirectionalLight(1173691, 0.6);
lights[1].position.set(0.75, 1, 0.5);
lights[2] = new THREE.DirectionalLight(8519881, 0.6);
lights[2].position.set(-0.75, -1, 0.5);
lightsSide[0] = new THREE.DirectionalLight(16777215, 0.6);
lightsSide[0].position.set(1, 0, 0);
lightsSide[1] = new THREE.DirectionalLight(1173691, 0.6);
lightsSide[1].position.set(0.75, 1, 0.5);
lightsSide[2] = new THREE.DirectionalLight(8519881, 0.6);
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
    planet.rotation.y += 5e-3 * (8 - planet.userData.size);
    planet.position.x = -Math.cos(planet.userData.time) * (10 * dist * (0.5 + planet.userData.year));
    planet.position.z = -Math.sin(planet.userData.time) * (10 * dist * (0.5 + planet.userData.year));
    planet.userData.time += 25e-4;
  });
  const time2 = Date.now() * 5e-4;
  lights.forEach((light) => {
    light.position.x = -Math.cos(time2);
    light.position.z = -Math.sin(time2);
  });
  lightsSide.forEach((light) => {
    light.position.x = Math.cos(time2);
    light.position.z = Math.sin(time2);
  });
  particle.rotation.x += 0;
  particle.rotation.y -= 2e-3;
  sun.rotation.y += 5e-3;
  const speeds = (distance) => {
    if (distance > 150)
      return 10;
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
    intersect.material.color.set(14737632);
  }
  if (intersects.length > 0 && !animation) {
    document.body.style.cursor = "pointer";
    var object = intersects[0].object;
    intersect = object;
    object.material.color.set(16777215);
  } else {
    document.body.style.cursor = "default";
    if (intersect) {
      intersect.material.color.set(14737632);
      intersect = null;
    }
  }
  if (selected) {
    skelet.visible = true;
    skelet.position.copy(selected.position);
    const size = selected.userData.size + 2;
    skelet.scale.set(size, size, size);
  } else {
    localStorage.setItem("project", null);
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
  mouse.x = event.clientX / window.innerWidth * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
function onDocumentMouseClick(event) {
  if (event.toElement.id === "next" || event.toElement.id === "about")
    return;
  mouse.x = event.clientX / window.innerWidth * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects([...planets, sun], true);
  if (intersects.length > 0) {
    selected = intersects[0].object.parent;
    intersects[0].object.material.color.set(16777215);
    localStorage.setItem("project", JSON.stringify(selected.userData));
  } else {
    selected = null;
  }
}
const createScene = (el, _window, document2) => {
  window = _window;
  const controls = new TREE.OrbitControls(camera, el);
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el, alpha: true });
  resize(_window.innerWidth, _window.innerHeight);
  animate();
  controls.update();
  _window.addEventListener("resize", resize);
  _window.addEventListener("mousemove", onDocumentMouseMove, false);
  _window.addEventListener("mousedown", onDocumentMouseClick, false);
};
