// Abstract class representing a shape
abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;
}

// Concrete subclass representing a Circle
class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Concrete subclass representing a Rectangle
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function printShapeDetails(shape: Shape) {
  console.log("Area:", shape.getArea());
  console.log("Perimeter:", shape.getPerimeter());
}


// NOTE: by using abstraction, we can create a collection of different shapes and treat them uniformly
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

printShapeDetails(circle);
printShapeDetails(rectangle);
