'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');
const tasksModel = require('./tasks/model.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ?  'sqlite:memory;': process.env.DATABASE_URL ;

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ?  {dialectOptions: {ssl: {require: true, rejectUnauthorized: false}}}: {}
const sequelize = new Sequelize(DATABASE_URL,DATABASE_CONFIG);

const tasks = tasksModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  tasks: new Collection(tasks),
}
