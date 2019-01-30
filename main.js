"use strict";
/* eslint-disable */

let width = window.innerWidth,
  height = window.innerHeight,
  pixelRatio = window.devicePixelRatio;

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
camera.position.z = 50;

let renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//Adding cube
let cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
let cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500 });
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cube);

//Adding lights
let pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 5, 25);

scene.add(pointLight);

function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.001;
  renderer.render(scene, camera);
}

render();
