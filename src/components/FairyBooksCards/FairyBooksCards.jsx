import React from "react";
import "./FairyBooksCards.css";
import { Link } from "react-router-dom";
import { useFairyContext } from "../../Context/FairyBooksContext";

export default function FairyBooksCards() {
  const { fairyBooks } = useFairyContext();
  return (
    <div className="FairyBooksCards">
      <p>
        {fairyBooks?.map((info) => {
          return (
            <div key={info._id}>
              {/* <img src={info.img} alt={info.title} /> */}
              <p>{info.title}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
}
