const fs = require("fs").promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile("eg.txt", "utf8");
    console.log("File content:\n", data);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("File not found!");
    } else {
      console.error("Error reading file:", err.message);
    }
  }
}

readFileAsync();



//we could have used callbacks instead of promises
//Error: ENOENT: no such file or directory fixed this by adding await

