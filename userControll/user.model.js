const sequelize =require("../sequelize/config")
const { DataTypes } = require('sequelize');

const User = sequelize.define('user',{
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        FullName: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            },
            Password:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            Isactive:{
                type: DataTypes.BOOLEAN,
                defaultValue: true,

            }
},{
    timestamps: false,tableName:'user'})
    
module.exports = User;