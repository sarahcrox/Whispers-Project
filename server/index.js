const secretsData = require('./secretsdata')

const express = require("express");
const cors = require("cors");
// const lipCtrl = require('./controllers/LipController');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get('/api/secrets', (req, res) => {
    // console.log(secretsData)
    return res.status(200).send(secretsData.secrets)
})

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));