import './styles/index.scss';





const Point2D = function(x, y) {this.x = x; this.y = y;};

const Point3D = function(x, y, z) { this.x = x; this.y = y; this.z = z;};


const Cube = function(x, y, z, size) {

    Point3D.call(this, x, y, z);

    size *= 0.5;

    this.vertices = [
        new Point3D(x - size, y - size, z - size),
        new Point3D(x + size, y - size, z - size),
        new Point3D(x + size, y + size, z - size),
        new Point3D(x - size, y + size, z - size),
        new Point3D(x - size, y - size, z + size),
        new Point3D(x + size, y - size, z + size),
        new Point3D(x + size, y + size, z + size),
        new Point3D(x - size, y + size, z + size)
    ];

    this.faces = [[0, 1, 2, 3], [0, 4, 5, 1], [1, 5, 6, 2], [3, 2, 6, 7], [0, 3, 7, 4], [4, 7, 6, 5]];

};


var cube = new Cube( 0, 0, 400, 200);

var context = document.querySelector('canvas').getContext('2d');

// const body = document.body;

// const canvas = document.createElement('canvas');
// canvas.getContext("2d");
// canvas.classList.add('canvas-grid');

function project(points3d, width, height) {
    var points2d = new Array(points3d.length);

    var focal_length = 200;

    for (let index = points3d.length - 1; index > -1; -- index) {
        
        let p = points3d[index];

        let x = p.x * ( focal_length / p.z) + width * 0.5;
        let y = p.y * ( focal_length /p.z) + height * 0.5;

        points2d[index] = new Point2D(x, y);
    }

    return points2d;
}


function loop(){
    // window.requestAnimationFrame(loop);

    var height = document.documentElement.clientHeight;
    var width = height;
    // var width = document.documentElement.clientWidth;

    context.canvas.height = height;
    context.canvas.width = width;

    context.strokeStyle = 'black';

    var vertices = project(cube.vertices, width, height);

    for (let index = cube.faces.length - 1; index > -1; -- index) {
        let face = cube.faces[index];

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





