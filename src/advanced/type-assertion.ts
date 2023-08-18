type Circle = {
  kind: "circle";
  radius: number;
};

type Rect = {
  kind: "rect";
  width: number;
  height: number;
};

type Shape = Circle | Rect;

function isCircleP(shape: Shape) {
  return shape.kind === "circle";
}

function isRectP(shape: Shape) {
  return shape.kind === "rect";
}

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

function isRect(shape: Shape): shape is Rect {
  return shape.kind === "rect";
}

const circle: Shape = {
  kind: "circle",
  radius: 2,
};

const rect: Shape = {
  kind: "rect",
  height: 2,
  width: 2,
};

if (isCircleP(circle)) {
  console.log(circle);
}

// if (isCircle(circle)) {
//   console.log(circle.radius);
// }
// -- Exhaustive Checking -----------------------------

// Use exhaustive checking to catch unhandled cases at compile time
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rect":
      return shape.width * shape.height;
    default:
      // you'll get a type-checking error below
      // if any shape.kind is not handled above
      const _exhaustiveCheck: never = shape;
      throw new Error("Unknown shape kind");
  }
}

export {};
