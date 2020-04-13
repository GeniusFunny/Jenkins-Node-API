const request = require('request');
const { Parser } = require('xml2js');
let parser = new Parser({
  explicitArray: false
});
function isXml(contentTyoe) {
  let reg = /xml/g;
  return reg.test(contentTyoe);
}
function isJSON(contentTyoe) {
  let reg = /json/g;
  return reg.test(contentTyoe);
}

const successStatusCode = [200, 302, 201];
const failedStatusCode = [400, 401, 404, 500];


function asyncRequest(options) {
  const requestOptions = Object.assign({
    method: options.method,
    headers: [],
    followAllRedirects: true,
    form: null,
    body: null
  }, options);
  return new Promise((resolve, reject) => {
    request(requestOptions, function (error, response, body) {
      if (error) {
        reject(error);
      }
      if (failedStatusCode.includes(response.statusCode) || !successStatusCode.includes(response.statusCode)) {
        reject(response.statusCode);
      } else {
        let contentType = response.headers['content-type'];
        if (isJSON(contentType)) {
          resolve(JSON.parse(body))
        } else if (isXml(contentType)) {
          parser.parseStringPromise(body)
            .then(res => resolve(res))
            .catch(err => reject(err))
        } else if (response.statusCode === 302){
          resolve({
            statusCode: response.statusCode,
            location: response.location
          })
        } else {
          resolve({
            statusCode: response.statusCode,
            body: response.body
          })
        }
      }
    });
  })
};

module.exports = {
  asyncRequest
}