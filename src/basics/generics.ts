/**
 * Interface w/ generics example
 */
interface Api<Message> {
  type: string;
  success: boolean;
  data: Message;
}

interface SuccessData {
  message: string;
}

const successResponse: Api<SuccessData> = {
  type: "post",
  success: true,
  data: {
    message: "hello",
  },
};

const errorResponse: Api<boolean> = {
  type: "post",
  success: false,
  data: false,
};

// -- Function Generics ----------------------------------------------------------
const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

// -- Generics with restrictions ------------------------------------------------
interface OldPost {
  id: number;
}
interface Post {
  id: string;
  name: string;
}

function printPost<T extends OldPost>(p: T) {
  console.log(p);
  // console.log(p.name); // cant use name property
  return p;
}

printPost({ id: 1, name: "adirional info" }); // send OldPost
printPost({ id: 1, name: "2" }); // send Post

// -- Generics with restrictions ------------------------------------------------
interface Lengthy {
  length: number;
}
// element must be lengthy like: array, { length: number }
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe({ length: 1 }));

// -- keyof restriction ----------------------------------------------------------
// U must be a key of T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max", age: 10 }, "name");

// -- Generic Class -------------------------------------------------------------
// a class that can storage numbers or strings per instance definition
class DataStorage<T extends number | string> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
