import oc from 'three-orbit-controls';
import * as THREE from 'three';

const { build } = require('../src/scripts/build');

var OrbitControls = oc(THREE);

var scene, camera, renderer, newCube;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
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

export function init(size, arg2) {
    var something = arg2
    
    var amount = size;
    var count = Math.pow( amount, 3 )

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
     );

    camera.lookAt(0, 0, 0);

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
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );


    const material = new THREE.MeshPhongMaterial({color: 0x0000ff});
    material.wireframe = true;
    newCube = new THREE.InstancedMesh( geometry, material, count );

    let m = 0;
    const offset = (amount - 1) / 2;
    const color = new THREE.Color("rgb(100%, 10%, 100%)");

    const matrix = new THREE.Matrix4();

    for (let i = 0; i < amount; i++){
        for (let j = 0; j < amount; j++){
            for (let k = 0; k < amount; k++){    

                matrix.setPosition(offset - i, offset - j, offset - k);
                newCube.setMatrixAt( m, matrix );
                newCube.setColorAt( m, color );

                m ++;
            }
        }
    }

    scene.add(newCube);

    const light = new THREE.DirectionalLight( 0xffffff, 50, 100 );
    light.position.set( 0, 50, 1 );
    light.castShadow = true;
    scene.add( light );

    var light2 = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(light2);

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

            newCube.setMatrixAt( instanceId, newMatrix )
            newCube.instanceMatrix.needsUpdate = true;

        }

        renderer.render(scene, camera);

    } else if (event.key === 's') {
        sKeyStatus = true;
    }


}

var onClick = function(event) {
    event.preventDefault();
    
    if ( sKeyStatus ) {

    } else {
        mouse.x = ( event.clientX / (window.innerWidth)) * 2 - 1;
        mouse.y = - ( event.clientY / (window.innerHeight)) * 2 + 1;
    
        raycaster.setFromCamera( mouse, camera );
        
        const intersection = raycaster.intersectObjects( scene.children, true );
    
        var newMatrix = new THREE.Matrix4();
        newMatrix.setPosition(-1000, -10000, -1000);
    
        if ( intersection.length > 0 ) {
    
            const instanceId = intersection[ 0 ].instanceId;

            newCube.setMatrixAt( instanceId, newMatrix )
            newCube.instanceMatrix.needsUpdate = true;
    
        }
    
        renderer.render(scene, camera);
    }
}

function animate() {

    requestAnimationFrame(animate);

    // newCube.rotation.y += 0.01;
    // newCube.rotation.x += 0.01;
    // newCube.rotation.z += 0.01;

    render();
    
}

function render(){
    renderer.render(scene, camera);
}

function start( size ){
    init(size);
    animate();
}

function run(size) {
    start(size);
}

run(10);
build();