const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  shared: {
  ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto',  }),
  },
  remotes: {
    mfRoom: 'http://localhost:4201/remoteEntry.json',
  },
  name: 'mf-shell',
  skip: [
    'primeng',
    'primeicons',
    'primeflex',
    '@primeuix/themes',

    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  sharedMappings: [

  ]
});
