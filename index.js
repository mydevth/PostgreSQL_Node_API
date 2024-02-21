const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/post", (req, res) => {
  res.send("This is post method");
});

app.put("/put", (req, res) => {
  res.send("Got a PUT request");
});

app.delete("/delete", (req, res) => {
  res.send("Got a DELETE request");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
