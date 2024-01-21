import React from "react";
import "./LibraryBooks.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useLibraryContext } from "../../../Context/LibraryContext";
import { useNewUsersContext } from "../../../Context/NewUsersContext";

export default function FairyLibraryBooks({ library }) {
  const { removeFairyBookFromLibrary } = useLibraryContext();
  const { currentUser } = useNewUsersContext();
  // console.log(currentUser?.fairyBooks);

  return (
    <div className="LibraryBooks">
      {currentUser?.fairyBooks?.length !== 0 && (
        <>
          <div className="section-container">
            <p className="section">Fairy Tales</p>
          </div>
          <div className="library-container">
            {library?.map((info) => {
              return (
                <div className="info-container" key={info?._id}>
                  <div className="library-book-container">
                    <div className="img-and-button">
                      <img src={info?.img} alt={info?.title} />
                      <div className="btns">
                        <Link to={`/${info?.title}`} state={info}>
                          <Button variant="primary" className="info-btn">
                            More Info
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          className="remove-btn"
                          onClick={() => removeFairyBookFromLibrary(info?._id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    <div className="books-more-info">
                      <p className="book-title">{info?.title}</p>
                      <p>
                        <span className="span-title">Written by </span>
                        {info?.author}
                      </p>
                      <div className="category">
                        <span className="span-title">Category</span>
                        <p>Fairy Tale</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}