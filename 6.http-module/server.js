const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req", req);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello node js");
});

const port = 3000;
server.listen(3000, () => {
  console.log(`server is now listening to port ${port}`);
});
