'use strict'

module.exports = babelPluginVConsole
/**
 *  在打包过程中，用于移除项目的vconsole
 * @param {*} param0
 * @returns
 */
function babelPluginVConsole ({ types: t }) {
  const VcRegex = /(.)*([VC|vc|Vc|vC]onsole)$/gi

  function replaceIdentifierToEmpty (path, value) {
    if (value.match(VcRegex)) {
      const newIdentifier = t.identifier('')
      path.replaceWith(newIdentifier)
    }
  }
  return {
    name: 'babel-plugin-vconsole',
    visitor: {
      ImportDeclaration (path) {
        const node = path.node
        replaceIdentifierToEmpty(path, node.source.value)
      },
      NewExpression (path) {
        const node = path.node
        replaceIdentifierToEmpty(path, node.callee.name)
      }
    }
  }
}
