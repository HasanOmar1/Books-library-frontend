import Carousel from "react-bootstrap/Carousel";
import BooksCards from "../BooksCards/BooksCards";
import "./Carousel.css";

function BooksCarousel() {
  return (
    <Carousel data-bs-theme="dark" className="Carousel">
      <Carousel.Item className="carousel-item">
        <p>Sherlock Holmes</p>
        <div className="books">
          <BooksCards sliceStart={1} sliceEnd={5} />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <p>Harry Potter</p>
        <div className="books">
          <BooksCards sliceStart={10} sliceEnd={14} />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <p>Lord of the rings</p>
        <div className="books">
          <BooksCards sliceStart={25} sliceEnd={29} />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default BooksCarousel;
