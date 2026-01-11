const http = require("http");

const server = http.createServer((req, res) => {
  const url=req.url;
  if(url==='/'){
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("this is my home page")
  } 
  else if(url==='/project'){
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("this is my projects page")
  } 
  else{
    res.writeHead(404,{'content-type':'text/plain'})
    res.end("this is cannot be found")
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`server is now listening to port ${port}`);
});
