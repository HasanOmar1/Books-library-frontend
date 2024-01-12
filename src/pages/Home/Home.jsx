import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import { useBooksData } from "../../Context/BooksContext";
import BooksCards from "../../components/BooksCards/BooksCards";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {
  const { users, setCurrentUser } = useNewUsersContext();
  const { books, fetchBooks } = useBooksData();
  const [bookCover, setBookCover] = useState();

  // useEffect(() => {
  //   if (books) {
  //     console.log(books);

  //     setBookCover(books[8]?.volumeInfo?.imageLinks?.thumbnail);
  //     // console.log(books[0]?.volumeInfo?.imageLinks?.thumbnail);
  //   }
  // }, [books]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, []);

  return (
    <main className="Home Page">
      {books && (
        <>
          <h4 className="fav-title">Fan favorite Series</h4>
          <div className="fav-books">
            <Carousel />
            <div className="cards">{/* <BooksCards /> */}</div>
          </div>
        </>
      )}
    </main>
  );
}
