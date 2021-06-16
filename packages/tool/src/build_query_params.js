'use strict'

const buildQueryParams = (params = {}) => {
  if (Object.prototype.toString(params) !== '[object Object]') {
    console.warn('params must be an object !')
    throw new Error('params must be an object !')
  }
  const search = Object.entries(params).reduce((prev, [key, value], index) => {
    const cur = key + '=' + encodeURIComponent(value)
    return index === 0 ? prev + cur : prev + '&' + cur
  }, '?')
  return search
}

export default buildQueryParams
