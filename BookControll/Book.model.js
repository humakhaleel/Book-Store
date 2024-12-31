const sequelize =require("../sequelize/config")
const { DataTypes } = require('sequelize');

const Book = sequelize.define('book',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        },
        title:{
            type:DataTypes.STRING(100),
            allowNull:false,
            },
            author:{
                type:DataTypes.STRING(100),
                allowNull:false,
                },
                publication_year:{
                    type:DataTypes.INTEGER,
                    allowNull:false,
                    },
                    genre:{
                        type:DataTypes.STRING(100),
                        allowNull:false,
                        },
                        description:{
                            type:DataTypes.STRING(1000),
                            allowNull:false,
                    },
                    cover_image:{
                        type:DataTypes.STRING(100),
                        allowNull:false,
                    }
                    },{
                        timestamps:false,tableName:'BookStore'

                    });
                    module.exports = Book;
                
