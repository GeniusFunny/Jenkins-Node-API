class BuildAPI {
  // Todo：确认参数
  buildWithParams(view, job, data) {
    data.json = JSON.stringify(data)
    return {
      path: `view/${view}/job/${job}/build`,
      method: 'POST',
      form: data
    }
  }
  build() {
    return {
      path: `view/${view}/job/${job}/build`,
      method: 'POST'
    }
  }
  stop(id) {
    return {
      path: `view/${view}/job/${job}/${id}/stop`,
      method: 'POST'
    }
  }
  delete(id) {
    return {
      path: `view/${view}/job/${job}/${id}/doDelete`,
      method: 'POST'
    }
  }
  getInfo(id) {
    return {
      path: `view/${view}/job/${job}/${id}/api/json`,
      method: 'GET'
    }
  }
  last() {
    return {
      path: `view/${view}/job/${job}/lastBuild/api/json`,
      method: 'GET'
    }
  }
  lastSuccessfulBuild() {
    return {
      path: `view/${view}/job/${job}/lastSuccessfulBuild/api/json`,
      method: 'GET'
    }
  }
}

module.exports = BuildAPI;