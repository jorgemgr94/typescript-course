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

export {};
