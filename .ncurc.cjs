const { defineConfig } = require('npm-check-updates')

module.exports = defineConfig({
  //upgrade: true,
  //filter: name => name.startsWith('@petraflux/'),
  workspaces: true,
})