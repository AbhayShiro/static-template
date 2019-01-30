"use strict";
/* eslint-disable */

let width = window.innerWidth,
  height = window.innerHeight,
  aspectRatio = width / height,
  pixelRatio = window.devicePixelRatio,
  camera = new THREE.PerspectiveCamera(60, aspectRatio, 1, 10000),
  light = new THREE.PointLight(0xffffff),
  scene = new THREE.Scene(),
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  }),
  coneGeometry = new THREE.ConeGeometry(5, 10),
  coneMaterial = new THREE.LineBasicMaterial({
    color: 0x3232ff,
    linewidth: 1,
    linecap: "round", //ignored by WebGLRenderer
    linejoin: "round" //ignored by WebGLRenderer
  }),
  cone = new THREE.Mesh(coneGeometry, coneMaterial),
  render = () => {
    requestAnimationFrame(render);
    cone.position.y += 0.01;
    cone.position.x += 0.0005;
    cone.position.z += 0.0005;
    renderer.render(scene, camera);
  };

camera.position.z = 40;
light.position.set(0, 5, 20);
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
scene.add(light);
scene.add(cone);

render();
