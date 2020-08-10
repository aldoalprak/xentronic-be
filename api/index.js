const Home = require('./handlers/home');

module.exports = {
  name: 'xentronic-be',
  register: (server) => {
    const routes = [
      {
        method: 'GET', path: '/', config: Home.hello,
      },
    ];
    routes.forEach((route) => server.route(route));
  },
};
