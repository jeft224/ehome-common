'use strict'
/**
 * 将对象组装成URL形式的查询参数字符串返回
 *
 * @param {object} params (eg:{a:1,b:1})
 * @returns {string} (eg: ?a=1&b=1)
 */
const buildQueryParams = (params = {}) => {
  if (Object.prototype.toString.call(params) !== '[object Object]') {
    console.warn('params must be an object !')
    throw new Error('params must be an object !')
  }
  const search = Object.entries(params).reduce((prev, [key, value], index) => {
    const cur = key + '=' + encodeURIComponent(value)
    return prev + '&' + cur
  }, '')
  return search.replace(/&/, '?')
}

export default buildQueryParams
