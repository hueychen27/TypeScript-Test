function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Line {
    width: number;
    constructor (width: number) {
        this.width = width;
    }

    getLength(): number {
        return this.width;
    }
}

class Rectangle extends Line {
    height: number;
    constructor (width: number, height: number) {
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
    constructor (width: number, height: number, depth: number) {
        super(width, height);
        this.depth = depth;
    }

    getVolume(): number {
        return this.width * this.height * this.depth;
    }
}

let myNormalLine = new Line(randomNumber(1, 99));
let myNormalLength = myNormalLine.getLength();
console.log(`Length of Line: ${myNormalLength}`)

let myCoolRectangle = new Rectangle(randomNumber(1, 99), randomNumber(1, 99));
let myCoolLength = myCoolRectangle.getLength();
let myCoolArea = myCoolRectangle.getArea();
console.log(`Length of Rectangle: ${myCoolLength}, Area of Rectangle: ${myCoolArea}`);

let myCoolerRectangularCuboid = new rectangularCuboid(randomNumber(1, 99), randomNumber(1, 99), randomNumber(1, 99));
let myCoolerLength = myCoolerRectangularCuboid.getLength();
let myCoolerArea = myCoolerRectangularCuboid.getArea();
let myCoolerVolume = myCoolerRectangularCuboid.getVolume();
console.log(`Length of rectangular cuboid: ${myCoolerLength}, Area of rectangular cuboid: ${myCoolerArea}, Volume of rectangular cuboid: ${myCoolerVolume}`)