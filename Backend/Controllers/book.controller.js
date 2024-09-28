import Book from "../models/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
    console.log(allBooks);
  } catch (error) {
    console.log("Error : ", error);
    res.status(500).json(error);
  }
};
