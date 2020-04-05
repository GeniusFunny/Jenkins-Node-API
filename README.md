## Jenkins-Node-API

### 📦 安装

```bash
npm install jenkins-node-api
```

### 📃 API

- ViewAPI

  - create
  - delete
  - getInfo
  - getConfig
  - updateConfig

- JobAPI

  - create
  - delete
  - getInfo
  - disable
  - enable

  - getConfig
  - updateConfig

- BuildAPI

  - build
  - stop
  - delete
  - getInfo
  - last
  - lastSuccessfulBuild

- QueueAPI

  - queue
  - queueItem
  - queueCancelItem

- PluginAPI

  - list
  - install

### 🔨使用

```js
const JenkinsAPI = require('jenkins-node-api');

const jenkinsAPI = new JenkinsAPI($jenkinsServerAddress, {
  username: $username,
  password: $password
});

/*
使用方式：
	await jenkinsAPI.request(jenkinsAPI.xxxAPI.yyy(zz))
*/

//例如
await jenkins.request(jenkins.viewAPI.create({
  name: $viewName,
  mode: $mode
}));
await jenkins.request(jenkins.viewAPI.getConfig($viewName)); // 获取view信息
await jenkins.request(jenkins.viewAPI.getConfig($viewName)); // 获取view配置
await jenkins.request(jenkins.jobAPI.getConfig($jobName)); // // 获取job配置
await jenkins.request(jenkins.list()); // 获取所有view、job
```

