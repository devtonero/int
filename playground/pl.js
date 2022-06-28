const fs = require("fs");
// const book = {
//   title: "48 laws of power",
//   author: "Robert Greene",
// };

// // converting to Json
// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// //converting back to object
// const parseBook = JSON.parse(bookJson);
// console.log(parseBook);

// fs.writeFileSync("pl.json", bookJson);
// const dataBuffer = fs.readFileSync("pl.json");
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data);

const dF = fs.readFileSync("pl.json");
const dJson = dF.toString();
const da = JSON.parse(dJson);
console.log(da);
da.name = "Chidera";
da.planet = "Mars";
da.age = "35";
console.log(da);
const daajson = JSON.stringify(da);
fs.writeFileSync("pl.json", daajson);
