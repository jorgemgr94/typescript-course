/**
 * Interfaces readonly
 */
interface Movie {
  readonly name: string;
  year: number;
}

const movie: Movie = {
  name: "The Matrix",
  year: 1999,
};

// movie.name = "Shrek"; // can't reassign name
movie.year = 2022; // can assign

/**
 * Interfaces as function types
 */
interface addFunc {
  (a: number, b: number): number;
}

const add: addFunc = (a, b) => a + b;
add(5, 5);

/**
 * Interfaces with classes
 */
interface ICar {
  readonly model: string;
  readonly year: number;

  drive(): void;
}

// interface enforces structure of the class
class Car implements ICar {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
  drive(): void {
    console.log("Driving...");
  }
}

const car = new Car("Ford", 2020);
console.log(car.model);
