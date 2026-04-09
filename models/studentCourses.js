const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const StudentCourses = sequelize.define('StudentCourses',{})

module.exports = StudentCourses;