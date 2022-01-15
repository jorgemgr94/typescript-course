import { Department } from "./department";

export class ItDepartment extends Department {
	admins: string[];

	constructor(id: string, admins: string[]) {
		super(id, "IT");
		this.admins = admins;
	}

	// can access protected this.employees from Department
	public getEmployees() {
		return this.employees;
	}

	// implement abstract method from Department
	describe() {
		console.log("IT Department - ID: " + this.id);
	}
}
