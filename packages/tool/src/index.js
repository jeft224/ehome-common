'use strict'

import is from './is'
// import type from './type'
import cache from './cache'
import {
  LocalStorage,
  StorageFactory,
  Storage,
  SessionStorage
} from './storage'
import getQueryParams from './get_query_params'
import buildQueryParams from './build_query_params'
import compareVersion from './compare_version'

export default {
  is,
  // type,
  cache,
  LocalStorage,
  StorageFactory,
  Storage,
  SessionStorage,
  getQueryParams,
  buildQueryParams,
  compareVersion
}

export {
  is,
  // type,
  cache,
  LocalStorage,
  StorageFactory,
  Storage,
  SessionStorage,
  getQueryParams,
  buildQueryParams,
  compareVersion
}
