import React, { useEffect, useState } from "react";
import { useBooksData } from "../../Context/BooksContext";
import "./BooksCards.css";
import { Link } from "react-router-dom";

export default function BookOfTheDay({ sliceStart, sliceEnd }) {
  const { books, fetchBooks } = useBooksData();

  useEffect(() => {
    if (books) {
      console.log(books);
    }
  }, [books]);

  return (
    <div className="BooksCards">
      <div className="fan-favorite-container">
        {books.slice(sliceStart, sliceEnd).map((info) => {
          return (
            <div key={info?._id} className="book-of-the-day-container">
              <Link to={`${info?.volumeInfo?.title.slice(0, 6)}`} state={info}>
                <div className="book-of-the-day-left">
                  <img
                    src={info?.volumeInfo?.imageLinks?.thumbnail}
                    alt={info?.volumeInfo?.title}
                  />
                </div>
              </Link>
              <div className="book-of-the-day-right">
                <h5>{info?.volumeInfo?.title}</h5>

                <div className="author-category">
                  <p>
                    By: <span>{info?.volumeInfo?.authors}</span>
                  </p>
                  <p>
                    Categories: <span>{info?.volumeInfo?.categories}</span>
                  </p>
                </div>
                <p>{info?.volumeInfo?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
