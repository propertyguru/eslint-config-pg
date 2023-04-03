const typescript = require('./typescript')
const react = require('./react')

module.exports = {
  ...typescript,
  overrides: [...typescript.overrides, ...react.overrides],
}
