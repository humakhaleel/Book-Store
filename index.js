const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./sequelize/config');
const UserRoute = require("./userControll/Route")
const BookRoute = require("./BookControll/Route")
const User = require("./userControll/user.model")
const Book = require("./BookControll/Book.model")


sequelize.authenticate().then(async()=>{
    await sequelize.sync({alter:true});
    await User.sync({alter:true})
    await Book.sync({alter:true})
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        });

        app.use (bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());

        
        app.use("/user", UserRoute);
        app.use("/book", BookRoute)

       
app.listen(4001,()=>{
    console.log('Server is running on port:', 4001)
})