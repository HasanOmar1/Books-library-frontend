import React from "react";
import "./FairyBooksCards.css";
import { Link } from "react-router-dom";
import { useFairyContext } from "../../Context/FairyBooksContext";

export default function FairyBooksCards() {
  const { fairyBooks } = useFairyContext();
  return (
    <div className="BooksCards WeeklyFeaturedBooks">
      <div className="fan-favorite-container weekly-books fairy-books ">
        {fairyBooks?.map((info) => {
          return (
            <Link
              key={info?._id}
              to={`${info?.title}`}
              state={info}
              className="link"
            >
              <div className="book-container">
                <img src={info?.img} alt={info?.title} />
                <div className="category">{info?.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
