export type Circle = {
  kind: "circle";
  radius: number;
}

type Square = {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    // Type guard narrows down the type to Circle
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.kind === "square") {
    // Type guard narrows down the type to Square
    return shape.sideLength * shape.sideLength;
  } else {
    // This code is unreachable because Shape only allows Circle or Square
    throw new Error("Invalid shape");
  }
}


