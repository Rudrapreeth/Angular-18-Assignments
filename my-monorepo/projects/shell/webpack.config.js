const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'shell',
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        product: 'product@http://localhost:4201/remoteEntry.js',
        flight: 'flight@http://localhost:4202/remoteEntry.js',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
      },
    }),
  ],
};
