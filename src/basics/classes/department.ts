/**
 * Abstract classes are base classes from which other classes may be derived.
 * They may not be instantiated directly. Unlike an interface, an abstract class
 * may contain implementation details for its members.
 * The abstract keyword is used to define abstract classes as well as abstract
 * methods within an abstract class.
 */
export abstract class Department {
  static fiscalYear = 2021;

  protected employees: string[] = []; // can be accessed from any extends, but only modified by the class itself.
  // private employNames: string; // only can be accessed by Department

  // constructor defined params
  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
  }
}
