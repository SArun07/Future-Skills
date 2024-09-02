const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Card = sequelize.define('Card', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Card;
