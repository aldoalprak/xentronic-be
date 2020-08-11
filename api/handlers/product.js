const productController = require("./../controllers/product")

module.exports.getAll = {
  handler: productController.getAll
}

module.exports.getByCategory = {
  handler: productController.getByCategory
}