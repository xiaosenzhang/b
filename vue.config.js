const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require("webpack").container
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    cache: {
      type: 'filesystem'
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'B',
        remotes: {
          remoteA: 'App@http://localhost:8081/remoteEntry.js'
        }
      })
    ]
  }
})
