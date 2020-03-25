class BuildAPI {
  constructor(view = 'view', job = 'job') {
    this.basePath = `/${view}/${job}`
  }
  build() {
    return {
      path: `/${this.basePath}/build`,
      method: 'POST'
    }
  }
  stop(id) {
    return {
      path: `/${this.basePath}/${id}/stop`,
      method: 'GET'
    }
  }
  delete(id) {
    return {
      path: `/${this.basePath}/${id}/doDelete`,
      method: 'GET'
    }
  }
  getInfo(id) {
    return {
      path: `/${this.basePath}/${id}/api/json`,
      method: 'GET'
    }
  }
  last() {
    return {
      path: `/${this.basePath}/lastBuild/api/json`,
      method: 'GET'
    }
  }
  setBasePath(view = 'view', job = 'job') {
    this.basePath = `/${view}/${job}`
  }
}

module.exports = {
  BuildAPI
}

