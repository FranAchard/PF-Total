const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Comment = sequelize.define("product", {

  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  moderated: {
    type : DataTypes.BOOLEAN,
    allowNull : false,
    defaultValue : false
  },
  postedBy: {
    type: DataTypes.STRING,
    allowNull : false
  },
  product: {
    type : DataTypes.STRING,
    allowNull: false
  },
  // createdAt :{
  //   type : Date.UTC.
  // } 

});

module.exports = Comment;