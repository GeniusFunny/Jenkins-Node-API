const { Builder } = require('xml2js');
let builder = new Builder();
class JobAPI {
  getInfo(name) {
    return {
      path: `/job/${name}/api/json`,
      method: 'GET'
    }
  }
  // Todo: XML解析问题
  create(name, data) {
    return {
      path: `/createItem/api/json`,
      method: 'POST',
      contentType: 'application/xml',
      body: builder.buildObject(data),
      name: name
    }
  }
  delete(name) {
    return {
      path: `/job/${name}/doDelete/api/json`,
      method: 'POST'
    }
  }
  enable(name) {
    return {
      path: `/job/${name}/enable`,
      method: 'POST'
    }
  }
  disable(name) {
    return {
      path: `/job/${name}/disable`,
      method: 'POST'
    }
  }
  getConfig(name) {
    return {
      path: `/job/${name}/config.xml/api/json`,
      method: 'GET'
    }
  }
    // Todo: XML解析问题
  updateConfig(name, data) {
    return {
      path: `/job/${name}/config.xml/api/json`,
      method: 'POST',
      contentType: 'application/xml',
      body: builder.buildObject(data),
    }
  }
}

module.exports = JobAPI