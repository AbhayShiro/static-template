/* eslint-disable */
// store the window's width and height in variables
let width = window.innerWidth,
  height = window.innerHeight;

// define the renderer and the scene
//we set the antialias to true, because we want the edges of objects to be smooth, not jagged.
//Other options can be set inside the WebGLRenderer()
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

let scene = new THREE.Scene();

//Adding THREE.Clock which can be sued to acheive the smooth animationof the objects
var clock = new THREE.Clock();

//Adding the cube
let cubeGeometry = new THREE.CubeGeometry(100, 100, 100);
let cubeMaterial = new THREE.MeshLambertMaterial({
  color: 0x1ec876
});
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.rotation.y = (Math.PI * 45) / 80;

scene.add(cube);

// Adding the Camera
let camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 10000);
camera.position.y = 160;
camera.position.z = 400;

camera.lookAt(cube.position);

// Addding the camera to the scene and rendering it
scene.add(camera);

var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
/**
 * Notice the additional argument passed to the material: side: THREE.BackSide.
 * Since the cube will be displayed from the inside, we have to change the side that gets drawn (normally, Three.js draws only outside walls).
 */
var skyboxMaterial = new THREE.MeshBasicMaterial({
  color: 0x000000,
  side: THREE.BackSide
});
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

scene.add(skybox);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 320, 200);

scene.add(pointLight);

function render() {
  renderer.render(scene, camera);
  //each time you call clock.getDelta it will return the time since the last call, in milliseconds.
  //This can be used to rotate the cube
  //It's simply subtracting the time passed from the cube's rotation on the Y axis (remember that it's in radians) to rotate the cube clockwise
  cube.rotation.y += clock.getDelta();

  requestAnimationFrame(render);
}

render();
