const secretsData = require('./secretsdata')
const topSecretsCtrl = require('./controllers/TopSecretsController')
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
app.get('/api/top-secrets', topSecretsCtrl.getTopSecrets);
app.post('/api/top-secrets', topSecretsCtrl.addTopSecrets);
app.put('/api/top-secrets/:id', topSecretsCtrl.editTopSecrets);
app.delete('/api/top-secrets/:id', topSecretsCtrl.deleteTopSecret);


app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));