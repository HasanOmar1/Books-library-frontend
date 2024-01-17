import React, { useEffect, useState } from "react";
import "./Search.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const [results, setResults] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchValueAfterSubmit, setSearchValueAfterSubmit] = useState("");
  const { booksByName, getBooksByName, errorMsg } = useBooksData();

  useEffect(() => {
    if (booksByName) {
      setResults(booksByName?.length);
    } else {
      setResults(0);
    }
  }, [booksByName]);

  function handleOnSubmit(e) {
    e.preventDefault();
    getBooksByName(searchValue);
    setSearchValueAfterSubmit(searchValue);
  }

  return (
    <div className="Search" id="home">
      <div className="search-input-container">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Search for a book by name"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className="info-container">
        <div className="results">
          <p>{results} results found</p>
        </div>
        <BooksByCategories
          categoryName={searchValueAfterSubmit}
          array={booksByName}
        />
      </div>
    </div>
  );
}
