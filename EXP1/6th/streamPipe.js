const fs = require("fs");
const readStream = fs.createReadStream("input.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
writeStream.on("finish", () => {
  console.log("Data piped from input.txt to output.txt successfully!");
});

readStream.on("error", (err) => {
  console.error("Error reading file:", err.message);
});

writeStream.on("error", (err) => {
  console.error("Error writing file:", err.message);
});


//forgot to handle errors carefully

//alternatively we could have done it manually without .pipe()