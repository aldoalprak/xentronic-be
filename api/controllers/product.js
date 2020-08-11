const productService = require('./../services/product');

module.exports.getAll = () => {
  return productService.findAll();
}

module.exports.getByCategory = async(req) => {
  const {category_id} = req.query;
  console.log(category_id)
  const where = {
    category_id
  };

  return productService.findAll(where);
}