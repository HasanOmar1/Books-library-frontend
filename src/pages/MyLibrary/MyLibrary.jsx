import React, { useEffect, useState } from "react";
import "./MyLibrary.css";
import { useLibraryContext } from "../../Context/LibraryContext";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import LibraryBooks from "../../components/BooksCards/LibraryBooks/LibraryBooks";

export default function MyLibrary() {
  const { libraryBooks, setLibraryBooks } = useLibraryContext();
  const { currentUser } = useNewUsersContext();

  useEffect(() => {
    console.log(currentUser?.books);
  }, [currentUser?.books]);

  return (
    <main className="MyLibrary">
      <h4 className="title">My Library</h4>
      <div className="library-container">
        <LibraryBooks library={currentUser?.books} />
      </div>
    </main>
  );
}
