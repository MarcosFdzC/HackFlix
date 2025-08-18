import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade className="carrusel">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://i.redd.it/e758ahk8gzt71.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://hollywoodsuite.ca/wp-content/uploads/HS902347_poster_1920_1080.jpg"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://cdna.artstation.com/p/assets/images/images/076/353/374/large/giant-thoughts-1917.jpg?1716815682"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://i0.wp.com/maactioncinema.com/wp-content/uploads/2023/06/extraction-2-poster-crop-logo-header.jpeg?fit=1400%2C700&ssl=1"
          alt="Cuarto"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
