"use strict";
/* eslint-disable */

//define width, height, device pixelratio
let width = window.innerWidth,
  height = window.innerHeight,
  pixelRatio = window.devicePixelRatio;

//Create a scene
let scene = new THREE.Scene();

//creating a camera
let camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);

//place the camera at z axis at 100
camera.position.z = 100;

//Add the renderer
//Alpha true removes the canvas bg color
let renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

//setSize of the renderer to the window width and height
renderer.setSize(width, height);

//add the renderer to the page by appending it
document.body.appendChild(renderer.domElement);

//add a sphere geometry and its material
let sphereGeometry = new THREE.SphereGeometry(10, 20, 20);
let sphereMaterial = new THREE.MeshLambertMaterial({
  color: 0xfd59d7
});
let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

//Add the light and make the light focus on the sphere we created above
let light = new THREE.PointLight(0xffffff);
light.position.set(10, 0, 25);
scene.add(light);

//REnderer update function
var render = function() {
  requestAnimationFrame(render);
  sphere.rotation.x += 0.1;
  renderer.render(scene, camera);
};

render();

// dat gui
var gui = new dat.GUI();
var cameraGui = gui.addFolder("camera position");
cameraGui.add(camera.position, "x");
cameraGui.add(camera.position, "y");
cameraGui.add(camera.position, "z");
cameraGui.open();

var cameraGui = gui.addFolder("camera projection");
cameraGui.add(camera, "fov");
cameraGui.open();

var lightGui = gui.addFolder("light position");
lightGui.add(light.position, "x");
lightGui.add(light.position, "y");
lightGui.add(light.position, "z");
lightGui.open();

var cubeGui = gui.addFolder("Sphere position");
cubeGui.add(sphere.position, "x");
cubeGui.add(sphere.position, "y");
cubeGui.add(sphere.position, "z");
cubeGui.open();
