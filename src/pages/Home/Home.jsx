import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import { useBooksData } from "../../Context/BooksContext";
import Carousel from "../../components/Carousel/Carousel";
import BookOfTheDay from "../../components/BooksCards/BookOfTheDay";
import WeeklyFeaturedBooks from "../../components/BooksCards/WeeklyFeaturedBooks/WeeklyFeaturedBooks";
import { FaArrowUp } from "react-icons/fa";
import LinksToCategoryPages from "../../components/LinksToPages/LinksToCategoryPages";
import LinksToAuthorPages from "../../components/LinksToPages/LinksToAuthorPages";
import SkeletonComp from "../../components/Skeleton/Skeleton";

export default function Home() {
  const { setCurrentUser, currentUser } = useNewUsersContext();
  const { books } = useBooksData();

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
          <h4 className="titles" id="top">
            Fan Favorite Series
          </h4>
          <div className="fav-books">
            <Carousel />
          </div>
          <div className="big-book-container">
            <div className="book-of-the-day-container">
              <h4 className="titles">Book of the day</h4>
              <div className="book-of-the-day">
                <BookOfTheDay sliceStart={28} sliceEnd={29} />
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
                <WeeklyFeaturedBooks sliceStart={32} sliceEnd={38} />
              </div>
            </div>

            <div className="weekly-featured">
              <p>A Song of Ice and Fire Series </p>
              <div className="books">
                <WeeklyFeaturedBooks sliceStart={38} sliceEnd={46} />
              </div>
            </div>
          </div>

          <div className="category-books">
            <LinksToCategoryPages />
          </div>
          <div className="authors">
            <LinksToAuthorPages />
          </div>
          <a href="#top" id="go-top">
            <FaArrowUp />
          </a>
          {/* <Footer /> */}
        </>
      ) : (
        <>
          <h3>Loading Data...</h3>
          <SkeletonComp />
        </>
      )}
    </main>
  );
}
