const fs = require("fs");
const path = "data.txt";


fs.access(path, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("File not found! Please create data.txt first.");
    return;
  }
  const readStream = fs.createReadStream(path, { encoding: "utf8" });

  readStream.on("data", (chunk) => {
    console.log("Received chunk:\n", chunk);
  });

  
  readStream.on("end", () => {
    console.log("Finished reading file.");
  });

  
  readStream.on("error", (error) => {
    console.error("Error while reading file:", error.message);
  });
});


// if we forget readstream.on we wouldn't get an output
// we could have used fs.readFile()
// we could have used fs.readFileSync()
// we could have used promises with fs.promises.readFile()
