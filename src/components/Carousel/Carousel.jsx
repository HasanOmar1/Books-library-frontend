import Carousel from "react-bootstrap/Carousel";
import BooksCards from "../BooksCards/BooksCards";
import "./Carousel.css";

function BooksCarousel() {
  return (
    <Carousel data-bs-theme="light" className="Carousel">
      <Carousel.Item className="carousel-item">
        <h5>Sherlock Holmes</h5>
        <div className="books">
          <BooksCards sliceStart={1} sliceEnd={5} />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <h5>Harry Potter</h5>
        <div className="books">
          <BooksCards sliceStart={10} sliceEnd={14} />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <h5>Lord of the rings</h5>
        <div className="books">
          <BooksCards sliceStart={25} sliceEnd={29} />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default BooksCarousel;
