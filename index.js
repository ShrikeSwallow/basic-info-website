import { createServer } from "http";
import { readFile } from "fs";
import { parse } from "url";

const server = createServer();

server.on("request", (req, res) => {
  const myUrl = parse(req.url);
  const filename = `.${myUrl.pathname}`;
  let page = "./";
  switch (filename) {
    case "./": {
      page = "./index.html";
      break;
    }
    case "./index.html": {
      page = "./index.html";
      break;
    }
    case "./about.html": {
      page = "./about.html";
      break;
    }
    case "./contact-me.html": {
      page = "./contact-me.html";
      break;
    }
    default:
      page = "./404.html";
  }
  console.log(page);
  readFile(page, (err, data) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(8080);
