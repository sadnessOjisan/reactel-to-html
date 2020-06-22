const express = require("express");
const bodyParser = require("body-parser");
const lib = require("../../dist/index");

const app = express();
app.use(bodyParser.json());

app.post("/", function (req, res) {
  const body = req.body;
  const { html } = body;
  const convertedHtml = lib.default(html);
  res.json(convertedHtml);
});

app.listen(3000);
