import React, { useEffect, useState } from "react";
import "./LibraryBooks.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useLibraryContext } from "../../../Context/LibraryContext";

export default function LibraryBooks({ library }) {
  const { removeBookFromLibrary } = useLibraryContext();

  return (
    <div className="LibraryBooks">
      <div className="library-container">
        {library?.map((info) => {
          return (
            <div className="info-container" key={info?._id}>
              <div className="library-book-container">
                <div className="img-and-button">
                  <img
                    src={info?.volumeInfo?.imageLinks?.thumbnail}
                    alt={info?.volumeInfo?.title}
                  />
                  <div className="btns">
                    <Link to={`/${info?.volumeInfo?.title}`} state={info}>
                      <Button variant="primary" className="info-btn">
                        More Info
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="remove-btn"
                      onClick={() => removeBookFromLibrary(info?._id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="books-more-info">
                  <p className="book-title">{info?.volumeInfo?.title}</p>
                  <p>
                    <span className="span-title">Written by </span>
                    {info?.volumeInfo?.authors}
                  </p>
                  <p>
                    <span className="span-title">Published by </span>
                    {info?.volumeInfo?.publisher}
                  </p>
                  <div className="category">
                    <span className="span-title">Category</span>
                    <p>{info?.volumeInfo?.categories}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
