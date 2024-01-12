import React, { useState } from "react";
import "./MyLibrary.css";
import { useLibraryContext } from "../../Context/LibraryContext";

export default function MyLibrary() {
  const { libraryBooks, setLibraryBooks } = useLibraryContext();

  console.log(libraryBooks);
  return (
    <main className="MyLibrary">
      <h4 className="title">My Library</h4>
      {/* <div className="library-container">{libraryBooks}</div> */}
    </main>
  );
}
