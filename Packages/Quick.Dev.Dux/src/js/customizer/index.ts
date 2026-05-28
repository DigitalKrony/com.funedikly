import {
  REVISION,
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  DirectionalLight,
  MeshBasicMaterial,
  GridHelper,
  DirectionalLightHelper,
  ShadowMaterial,
  PCFSoftShadowMap,
  SphereGeometry,
  PlaneGeometry,
  Color,
  Mesh,
} from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';

const _int_3d_viewer = (fileObj: any) => {
  const isDev = false;
  let mouseIsDown = false;

  isDev && console.log('Three.js version:', REVISION);

  /** SCENE / CANVAS */
  const scene = new Scene();
  scene.background = new Color(0xdddddd);

  /** RENDERER */
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(500, 500);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  const viewWindow = document.getElementById('customizer-view');
  viewWindow?.appendChild(renderer.domElement);

  /** CAMERA */
  const camera = new PerspectiveCamera(3, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(-40, 20, -30);
  camera.lookAt(0, 0, 0);

  if (isDev) {
    /** ADD GRID IN DEV */
    const size = 100;
    const divisions = 10;
    const centerLineColor = 0x444444;
    const gridLineColor = 0x888888;
    const gridHelper = new GridHelper(size, divisions, centerLineColor, gridLineColor);
    scene.add(gridHelper);
  }

  const floorGeometry = new PlaneGeometry(100, 100);
  const floorMaterial = new ShadowMaterial({ color: 0x101010, opacity: 0.25 });
  const floor = new Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  floor.position.y = -1.1;
  scene.add(floor);

  const lightIntensity = 2;

  /** LIGHTS */
  let lightBack = new DirectionalLight(new Color('hsla(48, 23%, 74%, 1.00)'), lightIntensity);
  lightBack.position.set(15, 20, 20);
  lightBack.target.position.set(0, 0, 0);
  lightBack.castShadow = false;
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

  let lightFront = new DirectionalLight(new Color('hsla(47, 30%, 85%, 1.00)'), lightIntensity);
  lightFront.position.set(-15, 20, -20);
  lightFront.castShadow = true;
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
  controls.maxPolarAngle = Math.PI / 2;
  controls.maxDistance = 60;

  // const Loader_MTL = new MTLLoader();
  // const Loader_OBJ = new OBJLoader();

  // Loader_MTL.load(
  //   '/assets/3d/Woodfired/4x3_Hottub.mtl',
  //   (materials: any) => {
  //     materials.preload();

  //     Loader_OBJ.setMaterials(materials);
  //     Loader_OBJ.load(
  //       '/assets/3d/Woodfired/4x3_Hottub.obj',
  //       (object: any) => {
  //         const scaleFactor = 0.1;

  //         object.position.set(0, 0, 0);
  //         object.scale.set(scaleFactor, scaleFactor, scaleFactor);
  //         object.rotation.x = -90 * (Math.PI / 180);

  //         object.traverse((child: any) => {
  //           if (child.isMesh) {
  //             child.castShadow = true;
  //             child.receiveShadow = true;
  //             child.material.shininess = 50; // Increase shininess for a glossy look
  //             child.material.reflectivity = 1; // Increase reflectivity
  //           }
  //         });

  //         scene.add(object);
  //       },
  //       (xhr: any) => {
  //         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  //       },
  //       (error: any) => {
  //         console.error('An error happened', error);
  //       }
  //     );
  //   },
  //   (xhr) => {
  //     console.log((xhr.loaded / xhr.total) * 100 + '% of MTL loaded');
  //   },
  //   // Optional: onError callback for MTL
  //   (error) => {
  //     console.error('An error occurred loading the MTL:', error);
  //   }
  // );

  /** FILE LOADER */
  const Loader_GLB = new GLTFLoader();
  Loader_GLB.load(fileObj[0].url, (gltf) => {
    let model = gltf.scene;
    model.traverse((child) => {
      if ((child as any).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    const scaleFactor = 0.7;
    model.rotation.y = Math.PI;
    model.rotation.x = 90 * (Math.PI / 180);
    model.position.set(0, -1.1, 0);

    model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    scene.add(model);
  });

  renderer.setAnimationLoop((time) => {
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
};

const fileObj = [
  {
    id: 3,
    name: 'wood-fired_4ftx3ft',
    filename: '4x3.glb',
    url: '/assets/3d/wood-fired/4x3.glb',
  },
  {
    id: 4,
    name: 'wood-fired_6ftx3ft',
    filename: '6x3.glb',
    url: '/assets/3d/wood-fired/6x3.glb',
  },
  {
    id: 5,
    name: 'wood-fired_5ftx3ft',
    filename: '5x3.glb',
    url: '/assets/3d/wood-fired/5x3.glb',
  },
];

(window as any)._int_3d_viewer = _int_3d_viewer;

_int_3d_viewer(fileObj);
