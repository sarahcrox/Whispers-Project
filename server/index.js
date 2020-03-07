const express = require("express");
const cors = require("cors");
// const lipCtrl = require('./controllers/LipController');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));