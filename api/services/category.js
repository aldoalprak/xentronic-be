const Model = require('./../../models');

module.exports.getAll = () => {
  return Model.Category.findAll();
}