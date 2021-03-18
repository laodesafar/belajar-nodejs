const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Latihan 1</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/user") {
    res.write("<html>");
    res.write("<head><title>Latihan 1</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
    });
    req.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(3000);
