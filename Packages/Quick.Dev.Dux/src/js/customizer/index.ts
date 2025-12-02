import {
  REVISION,
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  DirectionalLight,
  MeshBasicMaterial,
  GridHelper,
  DirectionalLightHelper,
  TextureLoader,
  SphereGeometry,
  PlaneGeometry,
  BackSide,
  Color,
  Mesh,
  Vector3,
  RepeatWrapping,
} from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';

import { Grass } from './Grass';

console.log('Three.js version:', REVISION);

const isDev = false;
let mouseIsDown = false;

/** SCENE / CANVAS */
const scene = new Scene();
scene.background = new Color(0xdddddd);

/** RENDERER */
const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/** CAMERA */
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-30, 30, 10);
camera.lookAt(0, 0, 0);

/** ADD GRID IN DEV */
const size = 100;
const divisions = 10;
const centerLineColor = 0x444444;
const gridLineColor = 0x888888;
const gridHelper = new GridHelper(size, divisions, centerLineColor, gridLineColor);
isDev && scene.add(gridHelper);

/** LIGHTS */
let lightBack = new DirectionalLight(new Color('hsla(46, 100%, 93%, 1.00)'), 3);
lightBack.position.set(15, 20, 20);
lightBack.target.position.set(0, 0, 0);
scene.add(lightBack);
scene.add(lightBack.target);

if (isDev) {
  const lightBackHelper = new DirectionalLightHelper(lightBack, 2);
  scene.add(lightBackHelper);

  const handleGeometry = new SphereGeometry(1, 16, 16);
  const handleMaterial = new MeshBasicMaterial({ color: 0xff0000 });
  const lightHandle = new Mesh(handleGeometry, handleMaterial);
  lightHandle.position.copy(lightBack.position);
  scene.add(lightHandle);

  const controls = new DragControls([lightHandle], camera, renderer.domElement);

  controls.addEventListener('dragstart', (event) => {
    // event.object.material.color.setHex(0xff0000);
  });

  controls.addEventListener('dragend', (event) => {
    // event.object.material.color.setHex(0xffffff);
    lightBack.position.copy(event.object.position);
    lightBack.target.position.set(0, 0, 0);
    lightBack.target.updateMatrixWorld();
  });
}

let lightFront = new DirectionalLight(new Color('hsla(46, 100%, 93%, 1.00)'), 3);
lightFront.position.set(-15, 20, -20);
scene.add(lightFront);

if (isDev) {
  const lightFrontHelper = new DirectionalLightHelper(lightFront, 2);
  scene.add(lightFrontHelper);

  const handleGeometry = new SphereGeometry(1, 16, 16);
  const handleMaterial = new MeshBasicMaterial({ color: 0xff0000 });
  const lightHandle = new Mesh(handleGeometry, handleMaterial);
  lightHandle.position.copy(lightFront.position);
  scene.add(lightHandle);
}

/** CONTROLS */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.maxPolarAngle = Math.PI / 2.3;
controls.maxDistance = 60;

const fControls = new FirstPersonControls(camera, renderer.domElement);
fControls.movementSpeed = 100;
fControls.lookSpeed = 0.1;
fControls.enabled = true;

/** BUILD BACKGROUND */
const loader = new TextureLoader();
const texture = loader.load(`/assets/images/Lakeside_View_Day.jpg`);

const sky = new SphereGeometry(80, 60, 40);
const skyMesh = new MeshBasicMaterial({
  map: texture,
  side: BackSide,
});
const backgroundSphere = new Mesh(sky, skyMesh);
scene.add(backgroundSphere);

const grass = new Grass(60, 200000);
scene.add(grass);

const waterGeometry = new PlaneGeometry(10000, 10000);
const water = new Water(waterGeometry, {
  textureWidth: 512,
  textureHeight: 512,
  waterNormals: new TextureLoader().load('/assets/images/waternormals.jpg', (texture) => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
  }),
  sunDirection: new Vector3(),
  sunColor: 0xffffff,
  waterColor: 0x001e0f,
  distortionScale: 3.7,
  fog: scene.fog !== undefined,
});
water.rotation.x = -Math.PI / 2;
water.position.y = -0.5;
scene.add(water);

/** FILE LOADER */
const objLoader = new GLTFLoader();
objLoader.load(`/assets/3d/Woodfired/8x6_Hottub.glb`, (gltf) => {
  let root = gltf.scene;
  root.background = new Color(`rgba(0, 0, 0, 1)`);
  root.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  const scaleFactor = 5;
  root.rotation.y = Math.PI;
  root.scale.set(scaleFactor, scaleFactor, scaleFactor);
  scene.add(root);
});

renderer.setAnimationLoop((time) => {
  grass.update(time);
  water.material.uniforms['time'].value += 1.0 / 60.0;

  controls.update();
  renderer.render(scene, camera);
});

renderer.domElement.addEventListener(
  'mousedown',
  () => {
    if (mouseIsDown === false) {
      mouseIsDown = true;
    }
  },
  false
);

renderer.domElement.addEventListener(
  'mouseUp',
  () => {
    if (mouseIsDown === true) {
      mouseIsDown = false;
    }
  },
  false
);

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', onWindowResize);
