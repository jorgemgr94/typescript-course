import { Department } from "./classes/department";
import { ItDepartment } from "./classes/itDepartment";
import { AccountingDepartment } from "./classes/accountingDepartment";

// -- ItDepartment Class --------------------------------------------------------------------
const itDepartment = new ItDepartment("2ec527ee-75dd-11ec-90d6-0242ac120003", [
  "Max",
]);

itDepartment.addEmployee("July");
console.log(itDepartment.getEmployees());
itDepartment.describe();
itDepartment.name = "IT Department"; // can be accessed since it is public in Department.
itDepartment.printEmployeeInformation();

// -- static methods and properties ------------------------------------------------------------
console.log(Department.fiscalYear); // 2022
console.log(Department.createEmployee("Max")); // { name: 'Max' }

// -- AccountingDepartment Class --------------------------------------------------------------------
const accounting = AccountingDepartment.getInstance(); // Singleton example
const accounting2 = AccountingDepartment.getInstance();

accounting.addEmployee("Max");
accounting.addEmployee("Melody");

accounting.printEmployeeInformation(); // 1
accounting2.printEmployeeInformation(); // 1

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");

accounting.describe();
accounting2.describe();
