"use strict";
/* eslint-disable */

let width = window.innerWidth,
  height = window.innerHeight,
  pixelRatio = window.devicePixelRatio,
  aspectRatio = width / height,
  scene,
  camera,
  lights,
  renderer,
  circle;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(50, aspectRatio, 1, 1000);
camera.position.z = 25;

lights = new THREE.PointLight(0xffffff);
lights.position.set(0, 5, 25);
scene.add(lights);

let circleGeometry = new THREE.CircleGeometry(4, 32),
  circleMaterial = new THREE.MeshPhongMaterial({
    color: 0xffa500
  });
circle = new THREE.Mesh(circleGeometry, circleMaterial);
scene.add(circle);
renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
console.log(circle);
function render() {
  requestAnimationFrame(render);
  circle.position.y += 0.005;
  renderer.render(scene, camera);
}
render();
