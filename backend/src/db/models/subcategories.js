const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const subcategories = sequelize.define(
    'subcategories',
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

  subcategories.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.subcategories.hasMany(db.products, {
      as: 'products_subcategory',
      foreignKey: {
        name: 'subcategoryId',
      },
      constraints: false,
    });

    //end loop

    db.subcategories.belongsTo(db.categories, {
      as: 'category',
      foreignKey: {
        name: 'categoryId',
      },
      constraints: false,
    });

    db.subcategories.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.subcategories.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return subcategories;
};
