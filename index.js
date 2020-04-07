const ViewAPI = require('./src/ViewAPI');
const JobAPI = require('./src/JobAPI');
const BuildAPI = require('./src/BuildAPI');
const PluginAPI = require('./src/PluginAPI');
const QueueAPI = require('./src/QueueAPI');
const { asyncRequest } = require('./src/utils');

class JenkinsAPI {
  constructor(origin, authorization = {}) {
    this.origin = origin;
    this.authorization = authorization;
    this.jobAPI = new JobAPI();
    this.viewAPI = new ViewAPI();
    this.buildAPI = new BuildAPI();
    this.pluginAPI = new PluginAPI();
    this.queueAPI = new QueueAPI();
  }
  list() {
    return {
      path: '/api/json'
    }
  }
  async request(info) {
    info.url = `${this.origin}${info.path}`;
    info.auth = this.authorization;
    delete info.path;
    let res = null;
    try {
      res = await asyncRequest(info);
    } catch (e) {
      // TCP链接失败等错误、404等
      res = {
        status: 'failed',
        message: e
      }
    }
    return res
  }
}

module.exports = JenkinsAPI;
