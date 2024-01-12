import React, { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";
import config from "../authConfig";

const LibraryContext = createContext();

export default function LibraryProvider({ children }) {
  const [errorMsg, setErrorMsg] = useState([]);

  async function addBookToLibrary(bookId) {
    try {
      const response = await axios.put(`/books/addBook/${bookId}`, {}, config);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      setErrorMsg(error.response.data);
    }
  }

  async function removeBookFromLibrary(bookId) {
    try {
      const response = await axios.put(
        `/books/removeBook/${bookId}`,
        {},
        config
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      setErrorMsg(error.response.data);
    }
  }

  return (
    <LibraryContext.Provider
      value={{
        addBookToLibrary,
        removeBookFromLibrary,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export const useLibraryContext = () => useContext(LibraryContext);
