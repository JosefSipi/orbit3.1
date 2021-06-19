// import { render } from 'sass';
import oc from 'three-orbit-controls';
import * as THREE from 'three';

var OrbitControls = oc(THREE);

let scene, camera, renderer, cube;

// let group = new THREE.Object3D();

function init(x, y, z) {

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

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            for (let k = 0; k < 10; k++){    

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
    
    camera.position.z = 15;
    camera.position.y = 9.5;
    camera.position.x = 9.5;
    

    const controls =  new OrbitControls(camera, renderer.domElement)
    
}
// controls.en
// controls.update();


function animate() {

    requestAnimationFrame(animate);

    // newCube.rotation.x += 0.01;
    
    renderer.render(scene, camera);


}
    
    
init(3);
animate();