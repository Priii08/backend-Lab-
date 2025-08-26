const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");


const data = "Hello, Node.js!";


writeStream.write(data, "utf8");

writeStream.end();


writeStream.on("finish", () => {
  console.log("Data written successfully to output.txt");
});

writeStream.on("error", (err) => {
  console.error("Error writing to file:", err.message);
});


// we could have used a callback function 
//we could have used (async/await) 