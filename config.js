var config = {
  basePath: '/bws/api',
  disableLogs: false,
  port: 3232,
  // Uncomment to make BWS a forking server
  // cluster: true,
  // Uncomment to use the nr of availalbe CPUs
  // clusterInstances: 4,

  // https: true,
  // privateKeyFile: 'private.pem',
  // certificateFile: 'cert.pem',

  storageOpts: {
    mongoDb: {
      uri: 'mongodb://localhost:27017/bws',
    },
  },
  lockOpts: {
    //  To use locker-server, uncomment this:
    lockerServer: {
      host: 'localhost',
      port: 3231,
    },
  },
  messageBrokerOpts: {
    //  To use message broker server, uncomment this:
    messageBrokerServer: {
      url: 'http://localhost:3380',
    },
  },
  blockchainExplorerOpts: {
    livenet: {
      provider: 'insight',
      url: 'https://insight.bitpay.com:443',
    },
    testnet: {
      provider: 'insight',
      url: 'https://test-insight.bitpay.com:443',
    },
  },
  // To use email notifications uncomment this:
  emailOpts: {
    host: 'localhost',
    port: 25,
    ignoreTLS: true,
    subjectPrefix: '[Wallet Service]',
    from: 'wallet-service@bitcore.io',
  },
};
module.exports = config;