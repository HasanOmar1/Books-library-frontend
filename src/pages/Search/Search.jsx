import React, { useEffect, useState } from "react";
import "./Search.css";
import { useBooksData } from "../../Context/BooksContext";
import BooksByCategories from "../../components/BooksCards/CategoryBooksCards/BooksByCategory";
import SearchIcon from "@mui/icons-material/Search";
import { useFairyContext } from "../../Context/FairyBooksContext";

export default function Search() {
  const [results, setResults] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchValueAfterSubmit, setSearchValueAfterSubmit] = useState(""); // for collection name
  const { booksByName, getBooksByName } = useBooksData();
  const { searchForFairyBooks, searchForFairyBooksByName } = useFairyContext();

  useEffect(() => {
    if (booksByName || searchForFairyBooks) {
      setResults(booksByName?.length || searchForFairyBooks?.length);
    } else {
      setResults(0);
    }
  }, [booksByName, searchForFairyBooks]);

  function handleOnSubmit(e) {
    e.preventDefault();
    getBooksByName(searchValue);
    searchForFairyBooksByName(searchValue);
    setSearchValueAfterSubmit(searchValue);
  }

  const allBooks = booksByName?.concat(searchForFairyBooks);
  // console.log(allBooks);

  return (
    <div className="Search" id="home">
      <div className="search-input-container">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Search for books"
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
          array={allBooks}
        />
      </div>
    </div>
  );
}
