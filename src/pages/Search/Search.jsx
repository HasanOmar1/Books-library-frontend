import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [results, setResults] = useState(0);
  return (
    <div className="Search">
      <div className="search-input-container">
        <input type="text" placeholder="Search for a book by name" />
      </div>
      <div className="info-container">
        <div className="results">
          <p>{results} results found</p>
        </div>
      </div>
    </div>
  );
}
