const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const products = sequelize.define(
    'products',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      price: {
        type: DataTypes.DECIMAL,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  products.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.products.belongsTo(db.brands, {
      as: 'brand',
      foreignKey: {
        name: 'brandId',
      },
      constraints: false,
    });

    db.products.belongsTo(db.subcategories, {
      as: 'subcategory',
      foreignKey: {
        name: 'subcategoryId',
      },
      constraints: false,
    });

    db.products.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.products.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return products;
};
