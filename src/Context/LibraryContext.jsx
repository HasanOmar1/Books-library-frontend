import React, { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";
import config from "../authConfig";

const LibraryContext = createContext();

export default function LibraryProvider({ children }) {
  const [errorMsg, setErrorMsg] = useState();
  const [libraryBooks, setLibraryBooks] = useState([]);

  async function addBookToLibrary(bookId) {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.put(
          `/books/addBook/${bookId}`,
          {},
          config
        );
        console.log(response.data);
        const userJSON = JSON.stringify(response.data);
        localStorage.setItem("user", userJSON);
      } else {
        console.log("Login first");

        setErrorMsg("Please login first");
      }
    } catch (error) {
      // console.log(error.response.data.message);
      console.log(error.response.data);
      setErrorMsg(error.response.data.message);
    }
  }

  async function removeBookFromLibrary(bookId) {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.put(
          `/books/removeBook/${bookId}`,
          {},
          config
        );
        console.log(response.data);
      } else {
        console.log("Login first");
        setErrorMsg("Please login first");
      }
    } catch (error) {
      console.log(error.response.data);
      // setErrorMsg(error.response.data.message);
    }
  }

  return (
    <LibraryContext.Provider
      value={{
        addBookToLibrary,
        removeBookFromLibrary,
        libraryBooks,
        setLibraryBooks,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export const useLibraryContext = () => useContext(LibraryContext);
