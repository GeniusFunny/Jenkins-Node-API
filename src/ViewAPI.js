class ViewAPI{
  create(name = '') {
    return {
      path: `/createView/name=${name}`,
      method: 'POST'
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
      path: `/view/${name}/config.xml`,
      method: 'GET',
      contentType: 'XML'
    }
  }
  updateConfig() {
    return {
      path: `/view/${name}/config.xml`,
      method: 'POST',
      contentType: 'XML'
    }
  }
}

module.exports = {
  ViewAPI
}