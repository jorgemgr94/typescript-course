import fs from "fs";

const base64Image = fs.readFileSync("./demo.png", "base64");
console.log(base64Image);
