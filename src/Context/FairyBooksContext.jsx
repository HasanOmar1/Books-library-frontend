import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";

const FairyContext = createContext();

export default function FairyBooksProvider({ children }) {
  const [fairyBooks, setFairyBooks] = useState();

  useEffect(() => {
    getFairyBooks();
  }, []);

  async function getFairyBooks() {
    try {
      const response = await axios.get("/fairy");
      console.log(response.data);
      setFairyBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FairyContext.Provider value={{ fairyBooks }}>
      {children}
    </FairyContext.Provider>
  );
}

export const useFairyContext = () => useContext(FairyContext);
