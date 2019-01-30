- Camera
  A (perspective) camera simulates the behaviour of a film camera in real life. The position of the camera and the direction it is facing will determine the parts of your scene that get rendered to the screen. When you set up a camera you need to pass in a vertical field of view (fov), an aspect ratio, a near plane, and a far plane. These 4 values dictate the 3D space (viewing frustum) that can be captured by your camera.

  fov: The vertical field of view. This dictates the size of the vertical space your camera's view can reach.
  aspect: This is the aspect ratio you use to create the horizontal field of view based off the vertical.
  near: This is the nearest plane of view (where the camera's view begins).
  far: This is the far plane of view (where the camera's view ends).

- Lights
  Directional Lights: a large light from far away that shines from one direction (think of the sun).
  Ambient Lights: less of a light source and more of a soft color tint for the scene.
  Point Lights: think of a lightbulb - shines in every direction & has a limited range.
  Spot Lights: just like a spotlight works in real life.
  Hemisphere Lights: an ambient (non directional) light coming from the ceiling and floor of the scene.
