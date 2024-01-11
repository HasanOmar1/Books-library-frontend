import axios from "../axiosConfig";
import React, { createContext, useContext, useEffect, useState } from "react";

const BooksContext = createContext();

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const response = await axios.get("/books");
      //   console.log(response.data);
      setBooks(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BooksContext.Provider value={{ books, fetchBooks }}>
      {children}
    </BooksContext.Provider>
  );
}

export const useBooksData = () => useContext(BooksContext);
