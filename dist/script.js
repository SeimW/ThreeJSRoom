let width = 500;
let height = 400;

// Create the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

// Create a WebGLRenderer and enable shadows
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(width, height);
renderer.antialias = true; // Smooth out the edges
document.body.appendChild(renderer.domElement);

// Position the camera
camera.position.set(0, 5, 10); 

//Load textures
renderer.shadowMapType = THREE.BasicShadowMap;
const loader = new THREE.TextureLoader();
const balltexture = loader.load('https://raw.githubusercontent.com/amaraauguste/amaraauguste.github.io/refs/heads/master/courses/CISC3620/textures/basketball.png');
const floortexture = loader.load('https://raw.githubusercontent.com/SeimW/ThreeJSRoom/main/hardwood.jpg');


//WRITE CODE TO CREATE FLOOR HERE
const floorGeometry = new THREE.BoxGeometry(20, 35);
const floorMaterial = new THREE.MeshStandardMaterial({ map: floortexture });
//floortexture.scale = 0.01;
floortexture.wrapS = THREE.RepeatWrapping;
floortexture.wrapT = THREE.RepeatWrapping;
floortexture.repeat.set(1, 10);
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -2;
floor.position.z = -7.5;
floor.receiveShadow = true;

scene.add(floor);

//Code for the walls
const nWallGeo = new THREE.BoxGeometry(20, 20);
const nWallMaterial = new THREE.MeshStandardMaterial({ color: 'white' });
const nWall = new THREE.Mesh(nWallGeo, nWallMaterial);
nWall.recieveShadow = true;
nWall.position.z = -24.5;
nWall.position.y = 7.5;
scene.add(nWall);

const wWallGeo = new THREE.BoxGeometry(35, 20);
const wWallMaterial = new THREE.MeshStandardMaterial({ color: 'white' });
const wWall = new THREE.Mesh(wWallGeo, wWallMaterial);
wWall.recieveShadow = true;
wWall.position.z = -7.5;
wWall.rotation.y = -Math.PI/2;
wWall.position.y = 7.5;
wWall.position.x = -10;
scene.add(wWall);

const eWallGeo = new THREE.BoxGeometry(35, 20);
const eWallMaterial = new THREE.MeshStandardMaterial({ color: 'white' });
const eWall = new THREE.Mesh(eWallGeo, eWallMaterial);
eWall.recieveShadow = true;
eWall.position.z = -7.5;
eWall.position.y = 7.5;
eWall.position.x = 10;
eWall.rotation.y = Math.PI/2;
scene.add(eWall);

//Ceiling
const ceilingGeometry = new THREE.BoxGeometry(20, 35);
const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 'white' });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceiling.rotation.x = -Math.PI / 2;
ceiling.position.y = 17;
ceiling.position.z = -7.5;
ceiling.receiveShadow = true;

scene.add(ceiling);

//Ceiling Light
const cLightGeo = new THREE.SphereGeometry(1, 32, 32, 0, 2*Math.PI, 0, Math.PI/2);
const cLightMat = new THREE.MeshStandardMaterial({ color: 'yellow' });
const cLight = new THREE.Mesh(cLightGeo, cLightMat);
cLight.recieveShadow = true;
cLight.position.y = 15.5;

scene.add(cLight);

//loader for custom models
const modelloader = new THREE.GLTFLoader();

//donuts
modelloader.load('https://raw.githubusercontent.com/SeimW/ThreeJSRoom/main/Fancy%20Donuts.glb', function (gltf) {
  const donuts = gltf.scene;
  scene.add(donuts);
  donuts.position.set(-1, 4, -20);
  donuts.scale.setScalar(2);
  donuts.receiveShadow = true;
});

//lamp
modelloader.load('https://raw.githubusercontent.com/SeimW/ThreeJSRoom/main/Standing%20lamp.glb', function (gltf) {
  const lamp = gltf.scene;
  scene.add(lamp);
  lamp.position.set(-5, -1.5, -20);
  lamp.receiveShadow = true;
});

