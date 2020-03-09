const TOPSECRETS = [{text: 'Test', id: 78}, {text: 'Test', id: 79}]
let id=57

module.exports = {
    getTopSecrets: (req, res) => {
        res.status(200).send(TOPSECRETS)
    },
    addTopSecrets: (req, res) => {
        console.log(req.body)
        const {secrets} = req.body
        secrets.id = id
        id++
        TOPSECRETS.push(secrets)
        res.status(200).send(TOPSECRETS)
    },
    editTopSecrets: (req, res) => {
        const {id} = req.params
        const {secrets} = req.body
        const index = TOPSECRETS.findIndex(element => element.id === +id)
        TOPSECRETS[index].secrets = secrets
        res.status(200).send(TOPSECRETS)
    },
    deleteTopSecret: (req, res) => {
        const {id} = req.params
        const index = TOPSECRETS.findIndex(element => element.id === +id)
        TOPSECRETS.splice(index, 1)
        res.status(200).send(TOPSECRETS)
    }
}