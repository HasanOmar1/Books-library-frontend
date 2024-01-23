import React, { createContext, useContext } from "react";
import axios from "../axiosConfig";
import { useFairyContext } from "./FairyBooksContext";

const NewBookContext = createContext();

const token = localStorage.getItem("token");

export default function NewBookProvider({ children }) {
  const { getFairyBooks } = useFairyContext();

  async function addNewBook(book) {
    try {
      const response = await axios.post("/fairy", book, {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeMyBook(bookId) {
    try {
      const response = await axios.delete(`/fairy/${bookId}`);
      console.log(response.data);
      getFairyBooks();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NewBookContext.Provider value={{ addNewBook, removeMyBook }}>
      {children}
    </NewBookContext.Provider>
  );
}

export const useNewBookContext = () => useContext(NewBookContext);
