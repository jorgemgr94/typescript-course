// Compile-time Polymorphism (Method Overloading)
export class MathOperations {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const math = new MathOperations();
console.log(math.add(5, 10));
console.log(math.add("Hello, ", "World!"));

// ================================================================

// Run-time Polymorphism (Method Overriding)
class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

function animalSound(animal: Animal) {
  animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

animalSound(dog);
animalSound(cat);
