const ViewAPI = require('./src/ViewAPI').ViewAPI;
const JobAPI = require('./src/JobAPI').JobAPI;
const BuildAPI = require('./src/BuildAPI').BuildAPI;
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
class JenkinsAPI {
  constructor(origin, authorization = {}) {
    this.origin = origin;
    this.authorization = authorization;
    this.jobAPI = new JobAPI();
    this.viewAPI = new ViewAPI();
    this.buildAPI = new BuildAPI();
  }
  setBuildInfo(view, job) {
    this.buildAPI.setBasePath(view, job)
  }
  async request(info) {
    try {
      let res = await asyncRequest({
        url: `${this.origin}${info.path}`,
        method: info.method || 'GET',
        auth: this.authorization,
      })
      return res;
    } catch(e) {
      // TCP链接失败等错误、404等
      console.log(e)
    }
  }
}

exports.JenkinsAPI = JenkinsAPI;

