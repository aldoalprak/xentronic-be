const Home = require('./handlers/home');
const productHandler = require('./handlers/product');
const categoryHandler = require('./handlers/category');

module.exports = {
  name: 'xentronic-be',
  register: (server) => {
    const routes = [
      {
        method: 'GET', path: '/', config: Home.hello,
      },
      {
        method: 'GET', path: '/category/getAll', config: categoryHandler.getAll
      },
      {
        method: 'GET', path: '/product/getAll', config: productHandler.getAll,
      },
      {
        method: 'GET', path: '/product/getByCategory', config: productHandler.getByCategory
      }
    ];
    routes.forEach((route) => server.route(route));
  },
};
