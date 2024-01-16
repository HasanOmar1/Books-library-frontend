import React, { useEffect, useRef } from "react";
import "./BookDetails.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StarsRating from "../../components/Rating/Rating";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLibraryContext } from "../../Context/LibraryContext";
import BooksErrorModal from "../../components/Modals/BooksErrorMsg";
import { useNewUsersContext } from "../../Context/NewUsersContext";

export default function BookDetails() {
  const { addBookToLibrary, booksErrorMsg } = useLibraryContext();
  const { currentUser } = useNewUsersContext();
  const { state } = useLocation();
  const newState = state.volumeInfo;
  const navigate = useNavigate();

  const errorRef = useRef();

  if (booksErrorMsg) {
    errorRef?.current?.showModal();
  }

  function addToLibraryFunction() {
    addBookToLibrary(state?._id);
  }

  return (
    <main className="BookDetails">
      {/* {state ? ( */}
      <div className="back-btn-container">
        <div className="back-btn" onClick={() => navigate(-1)}>
          <Button variant="outline-warning">
            <ArrowBackIosIcon className="back-icon" />
            Back
          </Button>
        </div>
      </div>
      <div className="info-container">
        <div className="img-container">
          <img src={newState?.imageLinks?.thumbnail} alt={newState?.title} />
        </div>
        <div className="more-info-container">
          <h4>{newState?.title}</h4>
          <div className="mid-info">
            <h5>
              Written by
              <span className="important-info">
                {newState?.authors.join(" , ")}
              </span>
            </h5>
            <h5>
              Published By
              <span className="important-info">{newState?.publisher}</span>
            </h5>
            <h5>
              Published Date
              <span className="important-info">
                {newState?.publishedDate.slice(0, 10)}
              </span>
            </h5>
          </div>
          <div className="row-info">
            <div className="small-p">
              <h5>
                <span>{newState?.categories}</span>
              </h5>
              <p>Categories</p>
            </div>

            <hr className="divider" />

            <div className="small-p">
              <h5>
                <span>{newState?.pageCount ? newState?.pageCount : 211}</span>
              </h5>
              <p>Pages</p>
            </div>

            <hr className="divider" />

            <div className="small-p">
              <h5>
                <span>{newState?.maturityRating.split("_").join(" ")}</span>
              </h5>
              <p>Maturity Rating</p>
            </div>
          </div>
          <div className="rating">
            <StarsRating
              rate={newState?.averageRating ? newState?.averageRating : 3}
            />
          </div>
          <div className="buttons">
            <Link to={"/reading-book"} state={newState}>
              <Button variant="success" className="read-me">
                Read me
              </Button>
            </Link>
            <Button variant="primary" onClick={addToLibraryFunction}>
              Add to Library
            </Button>
          </div>
        </div>
      </div>
      <div className="description">
        <h3>About</h3>
        <p>{newState?.description}</p>
      </div>
      <BooksErrorModal ref={errorRef} />
      {/* ) : (
        <>Loading Data...</>
      )} */}
    </main>
  );
}
