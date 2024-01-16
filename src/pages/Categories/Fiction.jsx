import React, { useEffect } from "react";
import "./Categories.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
// import { useBooksData } from "../../Context/BooksContext";
// import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/FictionCategory/FictionCategory";

export default function Fiction() {
  const { fictionBooks, getFictionBooks } = useBooksData();

  useEffect(() => {
    getFictionBooks();
  }, []);

  return (
    <section className="Category">
      <BooksByCategories categoryName={`Fiction`} array={fictionBooks} />
    </section>
  );
}
