import * as utils from './util.js'

export default (store) => (next) => (action) => {
  utils.log('__ACTION__', action)
  try {
    let result = next(action)
    utils.log('__STATE__', store.getState())
    return result
  } catch (err) {
    err.action = action
    utils.logError('__ERROR__', err)
    return action
  }
}
