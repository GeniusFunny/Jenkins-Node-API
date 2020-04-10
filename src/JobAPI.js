const { Builder, Parser } = require('xml2js');
let builder = new Builder();
let parser = new Parser({
  explicitArray: false
})
class JobAPI {
  getInfo(name) {
    return {
      path: `/job/${name}/api/json`,
      method: 'GET'
    }
  }
  create(name, description) {
    return {
      path: `/createItem?name=${name}`,
      method: 'POST',
      body: builder.buildObject({
        project: {
          description,
        }
      }),
      headers: {
        'Content-Type': 'text/xml'
      }
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
  updateConfig(name, data) {
    return {
      path: `/job/${name}/config.xml/api/json`,
      method: 'POST',
      body: builder.buildObject(data),
    }
  }
}

module.exports = JobAPI