
const Point3D = function(x, y, z) { this.x = x; this.y = y; this.z = z;};

export const Point2D = function(x, y) {this.x = x; this.y = y;};

export const Cube = function(x, y, z, size) {

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


// ---- need to create all the cubes on the canvas here -----
