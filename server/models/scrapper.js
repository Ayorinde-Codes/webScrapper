'use strict';

export default (sequelize, DataTypes) => {
  const Scrapper = sequelize.define('Scrapper', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your website name'
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your url'
      }
    },
    item: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your item name'
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Price in Canadian dollars'
      }
    },
    
  }, {});
  Scrapper.associate = function(models) {
    // associations can be defined here
  };
  return Scrapper;
};