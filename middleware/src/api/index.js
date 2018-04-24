const request = require('request')

const URLS = {
  auth: 'https://prod-auth.nubank.com.br/api/token'
}

//Set default Headers
const HEADERS = {
  'Content-Type': 'application/json',
  'X-Correlation-Id': 'WEB-APP.jO4x1',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
  'Origin': 'https://conta.nubank.com.br',
  'Referer': 'https://conta.nubank.com.br/'
}

const auth = (login, password, cb) => {
  console.log('LOGIN ----');
  console.log(login);
  console.log(password);
  let options = {
    url: URLS.auth,
    method: 'POST',
    'Content-Type': 'application/json',
    body: {
      password: password,
      login: login,
      grant_type: 'password',
      client_id: 'other.conta',
      client_secret: 'yQPeLzoHuJzlMMSAjC-LgNUJdUecx8XO'
    },
    json: true,
    headers: HEADERS
  }

  request(options, (error, response, body) => {
    if (error) return cb(error)

    cb(null, body)
  })
}

const user = (token, url, cb) => {
  HEADERS.Authorization = `Bearer ${token}`
  let options = {
    // url: URLS.userInfo,
    url: url,
    method: 'GET',
    headers: HEADERS
  }

  request(options, (error, response, body) => {
    if (error) return cb(error)

    cb(null, body)
  })
}

module.exports = {
  auth,
  user
}