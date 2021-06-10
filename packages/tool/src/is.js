import _ from 'lodash'

const wx = () => /MicroMessenger/i.test(window.navigator.userAgent)

const ali = () => /Alipay/i.test(window.navigator.userAgent)

const mac = () => window.navigator.userAgent.includes('Mac')

let isMiniWX = null
const miniWX = () => {
  if (isMiniWX === null) {
    isMiniWX =
      (/micromessenger/i.test(window.navigator.userAgent) &&
        /miniprogram/i.test(window.navigator.userAgent)) ||
      window.__wxjs_environment === 'miniprogram'
  }
  return isMiniWX
}

let isIOS = null
const ios = () => {
  if (isIOS === null) {
    isIOS = !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  }
  return isIOS
}

const android = () => window.navigator.userAgent.includes('Android')

// 校验当前环境是否为移动端h5，既不是微信浏览器也不算支付宝浏览器打开
const h5 = () =>
  /ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince/i.test(
    window.navigator.userAgent
  )

const dingding = () =>
  /dingtalk/i.test(window.navigator.userAgent.toLowerCase())

const zuolin = () =>
  new Promise((resolve, reject) => {
    if (
      /everhomes/i.test(window.navigator.userAgent) ||
      window.ehopenapi ||
      /ns\/\d{1,6}/i.test(window.navigator.userAgent)
    ) {
      return resolve(true)
    }
    let count = 0
    const checkInterval = setInterval(() => {
      if (!window.ehopenapi) {
        if (count < 10) {
          count++
        } else {
          clearInterval(checkInterval)
          return reject(false)
        }
      } else {
        clearInterval(checkInterval)
        resolve(true)
      }
    }, 20)
  })

const is = {
  wx,
  mac,
  ali,
  android,
  ios,
  zuolin,
  dingding,
  zuolin,
  miniWX,
  h5,
}

export default is
