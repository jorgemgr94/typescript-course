// { email: 'Not a valid email', username: 'Must start with a character!' }
interface ErrorContainer {
  [prop: string]: string;
}

// in this way all properties must be a number.
// interface ErrorContainer {
//   [prop: number]: string;
// }

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

export {};
