import React, { createContext, useContext, useState } from "react";

const LibraryContext = createContext();

export default function LibraryProvider({ children }) {
  const [libraryBooks, setLibraryBooks] = useState([]);

  return (
    <LibraryContext.Provider value={{ libraryBooks, setLibraryBooks }}>
      {children}
    </LibraryContext.Provider>
  );
}

export const useLibraryContext = () => useContext(LibraryContext);
