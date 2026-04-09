const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const IdentityCard = sequelize.define('IdentityCard',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },    
    cardNo:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
})

module.exports = IdentityCard;