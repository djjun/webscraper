const api = require('../api')

exports.user = (req, cb) => {
    if (!req.params) {
      cb.status(500).send({
        response: 'null data'
      })
    }
  
    let token = req.param('token')
    let url = req.param('url')

    api.user(token, url, (err, data) => {
      if (err) {
        return cb.status(500).send({
          response: err
        })
      }
  
      cb.status(200).send({
        data: JSON.parse(data)
      })
    })
}