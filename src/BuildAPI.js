class BuildAPI {
  constructor(view = 'view', job = 'job') {
    this.basePath = `view/${view}/job/${job}`
  }
  // Todo：确认参数
  buildWithParams(data) {
    data.json = JSON.stringify(data)
    return {
      path: `${this.basePath}/build`,
      method: 'POST',
      form: data
    }
  }
  build() {
    return {
      path: `${this.basePath}/build`,
      method: 'POST'
    }
  }
  stop(id) {
    return {
      path: `${this.basePath}/${id}/stop`,
      method: 'POST'
    }
  }
  delete(id) {
    return {
      path: `${this.basePath}/${id}/doDelete`,
      method: 'POST'
    }
  }
  getInfo(id) {
    return {
      path: `${this.basePath}/${id}/api/json`,
      method: 'GET'
    }
  }
  last() {
    return {
      path: `${this.basePath}/lastBuild/api/json`,
      method: 'GET'
    }
  }
  lastSuccessfulBuild() {
    return {
      path: `${this.basePath}/lastSuccessfulBuild/api/json`,
      method: 'GET'
    }
  }
  setBasePath(view = 'view', job = 'job') {
    this.basePath = `/view/${view}/job/${job}`
  }
}

module.exports = BuildAPI;