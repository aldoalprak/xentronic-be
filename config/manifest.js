const ConfigServer = require("./server");
const routes = require("./../api");
const Good = require("@hapi/good");

const goodOptions = {
  includes: {
    request: ['payload'],
    response: ['payload'],
  },
  reporters: {
    consoleReporter: [{
      module: '@hapi/good-squeeze',
      name: 'Squeeze',
      args: [{
        log: '*',
        error: '*',
        response: { exclude: 'health' },
        request: '*',
      }],
    }, {
      module: '@hapi/good-console',
    }, 'stdout'],
  },
};

const plugins = {
  server: {
    port: ConfigServer.port,
    host: ConfigServer.host,
    routes: {
      cors: true,
      validate: {
        failAction: (request, h, error) => {
          console.error(error.message);
          return error;
        },
      },
    },
  },
  register: {
    plugins: [
      {
        plugin: routes,
      },
      {
        plugin: Good,
        options: goodOptions,
      },
    ],
  },
};

module.exports = plugins;
