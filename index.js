const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apis = require('./routes');
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use('/', apis);

app.listen(process.env.PORT || 3000, ()=> {
  console.log("app running");
})

