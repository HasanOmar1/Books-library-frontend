import axios from "../axiosConfig";
import React, { createContext, useContext, useEffect, useState } from "react";

const BooksContext = createContext();

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState();
  const [fictionBooks, setFictionBooks] = useState([]);
  const [comicsBooks, setComicsBooks] = useState([]);
  const [artBooks, setArtBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  //fetches all books
  async function fetchBooks() {
    try {
      const response = await axios.get("/books");
      //   console.log(response.data);
      setBooks(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  // gets all books that name includes whats in the parameter
  async function filterBooksByName(bookName) {
    try {
      const response = await axios.get(`/books/search/name?name=${bookName}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function filterBooksByCategory(bookCategory) {
    try {
      const response = await axios.get(
        `/books/search/category?category=${bookCategory}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getFictionBooks() {
    try {
      const response = await axios.get(`/books/category/fiction`);
      console.log(response.data);
      setFictionBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getComicsBooks() {
    try {
      const response = await axios.get(`/books/category/comics`);
      console.log(response.data);
      setComicsBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getArtBooks() {
    try {
      const response = await axios.get(`/books/category/art`);
      console.log(response.data);
      setArtBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        filterBooksByName,
        filterBooksByCategory,
        getFictionBooks,
        fictionBooks,
        getComicsBooks,
        comicsBooks,
        getArtBooks,
        artBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export const useBooksData = () => useContext(BooksContext);
