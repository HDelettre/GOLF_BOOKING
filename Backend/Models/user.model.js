const { Sequelize, DataTypes, Model, INTEGER, STRING } = require('sequelize');

const sequelize = require('../Config/mysql');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique:true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  avatar:{
    type:STRING,
    allowNull:true  
  },
  address:{
    type:STRING,
    allowNull:true  
  },
  token:{
    type: DataTypes.STRING,
    allowNull:true
  },
  licence:{
    type:DataTypes.INTEGER(8),
    allowNull:true  
  },
  golf_origin: {
    type: DataTypes.STRING,
    allowNull:true
  },
  subscript: {
    type:DataTypes.STRING,
    allowNull:true
  },
  role:{
    type:DataTypes.STRING,
    defaultValue: 'USER'
  }
});

module.exports = User;