//desk
modelloader.load('https://raw.githubusercontent.com/SeimW/ThreeJSRoom/main/Night%20Stand.glb', function (gltf) {
  const desk = gltf.scene;
  scene.add(desk);
  desk.position.set(-1, -1.5, -20);
  desk.scale.setScalar(7);
  desk.receiveShadow = true;
});

//creating a bed
const blLegGeo = new THREE.BoxGeometry(.5, 2);
const blLegMaterial = new THREE.MeshStandardMaterial({ color: 'black' });
const blLeg = new THREE.Mesh(blLegGeo, blLegMaterial);
blLeg.recieveShadow = true;
blLeg.position.z = -20;
blLeg.position.y = -.5;
blLeg.position.x = 2;
scene.add(blLeg);

const brLegGeo = new THREE.BoxGeometry(.5, 2);
const brLegMaterial = new THREE.MeshStandardMaterial({ color: 'black' });
const brLeg = new THREE.Mesh(brLegGeo, brLegMaterial);
brLeg.recieveShadow = true;
brLeg.position.z = -20;
brLeg.position.y = -.5;
brLeg.position.x = 8;
scene.add(brLeg);

const flLegGeo = new THREE.BoxGeometry(.5, 2);
const flLegMaterial = new THREE.MeshStandardMaterial({ color: 'black' });
const flLeg = new THREE.Mesh(flLegGeo, flLegMaterial);
flLeg.recieveShadow = true;
flLeg.position.z = -10;
flLeg.position.y = -.5;
flLeg.position.x = 2;
scene.add(flLeg);

const frLegGeo = new THREE.BoxGeometry(.5, 2);
const frLegMaterial = new THREE.MeshStandardMaterial({ color: 'black' });
const frLeg = new THREE.Mesh(frLegGeo, frLegMaterial);
frLeg.recieveShadow = true;
frLeg.position.z = -10;
frLeg.position.y = -.5;
frLeg.position.x = 8;
scene.add(frLeg);

const bedframeGeo = new THREE.BoxGeometry(7, 1, 12);
const bedframeMaterial = new THREE.MeshStandardMaterial({ color: 'brown' });
const bedframe = new THREE.Mesh(bedframeGeo, bedframeMaterial);
bedframe.recieveShadow = true;
bedframe.position.z = -15;
bedframe.position.y = 1;
bedframe.position.x = 5;
scene.add(bedframe);

const pillowGeo = new THREE.BoxGeometry(5, 1, 1); 
const pillowMaterial = new THREE.MeshStandardMaterial({ color: 'white' });
const pillow = new THREE.Mesh(pillowGeo, pillowMaterial);
pillow.recieveShadow = true;
pillow.position.z = -20;
pillow.position.y = 2;
pillow.position.x = 5;
scene.add(pillow);

const blanketGeo = new THREE.BoxGeometry(7, .25, 11); 
const blanketMaterial = new THREE.MeshStandardMaterial({ color: 'orange' });
const blanket = new THREE.Mesh(blanketGeo, blanketMaterial);
blanket.recieveShadow = true;
blanket.position.z = -15;
blanket.position.y = 1.5;
blanket.position.x = 5;
scene.add(blanket);


//Ceiling light
const ceilingLight = new THREE.PointLight("lightblue", 1.25); //color, intensity
ceilingLight.position.set(0, 15, 0); //x, y, z
scene.add(ceilingLight);
ceilingLight.castShadow = true;

//Lamp light
const lampLight = new THREE.PointLight("blueviolet", .75); //color, intensity
lampLight.position.set(-5, 7.5, -18); //x, y, z
scene.add(lampLight);
lampLight.castShadow = true;
lampLight.visible = false;


//WRITE CODE TO ADD ORBIT CONTROLS HERE
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

//GUI Control

const ceilcheckbox = document.querySelector('#ceilbox');
const lampcheckbox = document.querySelector('#lampbox');

ceilcheckbox.addEventListener('change', function() {
  if(this.checked){
    ceilingLight.visible = true;
  }
  else{
    ceilingLight.visible = false;
  }
});

lampcheckbox.addEventListener('change', function() {
  if(this.checked){
    lampLight.visible = true;
  }
  else{
    lampLight.visible = false;
  }
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();