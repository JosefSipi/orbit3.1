// import { render } from 'sass';
import oc from 'three-orbit-controls';
import * as THREE from 'three';

var OrbitControls = oc(THREE);

let scene, camera, renderer, cube;

// let group = new THREE.Object3D();

// function init(x, y, z) {

    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera( 
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
     );

    // let viewSize = 900;

    // let aspectRatio = (window.innerWidth * .75 )/(window.innerHeight * .75)
    // camera = new THREE.OrthographicCamera( -aspectRatio * viewSize / 2, aspectRatio * viewSize / 2, viewSize / 2, -viewSize / 2, -1000, 1000);

    renderer = new THREE.WebGLRenderer();
    
    renderer.setSize((window.innerWidth * .75), (window.innerHeight * .75));
    
    document.body.appendChild(renderer.domElement);
    
    window.addEventListener('resize', () => {
        renderer.setSize((window.innerWidth * .75), (window.innerHeight * .75));
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })

// -----
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

// ------

    for (let i = 0; i < 20; i++){
        for (let j = 0; j < 20; j++){
            for (let k = 0; k < 20; k++){    

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        
        const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
        cube = new THREE.Mesh( geometry, material );
        const newCube = new THREE.EdgesHelper( cube, 0xffffff)
        newCube.material.linewidth = 1;
        scene.add( newCube );
        // ----- change position on screen ---
        // newCube.position.set(x, y, z)
        newCube.position.set(i, j, k);
        // --------

        // newCube.rotation.x += .5;
        // newCube.rotation.y += .5;
            }
        }
    }
    
    camera.position.z = 40;
    camera.position.y = 9.5;
    camera.position.x = 9.5;
    // camera.lookAt(9.5, 0, 9.5)

    var controls =  new OrbitControls(camera, renderer.domElement)
    controls.target.set(9.5, 9.5, 9.5)
    // controls.minZoom(1);
    // controls.maxZoom(100);
    controls.enableDamping = true;

// }
// controls.en
// controls.update();

var onClick = function(event){
    event.preventDefault();
    
}


function animate() {

    requestAnimationFrame(animate);
    
    controls.update();
    // newCube.rotation.x += 0.01;

    renderer.render(scene, camera);
    window.addEventListener('click', onClick)
    
}

// init();
animate();