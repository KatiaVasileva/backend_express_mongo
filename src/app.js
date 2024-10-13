const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("./middlewares/cors");
const bodyParser = require("body-parser");

dotenv.config();

const {
  API_URL = "http://127.0.0.1",
  PORT = 3005,
  MONGO_URL = "mongodb://127.0.0.1:27017/myMDB",
} = process.env;

mongoose.connect(MONGO_URL).catch((error) => handleError(error));

const app = express();

app.use(cors);
app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
