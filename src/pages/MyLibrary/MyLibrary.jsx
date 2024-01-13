import React, { useEffect, useState } from "react";
import "./MyLibrary.css";
import { useLibraryContext } from "../../Context/LibraryContext";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import LibraryBooks from "../../components/BooksCards/LibraryBooks/LibraryBooks";

export default function MyLibrary() {
  const { libraryBooks, setLibraryBooks } = useLibraryContext();
  const { currentUser, usersAPI } = useNewUsersContext();
  // const [updateCurrentUser, setUpdateCurrentUser] = useState();

  // useEffect(() => {
  const loggedUser = localStorage.getItem("user");
  const loggedUserObj = JSON.parse(loggedUser);
  console.log(loggedUserObj.books);
  //   setUpdateCurrentUser(loggedUserObj);
  // }, []);

  // useEffect(() => {
  //   console.log(currentUser);
  // }, []);

  return (
    <main className="MyLibrary">
      <h4 className="title">My Library</h4>
      <div className="library-container">
        <LibraryBooks library={loggedUserObj?.books} />
      </div>
    </main>
  );
}
