'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Part extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Provider } = models;
      Provider.hasMany(Part, { as: 'parts' });
      Part.belongsTo(Provider, {
        foreignKey: 'id',
        as: 'providerId'
      });
    }
  };
  Part.init({
    number: DataTypes.INTEGER,
    label: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Part',
  });
  return Part;
};