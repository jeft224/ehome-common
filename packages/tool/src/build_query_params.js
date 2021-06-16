'use strict'
/**
 * 将对象组装成URL形式的查询参数字符串返回
 *
 * @param {object} params (eg:{a:1,b:1})
 * @returns {string} (eg: ?a=1&b=1)
 */
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
