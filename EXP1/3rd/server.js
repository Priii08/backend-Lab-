const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404);
        res.end("File not found!");
      } else {
        res.writeHead(500);
        res.end("Server error: " + err.message);
      }
    } else {
      res.writeHead(200);
      res.end(data); 
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


//we could have used promises instead of callbacks
