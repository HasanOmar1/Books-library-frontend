import React, { useEffect } from "react";
import "./MyLibrary.css";
import LibraryBooks from "../../components/BooksCards/LibraryBooks/LibraryBooks";
import FairyLibraryBooks from "../../components/BooksCards/LibraryBooks/FairyLibraryBooks";

export default function MyLibrary() {
  const loggedUser = localStorage.getItem("user");
  const loggedUserObj = JSON.parse(loggedUser);
  console.log(loggedUserObj.books);
  console.log(loggedUserObj.fairyBooks);

  return (
    <main className="MyLibrary">
      <h4 className="title">My Library</h4>
      <div className="library-container">
        <div className="library-books-container">
          <LibraryBooks library={loggedUserObj?.books} />
        </div>
        <div className="library-fairy-container">
          <FairyLibraryBooks library={loggedUserObj?.fairyBooks} />
        </div>
      </div>
    </main>
  );
}
