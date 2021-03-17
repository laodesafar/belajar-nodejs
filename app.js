const http = require("http");

const hostname = "127.0.0.1";
const port = "3001";

const server = http.createServer((req, res) => {
  req.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hai, Selamat belajar Node Js lewat Dokumentasi");
});

server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}`);
});
