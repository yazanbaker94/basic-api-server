'use strict';

const POSTGRES_URI = "postgres://localhost:5432/testing";
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model');
const animal = require('./animal.model');

let sequelize = new Sequelize(POSTGRES_URI, {});

// lets define our Schema
module.exports = {
    Food: food(sequelize, DataTypes),
    Animal: animal(sequelize, DataTypes),
    db: sequelize
}