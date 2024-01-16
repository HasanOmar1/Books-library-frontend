import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./OpenBook.css";
import { useLocation } from "react-router-dom";

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
      <h1 className="page-header">Page Header {pageNumber}</h1>
      <hr />
      <div>{children}</div>
      <div className="page-number">{pageNumber}</div>
    </div>
  );
});

function OpenBook(props) {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("NEW PAGE");
  const printText = () => {
    setText(inputText);
    setInputElement("");
  };

  const { state } = useLocation();
  console.log(state);
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
        >
          <PageCover>
            <div className="cover-title">{state?.title}</div>
          </PageCover>
          <PageCover></PageCover>
          <Page pageNumber="1">
            <h5>
              Are you ready to read <span className="info">{state?.title}</span>
              ?
            </h5>
            <h5>
              Before you start , im going to tell you a little bit about this
              book
            </h5>
          </Page>
          <Page pageNumber="2">
            <h3>This book is</h3>
            <h4>Written by {state?.authors.join(", ")}</h4>
          </Page>
          <Page pageNumber="3">
            <h4>And published by {state?.publisher}</h4>
          </Page>
          <Page pageNumber="4">
            <h4>It has {state?.pageCount ? state?.pageCount : 211} Pages</h4>
          </Page>
          <Page pageNumber="5">
            <h4>
              And an average rating of{" "}
              {state?.averageRating ? state?.averageRating : 3}{" "}
            </h4>
          </Page>
          <Page pageNumber="6">
            <h4>Lets start reading</h4>
            <h5>{state?.description.slice(0, 100)}</h5>
          </Page>
          <Page pageNumber="7">
            <h5>{state?.description.slice(100, 200)}</h5>
          </Page>
          <Page pageNumber="8">
            <h5>{state?.description.slice(200, 300)}</h5>
          </Page>
          <Page pageNumber="9">
            <h5>{state?.description.slice(300, 400)}</h5>
          </Page>
          <Page pageNumber="10">
            <h5>{state?.description.slice(500, 600)}</h5>
          </Page>
          <PageCover></PageCover>
          <PageCover>
            <div className="cover-title">The End</div>
          </PageCover>
        </HTMLFlipBook>
      </div>
    </section>
  );
}

export default OpenBook;
