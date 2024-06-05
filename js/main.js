import * as THREE from './three.js';

//Crear una escena
const scene = new THREE.Scene();

//Crea una camara con perspectiva
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//Atributos 75 es grado o angulo de vision, la division es la apertura de la camara o escena, 01 es donde empieza a percibir la camara y 1000 es lo lejos 


//Crea un render
const renderer = new THREE.WebGLRenderer(); // renderizar algo
renderer.setSize( window.innerWidth, window.innerHeight ); //pantalla a renderizar
renderer.setAnimationLoop( animate ); //animar el render
document.body.appendChild( renderer.domElement ); //crea el elemento html para visualizar la escena

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // Amcho, alto y profundidad de nuestro cubo
const material = new THREE.MeshBasicMaterial( { color: 0xFBDCFD} ); //Material de color solido sin textura
const cube = new THREE.Mesh( geometry, material ); //Combina los triangulos y les colocas una caracteristica, es la maya de triangulos
scene.add( cube ); // Agrega el cubo a la escena

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}