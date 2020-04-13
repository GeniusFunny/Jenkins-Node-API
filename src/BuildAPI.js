class BuildAPI {
  // Todo：确认参数
  buildWithParams(view, job, data) {
    data.json = JSON.stringify(data)
    return {
      path: `/view/${view}/job/${job}/build`,
      method: 'POST',
      form: data
    }
  }
  build(view, job) {
    return {
      path: `/view/${view}/job/${job}/build`,
      method: 'POST'
    }
  }
  stop(view, job, id) {
    return {
      path: `/view/${view}/job/${job}/${id}/stop`,
      method: 'POST'
    }
  }
  delete(view, job, id) {
    return {
      path: `/view/${view}/job/${job}/${id}/doDelete`,
      method: 'POST'
    }
  }
  getInfo(view, job, id) {
    return {
      path: `/view/${view}/job/${job}/${id}/api/json`,
      method: 'GET'
    }
  }
  last(view, job) {
    return {
      path: `/view/${view}/job/${job}/lastBuild/api/json`,
      method: 'GET'
    }
  }
  lastSuccessfulBuild(view, job) {
    return {
      path: `/view/${view}/job/${job}/lastSuccessfulBuild/api/json`,
      method: 'GET'
    }
  }
  log(view, job, id) {
    return {
      path: `/view/${view}/job/${job}/${id}/consoleText/api/json`,
      method: 'GET'
    }
  }
}

module.exports = BuildAPI;