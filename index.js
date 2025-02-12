import express from "express";

const app = express();

app.use(express.static("./"));

app.get("/", (req, res) => {
  res.send("index.html");
});
app.get("/about.html", (req, res) => {
  res.send("about.html");
});
app.get("/contact-me", (req, res) => {
  res.send("contact-me.html");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
