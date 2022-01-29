/**
 * Example of types
 * NOTE: Typescript have default type inference (z)
 */
enum Role {
	ADMIN,
	AUTHOR,
	READER = 8,
}

type ConfigurationAliases = "warm" | "cold" | "red";

type LightBulb = {
	name: string; // string
	lumens: number; // number
	active: boolean; // boolean
	colors: string[]; // array of string
	defaultAction: [number, string]; // tuple
	actions: [number, string][]; // Array of tuples

	role: Role;
	type: number | string; // union types, could be an number or a string but not a boolean
	configuration: "warm" | "cold" | "red"; // literal types, we restrict the possible values
	configurationWithAliases: ConfigurationAliases; // same as above, but with TS Aliases

	sayHello: () => void; // function returning nothing.
	printLumens: () => number; // function that returns a number.
	addLumens: (a: number) => number;
};

const bulb: LightBulb = {
	name: "Philips X500",
	lumens: 500,
	active: true,
	colors: ["red", "green"],
	defaultAction: [0, "on"],
	actions: [
		[0, "on"],
		[1, "off"],
	],
	role: Role.ADMIN,
	type: "demo",
	configuration: "cold",
	configurationWithAliases: "cold",
	sayHello: function () {
		console.log("Hello");
	},
	printLumens: function () {
		return this.lumens;
	},
	addLumens: function (a) {
		this.lumens += a;
		return this.lumens;
	},
};

// -- any vs unknown ----------------------------------------------------------
function someInput(first: unknown, second: any) {
	let name: string;
	let age: number;

	age = second; // we can assign "any" to a number.
	// name = first; // we cant assign "unknown" directly.

	// first we need to check type of.
	if (typeof first === "string") {
		name = first;
		return { age, name };
	}
	return { age };
}

console.log(someInput("string", "name"));
console.log(someInput(5, "name"));

// -- never ----------------------------------------------------------
// this function never return anything.
function initGame(): never {
	while (true) {
		console.log("Game..");
	}
}
// initGame();

// this functions never return anything, because throw.
function error(): never {
	throw { message: "Hello" };
}