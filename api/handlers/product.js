const productController = require("./../controllers/product")

module.exports.getByQuery = {
  handler: productController.getByQuery
}