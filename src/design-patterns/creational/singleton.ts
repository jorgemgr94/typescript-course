/**
 * Ensure a class only has one instance, and provide a global point of access to it.
 */
class Hairdresser {
  static instance: Hairdresser;

  // prevent new with private constructor
  private constructor() { }

  static getInstance(): Hairdresser {
    if (!Hairdresser.instance) {
      Hairdresser.instance = new Hairdresser();
    }

    return Hairdresser.instance;
  }
}

// Constructor of class 'Hairdresser' is private and only accessible within the class declaration.
// const hairdresser: Hairdresser = new Hairdresser();
const hairdresser: Hairdresser = Hairdresser.getInstance();
console.log(hairdresser);
