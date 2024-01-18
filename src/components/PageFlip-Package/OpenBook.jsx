import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./OpenBook.css";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import messages from "./data";

const PageCover = React.forwardRef(({ children }, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef(({ pageNumber, children }, ref) => {
  const { state } = useLocation();
  return (
    <div className="page" ref={ref}>
      <h5 className="page-header">{state?.title}</h5>
      <hr />
      <div>{children}</div>
      <div className="page-number">{pageNumber}</div>
    </div>
  );
});

function OpenBook() {
  const book = useRef();
  const { state } = useLocation();
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [goToPageValue, setGoToPageValue] = useState(0);

  function handlePageChange(pageNum) {
    setCurrentPageNum(pageNum);
  }

  function goToPage(e) {
    e.preventDefault();
    book.current.pageFlip().flip(+goToPageValue + 1);
  }

  return (
    <section className="read-book">
      <div>
        <HTMLFlipBook
          width={500}
          height={650}
          showCover={true}
          flippingTime={800}
          maxShadowOpacity={1}
          className="album-web"
          ref={book}
        >
          <PageCover>
            <img
              src={state?.imageLinks?.thumbnail.replace("zoom=1", "zoom=6")}
              alt={state?.title}
            />
          </PageCover>
          <PageCover></PageCover>

          {messages.map((para, i) => {
            const pageNum = i + 1;
            return (
              <Page key={i} pageNumber={pageNum}>
                <p>{para.p}</p>
              </Page>
            );
          })}

          <PageCover></PageCover>
          <PageCover>
            <div className="cover-title">The End</div>
          </PageCover>
        </HTMLFlipBook>
        <div className="btns-container">
          <Button
            variant="primary"
            onClick={() => {
              book.current.pageFlip().flipPrev();
              handlePageChange(currentPageNum - 1);
            }}
          >
            <KeyboardDoubleArrowLeftIcon />
            Previous Page
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              book.current.pageFlip().flip(0);
            }}
          >
            Start
          </Button>

          <form onSubmit={goToPage}>
            <input
              className="goto-input"
              type="number"
              value={goToPageValue}
              min={-1}
              max={108}
              onChange={(e) => setGoToPageValue(e.target.value)}
            />
            <Button variant="success" type="submit" className="goto-button">
              Go
            </Button>
          </form>

          <Button
            variant="secondary"
            onClick={() => {
              book.current.pageFlip().flip(109);
            }}
          >
            End
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              book.current.pageFlip().flipNext();
              handlePageChange(currentPageNum + 1);
            }}
          >
            Next Page
            <KeyboardDoubleArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default OpenBook;
