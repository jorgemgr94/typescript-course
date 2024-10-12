// Base class: Animal
export class Animal {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log("Some generic sound");
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Subclass: Dog (inherits from Animal)
export class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }

  getInfo() {
    return `${super.getInfo()}, Breed: ${this.breed}`;
  }
}

const genericAnimal = new Animal("Generic Animal", 5);
console.log(genericAnimal.getInfo());
genericAnimal.makeSound();

const dog = new Dog("Buddy", 3, "Labrador");
console.log(dog.getInfo());
dog.makeSound();
