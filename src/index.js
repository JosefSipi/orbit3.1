import oc from 'three-orbit-controls';
import * as THREE from 'three';

import {build} from './scripts/build';

// const { build } = require('../src/scripts/build');

var OrbitControls = oc(THREE);

var scene, camera, renderer, mesh, count;
let currentColor = '0xffffff';
let opacityVal = .25;
let theSize = 11;
let yRotate = .00;
let xRotate = .00;
let zRotate = .00;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// let color = new THREE.Color(0, 1, 5);
// const color = new THREE.Color("rgb(90%, 10%, 10%)");
const color = new THREE.Color(0xffffff);
const theNewColor = new THREE.Color();



var canvas;


document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const resetButton = document.createElement('button');

    resetButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.location.href.includes('?reload=true')){
            window.location.reload();
        } else {
            window.location.href += "?reload=true"
        }
    } );
    
    resetButton.className = "reset-button";
    resetButton.textContent = "Reset";
    
    const div = document.getElementById('the-div')

    div.insertBefore(resetButton, div.firstElementChild);

})

export function init(size) {

    debugger

    let amount = size;
    count = Math.pow( amount, 3 )

    camera = new THREE.PerspectiveCamera( 
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.lookAt(1, 1, 1);
    
    scene = new THREE.Scene();

    const light1 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
	light1.position.set( - 1, 1.5, 1 );
	scene.add( light1 );

    const light2 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    light2.position.set( - 1, - 1.5, - 1 );
    scene.add( light2 );

    // const light3 = new THREE.HemisphereLight( 0xffffff, 0xffffff );
    // light3.position.set( 0, 1, 0 );
    // scene.add( light3 );

    // const ambientLight1 = new THREE.AmbientLight(0xffffff, 10);
    // scene.add( ambientLight1 )

    // const light4 = new THREE.HemisphereLight( 0xffffff, 0x880000, 1 );
    // light4.position.set( - 1, - 1.5, - 1 );
    // scene.add( light4 );


    const geometry = new THREE.BoxGeometry( 1, 1, 1 );

    const material = new THREE.MeshPhongMaterial();
    material.opacity = opacityVal;
    material.transparent = true;
    // material.wireframe = true;

    mesh = new THREE.InstancedMesh( geometry, material, count );

    let m = 0;
    const offset = (amount - 1) / 2;

    const matrix = new THREE.Matrix4();

    for (let i = 0; i < amount; i++){

        for (let j = 0; j < amount; j++){

            for (let k = 0; k < amount; k++){    

                matrix.setPosition(offset - i, offset - j, offset - k);

                mesh.setMatrixAt( m, matrix );
                mesh.setColorAt( m, color );

                m ++;
            }
        }
    }

    debugger
    scene.add(mesh);




    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize((window.innerWidth), (window.innerHeight));


    document.body.appendChild(renderer.domElement);

    canvas = document.querySelector('canvas');

    window.addEventListener('resize', () => {
        renderer.setSize((window.innerWidth), (window.innerHeight));
        camera.aspect = canvas.width / canvas.height;
        camera.updateProjectionMatrix();
    })

    // -------------------------------original loop -----------------------------------------


    camera.position.z = amount + amount / 2;
    var controls =  new OrbitControls(camera, renderer.domElement)
    controls.maxDistance = (amount * 2);
    controls.minDistance  = 1;
    controls.update();

    canvas.addEventListener( 'click', onClick);
    document.addEventListener('mousemove', setMouse );
    document.addEventListener('keydown', keyDown );
    document.addEventListener('keyup', keyUp );
}

var sKeyStatus = false;

var keyUp = function(e) {
    e.preventDefault();
    sKeyStatus = false;
}


var setMouse = function(e) {
    e.preventDefault();
    mouse.x = ( e.clientX / (window.innerWidth)) * 2 - 1;
    mouse.y = - ( e.clientY / (window.innerHeight)) * 2 + 1;
}

var keyDown = function(event) {
    event.preventDefault();

    if(event.key === "d"){

        raycaster.setFromCamera( mouse, camera );
        
        const intersection = raycaster.intersectObjects( scene.children, true );

        var newMatrix = new THREE.Matrix4();
        newMatrix.setPosition(-1000, -10000, -1000);
        

        if ( intersection.length > 0 ) {

            const instanceId = intersection[ 0 ].instanceId;

             if(currentColor === 'remove'){
                mesh.setMatrixAt( instanceId, newMatrix )
                mesh.instanceMatrix.needsUpdate = true;
            } else {
                mesh.setColorAt( instanceId, color.setHex(currentColor));
                mesh.instanceColor.needsUpdate = true;
            }

        }

        renderer.render(scene, camera);

    } else if (event.key === 's') {
        sKeyStatus = true;
    }


}

export function setColor(inputColor){
    
    currentColor = inputColor
    
}   

export function changeInput(event){
    debugger
    if(event.currentTarget.classList.value === 'y-input'){
        yRotate = Number(event.currentTarget.value)
    } else if (event.currentTarget.classList.value === 'x-input'){
        xRotate = Number(event.currentTarget.value)
    }
    
}


var onClick = function(event) {
    event.preventDefault();
    
    if ( sKeyStatus ) {

    } else {
        debugger
        mouse.x = ( event.clientX / (window.innerWidth)) * 2 - 1;
        mouse.y = - ( event.clientY / (window.innerHeight)) * 2 + 1;
    
        raycaster.setFromCamera( mouse, camera );
        
        const intersection = raycaster.intersectObjects( scene.children, true );
    
        var newMatrix = new THREE.Matrix4();
        newMatrix.setPosition(-1000, -10000, -1000);
        
        if ( intersection.length > 0 ) {
    
            const instanceId = intersection[ 0 ].instanceId;

            if(currentColor === 'remove'){
                mesh.setMatrixAt( instanceId, newMatrix )
                mesh.instanceMatrix.needsUpdate = true;
            } else {
                mesh.setColorAt( instanceId, color.setHex(currentColor));
                mesh.instanceColor.needsUpdate = true;
            }

    
        }
    
        renderer.render(scene, camera);
    }
    debugger
    // removeWhite()
    debugger
}

// function removeWhite(){

//     debugger

//     for (let num = 0; num < count; num++){  
//         debugger
//         console.log(mesh.getColorAt(num, color))

//         // if(mesh.getColorAt(num)){
//         //     console.log(mesh.getColorAt(num))
//         // }
//     }
// }

function animate() {

    requestAnimationFrame(animate);

    mesh.rotation.y += yRotate;
    mesh.rotation.x += xRotate;

    render();
    
}

function render(){

    raycaster.setFromCamera( mouse, camera );

    // const intersection = raycaster.intersectObjects( scene.children, true );


    const intersection = raycaster.intersectObject( mesh );

    // if(intersection.length > 0) {
    //     const instanceId = intersection[ 0 ].instanceId;
        
    //     mesh.setColorAt(instanceId, )

    // }

    renderer.render(scene, camera);
}

function start( size ){
    init(size);
    animate();
}

start(theSize);
build();