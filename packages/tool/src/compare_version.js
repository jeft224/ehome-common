// 解析版本，用于比较版本大小

const encodeVersion = (version) => {
  if (typeof version !== 'string') {
    return console.error('param should be string!')
  }
  const tokens = version.split(/[.|-]/)
  if (tokens.length !== 3 && tokens.length !== 4) {
    return console.error('Invalid version string: ' + version)
  }
  const major = Number(tokens[0])
  const minor = Number(tokens[1])
  const revision = Number(tokens[0])
  return (major << 20) | (minor << 10) | revision
}

// 比较版本
const compareVersion = (curVersion, oldVersion) => {
  return encodeVersion(curVersion) >= encodeVersion(oldVersion)
}

export default compareVersion
