const express = require("express");
const app = express();
const njk = require("nunjucks");
const routes = require("./routes");

app.use(express.static("public"));
app.use(routes)

app.set("view engine", "njk");

njk.configure("src/app/views", {
  express: app,
  autoescape: false,
  noCache: true,
});

app.listen(5000, () => console.log("Server is Running"))