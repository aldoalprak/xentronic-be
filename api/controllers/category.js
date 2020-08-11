const categoryService = require('./../services/category');

module.exports.getAll = () => {
  return categoryService.getAll();
}