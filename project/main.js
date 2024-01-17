import './style.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import bluePlanetTexture from '../project/img/bluePlanetTexture.jpg';
import moonTexture from '../project/img/moonTexture.jpeg';
import spaceShuttleBodyTexture from '../project/img/spaceShuttleBodyTexture.jpeg';





const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});






renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(100);
camera.position.setY(0);

renderer.render(scene, camera); 






//Sun

const sunPlanetShape = new THREE.SphereGeometry(8, 100, 100, 100);
const sunMaterial = new THREE.MeshBasicMaterial({color: 0xffa500});
const sun = new THREE.Mesh(sunPlanetShape, sunMaterial);
sun.userData.name = 'sun';
scene.add(sun);






//White Planet

const middlePlanetShape = new THREE.SphereGeometry(8, 100, 100, 100);
const materialStar = new THREE.MeshBasicMaterial({color: 0xffffff});
const middlePlanet = new THREE.Mesh(middlePlanetShape, materialStar);
middlePlanet.userData.name = 'middlePlanet';
sun.add(middlePlanet);
middlePlanet.position.x = 80;
middlePlanet.position.z = 80;


//White Planet Ring

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347});
const torus = new THREE.Mesh(geometry, material);
torus.userData.name = 'torus';
sun.add(torus)
torus.position.x = 80;
torus.position.z = 80;




//Blue Planet

const bluePlanetTextureLoader = new THREE.TextureLoader();
const bluePlanetShape = new THREE.SphereGeometry(8, 100, 100, 100);
const bluePlanetMaterial = new THREE.MeshBasicMaterial({
  map: bluePlanetTextureLoader.load(bluePlanetTexture)
});
const bluePlanet = new THREE.Mesh(bluePlanetShape, bluePlanetMaterial);
sun.add(bluePlanet);
bluePlanet.position.x = -80;
bluePlanet.position.z = -80;


//Blue Planet Center

const bluePlanetCenterShape = new THREE.SphereGeometry(1, 100, 100, 100);
const bluePlanetCenterMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
const bluePlanetCenter = new THREE.Mesh(bluePlanetCenterShape, bluePlanetCenterMaterial);
sun.add(bluePlanetCenter);
bluePlanetCenter.position.x = -80;
bluePlanetCenter.position.z = -80;



//Blue Planet's Moons

const moonTextureLoader = new THREE.TextureLoader();
const moonShape = new THREE.SphereGeometry(1, 100, 100, 100);
const moonLoader = new THREE.TextureLoader();
const moonMaterial = new THREE.MeshBasicMaterial({
  map: moonTextureLoader.load(moonTexture)
});
const moon1 = new THREE.Mesh(moonShape, moonMaterial);
const moon2 = new THREE.Mesh(moonShape, moonMaterial);
const moon3 = new THREE.Mesh(moonShape, moonMaterial);
const moon4 = new THREE.Mesh(moonShape, moonMaterial);
bluePlanetCenter.add(moon1, moon2, moon3, moon4);
moon1.position.x = 12;
moon1.position.y = 8;
moon2.position.x = -10;
moon2.position.y = -12;
moon3.position.z = 15;
moon3.position.y = 10;
moon4.position.z = -15;
moon4.position.y = 12;






//Green Planet

const greenPlanetShape = new THREE.SphereGeometry(8, 100, 100, 100);
const greenPlanetMaterial = new THREE.MeshBasicMaterial({color: 0xaaff00});
const greenPlanet = new THREE.Mesh(greenPlanetShape, greenPlanetMaterial);
sun.add(greenPlanet);
greenPlanet.position.x = 80;
greenPlanet.position.z = -80;





//Tan Planet

const tanPlanetShape = new THREE.SphereGeometry(8, 100, 100, 100);
const tanPlanetMaterial = new THREE.MeshBasicMaterial({color: 0xECD38A});
const tanPlanet = new THREE.Mesh(tanPlanetShape, tanPlanetMaterial);
sun.add(tanPlanet);
tanPlanet.position.x = -80;
tanPlanet.position.z = 80;





//Spaceship 

const shuttleRotatorShape = new THREE.SphereGeometry(1, 100, 100, 100, 100);
const shuttleRotatorMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
const shuttleRotator = new THREE.Mesh(shuttleRotatorShape, shuttleRotatorMaterial);
sun.add(shuttleRotator);
shuttleRotator.position.x = 135;
shuttleRotator.position.y = 135;

const spaceShuttleBodyTextureLoader = new THREE.TextureLoader();
const spaceShuttleBodyShape = new THREE.CapsuleGeometry(1, 3, 1, 20);
const spaceShuttleBodyMaterial = new THREE.MeshBasicMaterial({
  map: spaceShuttleBodyTextureLoader.load(spaceShuttleBodyTexture)
});
const spaceShuttleBody = new THREE.Mesh(spaceShuttleBodyShape, spaceShuttleBodyMaterial);
shuttleRotator.add(spaceShuttleBody);
spaceShuttleBody.position.x = 0;
spaceShuttleBody.position.y = 0;
spaceShuttleBody.position.z = 0;
spaceShuttleBody.rotateZ(80);
spaceShuttleBody.rotateX(30);


const spaceShuttleTailShape = new THREE.TorusGeometry(1, 1, 2, 200, 3.5);
const spaceShuttleTailMaterial = new THREE.MeshBasicMaterial({color: 0xff2400});
const spaceShuttleTail = new THREE.Mesh(spaceShuttleTailShape, spaceShuttleTailMaterial);
shuttleRotator.add(spaceShuttleTail);
spaceShuttleTail.position.x = 0.5;
spaceShuttleTail.position.y = 0;
spaceShuttleTail.position.z = 3.5;
spaceShuttleTail.rotateZ(-79.0);
spaceShuttleTail.rotateX(29.8);
spaceShuttleTail.rotateY(0.2);









//Lighting

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-14,12,8);
pointLight.lookAt(new THREE.Vector3(0,0,0));

scene.add(pointLight);





//Helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
// scene.add(gridHelper);
// scene.add(lightHelper);




//Mouse Controls
const controls = new OrbitControls(camera, renderer.domElement);


//Animation Call
animate()






//Animations 
function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  
  bluePlanet.rotation.x += 0.001;
  bluePlanet.rotation.y += 0.001;
  bluePlanet.rotation.z += 0.001;

  bluePlanetCenter.rotation.x +=0.01;
  bluePlanetCenter.rotation.y +=0.01;
  bluePlanetCenter.rotation.z += 0.005;  
  
  
  shuttleRotator.rotation.y +=0.015;
  shuttleRotator.translateZ(-2.5);
  

  
  
  middlePlanet.rotation.y += 0.0001;
  sun.rotation.y += 0.001;
  renderer.render(scene, camera);
  controls.update();
}

//Initialize and add all of the stars.

function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshBasicMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);

  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(400));

  star.position.set(x,y,z);
  sun.add(star);
}

Array(400).fill().forEach(addStar);









const raycaster = new THREE.Raycaster();
const clickMouse = new THREE.Vector2();
const moveMouse = new THREE.Vector2();



window .addEventListener('mousemove', event => {
  clickMouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	clickMouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera(clickMouse, camera);
  raycaster.intersectObjects(scene.children);
  const found = raycaster.intersectObjects(scene.children);

  if(found[0].object.userData.name == 'torus'  || found[0].object.userData.name == 'middlePlanet'){
    torus.material.color.set(0xff0000);
    middlePlanet.material.color.set(0x0000ff);
  }

  else{
    torus.material.color.set(0xFF6347);
    middlePlanet.material.color.set(0xffffff);
  }




})