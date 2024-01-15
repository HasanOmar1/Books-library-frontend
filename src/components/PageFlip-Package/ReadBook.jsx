import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./ReadBook.css";

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
  return (
    <div className="page" ref={ref}>
      <h1>Page Header {pageNumber}</h1>
      <p>{children}</p>
      <p>{pageNumber}</p>
    </div>
  );
});

function ReadBook(props) {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("NEW PAGE");
  const printText = () => {
    setText(inputText);
    setInputElement("");
  };

  return (
    <section className="test">
      <div>
        <HTMLFlipBook
          width={550}
          height={650}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          showCover={true}
          flippingTime={800}
          maxShadowOpacity={1}
          className="album-web"
        >
          <PageCover>Start</PageCover>
          <PageCover></PageCover>
          <Page pageNumber="1">
            <hr></hr>
            <p contentEditable="true">page 1</p>
          </Page>
          <Page pageNumber="2">
            <hr></hr>
            <p>{text}</p>
          </Page>
          <Page pageNumber="3">
            <hr></hr>
          </Page>
          <Page pageNumber="4">
            <hr></hr>
          </Page>
          <PageCover></PageCover>
          <PageCover>Bye</PageCover>
        </HTMLFlipBook>
      </div>
    </section>
  );
}

export default ReadBook;
