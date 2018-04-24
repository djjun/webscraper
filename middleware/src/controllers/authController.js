const api = require('../api')

exports.auth = (req, cb) => {
    if (!req.body) {
        cb.status(500).send({
            response: 'null data'
        })
    }

    let dados = req.body;
    
    api.auth(dados.login, dados.password, (err, data) => {
        if (err) {
            return cb.status(500).send({
                response: err
            })
        }

        cb.status(200).send({
            response: data
        })
    })
}