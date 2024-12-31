const { Op } = require("sequelize");
const Book = require('../BookControll/Book.model')


const getBook = async (req, res) => {
    try {
      const book = await Book.find(req.query);
      res.status(200).json(book);
    } catch (error) {
      console.log("Error: ", error);
      res.status(500).json(error);
    }
  };

  module.exports = 
  {

    getBook
  }


