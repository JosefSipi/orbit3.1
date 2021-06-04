import './styles/index.scss';
import { Cube, Point2D } from './scripts/cube';


var cube = new Cube( 0, 0, 200, 100);

var context = document.querySelector('canvas').getContext('2d');


function project(points3d, width, height, changeX, changeY) {
// debugger
    var points2d = new Array(points3d.length);

    var focal_length = 200;

    const canvasWidthNow = document.getElementById("canvas-grid").width;

    let cubeStep = (canvasWidthNow / 100);

    for (let index = points3d.length - 1; index > -1; -- index) {

        let p = points3d[index];
// increase each iteration by 202
        // let x = p.x * ( focal_length / p.z) + 68 + changeX;
        // let y = p.y * ( focal_length /p.z) + 68 + changeY;
        let x = p.x * ( focal_length / p.z);
        let y = p.y * ( focal_length /p.z);
        // let x = p.x * ( focal_length / p.z) + width * 0.05;
        // let y = p.y * ( focal_length /p.z) + height * 0.05;

        points2d[index] = new Point2D(x, y);
    }

    return points2d;
}


function loop(){

    window.requestAnimationFrame(loop);
    // debugger
    var canvasGridEle = document.body.querySelector('.canvas-grid'),
        gridLeft = canvasGridEle.offsetLeft + canvasGridEle.clientLeft,
        gridTop = canvasGridEle.offsetTop + canvasGridEle.clientTop,
        newContext = canvasGridEle.getContext('2d'),
        elements = [];

    canvasGridEle.addEventListener('click', function(event){
        debugger
    });


    var eleHeight = canvasGridEle.offsetHeight;
    var height = document.documentElement.clientHeight;
    var width = height;
    // var width = document.documentElement.clientWidth;

    context.canvas.height = height;
    context.canvas.width = width;

    context.strokeStyle = 'black';

// need to loop throught each cube

// for (let changeX = 202; changeX < width; ++ changeX){
//     for (let changeY = 202; changeX < width; ++ changeX){
//         let cube =

//     }
// }

    // with each cube we project we want to 
            // indicate whether it's selected or not
            // it's position on the canvas

    // --- this will be referencing and iterating through a hash if all cubes on screen ---
    var vertices = project(cube.vertices, width, height);
    // ---- -------- ------ 
    // debugger

    context.beginPath();
    context.moveTo(400, 400);
    context.lineTo(313, 313);
    context.closePath();
    context.stroke();

    for (let index = cube.faces.length - 1; index > -1; -- index) {
        let face = cube.faces[index];
        // debugger
        context.beginPath();
        context.moveTo(vertices[face[0]].x, vertices[face[0]].y);
        context.lineTo(vertices[face[1]].x, vertices[face[1]].y);
        context.lineTo(vertices[face[2]].x, vertices[face[2]].y);
        context.lineTo(vertices[face[3]].x, vertices[face[3]].y);
        context.closePath();
        context.stroke();


    }


}

loop();





