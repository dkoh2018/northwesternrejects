const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.redirect("https://www.illinois.edu/");
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});

module.exports = app;
