const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const user = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue : false,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
    isEmail:true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code:{
    type:DataTypes.STRING,
    require:true
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:"UNVERIFIED",
    require:true,
  }
});

module.exports = user;