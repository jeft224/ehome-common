'use strict'

// const tool = require('../index')
import tool from '../src/index'

describe('@ehome-common/tool/getQueryParams', () => {
  it('function getQueryParams return object ',() => {
    const url = 'http://localhost:3000/?a=1&b=3#/home?c=1&b=4&d=5'
    expect(tool.getQueryParams(url)).toEqual({a:"1",b:"4",c:"1",d:"5"})
  })
  it('function getQueryParams param is not string,throw Error',() => {
    expect(tool.getQueryParams(12121)).toThrow()
    expect(tool.getQueryParams(12121)).toThrow(Error);
    expect(tool.getQueryParams(12121)).toThrow('The type of getQueryParams param should be string !');
  }) 
})

describe('@ehome-common/tool/buildQueryParams', () => {
  it('function buildQueryParams return string ',() => {
    const obj = {a:"1",b:"4",c:"1",d:"5"}
    expect(tool.buildQueryParams()).toEqual('');
    expect(tool.buildQueryParams(obj)).not.toBeNull()
    expect(tool.buildQueryParams(obj)).toEqual(expect.stringMatching(/(\?|&)/))
  })
  it('function buildQueryParams param is not object,throw Error',() => {
    expect(tool.buildQueryParams("12121")).toThrow()
    expect(tool.buildQueryParams("12121")).toThrowError('params must be an object !');
  }) 
})
