import React from "react";
import "./BookDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import StarsRating from "../../components/Rating/Rating";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLibraryContext } from "../../Context/LibraryContext";

export default function BookDetails() {
  const { addBookToLibrary } = useLibraryContext();
  const { state } = useLocation();
  const newState = state.volumeInfo;
  const navigate = useNavigate();

  console.log(newState);

  return (
    <main className="BookDetails">
      {/* {state ? ( */}
      <div className="back-btn" onClick={() => navigate("/")}>
        <Button variant="outline-warning">
          <ArrowBackIosIcon className="back-icon" />
          Back
        </Button>
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
              <span className="important-info">{newState?.authors}</span>
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
            <Button variant="success" className="read-me">
              Read me
            </Button>
            <Button
              variant="primary"
              onClick={() => addBookToLibrary(state?._id)}
            >
              Add to Library
            </Button>
          </div>
        </div>
      </div>
      <div className="description">
        <h3>About</h3>
        <p>{newState?.description}</p>
      </div>
      {/* ) : (
        <>Loading Data...</>
      )} */}
    </main>
  );
}
