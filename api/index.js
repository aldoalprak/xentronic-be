const Home = require('./handlers/home');
const productHandler = require('./handlers/product');

module.exports = {
  name: 'xentronic-be',
  register: (server) => {
    const routes = [
      {
        method: 'GET', path: '/', config: Home.hello,
      },
      {
        method: 'GET', path: '/product/getByQuery', config: productHandler.getByQuery,
      },
    ];
    routes.forEach((route) => server.route(route));
  },
};
