class ViewAPI {
  create(data) {
    data.json = JSON.stringify(data);
    data.mode = data.mode || 'hudson.model.ListView';
    return {
      path: `/createView/api/json`,
      method: 'POST',
      form: data
    }
  }
  delete(name) {
    return {
      path: `/view/${name}/doDelete`,
      method: 'POST'
    }
  }
  getInfo(name) {
    return {
      path: `/view/${name}/api/json`,
      method: 'GET'
    }
  }
  getConfig(name) {
    return {
      path: `/view/${name}/config.xml/api/json`,
      method: 'GET',
    }
  }
  updateConfig(name, data = {}) {
    data.json = JSON.stringify(data);
    return {
      path: `/view/${name}/configSubmit`,
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      form: data
    }
  }
}

module.exports = ViewAPI