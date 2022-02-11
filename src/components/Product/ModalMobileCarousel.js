import product from "../../product.json";
import Carousel from "react-bootstrap/Carousel";

function MobileCarousel() {
  return (
    <div className="col-xl-6 col-lg-6 col-md-5 col-sm-5 col-xs-12 d-sm-block d-md-none mb-4 p-0">
      <Carousel controls={false} interval={null}>
        {product.modalImages.map((image, i) => (
          <Carousel.Item key={`modalImage_${i + 1}`}>
            <img className="d-block w-100" src={image} alt={`modal_${i + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MobileCarousel;
