class JobAPI {
  create(name = '') {
    return {
      path: `/createItem/name=${name}`,
      method: 'POST'
    }
  }
  delete(name) {
    return {
      path: `/job/${name}/doDelete`,
      method: 'POST'
    }
  }
  getInfo(name) {
    return {
      path: `/job/${name}/api/json`,
      method: 'GET'
    }
  }
  enable(name) {
    return {
      path: `/job/${name}/enable`,
      method: 'GET'
    }
  }
  disable(name) {
    return {
      path: `/job/${name}/disable`,
      method: 'GET'
    }
  }
  getConfig(name) {
    return {
      path: `/job/${name}/config.xml`,
      method: 'GET',
      contentType: 'XML'
    }
  }
  updateConfig(name) {
    return {
      path: `/job/${name}/config.xml`,
      method: 'POST',
      contentType: 'XML'
    }
  }
}

module.exports = {
  JobAPI
}