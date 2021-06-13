//require('dotenv').config({ path: './.env' })
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const app = express();

const port = process.env.PORT || 5000

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
      status: 200,
      success: true,
      data: 'Datma API is Already Running...'
  });
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Listening to port `+port);
});
