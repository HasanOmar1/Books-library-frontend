import React, { createContext, useContext, useState } from "react";
import axios from "../axiosConfig";
import config from "../authConfig";
import { useNewUsersContext } from "./NewUsersContext";

const LibraryContext = createContext();

export default function LibraryProvider({ children }) {
  const { currentUser, setCurrentUser } = useNewUsersContext();
  const [booksErrorMsg, setBooksErrorMsg] = useState();
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
        setCurrentUser(response.data);

        setBooksErrorMsg("Book has been added to your library");
      } else {
        console.log("Login first");

        setBooksErrorMsg("Please login first");
      }
    } catch (error) {
      // console.log(error.response.data.message);
      console.log(error.response.data.message);
      setBooksErrorMsg(error.response.data.message);
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
        const userJSON = JSON.stringify(response.data);
        localStorage.setItem("user", userJSON);
        setCurrentUser(response.data);
      } else {
        console.log("Login first");
        setBooksErrorMsg("Please login first");
      }
    } catch (error) {
      console.log(error.response.data.message);
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
        setBooksErrorMsg,
        booksErrorMsg,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export const useLibraryContext = () => useContext(LibraryContext);
