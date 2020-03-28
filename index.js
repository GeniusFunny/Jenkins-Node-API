const ViewAPI = require('./src/ViewAPI');
const JobAPI = require('./src/JobAPI');
const BuildAPI = require('./src/BuildAPI');
const { asyncRequest } = require('./src/utils');

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

module.exports = JenkinsAPI;

