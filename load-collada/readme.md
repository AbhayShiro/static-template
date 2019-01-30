- Camera Viewing Frustrum
  ![What is Viewing Frustum](https://res.cloudinary.com/abhayshiro/image/upload/v1548753359/learning/camera-frustum-1.png)

- WebGLRenderer
  More information on webGL renderer properties are here on this link https://threejs.org/docs/api/renderers/WebGLRenderer.html

  **important**
  It is crucial to note that in every project it is essential to setSize to the renderer initialized:
  `renderer.setSize(width, height)`

This domElement property is where the renderer draws its output and will be in the form of a canvas element. Although I’m using document.body you could append or prepend the canvas element anywhere you like.

- Collada 3D objects
  To insert our 3D object to the scene we have to use the ColladaLoader.
  It should be mentioned that any graphic you decide to use should generally aim to be under 1-2Mb and must be a Collada file in order to use with Three.js: these are files that end with the .dae extension.
  If you open up a Collada file you’ll see it’s actually written in XML.
  More info on collada files is available at https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/ColladaLoader.js
