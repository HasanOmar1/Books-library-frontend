import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import { useBooksData } from "../../Context/BooksContext";
import BooksCards from "../../components/BooksCards/BooksCards";
import Carousel from "../../components/Carousel/Carousel";
import BookOfTheDay from "../../components/BooksCards/BookOfTheDay";
import WeeklyFeaturedBooks from "../../components/BooksCards/WeeklyFeaturedBooks/WeeklyFeaturedBooks";
import ReadBook from "../../components/PageFlip-Package/ReadBook";
import { Link } from "react-router-dom";

export default function Home() {
  const { users, setCurrentUser, currentUser } = useNewUsersContext();
  const { books, fetchBooks } = useBooksData();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    // console.log(currentUser);
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
          <h4 className="titles">Fan Favorite Series</h4>
          <div className="fav-books">
            <Carousel />
          </div>
          <div className="big-book-and-more-books">
            <div className="left-side">
              <h4 className="titles">Book of the day</h4>
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

          <div className="weekly-featured-title">
            <h4 className="titles">Weekly Featured Series</h4>
          </div>
          <div className="weekly-featured-container ">
            <div className="weekly-featured ">
              <p>Marvel Series</p>
              <div className="books">
                <WeeklyFeaturedBooks sliceStart={34} sliceEnd={40} />
              </div>
            </div>

            <div className="weekly-featured">
              <p>A Song of Ice and Fire Series </p>
              <div className="books">
                <WeeklyFeaturedBooks sliceStart={40} sliceEnd={48} />
              </div>
            </div>
          </div>

          <div className="learn-books">
            {/* <WeeklyFeaturedBooks sliceStart={48} sliceEnd={58} /> */}
            <h5>Books by Categories</h5>
            <hr className="divider" />
            <div className="categories">
              <Link to={"/fiction"} className="link">
                <p>Fiction</p>
              </Link>
              <Link to={"/comics"} className="link">
                <p>Comics</p>
              </Link>
              <Link to={"/art"} className="link">
                <p>Art</p>
              </Link>
            </div>
            <hr className="divider" />
          </div>
        </>
      ) : (
        <h3>Loading Data...</h3>
      )}
    </main>
  );
}
