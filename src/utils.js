const request = require('request');

function asyncRequest(options) {
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) reject(err)
      if (res && res.statusCode >= 200 && res.statusCode < 300) {
        let contentType = res.headers['content-type'];
        let jsonReg = /application\/json/g;
        let xmlReg = /text\/html/g;
        if (jsonReg.test(contentType)) {
          resolve(JSON.parse(body))
        } else if(xmlReg.test(contentType)) {
          resolve(body)
        }
      } else {
        reject(res.statusCode)
      }
    })
  })
}

module.exports = {
  asyncRequest
}