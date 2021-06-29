import oc from 'three-orbit-controls';
import * as THREE from 'three';

const { build } = require('../src/scripts/build');


var OrbitControls = oc(THREE);

var scene, camera, renderer, newCube;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var canvas;



// document.addEventListener
// var canvas = window.body.querySelector('canvas');

export function init(size) {
    // initial();
    
    var amount = size;
    var count = Math.pow( amount, 3 )




    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 
        75,
        window.innerWidth / window.innerHeight,

        // document.body.querySelector('canvas').width

        0.1,
        1000
     );

    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    // renderer.setSize((window.innerWidth), (window.innerHeight ));
    renderer.setSize((window.innerWidth), (window.innerHeight));

    document.body.appendChild(renderer.domElement);
    canvas = document.querySelector('canvas');

    window.addEventListener('resize', () => {
        // renderer.setSize((window.innerWidth), (window.innerHeight ));
        renderer.setSize((window.innerWidth), (window.innerHeight));
        camera.aspect = canvas.width / canvas.height;
        // camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })


// -------------------------------original loop -----------------------------------------
const geometry = new THREE.BoxGeometry( 1, 1, 1 );


const material = new THREE.MeshPhongMaterial({color: 0x0000ff});
material.wireframe = true;
// let newCube = new THREE.Mesh( geometry, material );
newCube = new THREE.InstancedMesh( geometry, material, count );

let m = 0;
const offset = (amount - 1) / 2;
const color = new THREE.Color("rgb(100%, 10%, 100%)");

const matrix = new THREE.Matrix4();

    for (let i = 0; i < amount; i++){
        for (let j = 0; j < amount; j++){
            for (let k = 0; k < amount; k++){    


                // matrix.setPosition(i, j, k);
                matrix.setPosition(offset - i, offset - j, offset - k);
        
                newCube.setMatrixAt( m, matrix );
                newCube.setColorAt( m, color );

                m ++;
                
            }
        }
    }

    scene.add(newCube);

    const light = new THREE.DirectionalLight( 0xffffff, 50, 100 );
    light.position.set( 0, 50, 1 ); //default; light shining from top
    light.castShadow = true; // default false
    scene.add( light );

    var light2 = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(light2);

    camera.position.z = amount + amount / 2;
    var controls =  new OrbitControls(camera, renderer.domElement)
    controls.maxDistance = (amount * 2);
    controls.minDistance  = 1;
    controls.update();

    // // controls.maxZoom(.8);

    // controls.enableDamping = true;
    // controls.damping

    // debugger
    canvas.addEventListener( 'click', onClick);
    document.addEventListener('mousemove', setMouse );
    document.addEventListener('keydown', keyDown );
    document.addEventListener('keyup', keyUp );
    // window.addEventListener( 'click', onClick );
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
        // const color2 = new THREE.Color( 'yellow' );

        var newMatrix = new THREE.Matrix4();
        newMatrix.setPosition(-1000, -10000, -1000);

        if ( intersection.length > 0 ) {

            const instanceId = intersection[ 0 ].instanceId;


            // newCube.setColorAt( instanceId, color2 );

            newCube.setMatrixAt( instanceId, newMatrix )
            newCube.instanceMatrix.needsUpdate = true;



            // newCube.instanceColor.needsUpdate = true;

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
        // mouse.x = ( event.clientX / (window.innerWidth * .75)) * 2 - 1;
        // mouse.y = - ( event.clientY / (window.innerHeight * .75)) * 2 + 1;
    
        raycaster.setFromCamera( mouse, camera );
        
        const intersection = raycaster.intersectObjects( scene.children, true );
        // const color2 = new THREE.Color( 'yellow' );
    
        var newMatrix = new THREE.Matrix4();
        newMatrix.setPosition(-1000, -10000, -1000);
    
        if ( intersection.length > 0 ) {
    
            const instanceId = intersection[ 0 ].instanceId;
    
    
            // newCube.setColorAt( instanceId, color2 );
    
            newCube.setMatrixAt( instanceId, newMatrix )
            newCube.instanceMatrix.needsUpdate = true;
    
    
    
            // newCube.instanceColor.needsUpdate = true;
    
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
    build();
}

run(10);

// module.exports = { init };