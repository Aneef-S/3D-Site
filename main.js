import * as THREE from 'three';
import gsap  from 'gsap';
import './style.css'


const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas});


const sizes = {
  width:window.innerWidth,
  height:window.innerHeight
};

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.z = 20;

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial( { color: '#00ff83' } );
const cubeMaterial = new THREE.MeshStandardMaterial(
  {
    color: '#00ff83',
    roughness:'0.4'
  }
)

const CubeGeo = new THREE.BoxGeometry(5,5,5);
const boxMesh = new THREE.Mesh(CubeGeo,cubeMaterial);
boxMesh.position.set(-15,0,0);
scene.add(boxMesh);

const coneGeo = new THREE.ConeGeometry(3,7);
const coneMesh = new THREE.Mesh(coneGeo,cubeMaterial);
scene.add(coneMesh)

const cylinderGeo = new THREE.CylinderGeometry(3,3,7);
const cylinderMesh = new THREE.Mesh(cylinderGeo,cubeMaterial);
cylinderMesh.position.set(15,0,0);
scene.add(cylinderMesh);



// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );
// points.push( new THREE.Vector3( - 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );
// scene.add( line );
const light = new THREE.PointLight(0xffffff,.5,100,0);
light.position.set(0,0,60);
scene.add(light);





window.addEventListener("resize",()=>{
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width/sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width,sizes.height)
  
})









function animate() {
  boxMesh.rotation.x += 0.01;
  boxMesh.rotation.y += 0.01;
  coneMesh.rotation.z += 0.01
  coneMesh.rotation.x += 0.01
  cylinderMesh.rotation.z += 0.01
  cylinderMesh.rotation.x += 0.01
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();


// function animate() {

//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// animate();


// const t1 = gsap.timeline({ repeat: -1 });

// t1.fromTo(boxMesh.position, { x: 10, y: 0 }, { x: -10, y: 0, duration: 3 });
// t1.fromTo(boxMesh.position, { x: -10, y: 0 }, { x: 0, y: 10, duration: 3 });
// t1.fromTo(boxMesh.position, { x: 0, y: 10 }, { x: 10, y: 0, duration: 3 });









