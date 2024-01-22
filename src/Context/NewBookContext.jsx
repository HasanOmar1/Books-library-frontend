import React, { createContext, useContext } from "react";
import axios from "../axiosConfig";

const NewBookContext = createContext();

const token = localStorage.getItem("token");

async function addNewBook(book) {
  try {
    const response = await axios.post("/fairy", book, {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default function NewBookProvider({ children }) {
  return (
    <NewBookContext.Provider value={{ addNewBook }}>
      {children}
    </NewBookContext.Provider>
  );
}

export const useNewBookContext = () => useContext(NewBookContext);
