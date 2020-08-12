const productService = require('./../services/product');

module.exports.getAll = () => {
  return productService.findAll();
}

module.exports.getByQuery = async(req) => {
  const {category_id, product_id} = req.query;
  let where = {};
  if(category_id) where.category_id = category_id;
  if(product_id) where.id = product_id;
  return productService.findAll(where);
}

module.exports.getById = async(req) => {
  return productService.findById(req.params.id)
}