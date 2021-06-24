'use strict'

// import _ from 'lodash'

const __NAME__ = 'STATION'
const __MODULE_PREFIX_NAME__ = '_EHOME-COMMON_'

// 本地缓存的工厂模式
class StorageFactory {
  constructor(prefix, target) {
    this.prefix = __NAME__ + `_${prefix}`
    this.target = target
  }

  set(key, data) {
    try {
      this.target.setItem(`${this.prefix}${key}`, JSON.stringify(data))
    } catch (error) {
      console.warn('storage set error', error)
    }
  }

  get(key) {
    const value = this.target.getItem(`${this.prefix}${key}`)
    try {
      return value ? JSON.parse(value) : value
    } catch (error) {
      console.error('storage get error', error)
      return null
    }
  }

  remove(key) {
    this.target.removeItem(`${this.prefix}${key}`)
  }

  clear() {
    this.target.clear()
  }

  // TODO 获取所有缓存 待实现
  getAll() {}
}

const LocalStorage = new StorageFactory(
  __MODULE_PREFIX_NAME__,
  window.LocalStorage
)

const SessionStorage = new StorageFactory(
  __MODULE_PREFIX_NAME__,
  window.sessionStorage
)

const Storage = LocalStorage

export { StorageFactory, Storage, LocalStorage, SessionStorage }

export default Storage
