use strict
// store the window's width and height in variables
let width = window.innerWidth,
  height = window.innerHeight;

// define the renderer and the scene
//we set the antialias to true, because we want the edges of objects to be smooth, not jagged.
//Other options can be set inside the WebGLRenderer()
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

let scene = new THREE.Scene;

