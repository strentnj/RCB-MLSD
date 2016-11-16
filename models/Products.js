'use strict';
module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define('Products', {
    productID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productLine: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productSize: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    productBrand: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    quantityInStock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MSRP: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    productDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    image: {
      type: DataTypes.BLOB
    }
  }, {
    classMethods: {
      associate: function(models) {
        Products.belongsTo(models.ProductLines, {contraint: true, foreignKey: 'productLine', targetKey: 'productLine'});
      }
    }
  });
  return Products;
};