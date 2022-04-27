const SneaksAPI = require("sneaks-api");
const fs = require("fs");
const cors = require("cors");
const express = require("express");
const sneaks = new SneaksAPI();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

getShoes = () => JSON.parse(fs.readFileSync("./data/shoes.json"));

app.get("/", (_req, res) => {
  const shoes = getShoes();

  if (shoes.length === 0) {
    res.status(400).send("No shoes");
    return;
  }
  res.status(200).json(shoes);
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))