const productController = require("./../controllers/product")

module.exports.getAll = {
  handler: productController.getAll
}

module.exports.getByQuery = {
  handler: productController.getByQuery
}

module.exports.getById = {
  handler: productController.getById
}