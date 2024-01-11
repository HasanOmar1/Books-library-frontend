import React, { useEffect, useState } from "react";
import { useBooksData } from "../../Context/BooksContext";
import "./BooksCards.css";

export default function BooksCards() {
  const { books, fetchBooks } = useBooksData();

  useEffect(() => {
    if (books) {
      console.log(books);
    }
  }, [books]);

  return (
    <div className="BooksCards">
      <div className="fan-favorite-container">
        {books.slice(0, 7).map((info) => {
          return <img src={info?.volumeInfo?.imageLinks?.thumbnail} />;
        })}
      </div>
    </div>
  );
}
