/**
 * Advanced types
 */

// -- Intersection Type --------------------------------------------------------
type Admin = {
  name: string;
  privileges?: string[];
};

type Employee = {
  name: string;
  startDate?: Date;
};

type ElevatedEmployee = Admin & Employee; // intersection.

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

function printEmployeeInformation(emp: ElevatedEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

// -- Nullish Coalescing ------------------------------------------------------------------------------
const userInput = undefined;
const storedData = userInput ?? "Default input";
console.log(storedData);

// -- Type Casting -----------------------------------------------------------------------------------
const json = '{ "name": "Jorge", "startDate": "2022-01-15T19:07:10.817Z" }';
const user = JSON.parse(json);
const employee = user as Employee; // casting

// -- Index properties --------------------------------------------------------------------------------

// { email: 'Not a valid email', username: 'Must start with a character!' }
interface ErrorContainer {
  [prop: string]: string;
}

// in this way all properties must be a number.
// interface ErrorContainer {
//   [prop: number]: string;
// }

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

// -- Function Overloads -----------------------------------------------------------------------------
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);

// -- Union types -----------------------------------------------------------------------------------
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse; // union type.

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

const animal: Animal = {
  type: "horse",
  runningSpeed: 10,
};

moveAnimal({ type: "bird", flyingSpeed: 10 });
