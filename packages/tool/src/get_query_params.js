'use strict'

/**
 * 解析url上的参数 返回一个键值对的对象query
 * @param {string} str (eg: location.search, ?id=1&name=last, http://localhost:3000/?a=1&b=2#/home?c=1&d=2&a=4)
 * @returns {object} query (eg: { id: 1, name: last })
 */
const getQueryParams = (str) => {
  if (typeof str !== 'string') {
    throw new Error('The type of getQueryParams param should be string !')
  }
  const query = {}
  const params = str ? str.split('?') : window.location.href.split('?')
  const search = params.reduce((prev, cur, index) => {
    if (index > 1) {
      return prev + '&' + cur
    }
    return index === 0 ? '' : cur
  }, '')
  const searchParams = search.split('&')

  searchParams.forEach((param) => {
    const eqIndex = param.indexOf('=')
    const key = param.substring(0, eqIndex)
    let value = decodeURIComponent(param.substring(eqIndex + 1))
    if (value && value.indexOf('#/') !== -1) {
      value = value.split('#/')[0]
    }
    query[key] = value
  })
  return query
}

export default getQueryParams
