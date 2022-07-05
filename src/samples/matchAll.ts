const string = "My name is Albert. My NAME is Soyuj.";

const re = /name is (?<name>[a-zA-Z]+)\./gi;
let found = string.matchAll(re);

for (const match of found) {
  if (match.groups)
    console.log(
      `Found "${match[0]}" at index ${match.index}. Captured name = ${match.groups["name"]}`
    );
}
