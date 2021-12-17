'use strict';

const clothesModel = (sequelize, DataTypes) => sequelize.define('Clothes', {
  complete: { type: DataTypes.BOOLEAN, required: true },
  difficulty: { type: DataTypes.INTEGER },
  id:{ type: DataTypes.STRING, primaryKey: true},
  name: { type: DataTypes.STRING, required: true },
  task: { type: DataTypes.STRING, required: true }

});

module.exports = clothesModel;
