const Model = require("./../../models");

module.exports.findAll = (where) => {
  return Model.Product.findAll({
    where,
  });
}

module.exports.findById = (id) => {
  return Model.Product.findByPk(id);
}