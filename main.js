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
    "https://res.cloudinary.com/abhayshiro/image/upload/v1548927086/learning/textures/TexturesCom_MetalFloorsRusted0039_2_S.jpg"
  ),
  cylinderGeometry = new THREE.BoxGeometry(30, 30, 8),
  cylinderMaterial = new THREE.MeshLambertMaterial({
    map: texture
  }),
  cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial),
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
scene.add(cylinder);

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

document.body.appendChild(renderer.domElement);
