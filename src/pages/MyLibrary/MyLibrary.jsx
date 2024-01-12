import React, { useState } from "react";
import "./MyLibrary.css";

export default function MyLibrary() {
  const [libraryBooks, setLibraryBooks] = useState([]);

  return (
    <main className="MyLibrary">
      <h4 className="title">My Library</h4>
    </main>
  );
}
