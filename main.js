"use strict";
/* eslint-disable */

let width = window.innerWidth,
  height = window.innerHeight,
  pixelRatio = window.devicePixelRatio,
  aspectRatio = width / height,
  scene = new THREE.Scene(),
  light = new THREE.SpotLight(0xffffff),
  camera = new THREE.PerspectiveCamera(70, aspectRatio, 1, 1000),
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  }),
  texture = new THREE.TextureLoader().load(
    "https://res.cloudinary.com/abhayshiro/image/upload/v1548928399/learning/textures/2k_earth_daymap.jpg"
  ),
  earthGeometry = new THREE.SphereGeometry(5, 32, 32),
  earthMaterial = new THREE.MeshBasicMaterial({
    map: texture
  }),
  earth = new THREE.Mesh(earthGeometry, earthMaterial),
  //Skybox pattern
  skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000),
  skyboxMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.BackSide
  }),
  skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial),
  render = () => {
    renderer.render(scene, camera);
  };

camera.position.z = 50;
light.position.set(20, 320, 200);
light.castShadow = true;
light.shadow.mapSize.width = width;
light.shadow.mapSize.height = height;

light.shadow.camera.near = 500;
light.shadow.camera.far = 4000;
light.shadow.camera.fov = 30;
renderer.setSize(width, height);

scene.add(light);
scene.add(skybox);
scene.add(earth);

/////////////////////////////////////////
// Trackball Controller
/////////////////////////////////////////
let controls = new THREE.TrackballControls(camera);
controls.rotateSpeed = 5.0;
controls.zoomSpeed = 3.2;
controls.panSpeed = 0.8;
controls.noZoom = false;
controls.noPan = true;
controls.staticMoving = false;
controls.dynamicDampingFactor = 0.2;

/////////////////////////////////////////
// Window Resizing
/////////////////////////////////////////
window.addEventListener(
  "resize",
  function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.handleResize();
    render();
  },
  false
);

document.body.appendChild(renderer.domElement);

// Render the scene when the controls have changed.
// If you don’t have other animations or changes in your scene,
// you won’t be draining system resources every frame to render a scene.
controls.addEventListener("change", render);

// Avoid constantly rendering the scene by only
// updating the controls every requestAnimationFrame
function animationLoop() {
  requestAnimationFrame(animationLoop);
  controls.update();
}
render();
animationLoop();

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

var cubeGui = gui.addFolder("Earth position");
cubeGui.add(earth.position, "x");
cubeGui.add(earth.position, "y");
cubeGui.add(earth.position, "z");
cubeGui.open();
