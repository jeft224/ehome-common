'use strict'

/**
 * 缓存的数据结构
 * catchData
 * data       数据
 * timer      定时器
 * startTime  开始时间
 *
 */

// 创建缓存对象实例
const cache = new Map()

const set = (key, data, cacheTime) => {
  const currentCache = cache.get(key)

  if (currentCache && currentCache.timer) {
    clearTimeout(currentCache.timer)
  }

  let timer
  // 缓存数据 不在活跃时间删除缓存
  if (cacheTime > -1) {
    timer = window.setTimeout(() => {
      cache.delete(key)
    }, cacheTime)
  }

  cache.set(key, {
    data: JSON.stringify(data),
    timer,
    startTime: new Date().getTime()
  })
}

const get = (key) => {
  const currentCache = cache.get(key)
  if (currentCache.data) {
    return JSON.parse(currentCache.data)
  }
}

const remove = (key) => {
  const currentCache = cache.get(key)
  if (currentCache) {
    clearTimeout(currentCache.timer)
    cache.delete(key)
  }
}

const Cache = {
  get,
  set,
  remove
}

export default Cache
