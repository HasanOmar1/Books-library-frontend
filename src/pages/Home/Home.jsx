import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import { useBooksData } from "../../Context/BooksContext";
import BooksCards from "../../components/BooksCards/BooksCards";
import Carousel from "../../components/Carousel/Carousel";
import BookOfTheDay from "../../components/BooksCards/BookOfTheDay";

export default function Home() {
  const { users, setCurrentUser, currentUser } = useNewUsersContext();
  const { books, fetchBooks } = useBooksData();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  const loggedUser = localStorage.getItem("user");

  return (
    <main className="Home Page">
      {books ? (
        <>
          {loggedUser && (
            <>
              <div className="logged-user">
                <h5>
                  Hello <span>{currentUser?.name}</span>, Explore the library
                  and start reading 📚
                </h5>
              </div>
            </>
          )}
          <h4 className="fav-title">Fan Favorite Series</h4>
          <div className="fav-books">
            <Carousel />
          </div>
          <div className="big-book-and-more-books">
            <div className="left-side">
              <h4>Book of the day</h4>
              <div className="book-of-the-day">
                <BookOfTheDay sliceStart={30} sliceEnd={31} />
              </div>
            </div>
            <div className="right-side">
              <div className="same-more-books">
                <h5>More Batman Books</h5>
                <div className="books">
                  <BooksCards sliceStart={32} sliceEnd={34} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h3>Loading Data...</h3>
      )}
    </main>
  );
}
