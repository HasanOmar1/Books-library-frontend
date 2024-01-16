import React from "react";
import "./CategoryBooks.css";
import StarsRating from "../../Rating/Rating";
import { Link } from "react-router-dom";

export default function BooksByCategories({ categoryName, array }) {
  return (
    <div className="CategoryBooksCards">
      <h4 className="category-name">Collection of {categoryName} Books</h4>
      <div className="big-container">
        {array?.map((books) => {
          return (
            <div className="container" key={books._id}>
              <Link to={`/${books?.volumeInfo?.title}`} state={books}>
                <img
                  src={books?.volumeInfo?.imageLinks?.thumbnail}
                  alt={books?.volumeInfo?.title}
                />
              </Link>
              <div className="book-info">
                <Link
                  to={`/${books?.volumeInfo?.title}`}
                  state={books}
                  className="link"
                >
                  <h6 id="title">{books?.volumeInfo?.title}</h6>
                </Link>
                <h6>
                  Written by
                  <span className="written-by">
                    {books?.volumeInfo?.authors.slice(0, 2).join(", ")}
                  </span>
                </h6>
                <div className="pages-rating">
                  <h6 className="pages">
                    {books?.volumeInfo?.pageCount
                      ? books?.volumeInfo?.pageCount
                      : 211}{" "}
                    Pages
                  </h6>
                  <div className="rating">
                    <StarsRating
                      rate={
                        books?.volumeInfo?.averageRating
                          ? books?.volumeInfo?.averageRating
                          : 3
                      }
                    />
                  </div>
                </div>

                <p className="description">
                  {books?.volumeInfo?.description.slice(0, 121) + " ..."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
