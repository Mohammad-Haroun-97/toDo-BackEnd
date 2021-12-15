'use strict';

const clothesModel = (sequelize, DataTypes) => sequelize.define('Clothes', {
  name: { type: DataTypes.STRING, required: true },
  task: { type: DataTypes.STRING, required: true },
  complete: { type: DataTypes.BOOLEAN, required: true },
  difficulty: { type: DataTypes.INTEGER, required: true }
});

module.exports = clothesModel;
