import { Department } from "./department";

export class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; // only accessible from AccountingDepartment

  // NOTE: getters are don't recommended
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  // NOTE: setters are don't recommended
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  // because of the private keyword, this method is only accessible from this class
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) return this.instance; // early return instance
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  // overrides the main method of Department
  addEmployee(name: string) {
    this.employees.push(name); // protected but accessible from AccountingDepartment because extends Department
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}
