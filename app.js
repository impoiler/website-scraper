const express = require("express");
const app = express();
require("dotenv").config();
const ogs = require("open-graph-scraper");
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  const url = req.query.url;

  const options = { url };
  ogs(options, (error, results, response) => {
    res.status(200).json({ data: results });
  });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
