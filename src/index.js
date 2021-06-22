import oc from 'three-orbit-controls';
import * as THREE from 'three';


var OrbitControls = oc(THREE);
var amount = 20;
var count = Math.pow( amount, 3 )

var scene, camera, renderer, newCube;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();


function init() {

    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera( 
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
     );

    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    // renderer.setSize((window.innerWidth), (window.innerHeight ));
    // debugger
    renderer.setSize((window.innerWidth * .75), (window.innerHeight * .75));
    
    document.body.appendChild(renderer.domElement);
    
    window.addEventListener('resize', () => {
        // renderer.setSize((window.innerWidth), (window.innerHeight ));
        renderer.setSize((window.innerWidth * .75), (window.innerHeight * .75));
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })


// -------------------------------original loop -----------------------------------------
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
material.wireframe = true;
// let newCube = new THREE.Mesh( geometry, material );
newCube = new THREE.InstancedMesh( geometry, material, count );

let m = 0;
const offset = (amount - 1) / 2;
const color = new THREE.Color();

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
    camera.position.z = amount + amount / 2;
    let controls =  new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true;


    window.addEventListener( 'click', onClick );
}




var onClick = function(event) {
    event.preventDefault();

    // debugger
	mouse.x = ( event.clientX / (window.innerWidth * .75)) * 2 - 1;
	mouse.y = - ( event.clientY / (window.innerHeight * .75)) * 2 + 1;
	// mouse.x = ( event.clientX / (window.innerWidth * .75)) * 2 - 1;
	// mouse.y = - ( event.clientY / (window.innerHeight * .75)) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );
    
    const intersection = raycaster.intersectObjects( scene.children, true );
    const color2 = new THREE.Color( 'yellow' );

    if ( intersection.length > 0 ) {

        const instanceId = intersection[ 0 ].instanceId;

        newCube.setColorAt( instanceId, color2 );
        newCube.instanceColor.needsUpdate = true;

    }

    renderer.render(scene, camera);
}



function animate() {

    requestAnimationFrame(animate);

    render();
    
}

function render(){
    
    
    renderer.render(scene, camera);


}

init();
animate();


// document.getElementsByTagName('canvas').padding = "12px";
// canvasEl.className = "canvas";

// canvasEl.style.border = "12px solid green";