class Line {
    width: number;
    constructor(width: number) {
        this.width = width;
    }

    getLength(): number {
        return this.width;
    }
}

class Rectangle extends Line {
    height: number;
    constructor(width: number, height: number) {
        super(width);
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getDiagonal(): number {
        return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }
}

class rectangularCuboid extends Rectangle {
    depth: number;
    constructor(width: number, height: number, depth: number) {
        super(width, height);
        this.depth = depth;
    }

    getVolume(): number {
        return this.width * this.height * this.depth;
    }
}

let myNormalLine = new Line(2);
let myNormalLength = myNormalLine.getLength();

let myCoolRectangle = new Rectangle(2, 3);
let myCoolLength = myCoolRectangle.getLength();
let myCoolArea = myCoolRectangle.getArea();
console.log(`Length of Rectangle: ${myCoolLength}, Area of Rectangle: ${myCoolArea}`);

let myCoolerRectangularCuboid = new rectangularCuboid(2, 3, 4);
let myCoolerLength = myCoolerRectangularCuboid.getLength();
let myCoolerArea = myCoolerRectangularCuboid.getArea();
let myCoolerVolume = myCoolerRectangularCuboid.getVolume();
console.log(`Length of rectangular cuboid: ${myCoolerLength}, Area of rectangular cuboid: ${myCoolerArea}, Volume of rectangular cuboid: ${myCoolerVolume}`)