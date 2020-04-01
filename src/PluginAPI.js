class PluginAPI {
  list() {
    return {
      path: `/pluginManager/api/json`,
      method: 'GET'
    }
  }

  install(pluginName) {
    const body = `<jenkins><install plugin="${pluginName}"/></jenkins>`;
    return {
      path: `/pluginManager/installNecessaryPlugins/api/json`,
      method: 'GET',
      contentType: 'text/xml',
      body: body
    }
  }
}

module.exports = PluginAPI;

