import React, { createContext, useContext } from "react";
import axios from "../axiosConfig";
import { useFairyContext } from "./FairyBooksContext";
import { useNewUsersContext } from "./NewUsersContext";

const NewBookContext = createContext();

const token = localStorage.getItem("token");

export default function NewBookProvider({ children }) {
  const { getFairyBooks } = useFairyContext();
  const { setCurrentUser } = useNewUsersContext();

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
      // this sometimes doesnt work from the first time until i refresh the page because of this :
      const response = await axios.delete(`/fairy/${bookId}`, {
        // <<< here it should be {} , then the header , but it creates new bug
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      if (response.data.fairyBooks) {
        const userJSON = JSON.stringify(response.data);
        localStorage.setItem("user", userJSON);
        setCurrentUser(response.data);
        getFairyBooks();
      }
      getFairyBooks();
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <NewBookContext.Provider value={{ addNewBook, removeMyBook }}>
      {children}
    </NewBookContext.Provider>
  );
}

export const useNewBookContext = () => useContext(NewBookContext);
