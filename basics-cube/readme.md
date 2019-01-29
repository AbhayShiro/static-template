- Introduction
  Three.js uses the concept of a display list.
  It means that all objects are stored in the list and then drawn to the screen.

- Scene object
  You need to add any object you want to be drawn on the screen to the scene.
  You can have as many scenes as you want, but one renderer can draw only one scene at once

- Meshes
  In Three.js the objects that are being drawn on the screen are called meshes.
  Each mesh has to have its own geometry and material.
  Geometry is a set of points that need to be connected in order to create the object.
  Material is simply the paint (or painting, but that is not the topic of this tutorial) that will cover the object

- Camera
  To render something, first we need to add the camera to the scene, so the renderer knows from which point of view it should render stuff.
  There are a few types of cameras in Three.js, but you'll probably only use THREE.PerspectiveCamera.
  THREE.PerspectiveCamera type of camera is presenting the scene as we see our world
  ```
    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
  ```
  The first argument defines the FOV (field of view), the angle that can be seen from where the camera is.
  A FOV of 45 degrees looks natural. Next, we define the camera's ratio.
  This is always the width of the renderer divided by its height, unless you want to achieve some special effects.
  The last two numbers are defining how close and how far the object can be to the camera to be drawn.

_all of the objects created in Three.js have their position set in the middle of the scene_
**The z coordinate is positive in the direction of the viewer, so objects with a higher z position will appear closer to you **

- Lights
  Scene will render black as there are no lights on the screen. SO it is like a complete black room.
  To avoid that a technique called **Skybox** is used.
  This technique we will add a big cube that will display the background of the scene (usually some far terrain if it's open space).

- Updating the animation
  One `renderer.render` call, renders the current state of the scene once.
  So even if we animate the cube somehow, we will not see it move.
  To change that, we have to add the render loop to our app. This can be achieved using the `renderAnimationFrame` function, which was created specially for that purpose.
  It's supported in most of the major browsers, and for those which doesn't support it, Three.js comes with its own polyfill.

  The `requestAnimationFrame` function behaves a bit like setTimeout, but it's calling the function passed as quick as the browser is ready. So, nothing really changed in the displayed scene and the cube is still not moving.
  Three.js comes with `THREE.Clock` which can be used to achieve smooth animation of objects.
