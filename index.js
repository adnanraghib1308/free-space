const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apis = require('./routes');
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use('/', apis);

app.listen(3099 || process.env.PORT, ()=> {
  console.log("app running");
})

