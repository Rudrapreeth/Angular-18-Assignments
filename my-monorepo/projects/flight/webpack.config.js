const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: 'auto',
    uniqueName: 'flight',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'flight',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': path.resolve(__dirname, './src/app/flight/flight.component.ts'),
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
      },
    }),
  ],
};
