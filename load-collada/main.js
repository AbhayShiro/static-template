"use strict";
/* eslint-disable */

/**
 * LIGHTS
 * CAMERA
 * ACTION
 *
 * Same goes for programming in the Three JS world.
 * Define a scene.
 * Define the camera. Set the perspective of the camera.
 * Define what is to be rendered on to the scene.
 *
 * call the render function -- this is the action.
 */

//define the window width and height
let height = window.innerHeight,
  width = window.innerWidth;

//Create a scene
let scene = new THREE.Scene();

//Create the camera. Here we are using the perspective camera.
/**
 * PerspectiveCamera accepts four arguments:
 * Field of View
 * Aspect
 * New and
 * Far
 */
let camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);

//Set the camera position
camera.position.set(-5, 12, 10);
camera.lookAt(scene.position);

//INitialize the WebGL renderer
//Alpha is true removes canvas' bg color
//antialias gives smooth textures to the edges
let renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
//make the scene renderer the size of the screen
renderer.setSize(width, height);

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

/*
We start by defining the ColladaLoader using a variable and 
calling the method along with defining another variable to represent the 3D graphic for referencing at a later point.
*/
let dae, // graphic
  loader = new THREE.ColladaLoader(); // loader

loader.options.convertUpAxis = true;
//LOad the collada file using URL and pass the loadCollada function
loader.load(
  "https://res.cloudinary.com/abhayshiro/raw/upload/v1548757847/learning/model.dae",
  loadCollada
);

var iphone_color = "#FFA500",
  ambientLight = new THREE.AmbientLight("#EEEEEE"),
  hemiLight = new THREE.HemisphereLight("#FAFAFA", "#FAFAFA", 0),
  light = new THREE.PointLight("#FAFAFA", 1, 100);

hemiLight.position.set(0, 50, 0);
light.position.set(0, 20, 10);

scene.add(ambientLight);
scene.add(hemiLight);
scene.add(light);

var axisHelper = new THREE.AxisHelper(1.25);
scene.add(axisHelper);

/**
 * @description Collada loader
 */
function loadCollada(collada) {
  dae = collada.scene;
  dae.position.set(0.4, 0, 0.8);
  scene.add(dae);
  renderPhone();
}

/**
 * @description This “render loop” is what will cause the renderer to draw the scene sixty times per second. The following function will make our creation come alive
 *
 * With our loader and graphic finally in place there is one last step; we need to create what is called a “render loop”.
 * This is because we’re not actually rendering anything yet.
 */
function renderPhone() {
  renderer.render(scene, camera);
}

//event listeners

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
    renderPhone();
  },
  false
);

// Render the scene when the controls have changed.
// If you don’t have other animations or changes in your scene,
// you won’t be draining system resources every frame to render a scene.
controls.addEventListener("change", renderPhone);

// Avoid constantly rendering the scene by only
// updating the controls every requestAnimationFrame
function animationLoop() {
  requestAnimationFrame(animationLoop);
  controls.update();
}

animationLoop();
//append the renderer to the body
document.body.appendChild(renderer.domElement);
