  // Todo： 待验证
class QueueAPI {
  queue() {
    return {
      path: `/queue/api/json`,
      method: 'GET'
    }
  }
  queueItem(item) {
    return {
      path: `/queue/item/${item}/api/json`,
      method: 'GET'
    }
  }
  queueCancelItem() {
    return {
      path: `/queue/cancelItem/api/json`,
      method: 'POST'
    }
  }
}

module.exports = QueueAPI;

