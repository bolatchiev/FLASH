'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Geography extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Geography.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    rightAns: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Geography',
  });
  return Geography;
};
