const Model = require("./../../models");

module.exports.findAll = (where) => {
  return Model.Product.findAll({
    where,
    // include: [
    //   {
    //     model: Model.Category
    //   }
    // ]
  });
}