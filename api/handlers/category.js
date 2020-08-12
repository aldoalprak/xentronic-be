const categoryController = require('./../controllers/category');

module.exports.getAll = {
  handler: categoryController.getAll
};