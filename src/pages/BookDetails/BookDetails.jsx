import React from "react";
import "./BookDetails.css";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function BookDetails() {
  const { state } = useLocation();
  const newState = state.volumeInfo;

  console.log(newState);

  return (
    <main className="BookDetails">
      {/* {state ? ( */}
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
                <span>{newState?.pageCount}</span>
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
          <Button variant="success" className="read-me">
            Read me
          </Button>{" "}
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
